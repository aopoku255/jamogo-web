"use client";

import { useState } from "react";

export function FaqAccordion({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-2xl divide-y divide-jamogo-gray-200 rounded-2xl border border-jamogo-gray-200 bg-white">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
            >
              <span className="font-medium text-jamogo-ink-900">
                {item.question}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`shrink-0 text-jamogo-gray-500 transition-transform ${
                  open ? "rotate-45" : ""
                }`}
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            {open && (
              <p className="px-6 pb-5 text-sm leading-relaxed text-jamogo-gray-500">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
