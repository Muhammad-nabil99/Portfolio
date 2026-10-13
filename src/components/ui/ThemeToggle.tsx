"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.classList.add("theme-transition");
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable: the preference just won't persist */
    }
    window.setTimeout(() => root.classList.remove("theme-transition"), 350);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface"
    >
      <Moon className="size-4 dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-4 dark:block" aria-hidden="true" />
    </button>
  );
}
