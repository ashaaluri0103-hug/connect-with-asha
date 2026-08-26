import { Mail, Linkedin, Github } from "lucide-react";

import { CONTACT_INFO } from "@/lib/contact-info";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-foreground">
              {CONTACT_INFO.name}
            </p>
            <p className="text-sm text-muted-foreground">{CONTACT_INFO.role}</p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="mt-1 inline-block text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={CONTACT_INFO.linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${CONTACT_INFO.name} LinkedIn profile`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={CONTACT_INFO.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${CONTACT_INFO.name} GitHub profile`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {CONTACT_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
