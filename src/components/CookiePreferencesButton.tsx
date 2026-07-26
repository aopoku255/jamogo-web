"use client";

import { OPEN_COOKIE_PREFERENCES_EVENT } from "./CookieConsent";

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT))
      }
      className="text-sm text-jamogo-gray-500 hover:text-jamogo-green-600"
    >
      Manage cookies
    </button>
  );
}
