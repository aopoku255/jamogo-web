export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-jamogo-gray-200 bg-white p-6 shadow-[0_8px_24px_rgba(14,26,19,0.06)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-jamogo-green-100 text-jamogo-green-600">
        {icon}
      </div>
      <h3 className="mt-4 font-heading text-[17px] font-semibold text-jamogo-ink-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-jamogo-gray-500">
        {description}
      </p>
    </div>
  );
}
