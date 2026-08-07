import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

import { CATEGORIES, MODELS, ROLES } from "@/data/taxonomy";
import type { PromptCardData } from "@/lib/types";
import { SITE } from "@/data/site";

const pillLink =
  "inline-flex h-8 items-center gap-1 rounded-full bg-white px-3 text-[14px] leading-5 text-[#4F4E4F] no-underline shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors hover:text-pl-ink";

const columnLink =
  "text-[13px] leading-5 text-pl-ink-muted no-underline transition-colors hover:text-pl-ink hover:underline hover:underline-offset-2";

export type FaqItem = { q: string; a: React.ReactNode };

function FeaturedRow({ prompts }: { prompts: PromptCardData[] }) {
  if (prompts.length === 0) return null;

  return (
    <section aria-label="Featured prompts" className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="m-0 text-[clamp(22px,2.6vw,32px)] font-normal leading-tight tracking-[-0.01em] text-[#1B1A1A]">
          Start here: <strong className="font-bold">hand-picked prompts</strong>
        </h2>
        <Link className={pillLink} href="/">
          All prompts
          <ArrowRight className="size-3.5" strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {prompts.slice(0, 3).map((p) => (
          <Link
            key={p.slug}
            href={`/p/${p.slug}`}
            className="group flex flex-col gap-3 overflow-hidden rounded-[16px] bg-white pb-4 no-underline shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pl-accent-yellow"
          >
            <div className="relative h-[200px] w-full overflow-hidden bg-pl-ink p-5">
              <pre className="m-0 whitespace-pre-wrap break-words font-mono text-[12px] leading-[22px] text-white/45">
                {p.preview}
              </pre>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(22,20,21,0) 0%, rgba(22,20,21,0.9) 65%, rgba(22,20,21,1) 100%)",
                }}
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 px-4">
              <h3 className="m-0 line-clamp-2 text-[19px] font-medium leading-6 tracking-[-0.01em] text-pl-ink">
                {p.emoji} {p.title}
              </h3>
              <span className="mt-auto inline-flex items-center gap-1 text-[15px] text-pl-ink-muted transition-colors group-hover:text-pl-ink">
                Open prompt
                <ArrowRight className="size-3.5" strokeWidth={2} aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Faq({ items }: { items: FaqItem[] }) {
  return (
    <section id="faq" aria-label="Frequently asked questions" className="flex flex-col gap-3">
      {items.map((item) => (
        <details
          key={item.q}
          className="group rounded-[14px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] open:bg-[#EAEAEA] open:pb-1.5 open:shadow-none"
        >
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-[14px] bg-white px-5 py-3 text-[17px] font-medium leading-6 text-[#1B1A1A] group-open:shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pl-accent-yellow [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown
              className="size-5 shrink-0 text-[#4F4E4F] transition-transform duration-200 group-open:rotate-180"
              strokeWidth={2}
              aria-hidden="true"
            />
          </summary>
          <div className="prose-hub px-5 py-4 [&_li]:text-[14px] [&_p]:text-[14px] [&_p]:leading-[1.6]">
            {item.a}
          </div>
        </details>
      ))}
    </section>
  );
}

function BrowseColumns({ total }: { total: number }) {
  const groups: { id: string; title: string; links: { href: string; label: string }[] }[] = [
    {
      id: "by-category",
      title: "Browse by category",
      links: CATEGORIES.map((c) => ({ href: `/category/${c.slug}`, label: c.name })),
    },
    {
      id: "by-model",
      title: "Browse by AI model",
      links: MODELS.slice(0, 16).map((m) => ({ href: `/tool/${m.slug}`, label: m.name })),
    },
    {
      id: "by-role",
      title: "Browse by role",
      links: ROLES.slice(0, 16).map((r) => ({ href: `/for/${r.slug}`, label: r.name })),
    },
    {
      id: "by-type",
      title: "Browse by prompt type",
      links: [
        { href: "/type/text", label: "Text prompts" },
        { href: "/type/image", label: "Image prompts" },
        { href: "/type/code", label: "Code prompts" },
        { href: "/", label: `All ${total} prompts` },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-10 border-t border-pl-ink-hairline pt-10">
      {groups.map((g) => (
        <section key={g.id} id={g.id}>
          <h2 className="m-0 mb-4 text-[15px] font-semibold tracking-[-0.01em] text-pl-ink">
            {g.title}
          </h2>
          <ul className="m-0 grid list-none grid-cols-2 gap-x-8 gap-y-2 p-0 sm:grid-cols-3 lg:grid-cols-4">
            {g.links.map((l) => (
              <li key={l.href + l.label}>
                <Link className={columnLink} href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function HubSections({
  featured,
  total,
  faq,
  children,
}: {
  featured: PromptCardData[];
  total: number;
  faq: FaqItem[];
  children?: React.ReactNode;
}) {
  return (
    <div className="mt-16">
      <div className="flex flex-col gap-14">
        <FeaturedRow prompts={featured} />
        <Faq items={faq} />
        <div className="prose-hub">{children}</div>
        <BrowseColumns total={total} />
      </div>
    </div>
  );
}

export const DEFAULT_FAQ: FaqItem[] = [
  {
    q: `What is ${SITE.name}?`,
    a: (
      <p>
        A free, open library of AI prompts. Every prompt is written as a structured brief with a
        role, context, task, and an explicit output format, so the model returns something you can
        use rather than a wall of text. Browse by category, by model, by role, or by prompt type.
      </p>
    ),
  },
  {
    q: "How is the library organised?",
    a: (
      <p>
        Four ways. <strong>By category</strong> (marketing, coding, design, and 18 more, each with
        subcategories), <strong>by model</strong> (ChatGPT, Claude, Gemini, Midjourney and others),{" "}
        <strong>by role</strong> (what you do for work), and <strong>by type</strong> (text, image,
        or code output).
      </p>
    ),
  },
  {
    q: "How do I use a prompt?",
    a: (
      <p>
        Open it, copy it, and replace the <code>{"{{placeholders}}"}</code> with your own context.
        Paste the result into your model of choice. The tool tag on each card tells you what the
        prompt was written for, but the structure carries across models with small edits.
      </p>
    ),
  },
  {
    q: "Where do the prompts live?",
    a: (
      <p>
        In a public GitHub repository. Each prompt is one markdown file with frontmatter, and the
        site builds straight from those files. You can read the raw source, fork the repo, or open a
        pull request to add your own.{" "}
        <a href={SITE.repo} target="_blank" rel="noreferrer">
          See the repo
        </a>
        .
      </p>
    ),
  },
  {
    q: "Is it free?",
    a: (
      <p>
        Yes, all of it. No account, no paywall, no email capture. Copy anything you find useful. If
        a prompt saves you time, send back a better version.
      </p>
    ),
  },
  {
    q: "Can I add my own prompts?",
    a: (
      <p>
        Yes. Add a markdown file to <code>content/prompts/</code> and open a pull request. The
        frontmatter fields and the house style are documented in{" "}
        <a href={`${SITE.repo}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noreferrer">
          CONTRIBUTING.md
        </a>
        .
      </p>
    ),
  },
];
