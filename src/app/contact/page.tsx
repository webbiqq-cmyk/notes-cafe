import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/Icons";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call Notes Coffee Roasters on 7790 0242, message us on Instagram @notesroasters, or find us in Mashtan, Bahrain.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "Call",
    value: business.phone.display,
    href: business.phone.href,
    note: `During opening hours, ${business.hours.opens} – ${business.hours.closes}.`,
    external: false,
  },
  {
    label: "Instagram",
    value: business.instagram.handle,
    href: business.instagram.url,
    note: "Send us a message, or see what's new on the bar.",
    external: true,
  },
  {
    label: "Find us",
    value: `${business.area}, ${business.country}`,
    href: business.mapsUrl,
    note: "Directions on Google Maps.",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="masthead tone-dark" aria-labelledby="contact-title">
        <div className="wrap masthead__grid">
          <div>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>
              Contact
            </p>
            <h1 id="contact-title" className="h1">
              Say <em>hello.</em>
            </h1>
          </div>
          <p className="lede muted">
            Questions about the menu, a large order or just today&apos;s coffee — the quickest way to
            reach us is by phone or Instagram.
          </p>
        </div>
      </section>
      <div className="stripes" aria-hidden="true" />

      <section className="section" aria-label="Ways to reach Notes">
        <div className="wrap">
          <ul className="channels">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  className="channel"
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  data-reveal
                >
                  <span className="eyebrow channel__label">{channel.label}</span>
                  <span className="channel__value" style={{ color: "var(--forest)" }}>
                    {channel.value}
                  </span>
                  <ArrowUpRight className="channel__arrow" />
                  <span className="channel__note">{channel.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
