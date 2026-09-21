import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("py-14 sm:py-18 lg:py-24", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
