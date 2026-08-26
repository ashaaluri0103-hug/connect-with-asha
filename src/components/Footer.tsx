import { Mail, Linkedin, Github } from "lucide-react";

import { CONTACT_INFO } from "@/lib/contact-info";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-border" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {CONTACT_INFO.role}
            </span>
            <div className="h-px w-8 bg-border" />
          </div>

          <div className="text-center">
            <p className="text-xl font-bold tracking-tight text-foreground">
              {CONTACT_INFO.name}
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="mt-2 inline-block max-w-full truncate font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              aria-label="Email Asha Aluri"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={CONTACT_INFO.linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-chart-2/50 hover:text-chart-2"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={CONTACT_INFO.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-foreground/50 hover:text-foreground"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <p className="text-center font-mono text-[10px] text-muted-foreground">
            &copy; {currentYear} {CONTACT_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
