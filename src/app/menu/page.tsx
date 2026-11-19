import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { MenuCategoryBlock } from "@/components/MenuCategoryBlock";
import { MenuNav } from "@/components/MenuNav";
import { Photo } from "@/components/Photo";
import { business } from "@/data/business";
import { menu } from "@/data/menu";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The full Notes menu: black and white coffee, V60 single origins, specials, matcha, refreshes, sandwiches and sweets. Prices in Bahraini dinar.",
  alternates: { canonical: "/menu" },
};

const parts = [
  {
    key: "coffee",
    eyebrow: "Part one",
    title: (
      <>
        Coffee, <em>black to special.</em>
      </>
    ),
    note: "Espresso and filter, milk drinks, and the house specials.",
  },
  {
    key: "more",
    eyebrow: "Part two",
    title: (
      <>
        Matcha, refreshes <em>& something to eat.</em>
      </>
    ),
    note: "Five matcha drinks, cold refreshes, sandwiches and sweets.",
  },
] as const;

export default function MenuPage() {
  return (
    <>
      <section className="masthead tone-dark" aria-labelledby="menu-title">
        <div className="wrap masthead__grid">
          <div>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>
              The menu
            </p>
            <h1 id="menu-title" className="h1">
              Everything <em>on the bar.</em>
            </h1>
          </div>
          <div style={{ display: "grid", gap: "1.5rem" }}>
            <p className="lede muted">
              {menu.length} sections, {menu.reduce((n, c) => n + c.items.length, 0)} items. All prices
              in Bahraini dinar (BD).
            </p>
            <div className="masthead__photos">
              <Photo photo={photos.v60Pour} sizes="160px" priority reveal={false} />
              <Photo photo={photos.smoresGreen} sizes="160px" priority reveal={false} />
            </div>
          </div>
        </div>
      </section>

      <MenuNav categories={menu.map(({ id, title }) => ({ id, title }))} />

      <div className="wrap">
        {parts.map((part) => (
          <section key={part.key} className="menu-part" aria-label={part.eyebrow}>
            <header className="menu-part__head">
              <div>
                <p className="eyebrow section-head__index" style={{ marginBottom: "1.25rem" }}>
                  {part.eyebrow}
                </p>
                <h2 className="h2" style={{ color: "var(--forest)" }}>
                  {part.title}
                </h2>
              </div>
              <p className="lede muted">{part.note}</p>
            </header>
            <div className="menu-full menu-board" style={{ gridTemplateColumns: "1fr" }}>
              {menu
                .filter((category) => category.group === part.key)
                .map((category) => (
                  <MenuCategoryBlock key={category.id} id={category.id} category={category} />
                ))}
            </div>
          </section>
        ))}

        <section className="menu-part" aria-label="About the menu">
          <div className="menu-note">
            <p className="h3" style={{ color: "var(--forest)" }}>
              Questions about an item?
            </p>
            <p className="muted">
              Menu and prices may change. For today&apos;s coffee, ingredients or allergens, ask at
              the bar or call{" "}
              <a className="link" href={business.phone.href}>
                {business.phone.display}
              </a>
              .
            </p>
            <div className="actions" style={{ marginTop: "1.5rem" }}>
              <Link className="btn btn--forest" href="/visit">
                Plan a visit <ArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
