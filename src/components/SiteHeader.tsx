"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { business } from "@/data/business";
import { navigation } from "@/data/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the mobile panel whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const previous = body.style.overflow;
    body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab" && panelRef.current) {
        const focusables = [
          toggleRef.current,
          ...panelRef.current.querySelectorAll<HTMLElement>("a"),
        ].filter(Boolean) as HTMLElement[];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 60rem)").matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header" data-scrolled={scrolled || open}>
      <div className="wrap site-header__inner">
        <Link href="/" className="brand" aria-label="Notes Coffee Roasters — home">
          <Image
            src="/images/notes-logo-badge.png"
            alt=""
            width={128}
            height={128}
            priority
          />
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
          <span className="nav-toggle__lines" aria-hidden="true" />
        </button>
      </div>

      <div
        ref={panelRef}
        id="mobile-navigation"
        className="nav-mobile"
        data-open={open}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Main">
          <ol>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className="nav-mobile__meta">
          <p className="eyebrow" style={{ color: "var(--sage)" }}>
            {business.area} · {business.hours.opens} – {business.hours.closes}
          </p>
          <a className="link" href={business.phone.href} style={{ justifySelf: "start" }}>
            {business.phone.display}
          </a>
          <a
            className="link"
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ justifySelf: "start" }}
          >
            Instagram {business.instagram.handle}
          </a>
        </div>
      </div>
    </header>
  );
}
