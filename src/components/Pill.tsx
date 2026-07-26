export function Pill({
  children,
  tone = "green",
}: {
  children: React.ReactNode;
  tone?: "green" | "gray";
}) {
  const toneClasses =
    tone === "green"
      ? "bg-jamogo-green-100 text-jamogo-green-600"
      : "bg-jamogo-gray-100 text-jamogo-gray-500";

  return (
    <span
      className={`inline-block rounded-full px-3.5 py-1.5 text-[13px] font-semibold ${toneClasses}`}
    >
      {children}
    </span>
  );
}
