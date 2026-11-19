import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { MenuCategoryBlock } from "@/components/MenuCategoryBlock";
import { Photo } from "@/components/Photo";
import { business } from "@/data/business";
import { formatPrice, getCategory, lowestPrice, menu } from "@/data/menu";
import { photos } from "@/data/photos";

const signature = [
  {
    category: getCategory("black"),
    name: "Coffee",
    desc: "Espresso, Americano, cold brew and a coffee of the day.",
    photo: photos.icedBlack,
  },
  {
    category: getCategory("v60"),
    name: "V60",
    desc: "Ethiopia Guji, El Salvador, Colombia Excelso and Colombia Premium — brewed by hand, one cup at a time.",
    photo: photos.v60Pour,
  },
  {
    category: getCategory("matcha"),
    name: "Matcha",
    desc: "Five matcha drinks, from strawberry to birthday cake and cloud.",
    photo: photos.strawberryMatcha,
  },
  {
    category: getCategory("special"),
    name: "Specials",
    desc: "Popcorn, smores, waffle and Biscoff lattes.",
    photo: photos.smoresIced,
  },
];

const instagramPhotos = [
  photos.whippedCream,
  photos.strawberryMatcha,
  photos.v60Pour,
  photos.smoresGreen,
  photos.icedBlack,
  photos.smoresIced,
];

export default function HomePage() {
  const matcha = getCategory("matcha");

  return (
    <>
      {/* 01 — Hero */}
      <section className="hero tone-dark" aria-labelledby="hero-title">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow" data-reveal style={{ color: "var(--sage)" }}>
              {business.descriptor}
            </p>
            <h1 id="hero-title" className="display hero__title" data-reveal>
              <span className="line">Good coffee.</span>
              <span className="line">
                <em>Good moments.</em>
              </span>
            </h1>
            <p className="lede muted" data-reveal>
              Hand-poured V60, espresso, and matcha in colour — served in green-and-cream
              stripes in {business.area}, {business.country}.
            </p>
            <div className="actions" data-reveal>
              <Link className="btn btn--solid" href="/menu">
                Explore the menu <ArrowRight />
              </Link>
              <Link className="btn btn--ghost" href="/visit">
                Visit us
              </Link>
            </div>
            <p className="hero__meta" data-reveal>
              <span>
                <strong>{business.area}</strong> · {business.hours.opens} – {business.hours.closes}
              </span>
              <span>{business.status}</span>
            </p>
          </div>

          <div className="hero__photos">
            <Photo
              className="hero__photo"
              photo={photos.strawberryMatcha}
              sizes="(min-width: 960px) 260px, 50vw"
              priority
              caption="Strawberry matcha"
            />
            <Photo
              className="hero__photo hero__photo--b"
              photo={photos.smoresGreen}
              sizes="(min-width: 960px) 240px, 45vw"
              priority
              caption="Smores"
            />
          </div>
        </div>
      </section>
      <div className="stripes" aria-hidden="true" />

      {/* 02 — Signature */}
      <section className="section" aria-labelledby="signature-title">
        <div className="wrap">
          <header className="section-head section-head--split">
            <p className="eyebrow section-head__index">01 — On the bar</p>
            <h2 id="signature-title" className="h2" data-reveal>
              Four ways into a <em>Notes</em> cup.
            </h2>
            <p className="lede muted" data-reveal>
              Specialty coffee on one side of the bar, matcha on the other. Start with whatever
              the moment calls for.
            </p>
          </header>

          <ol className="signature">
            {signature.map((row, index) => (
              <li key={row.name}>
                <Link
                  href={`/menu#${row.category.id}`}
                  className="signature__row"
                  data-reveal
                >
                  <span className="signature__num">0{index + 1}</span>
                  <span className="signature__body">
                    <span className="signature__name">{row.name}</span>
                    <span className="signature__desc">
                      {row.desc}
                      <span className="signature__price">
                        From {formatPrice(lowestPrice(row.category))} BD
                      </span>
                    </span>
                  </span>
                  <span className="signature__thumb">
                    <Image
                      src={row.photo.src}
                      alt=""
                      width={row.photo.width}
                      height={row.photo.height}
                      sizes="(min-width: 768px) 136px, 76px"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 03 — Statement */}
      <section className="section tone-ivory" aria-label="Small moments. Good coffee.">
        <div className="wrap">
          <p className="statement" data-reveal>
            <span className="statement__line">
              Small
              <span className="statement__inset">
                <Image
                  src={photos.whippedCream.src}
                  alt=""
                  width={photos.whippedCream.width}
                  height={photos.whippedCream.height}
                  sizes="180px"
                />
              </span>
              <em>moments.</em>
            </span>
            <span className="statement__line statement__line--indent">Good coffee.</span>
          </p>
          <div className="statement-foot">
            <p className="lede" data-reveal>
              Notes is a coffee roastery, a coffee house and a matcha space — three things under one
              name, now in its soft opening in {business.area}.
            </p>
          </div>
        </div>
      </section>

      {/* 04 — Menu preview */}
      <section className="section tone-dark" aria-labelledby="menu-preview-title">
        <div className="wrap">
          <header className="section-head section-head--split">
            <p className="eyebrow section-head__index">02 — The menu</p>
            <h2 id="menu-preview-title" className="h2" data-reveal>
              Eight sections. <em>One page.</em>
            </h2>
            <p className="lede muted" data-reveal>
              Black and white coffee, V60 by origin, specials, matcha, refreshes, sandwiches and
              something sweet. All prices in Bahraini dinar.
            </p>
          </header>

          <div className="menu-board menu-board--four">
            {menu.map((category) => (
              <MenuCategoryBlock key={category.id} category={category} limit={3} />
            ))}
          </div>

          <div className="menu-preview__foot">
            <p className="caption">Menu and prices may change. Ask at the bar for today&apos;s coffee.</p>
            <Link className="btn btn--solid" href="/menu">
              View full menu <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — Matcha & specials */}
      <section className="section matcha tone-paper" aria-labelledby="matcha-title">
        <div className="wrap matcha__grid">
          <div>
            <p className="eyebrow section-head__index" style={{ marginBottom: "1.5rem" }}>
              03 — Matcha space
            </p>
            <h2 id="matcha-title" className="h1 matcha__title" data-reveal>
              Matcha, <span className="accent">in colour.</span>
            </h2>
            <ul className="matcha__list">
              {matcha.items.map((item) => (
                <li key={item.name} data-reveal>
                  <span className="name">{item.name}</span>
                  <span className="price">{formatPrice(item.price)} BD</span>
                </li>
              ))}
            </ul>
            <p className="cup-quote">I love you so matcha</p>
            <p className="caption matcha__note">— printed on the Notes strawberry matcha cup.</p>
          </div>

          <div className="matcha__collage">
            <Photo photo={photos.strawberryMatcha} sizes="(min-width: 960px) 360px, 66vw" />
            <Photo photo={photos.strawberryFoam} sizes="(min-width: 960px) 180px, 33vw" />
            <Photo photo={photos.marshmallow} sizes="(min-width: 960px) 180px, 33vw" />
          </div>
        </div>
      </section>

      {/* 06 — The café */}
      <section className="section tone-deep" aria-labelledby="cafe-title">
        <div className="wrap cafe__grid">
          <div className="cafe__photos">
            <Photo photo={photos.v60Pour} sizes="(min-width: 960px) 256px, 50vw" />
            <Photo photo={photos.whippedCream} sizes="(min-width: 960px) 256px, 50vw" />
            <Photo photo={photos.trayDuck} sizes="(min-width: 960px) 256px, 50vw" />
          </div>
          <div>
            <p className="eyebrow section-head__index" style={{ marginBottom: "1.5rem" }}>
              04 — The café
            </p>
            <h2 id="cafe-title" className="h2" data-reveal>
              Striped cups and <em>slow pours.</em>
            </h2>
            <dl className="facts">
              <div>
                <dt>Where</dt>
                <dd>
                  {business.area}, {business.country}
                </dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>
                  {business.hours.opens} – {business.hours.closes}
                </dd>
              </div>
              <div>
                <dt>Call</dt>
                <dd>
                  <a className="link" href={business.phone.href}>
                    {business.phone.display}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="actions" style={{ marginTop: "2.5rem" }}>
              <Link className="btn btn--solid" href="/visit">
                Visit Notes <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Instagram */}
      <section className="section" aria-labelledby="insta-title">
        <div className="wrap">
          <div className="insta__head">
            <div>
              <p className="eyebrow section-head__index" style={{ marginBottom: "1.25rem" }}>
                05 — Follow along
              </p>
              <h2 id="insta-title" className="insta__handle">
                <a href={business.instagram.url} target="_blank" rel="noopener noreferrer">
                  {business.instagram.handle}
                </a>
              </h2>
            </div>
            <a
              className="btn btn--outline-forest"
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Instagram <ArrowUpRight />
            </a>
          </div>
          <div className="insta__grid">
            {instagramPhotos.map((photo) => (
              <a
                key={photo.src}
                href={business.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${photo.alt} — view on Instagram`}
                data-reveal
              >
                <Image
                  src={photo.src}
                  alt=""
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 768px) 16vw, 33vw"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
