import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  id,
  className = "",
}) {
  return (
    <Reveal>
      <div
        className={[
          "section-heading",
          centered ? "centered" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {eyebrow && (
          <span className="eyebrow">
            {eyebrow}
          </span>
        )}

        <h2 id={id} className="section-title">
          {title}
        </h2>

        {description && (
          <p className="section-description">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}