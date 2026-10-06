import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Handshake,
  Headset,
  MapPinned,
  MessagesSquare,
  Route,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/config/site";

const serviceIcons = {
  Search,
  Handshake,
  FileText,
  Route,
  MessagesSquare,
  Headset,
};

const approachFeatures = [
  {
    Icon: ClipboardCheck,
    title: "Your approval comes first",
    description:
      "Review proposed loads and decide what works for your operation.",
  },
  {
    Icon: MessagesSquare,
    title: "Clear communication",
    description:
      "Stay informed about the dispatch details that matter to your run.",
  },
  {
    Icon: Route,
    title: "Support around your preferences",
    description:
      "Discuss equipment, preferred lanes, availability, and service needs.",
  },
];

export default function HomePage() {
  const { business, hero, about, images } = site;

  return (
    <>
      {/* HERO */}
      <section
        className="hero"
        aria-labelledby="home-hero-title"
      >
        <div className="container hero-grid">
          <Reveal>
            <div>
              <span className="eyebrow">
                {hero.eyebrow}
              </span>

              <h1
                id="home-hero-title"
                className="hero-title"
              >
                {hero.title}

                <span>
                  {hero.highlightedTitle}
                </span>
              </h1>

              <p className="hero-description">
                {hero.description}
              </p>

              <div className="button-row">
                <Link
                  href={hero.primaryButton.href}
                  className="button button-primary"
                >
                  {hero.primaryButton.label}

                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href={hero.secondaryButton.href}
                  className="button button-secondary"
                >
                  {hero.secondaryButton.label}

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="hero-notes">
                <span className="hero-note">
                  <CheckCircle2
                    size={16}
                    aria-hidden="true"
                  />

                  Carrier-approved loads
                </span>

                <span className="hero-note">
                  <CheckCircle2
                    size={16}
                    aria-hidden="true"
                  />

                  Clear service scope
                </span>

                <span className="hero-note">
                  <CheckCircle2
                    size={16}
                    aria-hidden="true"
                  />

                  Organized coordination
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.12}>
            <div className="hero-visual">
              <div className="hero-image-wrap">
                {images.hero && (
                  <img
                    src={images.hero}
                    alt="Freight truck used to illustrate road transportation"
                    className="hero-image"
                    width={700}
                    height={700}
                    fetchPriority="high"
                  />
                )}

                <p className="hero-image-caption">
                  Practical dispatch support for
                  owner-operators and carriers.
                </p>
              </div>

              <div className="hero-floating-card">
                <span
                  className="icon-box"
                  aria-hidden="true"
                >
                  <Headset size={26} />
                </span>

                <div>
                  <h3>
                    Your next move, coordinated.
                  </h3>

                  <p>
                    Load search. Communication.
                    Follow-through.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OPERATION INTRODUCTION */}
      <section
        className="section-white"
        aria-label="Dispatch support overview"
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          paddingBlock: "30px",
        }}
      >
        <div className="container grid-3">
          {[
            {
              Icon: Truck,
              title: "For Owner-Operators",
              description:
                "Support with the daily details of dispatching.",
            },
            {
              Icon: MapPinned,
              title: "Around Your Lanes",
              description:
                "Share your routes and operating preferences.",
            },
            {
              Icon: ShieldCheck,
              title: "With Your Approval",
              description:
                "You remain in control of accepted loads.",
            },
          ].map(({ Icon, title, description }) => (
            <div
              key={title}
              className="feature-item"
            >
              <span className="icon-box">
                <Icon
                  size={24}
                  aria-hidden="true"
                />
              </span>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="section"
        aria-labelledby="home-services-title"
      >
        <div className="container">
          <SectionHeading
            id="home-services-title"
            eyebrow="What we help with"
            title="Support for the work behind every run."
            description={
              "From finding available loads to coordinating " +
              "documents, explore dispatch support that " +
              "fits your operation."
            }
            centered
          />

          <div className="grid-3">
            {site.services.map((service, index) => {
              const Icon =
                serviceIcons[service.icon] || Truck;

              return (
                <Reveal
                  key={service.id}
                  delay={(index % 3) * 0.08}
                  style={{ height: "100%" }}
                >
                  <article
                    className="service-card"
                    style={{ height: "100%" }}
                  >
                    <span className="icon-box">
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <Link
                      href={`/services#${service.id}`}
                      className="text-link"
                      aria-label={`Learn about ${service.title}`}
                    >
                      Explore Service

                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                      />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        className="section section-white"
        aria-labelledby="home-about-title"
      >
        <div className="container split-section">
          <Reveal direction="left">
            <div className="split-image">
              {images.about && (
                <img
                  src={images.about}
                  alt="Truck transportation illustrating dispatch operations"
                  width={700}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          </Reveal>

          <Reveal>
            <div>
              <span className="eyebrow">
                A practical working relationship
              </span>

              <h2
                id="home-about-title"
                className="section-title"
              >
                {about.heading}
              </h2>

              <p className="section-description">
                {about.introduction}
              </p>

              <div className="feature-list">
                {approachFeatures.map(
                  ({ Icon, title, description }) => (
                    <div
                      key={title}
                      className="feature-item"
                    >
                      <Icon
                        size={23}
                        aria-hidden="true"
                      />

                      <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>
                    </div>
                  )
                )}
              </div>

              <Link
                href="/about"
                className="button button-secondary"
                style={{ marginTop: "30px" }}
              >
                Get to Know {business.shortName}

                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section
        className="section section-soft"
        aria-labelledby="home-equipment-title"
      >
        <div className="container">
          <SectionHeading
            id="home-equipment-title"
            eyebrow="Your equipment. Your operation."
            title="Start with the truck you run."
            description={
              "Tell us your equipment type so we can " +
              "discuss suitable dispatch support and " +
              "service availability."
            }
          />

          <div className="grid-3">
            {site.equipment.map((equipment, index) => (
              <Reveal
                key={equipment}
                delay={(index % 3) * 0.08}
              >
                <div className="equipment-card">
                  <Truck
                    size={28}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <h3>{equipment}</h3>
                </div>
              </Reveal>
            ))}
          </div>

          <p
            className="section-description"
            style={{
              maxWidth: "700px",
              fontSize: "14px",
              marginTop: "26px",
            }}
          >
            Equipment and lane suitability are reviewed
            during your inquiry. Available loads depend
            on market conditions.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="section section-white"
        aria-labelledby="home-process-title"
      >
        <div className="container">
          <SectionHeading
            id="home-process-title"
            eyebrow="How it works"
            title="A clear start. An organized next step."
            description={
              "Understand the service, share your " +
              "preferences, and review opportunities " +
              "before moving forward."
            }
            centered
          />

          <div className="grid-4">
            {site.process.map((item, index) => (
              <Reveal
                key={item.step}
                delay={index * 0.08}
                style={{ height: "100%" }}
              >
                <article
                  className="process-card"
                  style={{ height: "100%" }}
                >
                  <span className="process-number">
                    {item.step}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNICATION */}
      <section
        className="section section-dark"
        aria-labelledby="home-communication-title"
      >
        <div className="container">
          <SectionHeading
            id="home-communication-title"
            eyebrow="Communication that stays clear"
            title="Know what happens next."
            description={
              "Discuss how you want to communicate, " +
              "what support you need, and the details " +
              "that matter to your operation."
            }
          />

          <div className="grid-3">
            {[
              {
                Icon: MessagesSquare,
                title: "Choose Your Contact Preferences",
                description:
                  "Tell us how you prefer to discuss your inquiry and service needs.",
              },
              {
                Icon: ClipboardCheck,
                title: "Review the Scope",
                description:
                  "Discuss fees, responsibilities, and agreed support before starting.",
              },
              {
                Icon: Headset,
                title: "Ask Before You Start",
                description:
                  "Use our contact page to clarify the service and request more information.",
              },
            ].map(({ Icon, title, description }, index) => (
              <Reveal
                key={title}
                delay={index * 0.08}
              >
                <article
                  style={{
                    padding: "28px",
                    height: "100%",
                    borderRadius: "20px",
                    border:
                      "1px solid rgba(255,255,255,0.15)",
                    background:
                      "rgba(255,255,255,0.04)",
                  }}
                >
                  <Icon
                    size={28}
                    color="#8ad7c9"
                    aria-hidden="true"
                  />

                  <h3
                    style={{
                      marginTop: "22px",
                      fontSize: "20px",
                      lineHeight: 1.35,
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    style={{
                      marginTop: "14px",
                      fontSize: "14px",
                      color: "#c4d3d8",
                    }}
                  >
                    {description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section"
        aria-labelledby="home-faq-title"
      >
        <div className="container">
          <SectionHeading
            id="home-faq-title"
            eyebrow="Before you get started"
            title="Questions, answered."
            description={
              "A few useful details about dispatch " +
              "support and contacting our team."
            }
            centered
          />

          <div className="faq-list">
            {site.faq.map((item) => (
              <details
                key={item.question}
                className="faq-item"
              >
                <summary>
                  {item.question}
                </summary>

                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="section-white"
        aria-labelledby="home-contact-title"
        style={{ paddingBlock: "0 72px" }}
      >
        <div className="container">
          <Reveal>
            <div className="cta-panel">
              <div>
                <h2 id="home-contact-title">
                  Let’s talk about your next move.
                </h2>

                <p>
                  Share your equipment, preferred lanes,
                  and dispatch needs. Start with a clear
                  conversation about the support you
                  are looking for.
                </p>
              </div>

              <Link
                href={hero.primaryButton.href}
                className="button button-light"
              >
                {hero.primaryButton.label}

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}