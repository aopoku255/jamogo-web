"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { NAV_LINKS } from "@/data/nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-jamogo-gray-200 bg-white/95 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src={scrolled ? "/brand/logo.png" : "/brand/logo-white.png"}
            alt="Jamogo"
            width={112}
            height={30}
            priority
          />
        </Link>

        <nav
          className={`hidden items-center gap-8 transition-opacity duration-300 md:flex ${
            scrolled ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium transition-colors ${
                  active
                    ? "text-jamogo-green-600"
                    : "text-jamogo-gray-700 hover:text-jamogo-green-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/notify" variant="primary">
            Get the App
          </Button>
        </div>

        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden ${
            scrolled
              ? "border-jamogo-gray-300 text-jamogo-gray-900"
              : "border-white/40 text-white"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-jamogo-gray-200 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-[15px] font-medium text-jamogo-gray-700 hover:bg-jamogo-green-50 hover:text-jamogo-green-600"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/notify" variant="primary" className="mt-3 w-full">
              Get the App
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
