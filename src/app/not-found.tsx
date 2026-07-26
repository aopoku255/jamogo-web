import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="py-28">
      <Container className="max-w-lg text-center">
        <p className="font-heading text-6xl font-extrabold tracking-tight text-jamogo-green-300">
          404
        </p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-jamogo-ink-900">
          This route doesn&apos;t exist
        </h1>
        <p className="mt-3 text-jamogo-gray-500">
          The page you&apos;re looking for may have moved or never existed.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back home</Button>
          <Link
            href="/ride"
            className="inline-flex items-center justify-center rounded-full border border-jamogo-gray-300 px-6 py-3 text-[15px] font-semibold text-jamogo-ink-900"
          >
            Explore Ride
          </Link>
        </div>
      </Container>
    </section>
  );
}
