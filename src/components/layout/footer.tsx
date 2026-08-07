import Link from "next/link";
import { Rss } from "lucide-react";

import { LogoMark } from "@/components/brand/logo";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/brand/social-icons";
import { SITE } from "@/data/site";

const footerLink =
  "text-pl-body-sm text-pl-mute no-underline transition-colors duration-150 ease-out hover:text-pl-ink focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pl-ink";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Browse",
    links: [
      { label: "All prompts", href: "/" },
      { label: "Text prompts", href: "/type/text" },
      { label: "Image prompts", href: "/type/image" },
      { label: "Code prompts", href: "/type/code" },
    ],
  },
  {
    title: "Popular",
    links: [
      { label: "Marketing", href: "/category/marketing" },
      { label: "Coding", href: "/category/coding" },
      { label: "ChatGPT", href: "/tool/chatgpt" },
      { label: "Claude", href: "/tool/claude" },
    ],
  },
];

function Wordmark() {
  return (
    <svg
      viewBox="0 0 1440 300"
      width="1440"
      height="300"
      aria-hidden="true"
      className="-mb-8 block h-auto w-full opacity-90"
      preserveAspectRatio="xMidYMid meet"
    >
      <text
        x="720"
        y="215"
        textAnchor="middle"
        fill="none"
        stroke="#161415"
        strokeOpacity="0.14"
        strokeWidth="2"
        fontFamily="var(--font-roboto), sans-serif"
        fontSize="200"
        fontWeight="300"
        letterSpacing="-6"
      >
        {SITE.name}
      </text>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative flex w-full flex-col font-sans text-pl-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-[1] mx-auto w-[90%] max-w-[1100px] overflow-hidden border-b border-pl-ink-edge max-[900px]:w-full"
      >
        <Wordmark />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245,245,245,0) 30%, rgba(245,245,245,0.7) 80%, rgba(245,245,245,1) 100%)",
          }}
        />
      </div>

      <div className="relative z-[2] mx-auto w-full bg-pl-page">
        <div className="mx-auto w-[90%] max-w-[1100px] max-[900px]:w-full max-[900px]:px-5">
          <div className="flex justify-between gap-12 py-8 pb-12 max-[900px]:flex-col max-[900px]:gap-10">
            <div className="text-left">
              <LogoMark className="mb-4 block size-14" />
              <h3 className="m-0 mb-2 text-pl-body font-semibold text-pl-ink">
                About {SITE.name}
              </h3>
              <p className="m-0 mb-5 max-w-[36ch] text-pl-body-sm text-pl-ink-muted max-[900px]:max-w-full">
                A personal, open prompt library. Every prompt lives as a markdown file in a public
                GitHub repo, so anyone can read it, fork it, or send a better one.
              </p>
              <div className="flex items-center gap-2" aria-label="Social media">
                {[
                  { href: SITE.social.github, label: "GitHub", Icon: GithubIcon },
                  { href: SITE.social.x, label: "X", Icon: XIcon },
                  { href: SITE.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
                  { href: "/feed.xml", label: "RSS", Icon: Rss },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-9 place-items-center rounded-full border border-pl-ink-hairline text-pl-mute transition hover:border-pl-ink-faint hover:text-pl-ink"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <nav aria-label="Footer" className="flex gap-16 max-[640px]:gap-12">
              {COLUMNS.map((col) => (
                <div key={col.title} className="flex flex-col gap-3">
                  <h3 className="m-0 text-pl-body font-semibold text-pl-ink">{col.title}</h3>
                  <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link className={footerLink} href={l.href}>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex w-full items-center justify-between border-t border-pl-ink-edge py-5 pb-8 max-[900px]:flex-col max-[900px]:gap-3 max-[900px]:text-center">
            <p className="m-0 text-pl-body-sm text-pl-mute">
              © {new Date().getFullYear()} {SITE.name}. Built by {SITE.author}.
            </p>
            <nav className="flex flex-wrap items-center gap-6" aria-label="Secondary">
              <a href={SITE.repo} target="_blank" rel="noreferrer" className={footerLink}>
                Source on GitHub
              </a>
              <a
                href={`${SITE.repo}/blob/main/CONTRIBUTING.md`}
                target="_blank"
                rel="noreferrer"
                className={footerLink}
              >
                Add a prompt
              </a>
              <a href={`${SITE.repo}/issues/new`} target="_blank" rel="noreferrer" className={footerLink}>
                Report an issue
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
