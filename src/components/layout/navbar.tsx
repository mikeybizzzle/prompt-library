"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BarChart3,
  Bot,
  ChevronDown,
  Code2,
  FileText,
  GraduationCap,
  ImageIcon,
  Megaphone,
  Menu,
  Palette,
  PenLine,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

import { LogoMark } from "@/components/brand/logo";
import { GithubIcon } from "@/components/brand/social-icons";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

type MenuRow = { href: string; label: string; icon: React.ElementType };

const CATEGORY_MENU: MenuRow[] = [
  { href: "/category/marketing", label: "Marketing", icon: Megaphone },
  { href: "/category/art-and-design", label: "Design", icon: Palette },
  { href: "/category/coding", label: "Coding", icon: Code2 },
  { href: "/category/writing", label: "Writing", icon: PenLine },
  { href: "/category/seo", label: "SEO", icon: Search },
  { href: "/category/strategy", label: "Strategy", icon: Target },
  { href: "/category/sales", label: "Sales", icon: TrendingUp },
  { href: "/category/education", label: "Education", icon: GraduationCap },
  { href: "/category/data-analysis", label: "Data Analysis", icon: BarChart3 },
];

const MODEL_MENU: MenuRow[] = [
  { href: "/tool/chatgpt", label: "ChatGPT", icon: Sparkles },
  { href: "/tool/claude", label: "Claude", icon: Sparkles },
  { href: "/tool/gemini", label: "Gemini", icon: Sparkles },
  { href: "/tool/midjourney", label: "Midjourney", icon: ImageIcon },
  { href: "/tool/nano-banana", label: "Nano Banana", icon: ImageIcon },
  { href: "/tool/claude-code", label: "Claude Code", icon: Code2 },
  { href: "/tool/cursor", label: "Cursor", icon: Code2 },
];

const ROLE_MENU: MenuRow[] = [
  { href: "/for/marketers", label: "Marketers", icon: Megaphone },
  { href: "/for/founders", label: "Founders", icon: Target },
  { href: "/for/developers", label: "Developers", icon: Code2 },
  { href: "/for/designers", label: "Designers", icon: Palette },
  { href: "/for/copywriters", label: "Copywriters", icon: PenLine },
  { href: "/for/consultants", label: "Consultants", icon: Users },
  { href: "/for/students", label: "Students", icon: GraduationCap },
];

const TYPE_MENU: MenuRow[] = [
  { href: "/type/text", label: "Text prompts", icon: FileText },
  { href: "/type/image", label: "Image prompts", icon: ImageIcon },
  { href: "/type/code", label: "Code prompts", icon: Code2 },
  { href: "/category/ai-agents", label: "Agent prompts", icon: Bot },
];

const NAV: { label: string; href: string; menu?: MenuRow[]; width?: string }[] = [
  { label: "Prompts", href: "/" },
  { label: "Categories", href: "/category/marketing", menu: CATEGORY_MENU, width: "w-[122px]" },
  { label: "Models", href: "/tool/chatgpt", menu: MODEL_MENU, width: "w-[100px]" },
  { label: "Roles", href: "/for/marketers", menu: ROLE_MENU, width: "w-[87px]" },
  { label: "Types", href: "/type/text", menu: TYPE_MENU, width: "w-[89px]" },
];

const linkBase =
  "inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full px-3 text-[14px] font-normal leading-5 tracking-normal text-[#f7f7f7] no-underline transition-colors duration-150 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pl-gold focus-visible:ring-offset-2 focus-visible:ring-offset-pl-dark";

const goldButton =
  "relative inline-flex shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/40 bg-[image:var(--pl-gradient-gold)] text-[14px] font-normal leading-5 text-[#3f3000] no-underline shadow-[0_0_0_1px_#fdc302] transition-[filter,transform] hover:brightness-[1.03] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  return (
    <nav
      aria-label="Primary"
      className="w-full sticky top-0 z-50 px-6 pt-6 max-[640px]:px-3 max-[640px]:pt-4"
    >
      <div className="relative z-20 mx-auto flex h-[60px] w-full max-w-[1200px] items-center justify-between rounded-full border border-pl-dark bg-pl-dark p-2 text-[#f7f7f7] shadow-[0_20px_25px_-5px_rgba(13,12,8,0.10),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
        <Link
          href="/"
          aria-label={`${SITE.name} home`}
          className="relative flex size-11 shrink-0 items-center gap-2 overflow-hidden rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pl-gold"
        >
          <LogoMark />
        </Link>

        <div className="ml-auto flex items-center gap-8 max-[1080px]:hidden">
          <ul className="m-0 flex h-8 list-none items-center gap-3 p-0">
            {NAV.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("/").slice(0, 2).join("/"));

              if (!item.menu) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(linkBase, active && "bg-white/[0.10]")}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.label} className="group/menu relative">
                  <Link
                    href={item.href}
                    className={cn(linkBase, item.width, "pl-3 pr-2", active && "bg-white/[0.10]")}
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className="ml-1 size-3.5 transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/menu:rotate-180 motion-reduce:transition-none"
                      strokeWidth={2}
                    />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full min-w-60 -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-[opacity,transform,visibility] duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/menu:visible group-hover/menu:translate-y-0 group-hover/menu:opacity-100 group-focus-within/menu:visible group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100 motion-reduce:transition-none">
                    <div className="flex flex-col gap-1 rounded-b-3xl rounded-t-2xl bg-pl-dark p-2 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.45)]">
                      {item.menu.map((row) => (
                        <Link
                          key={row.href}
                          href={row.href}
                          className="group/row flex min-h-10 items-center gap-2.5 rounded-full px-3 text-[13.5px] text-[#f7f7f7] no-underline transition-colors duration-150 hover:bg-white/[0.08] hover:text-white"
                        >
                          <row.icon
                            aria-hidden="true"
                            className="size-[17px] text-pl-menu-icon transition-colors group-hover/row:text-white"
                            strokeWidth={2}
                          />
                          <span>{row.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <a
            href={SITE.repo}
            target="_blank"
            rel="noreferrer"
            className={cn(goldButton, "h-8 gap-1.5 px-3")}
          >
            <GithubIcon className="size-[15px]" />
            Add a prompt
          </a>
        </div>

        <div className="ml-auto hidden items-center gap-1 max-[1080px]:flex">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-150 hover:bg-white/[0.08]"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        aria-hidden={!open}
        className={cn(
          "absolute inset-x-6 top-full z-10 -mt-8 hidden origin-top rounded-b-3xl bg-pl-dark p-2 pt-11 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none max-[1080px]:block max-[640px]:inset-x-3",
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-[0.985] opacity-0",
        )}
      >
        <ul className="m-0 list-none p-0">
          {NAV.map((item) =>
            item.menu ? (
              <li key={item.label}>
                <button
                  type="button"
                  aria-expanded={expanded === item.label}
                  onClick={() => setExpanded((v) => (v === item.label ? null : item.label))}
                  className="flex w-full items-center justify-between rounded-full px-3 py-2.5 text-left text-[13.5px] text-[#F7F7F7] transition-colors duration-150 hover:bg-white/[0.08] hover:text-white"
                >
                  <span className="inline-flex items-center gap-2">{item.label}</span>
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-150",
                      expanded === item.label && "rotate-180",
                    )}
                  />
                </button>
                {expanded === item.label && (
                  <ul className="m-0 list-none p-0 pb-1 pl-2">
                    {item.menu.map((row) => (
                      <li key={row.href}>
                        <Link
                          href={row.href}
                          className="flex items-center gap-2.5 rounded-full px-3 py-2 text-[13.5px] text-[#A8A7A8] no-underline transition-colors duration-150 hover:bg-white/[0.08] hover:text-white"
                        >
                          <row.icon aria-hidden="true" className="size-4" strokeWidth={2} />
                          {row.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between rounded-full px-3 py-2.5 text-[13.5px] text-[#F7F7F7] no-underline transition-colors duration-150 hover:bg-white/[0.08] hover:text-white"
                >
                  <span className="inline-flex items-center gap-2">{item.label}</span>
                </Link>
              </li>
            ),
          )}
          <li className="p-2">
            <a
              href={SITE.repo}
              target="_blank"
              rel="noreferrer"
              className={cn(goldButton, "h-9 w-full gap-1.5")}
            >
              <GithubIcon className="size-[15px]" />
              Add a prompt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
