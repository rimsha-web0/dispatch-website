import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  MessagesSquare,
} from "lucide-react";

import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

import {
  site,
  getAddress,
  getEmailHref,
  getPhoneHref,
} from "@/config/site";

export const metadata = {
  title: "Contact",
};

const contactImage =
  "https://images.unsplash.com/photo-1766066014237-00645c74e9c6?auto=format&fit=crop&w=1200&q=85";

export default function ContactPage() {
  const phoneHref = getPhoneHref();
  const emailHref = getEmailHref();
  const address = getAddress();

  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>

          <span className="eyebrow">Talk with our team</span>

          <h1>{site.contact.heading}</h1>

          <p>{site.contact.description}</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container contact-layout">
          <Reveal>
            <aside className="contact-aside">
              <div className="contact-image">
                <img
                  src={contactImage}
                  alt="Customer support representative wearing a headset at a computer"
                  width={900}
                  height={620}
                />

                <div className="contact-image-label">
                  <span>Customer support</span>
                  <strong>We’re ready to hear from you.</strong>
                </div>
              </div>

              <div className="contact-side-copy">
                <span className="icon-box">
                  <MessagesSquare size={24} />
                </span>

                <h2>Start with a clear conversation.</h2>

                <p>
                  Tell us about your dispatch needs, equipment,
                  preferred lanes, or questions. SMS permission is
                  optional and separate from your inquiry.
                </p>
              </div>

              {(phoneHref || emailHref || address) && (
                <div className="contact-detail-list">
                  {phoneHref && (
                    <a className="contact-detail" href={phoneHref}>
                      <Phone size={19} aria-hidden="true" />
                      <span>
                        <strong>Phone</strong>
                        {site.business.phone}
                      </span>
                    </a>
                  )}

                  {emailHref && (
                    <a className="contact-detail" href={emailHref}>
                      <Mail size={19} aria-hidden="true" />
                      <span>
                        <strong>Email</strong>
                        {site.business.email}
                      </span>
                    </a>
                  )}

                  {address && (
                    <div className="contact-detail">
                      <MapPin size={19} aria-hidden="true" />
                      <span>
                        <strong>Business address</strong>
                        {address}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="contact-privacy-note">
                <ShieldCheck size={19} aria-hidden="true" />
                <p>
                  You can send an inquiry without agreeing to SMS.
                  See our{" "}
                  <Link href="/privacy-policy">Privacy Policy</Link>.
                </p>
              </div>
            </aside>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="contact-form-panel">
              <div className="contact-form-heading">
                <span className="eyebrow">Contact form</span>
                <h2>How can we help?</h2>
                <p>
                  Required fields are marked with *. You may submit
                  this form without opting in to SMS.
                </p>
              </div>

              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container contact-bottom">
          <div>
            <span className="eyebrow">Help us understand your needs</span>
            <h2 className="section-title">
              Share the details that matter to your operation.
            </h2>
          </div>

          <div className="contact-tip">
            <p>
              Include your equipment type, preferred lanes,
              availability, and the service you would like to
              discuss.
            </p>

            <Link className="text-link" href="/services">
              View dispatch services
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}