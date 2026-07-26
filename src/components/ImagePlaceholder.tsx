export function ImagePlaceholder({
  width,
  height,
  label,
  className = "",
  /** Skip the rounded corners + dashed border, for placeholders that sit inside a card the parent already clips/borders. */
  bare = false,
}: {
  /** Intrinsic pixel size the real image should be exported at. */
  width: number;
  height: number;
  /** Short description of what the image should show. */
  label: string;
  className?: string;
  bare?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex w-full flex-col items-center justify-center gap-2 border-jamogo-gray-300 bg-jamogo-gray-100 p-6 text-center text-jamogo-gray-500 ${
        bare ? "" : "rounded-2xl border-2 border-dashed"
      } ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="9" cy="9" r="1.75" />
        <path d="M21 15l-5.5-5.5L3 21" />
      </svg>
      <span className="text-sm font-medium text-jamogo-gray-700">
        {label}
      </span>
      <span className="text-xs">
        {width} × {height}px
      </span>
    </div>
  );
}
