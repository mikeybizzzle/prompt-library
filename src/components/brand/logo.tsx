import { cn } from "@/lib/utils";

/**
 * Bizzzle Prompts mark: three stacked plates seen in perspective, standing in
 * for layered prompt collections. Gold on dark.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
      className={cn("size-11", className)}
    >
      <rect width="44" height="44" rx="22" fill="#242223" />
      <path
        d="M22 11.5 32.5 17.25 22 23 11.5 17.25 22 11.5Z"
        fill="#fdc302"
      />
      <path
        d="m14.6 21.6-3.1 1.7L22 29.05l10.5-5.75-3.1-1.7L22 25.65 14.6 21.6Z"
        fill="#fdc302"
        fillOpacity="0.62"
      />
      <path
        d="m14.6 27.35-3.1 1.7L22 34.8l10.5-5.75-3.1-1.7L22 31.4l-7.4-4.05Z"
        fill="#fdc302"
        fillOpacity="0.34"
      />
    </svg>
  );
}
