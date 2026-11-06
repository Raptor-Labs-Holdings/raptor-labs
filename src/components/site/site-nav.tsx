import { useState, type MouseEvent } from "react";

const LINKS = [
  { href: "#why", label: "Why us" },
  { href: "#services", label: "What we do" },
  { href: "#process", label: "How we work" },
  { href: "#industries", label: "Industries" },
];

export function SiteNav() {
  const [hopping, setHopping] = useState(false);

  // Smooth-scroll back to the top and play a short "hop" on the logo.
  const goTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", window.location.pathname);
    setHopping(false);
    requestAnimationFrame(() => setHopping(true));
  };

  return (
    <header className="rl-nav">
      <a
        aria-label="Raptor Labs, back to top"
        className={hopping ? "rl-nav__brand is-hopping" : "rl-nav__brand"}
        href="#top"
        onAnimationEnd={() => setHopping(false)}
        onClick={goTop}
      >
        <img alt="Raptor Labs" height={275} src="/assets/brand/logo.png" width={900} />
      </a>
      <nav aria-label="Primary" className="rl-nav__links">
        {LINKS.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="rl-nav-talk" href="#contact">
        <span aria-hidden="true">[</span>
        Let&apos;s talk
        <span aria-hidden="true">]</span>
      </a>
    </header>
  );
}
