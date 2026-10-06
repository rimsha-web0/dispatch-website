import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";

export const metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  const business = site.business;
  const termsImage = site.images.services || site.images.hero;
  const effectiveDate =
    site.policies.effectiveDate || "Add the date before publishing";

  return (
    <>
      <section className="terms-hero">
        <div className="container terms-hero-grid">
          <div className="terms-hero-copy">
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Terms &amp; Conditions</span>
            </div>

            <span className="eyebrow">Website and SMS terms</span>

            <h1>Terms &amp; Conditions</h1>

            <p>
              Please review these terms for information about this
              website, dispatch inquiries, and optional SMS updates.
            </p>

            <span className="terms-effective">
              Effective date: {effectiveDate}
            </span>
          </div>

          <div className="terms-hero-image">
            {termsImage && (
              <img
                src={termsImage}
                alt="Freight truck on a highway"
                width={900}
                height={560}
              />
            )}
            <div className="terms-image-overlay">
              <ShieldCheck size={22} />
              <span>Clear service and messaging terms</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container terms-layout">
          <aside className="terms-sidebar">
            <span className="icon-box">
              <ShieldCheck size={24} />
            </span>

            <h2>Terms at a glance</h2>

            <p>
              Website information is general. Dispatch services
              require a separate agreement. SMS enrollment is
              optional.
            </p>

            <Link href="/contact" className="text-link">
              Ask us a question
              <ArrowRight size={16} />
            </Link>
          </aside>

          <article className="policy-content terms-content">
            <section id="website-use">
              <span className="terms-section-number">01</span>
              <h2>Using this website</h2>
              <p>
                This website is operated by {business.legalName}.
                You may use it to learn about the company and submit
                an inquiry. Website content is general information
                and does not itself create a dispatch services
                agreement.
              </p>
            </section>

            <section id="dispatch-services">
              <span className="terms-section-number">02</span>
              <h2>Dispatch services</h2>
              <p>
                Services, fees, responsibilities, and other terms
                must be discussed and agreed separately before work
                begins. Load availability, rates, and results vary
                based on market and operating conditions.
              </p>
              <p>
                The carrier remains responsible for reviewing and
                approving loads it accepts and for its own
                transportation operations.
              </p>
            </section>

            <section id="sms-program">
              <span className="terms-section-number">03</span>
              <h2>SMS program and consent</h2>
              <p>
                If you separately check the optional SMS consent box,
                {` ${business.legalName} `}may send the message types
                described beside that checkbox, such as requested
                inquiry follow-ups, scheduling messages, or service
                updates.
              </p>
              <p>
                Message frequency varies. Message and data rates may
                apply. Reply STOP to opt out or HELP for assistance.
                SMS consent is optional and is not required to submit
                an inquiry or purchase a service.
              </p>
              <p>
                Your SMS consent applies to the company identified in
                the checkbox and to the message purposes described
                there. It does not apply to numbers collected from
                public directories.
              </p>
            </section>

            <section id="contact">
              <span className="terms-section-number">04</span>
              <h2>Contact and updates</h2>
              <p>
                Contact us through the{" "}
                <Link href="/contact">contact page</Link> with
                questions about these terms. We may update this page
                when our business practices or services change.
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}