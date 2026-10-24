import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Global Reusable Button Component
 * Matches user's exact reference UI: Pill-shaped, uppercase, bold, React icon ArrowRight.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary", // "primary" | "white" | "outline"
  size = "md", // "sm" | "md" | "lg"
  showArrow = true,
  className,
  type = "button",
  ...props
}) {
  const variantClass = {
    primary: "btn-primary",
    white: "btn-white",
    outline: "btn-outline",
  }[variant] || "btn-primary";

  const sizeClass = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3 text-xs sm:text-sm",
    lg: "px-8 py-3.5 text-sm sm:text-base",
  }[size];

  const content = (
    <>
      <span className="tracking-wider">{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  const baseClasses = cn(
    "btn-pill group select-none",
    variantClass,
    sizeClass,
    className
  );

  if (href) {
    const isAnchor = href.startsWith("#");
    if (isAnchor) {
      return (
        <a href={href} className={baseClasses} {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} {...props}>
      {content}
    </button>
  );
}
