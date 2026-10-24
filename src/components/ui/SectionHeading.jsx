import { cn } from "@/lib/utils";

/**
 * Global Reusable Section Heading Component
 * Guarantees 100% uniform typography, semantic SEO hierarchy, and equal spacing across every section.
 */
export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center", // "center" | "left"
  className,
}) {
  const isCenter = align === "center";

  return (
    <header
      className={cn(
        "mb-12 lg:mb-16",
        isCenter ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {tag && (
        <div>
          <span className="section-tag">
            <span className="section-tag-dot"></span>
            {tag}
          </span>
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
}
