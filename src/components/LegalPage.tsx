import { Container } from "./Container";

export function LegalPage({
  title,
  updated,
  intro,
  toc,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  toc: { id: string; label: string }[];
  children: React.ReactNode;
}) {
  return (
    <section className="py-16">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-jamogo-ink-900">
          {title}
        </h1>
        <p className="mt-2 text-sm text-jamogo-gray-500">
          Last updated: {updated}
        </p>
        <p className="mt-6 text-jamogo-gray-700">{intro}</p>

        <div className="mt-8 rounded-2xl border border-jamogo-gray-200 bg-white p-6">
          <strong className="text-jamogo-ink-900">Contents</strong>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-jamogo-green-600 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="legal-content mt-10 space-y-10">{children}</div>
      </Container>
    </section>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="font-heading text-xl font-semibold text-jamogo-ink-900">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-jamogo-gray-700 [&_a]:text-jamogo-green-600 [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-jamogo-ink-900">
        {children}
      </div>
    </div>
  );
}
