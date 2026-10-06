import Link from "next/link";
import { Truck } from "lucide-react";
import { site } from "@/config/site";

export default function Logo({ className = "" }) {
  const { business, branding } = site;

  return (
    <Link
      href="/"
      className={`brand ${className}`.trim()}
      aria-label={`${business.name} — Home`}
    >
      {branding.logoUrl ? (
        <img
          src={branding.logoUrl}
          alt=""
          width={100}
          height={48}
          style={{
            width: "100px",
            height: "48px",
            objectFit: "contain",
            flexShrink: 0,
          }}
        />
      ) : (
        <span className="brand-icon" aria-hidden="true">
          <Truck size={25} strokeWidth={1.8} />
        </span>
      )}

      <span>
        <span className="brand-name">
          {business.name}
        </span>

        {business.tagline && (
          <span className="brand-tagline">
            {business.tagline}
          </span>
        )}
      </span>
    </Link>
  );
}