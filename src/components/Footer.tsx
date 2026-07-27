import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { CookiePreferencesButton } from "./CookiePreferencesButton";
import { FOOTER_LINKS } from "@/data/nav";
import { SITE } from "@/lib/site";
import { LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-jamogo-gray-200 bg-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image src="/brand/logo.png" alt="Jamogo" width={120} height={32} />
          <p className="mt-4 max-w-xs text-sm text-jamogo-gray-500">
            {SITE.description}
          </p>
          {/* <p className="mt-4 text-sm font-medium text-jamogo-green-600">
            Made for Ghana 🇬🇭
          </p> */}
          <a
            href={SITE.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jamogo on LinkedIn"
            className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-jamogo-gray-100 text-jamogo-gray-500 transition-colors hover:bg-jamogo-green-100 hover:text-jamogo-green-600"
          >
            <LinkedInIcon />
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-jamogo-ink-900">
            Product
          </h3>
          <ul className="mt-4 space-y-3">
            {FOOTER_LINKS.product.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-jamogo-gray-500 hover:text-jamogo-green-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-jamogo-ink-900">
            Company
          </h3>
          <ul className="mt-4 space-y-3">
            {FOOTER_LINKS.company.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-jamogo-gray-500 hover:text-jamogo-green-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <CookiePreferencesButton />
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-jamogo-gray-200 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-[13px] text-jamogo-gray-500 md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights
            reserved.
          </span>
          <span>Kumasi, Ghana</span>
        </Container>
      </div>
    </footer>
  );
}
