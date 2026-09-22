# Kling VN Website - Dev Log

This file captures practical lessons, repeat decisions, and UI rules for this project.

## How to use this log

- Add a new dated entry when a meaningful UX/UI, layout, or architecture decision is made.
- Record what changed, why it changed, and the reusable rule that should be kept.
- Prefer concise and repeatable rules over one-off notes.

## System Rules (Living)

### 1) CTA alignment rule for cards/panels

Rule:
- For card/panel layouts with uneven content length, keep the primary CTA aligned at the bottom.

Why:
- Preserves scan consistency and visual rhythm.
- Avoids jumpy CTA positions when text length differs between cards.

Implementation pattern:
- Use a column layout (`flex flex-col`) on each card.
- Push CTA down with `mt-auto` on larger breakpoints when needed.

### 2) Expand/collapse behavior rule

Rule:
- Collapsed state should be compact.
- Expanded state should remain readable without breaking sibling layout.

Why:
- Prevents "stair-step" visual imbalance while keeping details accessible.

Implementation pattern:
- Keep collapsed content short and clean.
- Render long content only when expanded.
- Constrain expanded long text with an internal scroll region where appropriate.

### 3) Button sizing rule

Rule:
- Pill buttons stay pill-shaped, but width should wrap content (no unnecessary extra width).

Why:
- Cleaner premium look and stronger typographic balance.

Implementation pattern:
- Use `w-fit` and tighter horizontal padding.
- Keep rounded-full style for pill CTAs.

### 4) Radius consistency rule

Rule:
- Large containers should use moderate radius, not overly soft corners.

Why:
- Creates a more credible enterprise tone while preserving modern feel.

Implementation pattern:
- Use smaller radius tokens for cards/panels than hero/visual blocks.
- Keep button radius independent from container radius.

## Timeline

## 2026-09-22

### What was refined

- Hero moved to a full-bleed visual style with centered copy.
- Product section evolved into a Kling 3.0-style showcase layout.
- Why Kling section implemented with 3 feature cards and expandable detailed content.
- Card interactions refined multiple times for clarity, spacing, and alignment.
- Enterprise Services section redesigned to two balanced service panels.
- Homepage radius and button sizing tuned toward a cleaner enterprise look.

### Decisions promoted to system

- Bottom-aligned CTA rule for reusable cards/panels.
- Compact-by-default details pattern for long copy.
- Content-wrapped pill button sizing.
- Reduced-radius container language for trust and professionalism.

## Next additions (when relevant)

- Accessibility checks made and results.
- Responsive edge cases found and fixed.
- New reusable components introduced and where to use them.
