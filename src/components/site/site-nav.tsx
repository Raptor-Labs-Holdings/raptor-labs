const LINKS = [
  { href: "#why", label: "Why us" },
  { href: "#services", label: "What we do" },
  { href: "#process", label: "How we work" },
  { href: "#industries", label: "Industries" },
];

export function SiteNav() {
  return (
    <header className="rl-nav">
      <a aria-label="Raptor Labs home" className="rl-nav__brand" href="#top">
        <img alt="Raptor Labs" height={44} src="/assets/brand/logo.png" width={144} />
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
