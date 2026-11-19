import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { business } from "@/data/business";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Visit Notes Coffee Roasters in Mashtan, Bahrain. Opening hours, directions on Google Maps and contact details.",
  alternates: { canonical: "/visit" },
};

export default function VisitPage() {
  return (
    <>
      <section className="masthead tone-dark" aria-labelledby="visit-title">
        <div className="wrap masthead__grid">
          <div>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>
              Visit us
            </p>
            <h1 id="visit-title" className="h1">
              Find us in <em>{business.area}.</em>
            </h1>
          </div>
          <div style={{ display: "grid", gap: "1.5rem" }}>
            <p className="lede muted">
              {business.status} — come by for a V60, a latte or a strawberry matcha.
            </p>
            <div className="actions">
              <a className="btn btn--solid" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                Get directions <ArrowUpRight />
              </a>
              <a className="btn btn--ghost" href={business.phone.href}>
                Call {business.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="stripes" aria-hidden="true" />

      <section className="section" aria-label="Opening hours and location">
        <div className="wrap visit__grid">
          <div>
            <p className="eyebrow section-head__index" style={{ marginBottom: "1.5rem" }}>
              Opening hours
            </p>
            <p className="hours" style={{ color: "var(--forest)" }}>
              <span>{business.hours.opens}</span>
              <span aria-hidden="true">—</span>
              <span className="sr-only">to</span>
              <span>
                <em>{business.hours.closes}</em>
              </span>
            </p>
            <p className="muted" style={{ marginTop: "1.25rem" }}>
              Hours may change during our soft opening — check{" "}
              <a className="link" href={business.instagram.url} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>{" "}
              for the latest.
            </p>

            <dl className="facts facts--light" style={{ marginTop: "3rem" }}>
              <div>
                <dt>Area</dt>
                <dd>
                  {business.area}, {business.country}
                </dd>
              </div>
              <div>
                <dt>Directions</dt>
                <dd>
                  <a className="link" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                  </a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a className="link" href={business.phone.href}>
                    {business.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Instagram</dt>
                <dd>
                  <a className="link" href={business.instagram.url} target="_blank" rel="noopener noreferrer">
                    {business.instagram.handle}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="photo-pair" style={{ alignSelf: "start" }}>
            <Photo photo={photos.smoresIced} sizes="(min-width: 960px) 240px, 50vw" caption="Smores, iced" />
            <Photo photo={photos.trayDuck} sizes="(min-width: 960px) 240px, 50vw" caption="Served on the tray" />
          </div>
        </div>
      </section>

      <section className="section tone-ivory" aria-labelledby="before-title">
        <div className="wrap split">
          <div>
            <h2 id="before-title" className="h2" style={{ color: "var(--forest)" }} data-reveal>
              Know what you want <em>before you arrive?</em>
            </h2>
          </div>
          <div style={{ display: "grid", gap: "1.5rem" }}>
            <p className="lede muted">
              The full menu is online — black and white coffee, V60 by origin, specials, matcha,
              refreshes, sandwiches and sweets.
            </p>
            <div className="actions">
              <Link className="btn btn--forest" href="/menu">
                See the menu <ArrowRight />
              </Link>
              <Link className="btn btn--outline-forest" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
