import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { business } from "@/data/business";
import { formatPrice, getCategory } from "@/data/menu";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Notes is a coffee roastery, coffee house and matcha space in Mashtan, Bahrain — V60 single origins, espresso and colourful matcha, served in striped cups.",
  alternates: { canonical: "/our-story" },
};

const pillars = [
  {
    title: "Coffee Roastery",
    text: "It's in the name: Notes Coffee Roasters. Look for Notes coffee bags behind the bar, and single origins listed by name on the V60.",
  },
  {
    title: "Coffee House",
    text: "Espresso, milk drinks and a coffee of the day, plus house specials like smores, popcorn, waffle and Biscoff.",
  },
  {
    title: "Matcha Space",
    text: "A full matcha menu of its own — strawberry, popcorn, waffle, birthday cake and cloud.",
  },
];

export default function StoryPage() {
  const v60 = getCategory("v60");

  return (
    <>
      <section className="masthead tone-dark" aria-labelledby="story-title">
        <div className="wrap masthead__grid">
          <div>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>
              Our story
            </p>
            <h1 id="story-title" className="h1">
              Three things, <em>one name.</em>
            </h1>
          </div>
          <p className="lede muted">
            Notes is a coffee roastery, a coffee house and a matcha space in {business.area},{" "}
            {business.country}. We&apos;re in our soft opening — and this is just the first page.
          </p>
        </div>
      </section>
      <div className="stripes" aria-hidden="true" />

      <section className="section" aria-label="What Notes is">
        <div className="wrap">
          <ol className="pillars">
            {pillars.map((pillar, index) => (
              <li className="pillar" key={pillar.title} data-reveal>
                <span className="pillar__num">0{index + 1}</span>
                <h2 className="h3" style={{ color: "var(--forest)" }}>
                  {pillar.title}
                </h2>
                <p className="muted">{pillar.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tone-ivory" aria-labelledby="v60-title">
        <div className="wrap split">
          <div className="photo-pair">
            <Photo photo={photos.v60Pour} sizes="(min-width: 960px) 240px, 50vw" caption="V60, poured to order" />
            <Photo photo={photos.whippedCream} sizes="(min-width: 960px) 240px, 50vw" caption="Notes cups, stacked" />
          </div>
          <div>
            <p className="eyebrow section-head__index" style={{ marginBottom: "1.5rem" }}>
              By hand
            </p>
            <h2 id="v60-title" className="h2" style={{ color: "var(--forest)" }} data-reveal>
              Four origins <em>on the V60.</em>
            </h2>
            <ul className="origins">
              {v60.items.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <span>{formatPrice(item.price)} BD</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cups-title">
        <div className="wrap split split--reverse">
          <div className="photo-pair">
            <Photo photo={photos.smoresGreen} sizes="(min-width: 960px) 240px, 50vw" caption="Smores" />
            <Photo photo={photos.strawberryMatcha} sizes="(min-width: 960px) 240px, 50vw" caption="Strawberry matcha" />
          </div>
          <div>
            <p className="eyebrow section-head__index" style={{ marginBottom: "1.5rem" }}>
              In stripes
            </p>
            <h2 id="cups-title" className="h2" style={{ color: "var(--forest)" }} data-reveal>
              Green and cream, <em>cup after cup.</em>
            </h2>
            <p className="lede muted" style={{ marginTop: "1.5rem" }}>
              Drinks go out in Notes cups — green-and-cream stripes, and for the strawberry matcha, a
              pink-and-green wave that reads &ldquo;I love you so matcha&rdquo;.
            </p>
            <div className="actions" style={{ marginTop: "2rem" }}>
              <Link className="btn btn--forest" href="/menu">
                Explore the menu <ArrowRight />
              </Link>
              <Link className="btn btn--outline-forest" href="/visit">
                Visit us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
