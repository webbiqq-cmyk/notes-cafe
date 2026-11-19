"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Adds `.is-in` to every [data-reveal] element as it enters the viewport.
 * Content is fully visible without JavaScript; the hidden start state only
 * applies under `@media (scripting: enabled)` and when motion is allowed.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    elements.forEach((el) => {
      // Reveal anything already on screen immediately rather than waiting
      // for the observer's first callback.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-in");
      } else {
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
