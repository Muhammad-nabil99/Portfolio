"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = navLinks.filter((l) => l.href.startsWith("/#")).map((l) => l.href.slice(2));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav aria-label="Primary" className="container-grid flex h-16 items-center justify-between">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          {siteConfig.shortName}
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const hashIndex = link.href.indexOf("#");
              const isActive = hashIndex !== -1
                ? active === link.href.slice(hashIndex + 1)
                : false;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative inline-flex h-11 items-center px-3 text-sm transition-colors hover:text-foreground",
                      isActive ? "text-foreground" : "text-muted",
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute inset-x-3 bottom-2.5 h-px bg-accent-text transition-opacity",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <ul className="container-grid py-2">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-border last:border-b-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex h-14 items-center text-xl font-medium tracking-tight"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
