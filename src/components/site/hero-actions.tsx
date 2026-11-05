/** Hero CTA pair: a solid "Let's talk" block and a quieter text link. */
export function HeroActions() {
  return (
    <>
      <a className="rl-hero-talk" href="#contact">
        <span>Let&apos;s talk</span>
        <span aria-hidden="true" className="rl-hero-talk__arrow">
          &rarr;
        </span>
      </a>
      <a className="rl-hero-services" href="#services">
        See what we do
      </a>
    </>
  );
}
