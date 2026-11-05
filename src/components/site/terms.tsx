const TERMS = [
  { label: "of your team's time each week during the build", value: "1 hr" },
  { label: "weeks from first session to working systems", value: "8 to 12" },
  { label: "of the code, workflows and docs belong to you", value: "100%" },
  { label: "in platform fees or licenses from us", value: "$0" },
];

export function Terms() {
  return (
    <section aria-labelledby="terms-title" className="rl-terms">
      <div className="rl-wrap">
        <h2 className="rl-h2" id="terms-title">
          The terms, in numbers.
        </h2>
        <dl className="rl-terms__grid">
          {TERMS.map((term) => (
            <div className="rl-terms__cell" key={term.label}>
              <dt className="rl-terms__value">{term.value}</dt>
              <dd className="rl-terms__label">{term.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
