import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/", ar: "الرئيسية", en: "Home" },
  { href: "/menu", ar: "المنيو", en: "Menu" },
  { href: "/branches", ar: "فروعنا", en: "Branches" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-orange shadow-md">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" aria-label="Ajeena Ajeeba — الرئيسية">
          <Logo size="sm" />
        </Link>
        <ul className="flex flex-wrap gap-1 sm:gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="flex flex-col items-center rounded-full px-3 py-1 text-cream transition hover:bg-brick"
              >
                <span className="font-bold leading-tight">{l.ar}</span>
                <span className="text-[11px] leading-tight opacity-80" lang="en">
                  {l.en}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
