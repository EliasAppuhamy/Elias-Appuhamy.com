"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { faqItems } from "@/lib/site";

export function Faq() {
  return (
    <Accordion
      variant="splitted"
      selectionMode="multiple"
      className="gap-4 px-0"
      itemClasses={{
        base: "rounded-[1.4rem] border border-white/10 bg-white/[0.05] px-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
        title: "px-6 py-5 text-left text-base font-semibold text-ink sm:text-lg",
        content: "px-6 pb-6 pt-0 text-sm leading-7 text-muted sm:text-base",
        trigger: "px-0 py-0 hover:opacity-100"
      }}
    >
      {faqItems.map((item) => (
        <AccordionItem key={item.key} aria-label={item.title} title={item.title}>
          {item.text}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
