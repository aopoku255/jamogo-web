"use client";

import { useState, type FormEvent } from "react";
import { CITIES } from "@/data/cities";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdnydqv";

const FIELD_CLASSES =
  "mt-1.5 w-full rounded-xl border border-jamogo-gray-300 px-4 py-2.5 text-[15px] text-jamogo-ink-900 outline-none transition-colors focus:border-jamogo-green-500";

export function NotifyForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center">
        <h3 className="font-heading text-xl font-semibold text-jamogo-ink-900">
          You&apos;re on the list
        </h3>
        <p className="mt-2 text-jamogo-gray-500">
          We&apos;ll email you the moment Jamogo launches in your city.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-jamogo-ink-900"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={FIELD_CLASSES}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-jamogo-ink-900"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={FIELD_CLASSES}
        />
      </div>
      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-jamogo-ink-900"
        >
          City
        </label>
        <select
          id="city"
          name="city"
          defaultValue=""
          required
          className={FIELD_CLASSES}
        >
          <option value="" disabled>
            Select your city
          </option>
          {CITIES.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-jamogo-green-500 px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-jamogo-green-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Notify me at launch"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
