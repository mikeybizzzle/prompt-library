import { CategoryRail } from "@/components/library/category-rail";
import { Hero } from "@/components/library/hero";
import { DEFAULT_FAQ, HubSections, type FaqItem } from "@/components/library/hub-sections";
import { LibraryView } from "@/components/library/library-view";
import { toCardData } from "@/lib/card-data";
import { getAllPrompts, getFacetCounts, type Prompt } from "@/lib/prompts";

/**
 * The one page shape the whole site uses: hero, category rail, filtered grid,
 * then the hub sections. Every route just narrows the prompt list.
 */
export function LibraryPage({
  title,
  emphasis,
  subtitle,
  prompts,
  activeType = "all",
  activeCategory,
  scope,
  faq = DEFAULT_FAQ,
  children,
}: {
  title: string;
  emphasis: string;
  subtitle: string;
  prompts: Prompt[];
  activeType?: string;
  activeCategory?: string;
  scope?: string;
  faq?: FaqItem[];
  children?: React.ReactNode;
}) {
  const cards = prompts.map(toCardData);
  const facets = getFacetCounts();

  // One per category, so the row never fills up with three from the same place.
  const seenCategories = new Set<string>();
  const featured = getAllPrompts()
    .filter((p) => p.featured)
    .filter((p) => {
      if (seenCategories.has(p.category)) return false;
      seenCategories.add(p.category);
      return true;
    })
    .slice(0, 3)
    .map(toCardData);

  return (
    <div className="mx-auto w-full max-w-[1232px] px-4 py-10 sm:px-6 max-[640px]:py-6">
      <Hero title={title} emphasis={emphasis} subtitle={subtitle} />
      <CategoryRail activeSlug={activeCategory} />
      <LibraryView prompts={cards} facets={facets} activeType={activeType} scope={scope} />
      <HubSections featured={featured} total={facets.total} facets={facets} faq={faq}>
        {children}
      </HubSections>
    </div>
  );
}
