import { SITE } from "@/data/site";
import { getAllPrompts } from "@/lib/prompts";

export const dynamic = "force-static";

function escapeXml(s: string) {
  return s.replace(/[<>&'"]/g, (c) => `&${{ "<": "lt", ">": "gt", "&": "amp", "'": "apos", '"': "quot" }[c]};`);
}

export function GET() {
  const prompts = getAllPrompts().slice(0, 50);

  const items = prompts
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE.url}/p/${p.slug}</link>
      <guid isPermaLink="true">${SITE.url}/p/${p.slug}</guid>
      <description>${escapeXml(p.description)}</description>
      ${p.publishedAt ? `<pubDate>${new Date(`${p.publishedAt}T00:00:00Z`).toUTCString()}</pubDate>` : ""}
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE.name)}</title>
    <link>${SITE.url}</link>
    <description>${escapeXml(SITE.description)}</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "content-type": "application/xml" } });
}
