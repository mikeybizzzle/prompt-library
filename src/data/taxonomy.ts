export type PromptType = "text" | "image" | "code";

export type Model = {
  slug: string;
  name: string;
  vendor?: string;
  /** Brand colour used for the filled chip on a card. */
  color: string;
  group: string;
};

export type Category = {
  slug: string;
  name: string;
  /** Lucide icon name rendered in the hero icon rail. */
  icon: string;
  children: { slug: string; name: string }[];
};

export type Role = { slug: string; name: string };

export const CATEGORIES: Category[] = [
  {
    slug: "marketing",
    name: "Marketing",
    icon: "Megaphone",
    children: [
      { slug: "social-media-posts", name: "Social Media Posts" },
      { slug: "email-campaigns", name: "Email Campaigns" },
      { slug: "ad-copy", name: "Ad Copy" },
      { slug: "landing-page-copy", name: "Landing Page Copy" },
      { slug: "funnels-and-sequences", name: "Funnels & Sequences" },
      { slug: "content-repurposing", name: "Content Repurposing" },
      { slug: "headlines-and-hooks", name: "Headlines & Hooks" },
      { slug: "personal-brand", name: "Personal Brand" },
      { slug: "video-ad-scripts", name: "Video Ad Scripts" },
    ],
  },
  {
    slug: "art-and-design",
    name: "Design",
    icon: "Palette",
    children: [
      { slug: "portrait-and-avatar", name: "Portrait & Avatar" },
      { slug: "concept-art", name: "Concept Art" },
      { slug: "product-photography", name: "Product Photography" },
      { slug: "icon-and-ui-design", name: "Icon & UI Design" },
      { slug: "illustration", name: "Illustration" },
      { slug: "logo-design", name: "Logo Design" },
      { slug: "packaging-and-mockups", name: "Packaging & Mockups" },
      { slug: "poster-and-flyer", name: "Poster & Flyer" },
    ],
  },
  {
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    children: [
      { slug: "course-creation", name: "Course Creation" },
      { slug: "lesson-plans", name: "Lesson Plans" },
      { slug: "study-guides", name: "Study Guides" },
      { slug: "academic-writing", name: "Academic Writing" },
      { slug: "tutoring-and-explanations", name: "Tutoring & Explanations" },
      { slug: "quizzes-and-tests", name: "Quizzes & Tests" },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    icon: "CircleDollarSign",
    children: [
      { slug: "budgeting-and-forecasting", name: "Budgeting & Forecasting" },
      { slug: "financial-modeling", name: "Financial Modeling" },
      { slug: "investment-analysis", name: "Investment Analysis" },
      { slug: "bookkeeping", name: "Bookkeeping" },
      { slug: "pricing-and-margins", name: "Pricing & Margins" },
    ],
  },
  {
    slug: "sales",
    name: "Sales",
    icon: "TrendingUp",
    children: [
      { slug: "cold-outreach", name: "Cold Outreach" },
      { slug: "discovery-calls", name: "Discovery Calls" },
      { slug: "proposals-and-quotes", name: "Proposals & Quotes" },
      { slug: "objection-handling", name: "Objection Handling" },
      { slug: "follow-up-sequences", name: "Follow-up Sequences" },
    ],
  },
  {
    slug: "coding",
    name: "Coding",
    icon: "Code2",
    children: [
      { slug: "app-development", name: "App Development" },
      { slug: "frontend-and-ui", name: "Frontend & UI" },
      { slug: "debugging", name: "Debugging" },
      { slug: "refactoring", name: "Refactoring" },
      { slug: "testing", name: "Testing" },
      { slug: "documentation", name: "Documentation" },
      { slug: "apis-and-integrations", name: "APIs & Integrations" },
      { slug: "database-design", name: "Database Design" },
      { slug: "code-review", name: "Code Review" },
    ],
  },
  {
    slug: "writing",
    name: "Writing",
    icon: "PenLine",
    children: [
      { slug: "blog-posts", name: "Blog Posts" },
      { slug: "editing-and-rewriting", name: "Editing & Rewriting" },
      { slug: "storytelling", name: "Storytelling" },
      { slug: "newsletters", name: "Newsletters" },
      { slug: "scripts", name: "Scripts" },
      { slug: "tone-and-voice", name: "Tone & Voice" },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    icon: "Search",
    children: [
      { slug: "keyword-research", name: "Keyword Research" },
      { slug: "on-page-optimization", name: "On-Page Optimization" },
      { slug: "technical-seo", name: "Technical SEO" },
      { slug: "content-briefs", name: "Content Briefs" },
      { slug: "link-building", name: "Link Building" },
      { slug: "local-seo", name: "Local SEO" },
    ],
  },
  {
    slug: "strategy",
    name: "Strategy",
    icon: "Target",
    children: [
      { slug: "business-plans", name: "Business Plans" },
      { slug: "go-to-market", name: "Go-to-Market" },
      { slug: "positioning-and-messaging", name: "Positioning & Messaging" },
      { slug: "swot-and-frameworks", name: "SWOT & Frameworks" },
      { slug: "pricing-strategy", name: "Pricing Strategy" },
      { slug: "roadmaps", name: "Roadmaps" },
      { slug: "okrs-and-goals", name: "OKRs & Goals" },
    ],
  },
  {
    slug: "productivity",
    name: "Productivity",
    icon: "Zap",
    children: [
      { slug: "brainstorming", name: "Brainstorming" },
      { slug: "meeting-notes", name: "Meeting Notes" },
      { slug: "planning-and-prioritization", name: "Planning & Prioritization" },
      { slug: "summarization", name: "Summarization" },
      { slug: "personal-systems", name: "Personal Systems" },
    ],
  },
  {
    slug: "operations",
    name: "Operations",
    icon: "Settings2",
    children: [
      { slug: "workflow-design", name: "Workflow Design" },
      { slug: "sops-and-playbooks", name: "SOPs & Playbooks" },
      { slug: "vendor-management", name: "Vendor Management" },
      { slug: "inventory-and-supply", name: "Inventory & Supply" },
      { slug: "quality-assurance", name: "Quality Assurance" },
    ],
  },
  {
    slug: "human-resources",
    name: "Human Resources",
    icon: "Users",
    children: [
      { slug: "job-descriptions", name: "Job Descriptions" },
      { slug: "interview-questions", name: "Interview Questions" },
      { slug: "onboarding", name: "Onboarding" },
      { slug: "performance-reviews", name: "Performance Reviews" },
      { slug: "policies", name: "Policies" },
    ],
  },
  {
    slug: "research",
    name: "Research",
    icon: "Microscope",
    children: [
      { slug: "market-research", name: "Market Research" },
      { slug: "competitor-analysis", name: "Competitor Analysis" },
      { slug: "user-research", name: "User Research" },
      { slug: "literature-review", name: "Literature Review" },
      { slug: "surveys", name: "Surveys" },
    ],
  },
  {
    slug: "legal",
    name: "Legal",
    icon: "Scale",
    children: [
      { slug: "contracts", name: "Contracts" },
      { slug: "policies-and-terms", name: "Policies & Terms" },
      { slug: "compliance", name: "Compliance" },
      { slug: "ip-and-trademarks", name: "IP & Trademarks" },
    ],
  },
  {
    slug: "data-analysis",
    name: "Data Analysis",
    icon: "BarChart3",
    children: [
      { slug: "sql-and-queries", name: "SQL & Queries" },
      { slug: "spreadsheets", name: "Spreadsheets" },
      { slug: "dashboards-and-reporting", name: "Dashboards & Reporting" },
      { slug: "statistics", name: "Statistics" },
      { slug: "data-cleaning", name: "Data Cleaning" },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Home",
    children: [
      { slug: "listing-descriptions", name: "Listing Descriptions" },
      { slug: "buyer-and-seller-comms", name: "Buyer & Seller Comms" },
      { slug: "market-reports", name: "Market Reports" },
      { slug: "investment-analysis-re", name: "Investment Analysis" },
    ],
  },
  {
    slug: "customer-service",
    name: "Customer Service",
    icon: "Headphones",
    children: [
      { slug: "support-replies", name: "Support Replies" },
      { slug: "help-center-articles", name: "Help Center Articles" },
      { slug: "escalation-handling", name: "Escalation Handling" },
      { slug: "chatbot-scripts", name: "Chatbot Scripts" },
    ],
  },
  {
    slug: "careers",
    name: "Careers",
    icon: "Briefcase",
    children: [
      { slug: "resumes", name: "Resumes" },
      { slug: "cover-letters", name: "Cover Letters" },
      { slug: "interview-prep", name: "Interview Prep" },
      { slug: "linkedin-profiles", name: "LinkedIn Profiles" },
      { slug: "salary-negotiation", name: "Salary Negotiation" },
    ],
  },
  {
    slug: "audio",
    name: "Audio",
    icon: "AudioLines",
    children: [
      { slug: "music-generation", name: "Music Generation" },
      { slug: "voiceover-scripts", name: "Voiceover Scripts" },
      { slug: "podcast-production", name: "Podcast Production" },
      { slug: "sound-design", name: "Sound Design" },
    ],
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    icon: "Bot",
    children: [
      { slug: "agent-system-prompts", name: "Agent System Prompts" },
      { slug: "agentic-workflows", name: "Agentic Workflows" },
      { slug: "tool-use", name: "Tool Use" },
      { slug: "evaluation-and-guardrails", name: "Evaluation & Guardrails" },
    ],
  },
  {
    slug: "video",
    name: "Video",
    icon: "Video",
    children: [
      { slug: "shot-lists", name: "Shot Lists" },
      { slug: "cinematic-scenes", name: "Cinematic Scenes" },
      { slug: "b-roll-and-transitions", name: "B-Roll & Transitions" },
      { slug: "youtube-scripts", name: "YouTube Scripts" },
    ],
  },
];

export const MODELS: Model[] = [
  { slug: "chatgpt", name: "ChatGPT", vendor: "OpenAI", color: "#10a37f", group: "Text" },
  { slug: "claude", name: "Claude", vendor: "Anthropic", color: "#d97757", group: "Text" },
  { slug: "gemini", name: "Gemini", vendor: "Google", color: "#4d6bfe", group: "Text" },
  { slug: "grok", name: "Grok", vendor: "xAI", color: "#161415", group: "Text" },
  { slug: "deepseek", name: "DeepSeek", vendor: "DeepSeek", color: "#4d6bfe", group: "Text" },
  { slug: "mistral", name: "Mistral", vendor: "Mistral", color: "#fa520f", group: "Text" },
  { slug: "llama", name: "Llama", vendor: "Meta", color: "#0866ff", group: "Text" },
  { slug: "midjourney", name: "Midjourney", color: "#161415", group: "Image" },
  { slug: "nano-banana", name: "Nano Banana", vendor: "Google", color: "#fdc302", group: "Image" },
  { slug: "flux", name: "Flux", color: "#615ced", group: "Image" },
  { slug: "dall-e", name: "DALL-E", vendor: "OpenAI", color: "#10a37f", group: "Image" },
  { slug: "ideogram", name: "Ideogram", color: "#d97858", group: "Image" },
  { slug: "sora", name: "Sora", vendor: "OpenAI", color: "#10a37f", group: "Video" },
  { slug: "veo", name: "Veo", vendor: "Google", color: "#4d6bfe", group: "Video" },
  { slug: "runway", name: "Runway", color: "#161415", group: "Video" },
  { slug: "kling", name: "Kling", color: "#4da770", group: "Video" },
  { slug: "elevenlabs", name: "ElevenLabs", color: "#161415", group: "Audio" },
  { slug: "suno", name: "Suno", color: "#d97858", group: "Audio" },
  { slug: "cursor", name: "Cursor", color: "#161415", group: "Coding" },
  { slug: "claude-code", name: "Claude Code", vendor: "Anthropic", color: "#d97757", group: "Coding" },
  { slug: "v0", name: "v0", vendor: "Vercel", color: "#161415", group: "Coding" },
  { slug: "lovable", name: "Lovable", color: "#f2557d", group: "Coding" },
  { slug: "windsurf", name: "Windsurf", color: "#4da770", group: "Coding" },
  { slug: "perplexity", name: "Perplexity", color: "#20808d", group: "Research" },
  { slug: "notebooklm", name: "NotebookLM", vendor: "Google", color: "#4d6bfe", group: "Research" },
  { slug: "n8n", name: "n8n", color: "#ea4b71", group: "Automation" },
  { slug: "zapier", name: "Zapier", color: "#ff4f00", group: "Automation" },
  { slug: "make", name: "Make", color: "#6d00cc", group: "Automation" },
  { slug: "notion", name: "Notion", color: "#161415", group: "Workspace" },
  { slug: "figma", name: "Figma", color: "#f24e1e", group: "Design" },
  { slug: "canva", name: "Canva", color: "#00c4cc", group: "Design" },
];

export const ROLES: Role[] = [
  { slug: "solopreneurs", name: "Solopreneurs" },
  { slug: "entrepreneurs", name: "Entrepreneurs" },
  { slug: "business-owners", name: "Business Owners" },
  { slug: "freelancers", name: "Freelancers" },
  { slug: "agencies", name: "Agencies" },
  { slug: "ecommerce-sellers", name: "Ecommerce Sellers" },
  { slug: "marketers", name: "Marketers" },
  { slug: "sales-teams", name: "Sales Teams" },
  { slug: "copywriters", name: "Copywriters" },
  { slug: "content-creators", name: "Content Creators" },
  { slug: "designers", name: "Designers" },
  { slug: "photographers", name: "Photographers" },
  { slug: "developers", name: "Developers" },
  { slug: "ai-engineers", name: "AI Engineers" },
  { slug: "lawyers", name: "Lawyers" },
  { slug: "accountants", name: "Accountants" },
  { slug: "real-estate-agents", name: "Real Estate Agents" },
  { slug: "recruiters", name: "Recruiters" },
  { slug: "teachers", name: "Teachers" },
  { slug: "students", name: "Students" },
  { slug: "coaches", name: "Coaches" },
  { slug: "consultants", name: "Consultants" },
  { slug: "virtual-assistants", name: "Virtual Assistants" },
  { slug: "product-managers", name: "Product Managers" },
  { slug: "analysts", name: "Analysts" },
  { slug: "founders", name: "Founders" },
];

export const TYPES: { slug: PromptType | "all"; name: string }[] = [
  { slug: "all", name: "All" },
  { slug: "text", name: "Text" },
  { slug: "image", name: "Image" },
  { slug: "code", name: "Code" },
];

export const CATEGORY_BY_SLUG = new Map(CATEGORIES.map((c) => [c.slug, c]));
export const MODEL_BY_SLUG = new Map(MODELS.map((m) => [m.slug, m]));
export const ROLE_BY_SLUG = new Map(ROLES.map((r) => [r.slug, r]));

export const SUBCATEGORY_BY_SLUG = new Map(
  CATEGORIES.flatMap((c) => c.children.map((s) => [s.slug, { ...s, parent: c.slug }] as const)),
);
