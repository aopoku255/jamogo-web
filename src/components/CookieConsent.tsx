"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "jamogo-cookie-consent";
export const OPEN_COOKIE_PREFERENCES_EVENT = "jamogo-open-cookie-preferences";

type Consent = {
  necessary: true;
  analytics: boolean;
};

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function writeConsent(consent: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // localStorage unavailable (private mode, etc.) - consent just won't persist
  }
}

const TOGGLE_TRACK_CLASSES =
  "relative h-6 w-11 shrink-0 rounded-full transition-colors";
const TOGGLE_THUMB_CLASSES =
  "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform";

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [managing, setManaging] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (!readConsent()) setOpen(true);

    const onOpenPreferences = () => {
      setAnalytics(readConsent()?.analytics ?? false);
      setManaging(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, onOpenPreferences);
    return () =>
      window.removeEventListener(
        OPEN_COOKIE_PREFERENCES_EVENT,
        onOpenPreferences,
      );
  }, []);

  if (!open) return null;

  function close(consent: Consent) {
    writeConsent(consent);
    setOpen(false);
    setManaging(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-60 p-4 sm:p-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-jamogo-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(14,26,19,0.15)]">
        {!managing ? (
          <>
            <h2 className="font-heading text-lg font-semibold text-jamogo-ink-900">
              We use cookies
            </h2>
            <p className="mt-2 text-sm text-jamogo-gray-500">
              We use necessary cookies to make Jamogo work, and optional
              analytics cookies to understand how the site is used. Read our{" "}
              <a
                href="/privacy-policy"
                className="text-jamogo-green-600 hover:underline"
              >
                Privacy Policy
              </a>{" "}
              to learn more.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => close({ necessary: true, analytics: true })}
                className="rounded-full bg-jamogo-green-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-jamogo-green-600"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={() => close({ necessary: true, analytics: false })}
                className="rounded-full border border-jamogo-gray-300 px-5 py-2.5 text-sm font-semibold text-jamogo-ink-900 transition-colors hover:border-jamogo-gray-400"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={() => setManaging(true)}
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-jamogo-green-600 hover:underline"
              >
                Manage preferences
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="font-heading text-lg font-semibold text-jamogo-ink-900">
              Cookie preferences
            </h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-start justify-between gap-4 rounded-xl border border-jamogo-gray-200 p-4">
                <div>
                  <p className="text-sm font-semibold text-jamogo-ink-900">
                    Necessary
                  </p>
                  <p className="mt-1 text-sm text-jamogo-gray-500">
                    Required for the site to function. Always on.
                  </p>
                </div>
                <span className="mt-0.5 shrink-0 rounded-full bg-jamogo-gray-100 px-3 py-1 text-xs font-semibold text-jamogo-gray-500">
                  Always on
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 rounded-xl border border-jamogo-gray-200 p-4">
                <div>
                  <p className="text-sm font-semibold text-jamogo-ink-900">
                    Analytics
                  </p>
                  <p className="mt-1 text-sm text-jamogo-gray-500">
                    Helps us understand how visitors use the site so we can
                    improve it.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={analytics}
                  aria-label="Toggle analytics cookies"
                  onClick={() => setAnalytics((v) => !v)}
                  className={`${TOGGLE_TRACK_CLASSES} ${analytics ? "bg-jamogo-green-500" : "bg-jamogo-gray-300"}`}
                >
                  <span
                    className={`${TOGGLE_THUMB_CLASSES} ${analytics ? "translate-x-5" : "translate-x-0"}`}
                  />
                </button>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => close({ necessary: true, analytics })}
                className="rounded-full bg-jamogo-green-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-jamogo-green-600"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={() => close({ necessary: true, analytics: true })}
                className="rounded-full border border-jamogo-gray-300 px-5 py-2.5 text-sm font-semibold text-jamogo-ink-900 transition-colors hover:border-jamogo-gray-400"
              >
                Accept all
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
