/**
 * Business details — single source of truth.
 *
 * Everything here comes from the @notesroasters Instagram bio as captured
 * in the screenshot supplied by the client. Items marked `needsConfirmation`
 * could not be independently verified and must be checked with Notes
 * before the site is promoted to production.
 */

export const business = {
  name: "Notes Coffee Roasters",
  shortName: "Notes",
  /** Verbatim from the Instagram bio. */
  descriptor: "Coffee Roastery, Coffee House, Matcha Space",
  status: "Soft opening",
  area: "Mashtan",
  country: "Bahrain",

  phone: {
    display: "7790 0242",
    href: "tel:+97377900242",
  },

  instagram: {
    handle: "@notesroasters",
    url: "https://www.instagram.com/notesroasters/",
  },

  /** Google Maps share link from the Instagram bio. */
  mapsUrl: "https://maps.app.goo.gl/aeJv9sx1tkMM177x6",

  hours: {
    /**
     * Instagram bio reads "Mashtan: 4:00pm-12pm". A 4pm opening with a
     * noon close is impossible, so this is read as closing at midnight.
     * Days of the week are not stated. needsConfirmation.
     */
    label: "Mashtan",
    opens: "4:00 pm",
    closes: "12:00 midnight",
    needsConfirmation: true,
  },

  /** Exact street address is not published in the supplied material. */
  addressNeedsConfirmation: true,
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://notes-coffee-roasters.vercel.app";
