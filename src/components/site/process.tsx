const STEPS = [
  {
    body: "We get access to your environment and learn your workflows before the first session.",
    title: "Discover",
  },
  {
    body: "Each week ships a working piece on your real data. You review it, we refine it, and your team uses it right away.",
    title: "Build together, week by week",
  },
  {
    body: "In 8 to 12 weeks you have working systems, a trained team and a roadmap. We stay on if you want us to.",
    title: "Own it and scale",
  },
];

export function Process() {
  return (
    <section aria-labelledby="process-title" className="rl-process" id="process">
      <figure className="rl-process__band">
        <img
          alt="Overhead view of a work table covered in process diagrams, spreadsheets and notes"
          height={576}
          loading="lazy"
          src="/assets/content/desk.jpg"
          width={1344}
        />
        <figcaption>Less time on busywork. More time with clients and on decisions.</figcaption>
      </figure>
      <div className="rl-wrap">
        <h2 className="rl-h2" id="process-title">
          What working with us looks like
        </h2>
        <ol className="rl-steps">
          {STEPS.map((step, index) => (
            <li className="rl-steps__item" key={step.title}>
              <span aria-hidden="true" className="rl-steps__num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="rl-h3">{step.title}</h3>
              <p className="rl-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
