"use client";

import { useState } from "react";
import Link from "next/link";
import { site, getSmsConsentText } from "@/config/site";

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [smsConsent, setSmsConsent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    setStatus({
      type: "success",
      message:
        "Thank you for filling out the form. Our team will contact you as soon as possible.",
    });

    form.reset();
    setSmsConsent(false);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-field">
          <label className="form-label" htmlFor="contact-name">
            Full name *
          </label>
          <input
            className="form-input"
            id="contact-name"
            name="name"
            autoComplete="name"
            maxLength={100}
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="contact-email">
            Email address *
          </label>
          <input
            className="form-input"
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="contact-phone">
            Phone number{smsConsent ? " *" : ""}
          </label>
          <input
            className="form-input"
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            required={smsConsent}
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="contact-equipment">
            Equipment type
          </label>
          <select
            className="form-select"
            id="contact-equipment"
            name="equipment"
            defaultValue=""
          >
            <option value="">Select if applicable</option>
            {site.equipment.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-field full-width">
          <label className="form-label" htmlFor="contact-message">
            How can we help? *
          </label>
          <textarea
            className="form-textarea"
            id="contact-message"
            name="message"
            maxLength={3000}
            required
          />
        </div>
      </div>

      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="contact-company-website">
          Leave this field blank
        </label>
        <input
          id="contact-company-website"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="consent-box contact-sms-consent">
        <input
          id="sms-consent"
          name="smsConsent"
          type="checkbox"
          checked={smsConsent}
          onChange={(event) =>
            setSmsConsent(event.target.checked)
          }
        />

        <label htmlFor="sms-consent">
          {getSmsConsentText()}{" "}
          <Link href={site.sms.privacyPath}>
            Privacy Policy
          </Link>
          {" and "}
          <Link href={site.sms.termsPath}>
            Terms &amp; Conditions
          </Link>
          .
        </label>
      </div>

      <p className="form-note">
        SMS consent is optional. You can submit your inquiry without
        checking this box.
      </p>

      <button
        type="submit"
        className="button button-primary form-submit"
      >
        {site.contact.submitLabel || "Send Inquiry"}
      </button>

      {status && (
        <p
          className={`form-status ${status.type}`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}