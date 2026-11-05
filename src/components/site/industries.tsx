const INDUSTRIES = [
  {
    items: [
      "Drafts built from your precedent library",
      "Document intake keyed into existing systems",
      "Client reporting on a schedule",
      "Team know-how captured and searchable",
    ],
    name: "Professional services",
    scope: "Legal, accounting, consulting, insurance",
  },
  {
    items: [
      "Embedded engineers across the portfolio",
      "AI rollout and agent governance",
      "Sales and customer success tooling",
      "Playbooks reused company to company",
    ],
    name: "Private equity",
    scope: "Funds and their portfolio companies",
  },
  {
    items: [
      "Internal tooling for operations teams",
      "Systems integration across the stack",
      "Approvals, notifications and handoffs automated",
      "AI features shipped inside your product",
    ],
    name: "Technology and operations",
    scope: "Software, logistics, manufacturing",
  },
];

export function Industries() {
  return (
    <section aria-labelledby="industries-title" className="rl-industries" id="industries">
      <div className="rl-wrap">
        <h2 className="rl-h2" id="industries-title">
          Where we help
        </h2>
        <div className="rl-index">
          {INDUSTRIES.map((industry) => (
            <article className="rl-index__row" key={industry.name}>
              <header className="rl-index__head">
                <h3 className="rl-h3">{industry.name}</h3>
                <p className="rl-index__scope">{industry.scope}</p>
              </header>
              <ul className="rl-index__list">
                {industry.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
