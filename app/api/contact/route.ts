import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const recipientList = (process.env.SMTP_TO ?? "kimmy@mightystone.vn,hello@mightystone.vn")
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);

const localMailDir = process.env.SMTP_LOCAL_DIR ?? join(process.cwd(), ".mail");

type MailSetup = {
  transport: Transporter;
  sender: string;
  isDevPreview: boolean;
  isLocalDump: boolean;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function saveLocalMail(message: string) {
  await mkdir(localMailDir, { recursive: true });
  const fileName = `contact-${Date.now()}.eml`;
  const filePath = join(localMailDir, fileName);
  await writeFile(filePath, message, "utf8");
  console.info("Local mail captured:", filePath);
  return filePath;
}

async function getMailSetup() {
  const smtpUrl = process.env.SMTP_URL;

  if (smtpUrl) {
    return {
      transport: nodemailer.createTransport(smtpUrl),
      sender: process.env.SMTP_FROM ?? process.env.SMTP_USER ?? "no-reply@localhost",
      isDevPreview: false,
      isLocalDump: false,
    } satisfies MailSetup;
  }

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && port && user && pass) {
    return {
      transport: nodemailer.createTransport({
        host,
        port: Number(port),
        secure: Number(port) === 465,
        auth: {
          user,
          pass,
        },
      }),
      sender: process.env.SMTP_FROM ?? user,
      isDevPreview: false,
      isLocalDump: false,
    } satisfies MailSetup;
  }

  if (process.env.NODE_ENV !== "production") {
    const fallbackTransport = nodemailer.createTransport({
      streamTransport: true,
      newline: "unix",
      buffer: true,
    });

    return {
      transport: fallbackTransport,
      sender: process.env.SMTP_FROM ?? "no-reply@localhost",
      isDevPreview: true,
      isLocalDump: true,
    } satisfies MailSetup;
  }

  throw new Error("Missing SMTP configuration.");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.redirect(new URL("/contact?error=missing", request.url));
    }

    if (!isValidEmail(email)) {
      return NextResponse.redirect(new URL("/contact?error=email", request.url));
    }

    const { transport, sender, isDevPreview, isLocalDump } = await getMailSetup();

    const subject = `New contact form submission from ${name}`;
    const text = [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const info = await transport.sendMail({
      from: sender,
      to: recipientList,
      replyTo: email,
      subject,
      text,
      html: `
        <div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#111">
          <p><strong>Name:</strong> ${name}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (isLocalDump) {
      const rawMessage = typeof info.message === "string" ? info.message : info.message?.toString() ?? text;
      const savedPath = await saveLocalMail(rawMessage);
      console.info("Contact form saved locally to:", savedPath);
    }

    if (isDevPreview && !isLocalDump) {
      const previewUrl = nodemailer.getTestMessageUrl(info);

      if (previewUrl) {
        console.info("Contact mail preview URL:", previewUrl);
      }
    }

    return NextResponse.redirect(new URL("/contact?sent=1", request.url));
  } catch (error) {
    console.error("Contact form send failed:", error);

    const message = error instanceof Error ? error.message : "Unknown error";
    const errorType = message.includes("Missing SMTP configuration") ? "config" : "server";

    return NextResponse.redirect(new URL(`/contact?error=${errorType}`, request.url));
  }
}