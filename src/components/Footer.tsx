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
            <p className="mt-1 font-mono text-[10px] text-muted-foreground">
              &copy; {currentYear} {CONTACT_INFO.name}. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="h-1 w-1 rounded-full bg-primary/40" />
            <div className="h-1 w-1 rounded-full bg-chart-2/40" />
            <div className="h-1 w-1 rounded-full bg-chart-3/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
