import Link from "next/link";

import {
  ArrowUpRight,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Logo from "@/components/Logo";

import {
  site,
  getEmailHref,
  getPhoneHref,
} from "@/config/site";

export default function Footer() {
  const { business, navigation, services, social } = site;

  const phoneHref = getPhoneHref();
  const emailHref = getEmailHref();

  // Avoid showing only "United States" as a complete address.
  const hasAddress = [
    business.address.street,
    business.address.city,
    business.address.state,
    business.address.postalCode,
  ].some((part) => Boolean(part?.trim()));

  const address = [
    business.address.street,
    business.address.city,
    business.address.state,
    business.address.postalCode,
    business.address.country,
  ]
    .filter(Boolean)
    .join(", ");

  const socialLinks = [
    {
      label: "LinkedIn",
      href: social.linkedin,
      Icon: Globe,
    },
    {
      label: "Facebook",
      href: social.facebook,
      Icon: Globe,
    },
    {
      label: "Instagram",
      href: social.instagram,
      Icon: Globe,
    },
  ].filter((item) => Boolean(item.href));
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand introduction */}
          <div>
            <Logo />

            <p className="footer-description">
              {business.description}
            </p>

            {socialLinks.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginTop: "22px",
                }}
              >
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${business.name} on ${label}`}
                    className="button button-outline-light"
                    style={{
                      minHeight: "42px",
                      padding: "10px",
                    }}
                  >
                    <Icon
                      size={19}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Main navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="footer-heading">
              Explore
            </h2>

            <div className="footer-links">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Service links */}
          <nav aria-label="Footer services">
            <h2 className="footer-heading">
              Dispatch Services
            </h2>

            <div className="footer-links">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </nav>

          {/* Business information */}
          <div>
            <h2 className="footer-heading">
              Get in Touch
            </h2>

            {phoneHref && (
              <p className="footer-contact">
                <a
                  href={phoneHref}
                  style={{
                    display: "inline-flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <Phone
                    size={16}
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      marginTop: "4px",
                    }}
                  />

                  <span>{business.phone}</span>
                </a>
              </p>
            )}

            {emailHref && (
              <p className="footer-contact">
                <a
                  href={emailHref}
                  style={{
                    display: "inline-flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <Mail
                    size={16}
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      marginTop: "4px",
                    }}
                  />

                  <span>{business.email}</span>
                </a>
              </p>
            )}

            {hasAddress && (
              <p
                className="footer-contact"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <MapPin
                  size={16}
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    marginTop: "4px",
                  }}
                />

                <span>{address}</span>
              </p>
            )}

            {business.hours.display && (
              <p className="footer-contact">
                {business.hours.display}

                {business.hours.timezone && (
                  <>
                    <br />
                    {business.hours.timezone}
                  </>
                )}
              </p>
            )}

            {business.registration.showOnWebsite &&
              business.registration.publicReference && (
                <p className="footer-contact">
                  {business.registration.label}:{" "}
                  {business.registration.publicReference}
                </p>
              )}

            <Link
              href={site.hero.primaryButton.href}
              className="text-link"
              style={{
                marginTop: "20px",
                color: "#bcece1",
              }}
            >
              Contact Our Team

              <ArrowUpRight
                size={16}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()}{" "}
            {business.legalName || business.name}.
            {" "}All rights reserved.
          </p>

          <nav
            className="footer-policy-links"
            aria-label="Legal information"
          >
            <Link href={site.sms.privacyPath}>
              {site.policies.privacyTitle}
            </Link>

            <Link href={site.sms.termsPath}>
              {site.policies.termsTitle}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}