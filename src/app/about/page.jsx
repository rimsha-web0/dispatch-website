import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  MessagesSquare,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/config/site";

export const metadata = {
  title: "About",
};

const principles = [
  {
    Icon: ClipboardCheck,
    number: "01",
    title: "Understand the operation",
    description:
      "We start by discussing equipment, preferred lanes, availability, and requested support.",
  },
  {
    Icon: ShieldCheck,
    number: "02",
    title: "Explain the service",
    description:
      "Service scope, fees, documents, and communication expectations should be clear before work begins.",
  },
  {
    Icon: MessagesSquare,
    number: "03",
    title: "Keep decisions with the carrier",
    description:
      "Carriers review proposed loads and decide which ones fit their operation.",
  },
];

export default function AboutPage() {
  const { business, about, images } = site;
  const aboutImage = images.about || images.hero;

  return (
    <>
      <section className="about-hero">
        <div className="container about-hero-grid">
          <Reveal>
            <div className="about-hero-copy">
              <div className="breadcrumbs">
                <Link href="/">Home</Link>
                <span>/</span>
                <span>About</span>
              </div>

              <span className="eyebrow">About our company</span>

              <h1>{about.heading}</h1>

              <p>{about.introduction}</p>

              <Link
                href="/contact"
                className="button button-primary"
              >
                Talk with our team
                <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="about-hero-photo">
              {aboutImage ? (
                <img
                  src={aboutImage}
                  alt="Freight truck representing transportation and dispatch"
                  width={900}
                  height={700}
                />
              ) : (
                <div className="about-image-placeholder">
                  <Truck size={100} strokeWidth={1.1} />
                </div>
              )}

              <div className="about-photo-note">
                <Truck size={20} />
                <span>
                  {business.shortName}
                  <strong>Dispatch support for carriers</strong>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container about-story-grid">
          <Reveal direction="left">
            <div className="about-story-mark">
              <span className="about-mark-ring">
                <Truck size={52} strokeWidth={1.3} />
              </span>
              <span className="about-mark-caption">
                Organized. Clear. Carrier-focused.
              </span>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <span className="eyebrow">Our approach</span>

              <h2 className="section-title">
                Dispatch support should make the next step clear.
              </h2>

              <p className="section-description">
                {about.paragraphs[0]}
              </p>

              <p className="section-description">
                {about.paragraphs[1]}
              </p>

              <div className="about-check-list">
                {[
                  "Discuss needs before work begins.",
                  "Explain service responsibilities and fees.",
                  "Keep load approval with the carrier.",
                ].map((item) => (
                  <div key={item}>
                    <span><Check size={15} /></span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="How we work"
            title="A practical process from first conversation."
            description="We want prospective customers to understand what to expect before choosing dispatch support."
            centered
          />

          <div className="grid-3">
            {principles.map(({ Icon, number, title, description }, index) => (
              <Reveal key={number} delay={index * 0.1}>
                <article className="about-principle">
                  <div className="about-principle-top">
                    <span>{number}</span>
                    <Icon size={25} />
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="cta-panel">
            <div>
              <h2>Let’s discuss the support you need.</h2>
              <p>
                Share a few details about your operation and
                dispatch requirements.
              </p>
            </div>

            <Link href="/contact" className="button button-light">
              Contact us
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}