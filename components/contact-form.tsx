import { siteConfig } from "@/lib/site";
import type { TranslationDictionary } from "@/lib/translations";

const fieldClassName =
  "min-h-14 w-full rounded-[1.35rem] border border-white/10 bg-white/[0.05] px-4 text-sm text-white placeholder:text-muted transition outline-none focus:border-brand focus:bg-white/[0.08]";

type ContactFormProps = {
  form: TranslationDictionary["form"];
};

export function ContactForm({ form }: ContactFormProps) {

  return (
    <form action={siteConfig.formspreeEndpoint} method="POST" className="space-y-5">
      <input type="hidden" name="_subject" value="New message from elias-appuhamy.com" />

      <div className="space-y-2">
        <label htmlFor="contact-name" className="block pl-1 text-sm font-medium text-muted">
          {form.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={form.namePlaceholder}
          required
          className={fieldClassName}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-email" className="block pl-1 text-sm font-medium text-muted">
          {form.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={form.emailPlaceholder}
          required
          className={fieldClassName}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="block pl-1 text-sm font-medium text-muted">
          {form.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder={form.messagePlaceholder}
          required
          rows={6}
          className={`${fieldClassName} resize-none py-4 leading-7`}
        />
      </div>

      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-muted">
            {form.helper}
          </p>
          <button
            type="submit"
            className="inline-flex h-[3.45rem] min-w-[11.5rem] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-white px-7 text-[0.95rem] font-semibold text-black shadow-[0_14px_40px_rgba(255,255,255,0.12)] transition hover:bg-white/90"
          >
            {form.submit}
          </button>
        </div>
      </div>
    </form>
  );
}
