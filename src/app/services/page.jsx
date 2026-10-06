import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Handshake,
  Headset,
  MessagesSquare,
  Route,
  Search,
  Truck,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/config/site";

export const metadata = {
  title: "Services",
};

const icons = {
  Search,
  Handshake,
  FileText,
  Route,
  MessagesSquare,
  Headset,
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>

          <span className="eyebrow">Dispatch services</span>

          <h1>Dispatch coordination shaped around your operation.</h1>

          <p>
            Review the support available, then contact us to discuss
            whether it fits your equipment, lanes, and needs.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="What we can help with"
            title="Support through the details of dispatch."
            description="Specific services, fees, availability, and responsibilities should be discussed and agreed before work begins."
            centered
          />

          <div className="grid-3">
            {site.services.map((service, index) => {
              const Icon = icons[service.icon] || Truck;

              return (
                <Reveal
                  key={service.id}
                  delay={(index % 3) * 0.08}
                >
                  <article
                    className="service-card"
                    id={service.id}
                  >
                    <span className="icon-box">
                      <Icon size={25} aria-hidden="true" />
                    </span>

                    <h2
                      style={{
                        marginTop: 24,
                        fontSize: 21,
                      }}
                    >
                      {service.title}
                    </h2>

                    <p>{service.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split-section">
          <Reveal>
            <div>
              <span className="eyebrow">Before dispatch begins</span>

              <h2 className="section-title">
                Agree on the details first.
              </h2>

              <p className="section-description">
                We discuss the requested support, service terms,
                contact preferences, and required documents with
                each prospective customer.
              </p>

              <div className="feature-list">
                {[
                  "Discuss your equipment and preferred lanes.",
                  "Review the services and fees before starting.",
                  "You review and approve loads before accepting them.",
                ].map((item) => (
                  <div className="feature-item" key={item}>
                    <Truck size={21} aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div
              style={{
                padding: 36,
                border: "1px solid var(--border)",
                borderRadius: 24,
                background: "#fff",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <span className="icon-box">
                <Handshake size={27} aria-hidden="true" />
              </span>

              <h3
                style={{
                  marginTop: 22,
                  fontSize: 24,
                }}
              >
                Want to discuss your operation?
              </h3>

              <p
                style={{
                  marginTop: 12,
                  color: "var(--muted)",
                }}
              >
                Send an inquiry and tell us what equipment and
                dispatch support you are looking for.
              </p>

              <Link
                href="/contact"
                className="button button-primary"
                style={{ marginTop: 24 }}
              >
                Contact us
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}