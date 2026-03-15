import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-wine-200">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">{copy}</p>
    </div>
  );
}
