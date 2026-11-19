import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="masthead tone-dark" style={{ minHeight: "60vh" }}>
      <div className="wrap" style={{ display: "grid", gap: "2rem" }}>
        <p className="eyebrow" style={{ color: "var(--sage)" }}>
          404
        </p>
        <h1 className="h1">
          This page <em>isn&apos;t on the menu.</em>
        </h1>
        <div className="actions">
          <Link className="btn btn--solid" href="/">
            Back home <ArrowRight />
          </Link>
          <Link className="btn btn--ghost" href="/menu">
            See the menu
          </Link>
        </div>
      </div>
    </section>
  );
}
