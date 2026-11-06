/** Hero CTA pair: the solid "See what we do" block first, then a quieter "Let's talk" link. */
export function HeroActions() {
  return (
    <>
      <a className="rl-hero-talk" href="#services">
        <span>See what we do</span>
        <span aria-hidden="true" className="rl-hero-talk__arrow">
          &rarr;
        </span>
      </a>
      <a className="rl-hero-services" href="#contact">
        Let&apos;s talk
      </a>
    </>
  );
}
