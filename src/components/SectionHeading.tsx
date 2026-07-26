import { Pill } from "./Pill";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mx-auto max-w-2xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Pill>{eyebrow}</Pill>
        </div>
      )}
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-jamogo-ink-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-jamogo-gray-500">{description}</p>
      )}
    </div>
  );
}
