import type { PointerEvent } from "react";

const SERVICES = [
  {
    body: "Repetitive work rebuilt so AI handles most of it, with your team reviewing what matters.",
    examples: "Document extraction, proposal drafting, research briefs, reporting",
    icon: "workflows",
    title: "AI workflows",
  },
  {
    body: "Task-specific agents and internal copilots, grounded in your knowledge and connected to your tools.",
    icon: "agents",
    title: "AI agents and assistants",
  },
  {
    body: "Internal platforms, dashboards and apps for when a workflow is not enough.",
    icon: "software",
    title: "Custom software",
  },
  {
    body: "Your CRM, ERP, spreadsheets and databases connected, so information moves without copy and paste.",
    icon: "integration",
    title: "Data and systems integration",
  },
  {
    body: "Cloud architecture, evaluation, security and governance for AI that runs in production.",
    icon: "infrastructure",
    title: "Engineering and infrastructure",
  },
  {
    body: "A senior engineer on your team by the week or month, plus training so your people keep building.",
    icon: "embedded",
    title: "Embedded engineering",
  },
];

/** Move a soft spotlight with the pointer. Writes CSS vars, never React state. */
function trackPointer(event: PointerEvent<HTMLLIElement>) {
  const cell = event.currentTarget;
  const rect = cell.getBoundingClientRect();
  cell.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  cell.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

export function Services() {
  return (
    <section aria-labelledby="services-title" className="rl-services" id="services">
      <div className="rl-wrap">
        <h2 className="rl-h2" id="services-title">
          What we <span className="rl-accent">do</span>
        </h2>
        <p className="rl-lede">
          Enablement is built into every engagement. Your team learns the system while we build it.
        </p>
        <ul className="rl-bento">
          {SERVICES.map((service, index) => (
            <li
              className={`rl-bento__cell rl-bento__cell--${index + 1}`}
              key={service.title}
              onPointerMove={trackPointer}
            >
              <span aria-hidden="true" className="rl-bento__num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rl-bento__tile">
                <img
                  alt=""
                  className="rl-bento__icon"
                  height={96}
                  src={`/assets/icons/${service.icon}.png`}
                  width={96}
                />
              </span>
              <div className="rl-bento__text">
                <h3 className="rl-h3">{service.title}</h3>
                <p className="rl-body">{service.body}</p>
                {service.examples ? <p className="rl-bento__examples">{service.examples}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
