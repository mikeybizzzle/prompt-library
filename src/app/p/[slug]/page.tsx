import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight, ClipboardCheck, HelpCircle, Lightbulb, SquareDashed } from "lucide-react";

import { PromptCard } from "@/components/library/prompt-card";
import { PromptStats } from "@/components/prompt/prompt-stats";
import { PromptTerminal } from "@/components/prompt/prompt-terminal";
import { SITE } from "@/data/site";
import { jsonLd } from "@/lib/json-ld";
import { CATEGORY_BY_SLUG, ROLE_BY_SLUG, SUBCATEGORY_BY_SLUG } from "@/data/taxonomy";
import { toCardData } from "@/lib/card-data";
import { getAllPrompts, getPrompt, getRelatedPrompts } from "@/lib/prompts";

type Params = { params: Promise<{ slug: string }> };

const crumbLink =
  "whitespace-nowrap text-pl-ink-muted no-underline transition-colors hover:text-pl-ink focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pl-accent-yellow";

export function generateStaticParams() {
  return getAllPrompts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const prompt = getPrompt(slug);
  if (!prompt) return {};
  return {
    title: prompt.title,
    description: prompt.description,
    alternates: { canonical: `/p/${slug}` },
    openGraph: { title: prompt.title, description: prompt.description, type: "article" },
  };
}

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function PromptPage({ params }: Params) {
  const { slug } = await params;
  const prompt = getPrompt(slug);
  if (!prompt) notFound();

  const card = toCardData(prompt);
  const category = CATEGORY_BY_SLUG.get(prompt.category);
  const subcategory = SUBCATEGORY_BY_SLUG.get(prompt.subcategory);
  const role = prompt.roles[0] ? ROLE_BY_SLUG.get(prompt.roles[0]) : undefined;
  const related = getRelatedPrompts(prompt).map(toCardData);

  const hasGuide = prompt.does.length > 0 || prompt.tips.length > 0 || prompt.steps.length > 0;

  return (
    <article className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 py-20 max-[900px]:py-12 max-[640px]:px-4 max-[640px]:py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Prompts", item: SITE.url },
              category && {
                "@type": "ListItem",
                position: 2,
                name: category.name,
                item: `${SITE.url}/category/${category.slug}`,
              },
              { "@type": "ListItem", position: 3, name: prompt.title, item: `${SITE.url}/p/${slug}` },
            ].filter(Boolean),
          }),
        }}
      />

      <nav
        aria-label="Breadcrumb"
        className="no-scrollbar flex w-full min-w-0 items-center gap-2 overflow-x-auto font-sans text-[13px] leading-4 [-webkit-overflow-scrolling:touch]"
      >
        <span className="flex shrink-0 items-center gap-2">
          <Link className={crumbLink} href="/">
            Prompts
          </Link>
        </span>
        {category && (
          <span className="flex shrink-0 items-center gap-2">
            <ChevronRight className="size-3.5 text-pl-ink-faint" strokeWidth={2} aria-hidden="true" />
            <Link className={crumbLink} href={`/category/${category.slug}`}>
              {category.name}
            </Link>
          </span>
        )}
        {subcategory && (
          <span className="flex shrink-0 items-center gap-2">
            <ChevronRight className="size-3.5 text-pl-ink-faint" strokeWidth={2} aria-hidden="true" />
            <Link className={crumbLink} href={`/category/${subcategory.slug}`}>
              {subcategory.name}
            </Link>
          </span>
        )}
        <span className="flex shrink-0 items-center gap-2">
          <ChevronRight className="size-3.5 text-pl-ink-faint" strokeWidth={2} aria-hidden="true" />
          <span aria-current="page" className="block max-w-[min(60vw,420px)] truncate text-pl-ink">
            {prompt.title}
          </span>
        </span>
      </nav>

      <div className="flex flex-col gap-20 max-[760px]:gap-12">
        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-x-6 gap-y-4 max-[760px]:flex-col max-[760px]:items-stretch">
              <h1 className="m-0 min-w-0 font-sans text-pl-subtitle font-semibold text-[#3f3000] sm:text-[28px] sm:leading-8">
                {prompt.title}
              </h1>
              <PromptStats slug={prompt.slug} words={prompt.words} />
            </div>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-[15px] w-[2px] rounded-full bg-pl-accent-yellow" />
              <span className="font-sans text-[13px] leading-4 text-pl-mute">
                Updated on: {formatDate(prompt.publishedAt)}
              </span>
            </span>
            <p className="m-0 max-w-[560px] font-sans text-[13px] leading-4 text-pl-ink-muted">
              {prompt.description}
            </p>
          </header>

          <PromptTerminal
            prompt={card}
            categoryName={category?.name ?? ""}
            categoryHref={`/category/${category?.slug ?? ""}`}
            subcategoryName={subcategory?.name ?? ""}
            subcategoryHref={`/category/${subcategory?.slug ?? ""}`}
            roleName={role?.name}
            roleHref={role ? `/for/${role.slug}` : undefined}
          />
        </div>

        {hasGuide && (
          <section className="flex flex-col gap-6">
            <h2 className="m-0 text-[24px] font-normal leading-tight tracking-[-0.01em] text-pl-heading">
              Prompt Guide
            </h2>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              {prompt.does.length > 0 && (
                <div className="flex flex-col gap-5 rounded-[20px] bg-pl-surface p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                  <div className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-[12px] border border-pl-ink-hairline text-pl-ink">
                      <ClipboardCheck className="size-5" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-pl-subtitle-sm text-pl-ink">What this prompt does</span>
                      <span className="text-[14px] leading-5 text-pl-ink-muted">
                        Exactly what you get when you run it.
                      </span>
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-6 border-t border-pl-ink-hairline pt-5 sm:grid-cols-3">
                    {prompt.does.map((d) => (
                      <div key={d} className="flex flex-col gap-3">
                        <span
                          aria-hidden="true"
                          className="font-mono text-[18px] leading-5 text-pl-ink-soft"
                        >
                          {"{ }"}
                        </span>
                        <p className="m-0 text-[14px] leading-5 text-pl-ink-muted">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {prompt.tips.length > 0 && (
                <div className="flex flex-col gap-5 rounded-[20px] bg-pl-surface p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-[12px] border border-pl-ink-hairline text-pl-ink">
                      <Lightbulb className="size-5" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="text-pl-subtitle-sm text-pl-ink">Tips for this prompt</span>
                  </div>
                  <ul className="m-0 flex list-none flex-col gap-4 border-t border-pl-ink-hairline p-0 pt-5">
                    {prompt.tips.map((t) => (
                      <li key={t.title} className="flex items-start gap-3">
                        <SquareDashed
                          className="mt-0.5 size-4 shrink-0 text-pl-ink-soft"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                        <span className="text-[14px] leading-5">
                          <span className="text-pl-ink">{t.title}</span>{" "}
                          <span className="text-pl-ink-muted">{t.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {prompt.steps.length > 0 && (
              <div className="grid grid-cols-1 gap-6 rounded-[20px] bg-pl-surface p-6 lg:grid-cols-[minmax(0,280px)_1fr]">
                <div className="flex flex-col gap-3 lg:border-r lg:border-pl-ink-hairline lg:pr-6">
                  <span className="grid size-10 place-items-center rounded-[12px] border border-pl-ink-hairline text-pl-ink">
                    <HelpCircle className="size-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="text-pl-subtitle-sm text-pl-ink">How to use the prompt</span>
                  <span className="text-[14px] leading-5 text-pl-ink-muted">
                    A short workflow to get the best result.
                  </span>
                </div>
                <ol className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-3">
                  {prompt.steps.map((s, i) => (
                    <li key={s.title} className="flex flex-col gap-3">
                      <span className="grid size-7 place-items-center rounded-full border border-pl-ink-hairline text-[13px] text-pl-ink-muted">
                        {i + 1}
                      </span>
                      <p className="m-0 text-[15px] leading-5 text-pl-ink">{s.title}</p>
                      <p className="m-0 text-[14px] leading-5 text-pl-ink-muted">{s.detail}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </section>
        )}

        {related.length > 0 && (
          <section className="flex flex-col gap-6">
            <h2 className="m-0 text-[24px] font-normal leading-tight tracking-[-0.01em] text-pl-heading">
              Related Prompts
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PromptCard key={p.slug} prompt={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
