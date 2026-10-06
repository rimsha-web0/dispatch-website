import Link from "next/link";
import { site } from "@/config/site";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  const business = site.business;
  const email = business.email || "your published business email";
  const effectiveDate =
    site.policies.effectiveDate || "Add the date before publishing";

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>

          <span className="eyebrow">Your information</span>
          <h1>Privacy Policy</h1>
          <p>Effective date: {effectiveDate}</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container policy-layout">
          <article className="policy-content">
            <h2>About this policy</h2>
            <p>
              This Privacy Policy describes how {business.legalName}
              {" "}(&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles information submitted
              through this website. Review and update this policy so it
              accurately describes your actual business practices
              before publishing.
            </p>

            <h2>Information you provide</h2>
            <p>
              If you submit our contact form, we may receive your name,
              email address, phone number, equipment selection, and
              message. Please do not send sensitive personal or
              financial information through the form.
            </p>

            <h2>How we use information</h2>
            <p>
              We use submitted information to respond to inquiries,
              discuss requested dispatch services, and maintain
              business records. We should only use information for
              purposes that match the notice shown when it was
              collected.
            </p>

            <h2>SMS messages and consent</h2>
            <p>
              If SMS enrollment is offered, checking the optional SMS
              box means you agree to receive the message types stated
              beside that box from {business.legalName}. SMS consent
              is separate from other permissions and is not required
              to submit an inquiry.
            </p>
            <p>
              Message frequency varies. Message and data rates may
              apply. Reply STOP to opt out or HELP for assistance.
              We honor opt-out requests and do not send further
              non-essential SMS messages after an opt-out.
            </p>
            <p>
              Mobile number and SMS consent information will not be
              shared with third parties or affiliates for their own
              marketing or promotional purposes. Information may be
              shared with service providers that help us operate our
              messaging service, subject to applicable restrictions.
            </p>

            <h2>Service providers and retention</h2>
            <p>
              We may use service providers to host the website,
              process inquiries, or support communications. Update
              this section to name the providers you actually use and
              describe how long information is retained.
            </p>

            <h2>Your choices and questions</h2>
            <p>
              You can ask us about information you submitted by
              contacting us at{" "}
              <a href={`mailto:${email}`}>{email}</a>. SMS recipients
              can reply STOP to opt out of SMS.
            </p>

            <h2>Policy changes</h2>
            <p>
              We may update this policy when our practices change.
              The effective date above should be updated whenever
              this policy is revised.
            </p>

            <p>
              <Link href="/contact">Contact our team</Link>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}