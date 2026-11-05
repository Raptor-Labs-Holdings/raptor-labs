export function SiteFooter() {
  return (
    <footer className="rl-footer">
      <div className="rl-wrap rl-footer__inner">
        <img alt="Raptor Labs" height={40} loading="lazy" src="/assets/brand/logo.png" width={131} />
        <nav aria-label="Footer" className="rl-footer__links">
          <a href="#why">Why us</a>
          <a href="#services">What we do</a>
          <a href="#process">How we work</a>
          <a href="#industries">Industries</a>
        </nav>
        <a className="rl-footer__mail" href="mailto:raza@raptorlabs.co">
          raza@raptorlabs.co
        </a>
        <p className="rl-footer__legal">&copy; 2026 Raptor Labs</p>
      </div>
    </footer>
  );
}
