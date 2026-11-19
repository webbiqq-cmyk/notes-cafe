"use client";

import { useEffect, useRef, useState } from "react";

type Props = { categories: { id: string; title: string }[] };

/** Sticky in-page navigation for the menu that tracks the visible section. */
export function MenuNav({ categories }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
        // Nothing is "current" while the reader is still above the first section.
        const first = sections[0];
        if (first && first.getBoundingClientRect().top > window.innerHeight * 0.35) setActive(null);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [categories]);

  // Keep the active link in view on narrow screens.
  useEffect(() => {
    if (!active || !listRef.current) return;
    const link = listRef.current.querySelector<HTMLElement>(`a[href="#${active}"]`);
    if (!link) return;
    const list = listRef.current;
    const target = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  return (
    <nav className="menu-nav" aria-label="Menu sections">
      <div className="wrap">
        <ul ref={listRef}>
          {categories.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} aria-current={active === c.id ? "true" : undefined}>
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
