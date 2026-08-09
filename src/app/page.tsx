import { LibraryPage } from "@/components/library/library-page";
import { SITE } from "@/data/site";
import { jsonLd } from "@/lib/json-ld";
import { getAllPrompts } from "@/lib/prompts";
import { CATEGORIES, MODELS } from "@/data/taxonomy";

export default function Home() {
  const prompts = getAllPrompts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${SITE.name}: ${SITE.tagline}`,
            description: SITE.description,
            url: SITE.url,
            isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
          }),
        }}
      />
      <LibraryPage
        title="A hand-built,"
        emphasis="Open Prompt Library"
        subtitle="Free, curated AI prompts for ChatGPT, Claude, Gemini, Midjourney and every major model. Browse by category, model, or role."
        prompts={prompts}
      >
        <h2>What is inside</h2>
        <p>
          {prompts.length} prompts grouped four ways so you can find one in a few seconds rather
          than scrolling a spreadsheet:
        </p>
        <ul>
          <li>
            <strong>By category ({CATEGORIES.length} roots, plus subcategories)</strong>: marketing,
            design, coding, writing, SEO, strategy, sales, education, research, legal, finance, HR,
            operations, data, real estate, support, careers, audio, video, agents, productivity.
          </li>
          <li>
            <strong>By model ({MODELS.length} tools)</strong>: ChatGPT, Claude, Gemini, Grok,
            Midjourney, Nano Banana, Claude Code, Cursor and more. Each prompt names the model it
            was written against.
          </li>
          <li>
            <strong>By role</strong>: the job you actually do, from founder to freelancer to
            teacher.
          </li>
          <li>
            <strong>By type</strong>: text, image, or code output.
          </li>
        </ul>

        <h2>How to use any prompt here</h2>
        <ol>
          <li>Open the prompt that matches your task.</li>
          <li>
            Copy it. Most prompts state a role, context, task, constraints, and output format. The
            imported email set keeps its original wording instead.
          </li>
          <li>
            Replace the <code>{"{{placeholders}}"}</code> with your own context: your audience, your
            brand, your inputs.
          </li>
          <li>Paste it into ChatGPT, Claude, Gemini, or whatever you run.</li>
          <li>Run it, read it, refine it. Then send the better version back as a pull request.</li>
        </ol>

        <h2>Why these prompts are structured this way</h2>
        <p>
          A one-line request gets a generic answer. Every prompt in this library states four things
          up front: who the model is being, what context it has, what to produce, and the exact
          shape of the output. That structure is the difference between a paragraph you throw away
          and a draft you can ship. It is also the pattern OpenAI and Anthropic recommend in their
          own documentation.
        </p>

        <h2>Who it is for</h2>
        <ul>
          <li>
            <strong>Marketers and growth teams</strong>: content, SEO, email, social, ads, brand
          </li>
          <li>
            <strong>Engineers</strong>: debugging, refactoring, code review, agentic workflows
          </li>
          <li>
            <strong>Designers and creators</strong>: image generation, design briefs, UI, video
          </li>
          <li>
            <strong>Writers and editors</strong>: copywriting, long-form, technical writing
          </li>
          <li>
            <strong>Operators</strong>: legal, finance, HR, real estate, support, and the
            constraints those fields carry
          </li>
        </ul>

        <h2>Free, and open</h2>
        <p>
          Every prompt is free to read, copy, and reuse. The whole library is a folder of markdown
          files in a public repository, so nothing is locked behind an account and nothing
          disappears if this site does.{" "}
          <a href={SITE.repo} target="_blank" rel="noreferrer">
            Browse the source
          </a>
          .
        </p>
      </LibraryPage>
    </>
  );
}
