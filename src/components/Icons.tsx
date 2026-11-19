import type { IconName } from "@/data/menu";

/**
 * Line illustrations drawn after the icons on the printed Notes menu.
 * Single-weight strokes, currentColor, so they adopt the section tone.
 */

const paths: Record<IconName, React.ReactNode> = {
  bean: (
    <>
      <ellipse cx="16" cy="16" rx="8.5" ry="12" transform="rotate(28 16 16)" />
      <path d="M21.3 6.4c-4.6 3.2-1.7 7.7-4.9 10.6-2.6 2.4-6.2 2.4-8.3 6.6" />
    </>
  ),
  dripper: (
    <>
      <path d="M8 6h16l-5 9h-6z" />
      <path d="M24 7.5h1.8a2 2 0 0 1 2 2v.3a3 3 0 0 1-3 3H22" />
      <path d="M13 15h6v2.2h-6z" />
      <path d="M10 18.5h12l1.5 9.5h-15z" />
      <path d="M9.6 24h12.8" />
    </>
  ),
  cup: (
    <>
      <path d="M6 11h17v6.5a7 7 0 0 1-7 7h-3a7 7 0 0 1-7-7z" />
      <path d="M23 13h1.5a3 3 0 0 1 0 6H22.6" />
      <path d="M4 27.5h22" />
      <path d="M12 6c-1 1.3 1 2.2 0 3.5M16.5 5c-1 1.3 1 2.2 0 3.5" />
    </>
  ),
  star: <path d="m16 4.5 3.4 7.1 7.8 1-5.7 5.4 1.4 7.7L16 22l-6.9 3.7 1.4-7.7-5.7-5.4 7.8-1z" />,
  whisk: (
    <>
      <path d="M19.5 12.5 27 5" />
      <path d="M19.5 12.5c-4.5-1.5-11.4 3.6-13 9.4-.7 2.6.9 4.2 3.5 3.5 5.8-1.6 10.9-8.5 9.5-12.9z" />
      <path d="M17.8 14.2 9 23M15.6 13.4 7.7 21.4M18.6 16.4l-7.9 8" />
    </>
  ),
  glass: (
    <>
      <path d="M8 9h15l-2 19H10z" />
      <path d="M9 15h13" />
      <path d="m17 9 3.5-6.5h3" />
      <circle cx="21.5" cy="9" r="3" />
    </>
  ),
  sandwich: (
    <>
      <path d="M4 15 16 7l12 8z" />
      <path d="M4 15c2 1.6 3.5 1.6 5 0s3-1.6 4.5 0 3 1.6 4.5 0 3-1.6 4.5 0 3 1.6 5.5 0" />
      <path d="M4.5 19h23" />
      <path d="M4 23h24v2.5H4z" />
    </>
  ),
  cookie: (
    <>
      <circle cx="16" cy="16" r="11" />
      <circle cx="12" cy="12.5" r="1.2" />
      <circle cx="19.5" cy="11" r="1" />
      <circle cx="20" cy="19" r="1.3" />
      <circle cx="12.5" cy="20" r="1" />
      <circle cx="16" cy="16" r="0.8" />
    </>
  ),
};

export function CategoryIcon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 18 18 6M8 6h10v10" />
    </svg>
  );
}
