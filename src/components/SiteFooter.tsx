import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { navigation } from "@/data/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="stripes stripes--deep" aria-hidden="true" />
      <div className="wrap site-footer__main">
        <div className="site-footer__brand">
          <Image src="/images/notes-logo-badge.png" alt="Notes Coffee Roasters" width={192} height={192} />
          <p className="site-footer__sign">
            Good coffee. <em>Good moments.</em>
          </p>
        </div>

        <div className="site-footer__cols">
          <div>
            <h2>Explore</h2>
            <ul>
              {navigation
                .filter((item) => item.href !== "/")
                .map((item) => (
                  <li key={item.href}>
                    <Link className="link" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h2>Find us</h2>
            <p>
              {business.area}, {business.country}
            </p>
            <p style={{ marginTop: "0.4rem" }}>
              <a className="link" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                Get directions
              </a>
            </p>
          </div>

          <div>
            <h2>Hours</h2>
            <p>
              {business.hours.opens} – {business.hours.closes}
            </p>
            <p className="caption" style={{ marginTop: "0.4rem" }}>
              {business.status}
            </p>
          </div>

          <div>
            <h2>Say hello</h2>
            <ul>
              <li>
                <a className="link" href={business.phone.href}>
                  {business.phone.display}
                </a>
              </li>
              <li>
                <a className="link" href={business.instagram.url} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wrap site-footer__base">
        <p>
          © {year} {business.name}. {business.area}, {business.country}.
        </p>
        <p>{business.descriptor}</p>
      </div>
    </footer>
  );
}
