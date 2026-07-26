import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-jamogo-green-500 text-white hover:bg-jamogo-green-600",
  secondary:
    "bg-white text-jamogo-ink-900 border border-jamogo-gray-300 hover:border-jamogo-gray-400",
  ghost:
    "bg-jamogo-green-50 text-jamogo-green-600 hover:bg-jamogo-green-100",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-colors ${VARIANT_CLASSES[variant]} ${className}`;

  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
