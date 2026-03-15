import { faqItems } from "@/lib/site";

export function Faq() {
  return (
    <div className="grid gap-4">
      {faqItems.map((item) => (
        <details
          key={item.key}
          className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
        >
          <summary className="cursor-pointer list-none text-left text-base font-semibold text-ink sm:text-lg">
            {item.title}
          </summary>
          <p className="pt-4 text-sm leading-7 text-muted sm:text-base">{item.text}</p>
        </details>
      ))}
    </div>
  );
}
