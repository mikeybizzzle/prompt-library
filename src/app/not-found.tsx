import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-[1232px] flex-col items-center gap-6 px-4 py-32 text-center sm:px-6">
      <h1 className="m-0 text-[clamp(24px,3vw,32px)] font-light leading-[1.1] tracking-[-0.01em] text-[#1B1A1A]">
        That page is not <em className="font-semibold italic">in the library</em>
      </h1>
      <p className="m-0 max-w-[420px] text-[14px] leading-5 text-[#A8A7A8]">
        The prompt, category, or model you asked for does not exist here.
      </p>
      <Link
        href="/"
        className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-4 text-[14px] leading-5 text-pl-ink shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_16px_-8px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_2px_4px_rgba(0,0,0,0.06),0_12px_24px_-10px_rgba(0,0,0,0.14)]"
      >
        Browse all prompts
        <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
      </Link>
    </div>
  );
}
