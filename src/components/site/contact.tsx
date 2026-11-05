import { useState } from "react";
import type { FormEvent } from "react";

const TO = "raza@raptorlabs.co";

/** Contact form with no backend: it opens the visitor's email app, pre-filled. */
export function Contact() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get("name") ?? "").trim();
    const email = String(fields.get("email") ?? "").trim();
    const company = String(fields.get("company") ?? "").trim();
    const message = String(fields.get("message") ?? "").trim();

    const subject = `New inquiry from ${name}${company ? ` (${company})` : ""}`;
    const body = [message, "", `Name: ${name}`, `Email: ${email}`, company ? `Website: ${company}` : ""]
      .filter((line, i, all) => line !== "" || i < all.length - 1)
      .join("\n");

    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <section aria-labelledby="contact-title" className="rl-contact" id="contact">
      <div className="rl-wrap rl-contact__inner">
        <div className="rl-contact__intro">
          <h2 className="rl-h2" id="contact-title">
            Tell us where the time is going.
          </h2>
          <p className="rl-lede">A few lines is enough. We read every message and reply personally.</p>
          <p className="rl-contact__alt">
            Prefer email? <a href={`mailto:${TO}`}>{TO}</a>
          </p>
        </div>

        <form className="rl-form" onSubmit={onSubmit}>
          <div className="rl-form__row">
            <label className="rl-field">
              <span className="rl-field__label">Name</span>
              <input autoComplete="name" maxLength={120} name="name" required type="text" />
            </label>
            <label className="rl-field">
              <span className="rl-field__label">Email</span>
              <input autoComplete="email" maxLength={200} name="email" required type="email" />
            </label>
          </div>
          <label className="rl-field">
            <span className="rl-field__label">Company website</span>
            <input autoComplete="url" maxLength={200} name="company" type="text" />
          </label>
          <label className="rl-field">
            <span className="rl-field__label">What would you like help with?</span>
            <textarea maxLength={4000} minLength={10} name="message" required rows={5} />
          </label>
          {opened ? (
            <p className="rl-form__note" role="status">
              Your email app should open with the message ready to send. If it did not, email {TO}.
            </p>
          ) : null}
          <button className="rl-send" type="submit">
            <span aria-hidden="true" className="rl-send__fill" />
            <span className="rl-send__label">Send message</span>
          </button>
        </form>
      </div>
    </section>
  );
}
