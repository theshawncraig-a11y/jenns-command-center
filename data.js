// Jenn's Command Center — data file
// This file is the single source of truth for the site.
// To update it, open Claude Code in this folder and describe the change, e.g.:
//   "Add a tradeshow: Inman Connect, Jan 27-29 2027, New York, status planning"
//   "Move Call AI to past and set its launch date to Oct 1"
//   "Mark the buy-side brief as published"
//
// Dates are YYYY-MM-DD. Remove items flagged sample:true whenever you like.

window.COMMAND_CENTER_DATA = {
  meta: {
    owner: "Jenn",
    team: "CINC Marketing",
    updated: "2026-08-30"
  },

  // ---------------------------------------------------------------
  // EVENTS — types: "tradeshow" | "webinar"
  // statuses: "idea" | "planning" | "confirmed" | "complete" | "cancelled"
  // ---------------------------------------------------------------
  events: [
    {
      id: "evt-sample-tradeshow",
      sample: true,
      title: "Tom Ferry Success Summit",
      type: "tradeshow",
      status: "planning",
      startDate: "2026-09-09",
      endDate: "2026-09-11",
      location: "Dallas, TX",
      owner: "Jenn",
      links: [
        { label: "Event site", url: "https://www.tomferry.com/summit/" }
      ],
      notes: "Sample entry — replace with the real event details (booth #, sponsorship level, shipping deadlines, staffing)."
    },
    {
      id: "evt-sample-webinar",
      sample: true,
      title: "Call AI launch webinar",
      type: "webinar",
      status: "idea",
      startDate: "2026-09-18",
      owner: "Jenn",
      links: [],
      notes: "Sample entry — pair webinars with GTM launches so promotion, registration page, and follow-up emails get planned together."
    },
    {
      id: "evt-sendgrid-deliverability-webinar",
      title: "Email Deliverability Best Practices (with SendGrid)",
      type: "webinar",
      status: "confirmed",
      startDate: "2026-09-22",
      owner: "",
      links: [],
      notes: "Standalone webinar, not tied to a product launch. Still need to: schedule a prep call, build the landing page, and prep the promotional emails."
    },
    {
      id: "evt-aug-product-webinar",
      title: "Product webinar",
      type: "webinar",
      status: "complete",
      startDate: "2026-08-27",
      owner: "",
      links: [
        { label: "Recording", url: "https://cinc.wistia.com/s/96er08ruzezkfua" }
      ],
      notes: "258 total registrants. Recording is live. Still need to send the follow-up email."
    }
  ],

  // ---------------------------------------------------------------
  // CONTENT MARKETING — types: "blog" | "white-paper" | "testimonial"
  //   | "buy-side-brief" | "press-release"
  // statuses: "idea" | "drafting" | "in-review" | "scheduled" | "published"
  // categories: "product" | "client-success" | "industry"
  // ---------------------------------------------------------------
  content: [
    {
      id: "cnt-sample-brief",
      sample: true,
      title: "Buy-side industry brief: Q3 market shift",
      type: "buy-side-brief",
      category: "industry",
      status: "drafting",
      dueDate: "2026-09-12",
      owner: "Jenn",
      links: [],
      notes: "Sample entry — use the links list to point at the Google Doc draft, design files, and the published URL."
    },
    {
      id: "cnt-mms-photo-texting-article",
      title: "See What Your Leads See: Photo Texting Now Lives Inside CINC",
      type: "blog",
      category: "product",
      status: "published",
      dueDate: "",
      publishDate: "2026-08-27",
      owner: "Jenn",
      links: [
        { label: "Read on cincpro.com", url: "https://www.cincpro.com/blog/see-what-your-leads-see-photo-texting-now-lives-inside-cinc" }
      ],
      notes: "Launch article for MMS image texting."
    },
    {
      id: "cnt-voip-dialer-article",
      title: "Mobile VOIP Dialer launch",
      type: "blog",
      category: "product",
      status: "scheduled",
      dueDate: "2026-09-02",
      owner: "",
      links: [],
      notes: "Drafted — publishes when the phased rollout begins on 9/2."
    }
  ],

  // ---------------------------------------------------------------
  // PRODUCT MARKETING (GTM) — stages: "past" | "current" | "future"
  // Optional per-project: launchDate, description, links, notes,
  // checklist: [{ item, done }]
  // ---------------------------------------------------------------
  gtm: [
    {
      id: "gtm-mobile-voip",
      title: "Mobile VOIP Dialer",
      stage: "current",
      description: "",
      launchDate: "2026-09-02",
      links: [],
      notes: "",
      plan: {
        milestones: [
          { date: "2026-09-02", label: "Phased rollout begins" }
        ],
        internal: [],
        sales: [
          { title: "Talking points", due: "2026-09-02", owner: "", status: "planned", links: [], notes: "" }
        ],
        external: [
          { title: "Launch article", due: "2026-09-02", owner: "", status: "complete", links: [], notes: "Drafted; publishes with the rollout on 9/2." },
          { title: "Launch video", due: "2026-09-02", owner: "", status: "in-progress", links: [], notes: "" }
        ]
      },
      checklist: [
        { item: "Positioning & messaging doc", done: false },
        { item: "Sales enablement / one-pager", done: false },
        { item: "Launch email(s)", done: false },
        { item: "In-app announcement", done: false },
        { item: "Webinar or demo video", done: false },
        { item: "Blog / press release", done: false }
      ]
    },
    {
      id: "gtm-mms-texting",
      title: "MMS Image Texting",
      stage: "past",
      description: "",
      launchDate: "2026-08-27",
      links: [],
      notes: "",
      plan: {
        milestones: [
          { date: "2026-08-27", label: "Launch", done: true }
        ],
        internal: [],
        sales: [],
        external: [
          { title: "Launch article", due: "2026-08-27", owner: "Jenn", status: "complete",
            links: [{ label: "Read the article", url: "https://www.cincpro.com/blog/see-what-your-leads-see-photo-texting-now-lives-inside-cinc" }], notes: "" }
        ]
      },
      checklist: [
        { item: "Positioning & messaging doc", done: false },
        { item: "Sales enablement / one-pager", done: false },
        { item: "Launch email(s)", done: false },
        { item: "In-app announcement", done: false },
        { item: "Webinar or demo video", done: false },
        { item: "Blog / press release", done: true }
      ]
    },
    {
      id: "gtm-ai-seo-metadata",
      title: "AI & SEO Metadata Fields",
      stage: "current",
      description: "",
      launchDate: "",
      links: [],
      notes: "",
      plan: { milestones: [], internal: [], sales: [], external: [] },
      checklist: [
        { item: "Positioning & messaging doc", done: false },
        { item: "Sales enablement / one-pager", done: false },
        { item: "Launch email(s)", done: false },
        { item: "In-app announcement", done: false },
        { item: "Webinar or demo video", done: false },
        { item: "Blog / press release", done: false }
      ]
    },
    {
      id: "gtm-call-ai",
      title: "Call AI",
      stage: "current",
      description: "",
      launchDate: "",
      links: [
        { label: "Existing help article (Tamara)", url: "https://help.cincpro.com/s/article/CINC-Call-Ai-Through-Flair-Labs" }
      ],
      notes: "Need to schedule a launch webinar — coordinate with Jeff on timing. Once a date is set, work backward on the article, video, and talking points. Also discussing a possible joint webinar with Agent Accelerator, tentatively October — no date set yet.",
      plan: { milestones: [], internal: [], sales: [], external: [] },
      checklist: [
        { item: "Positioning & messaging doc", done: false },
        { item: "Sales enablement / one-pager", done: false },
        { item: "Launch email(s)", done: false },
        { item: "In-app announcement", done: false },
        { item: "Webinar or demo video", done: false },
        { item: "Blog / press release", done: false }
      ]
    },
    {
      id: "gtm-agent-accelerator-site",
      title: "Agent Accelerator Website",
      stage: "current",
      description: "",
      launchDate: "2026-11-01",
      links: [],
      notes: "Targeted for 11/1 — not yet confirmed. Interested in a joint follow-up webinar with Call AI, tentatively October — no date set yet.",
      plan: {
        milestones: [
          { date: "2026-11-01", label: "Targeted launch (tentative)" }
        ],
        internal: [],
        sales: [],
        external: [
          { title: "Article", due: "2026-11-01", owner: "", status: "planned", links: [], notes: "Tentative — tied to the targeted launch date." }
        ]
      },
      checklist: [
        { item: "Positioning & messaging doc", done: false },
        { item: "Sales enablement / one-pager", done: false },
        { item: "Launch email(s)", done: false },
        { item: "In-app announcement", done: false },
        { item: "Webinar or demo video", done: false },
        { item: "Blog / press release", done: false }
      ]
    },
    {
      id: "gtm-ai-nurture-engine",
      title: "AI Nurture Engine",
      stage: "future",
      description: "",
      launchDate: "",
      links: [],
      notes: "No go-live date yet.",
      plan: { milestones: [], internal: [], sales: [], external: [] },
      checklist: []
    },
    {
      id: "gtm-conversationiq",
      title: "ConversationIQ",
      stage: "past",
      description: "",
      launchDate: "",
      links: [],
      notes: ""
    },
    {
      id: "gtm-google-lsa",
      title: "Google Local Service Ads",
      stage: "past",
      description: "Managed Google Local Services Ads offering for CINC clients, with a dedicated landing page at cinclsa.com.",
      launchDate: "2026-07-29",
      links: [
        { label: "Landing page (cinclsa.com)", url: "https://cinclsa.com" },
        { label: "One-pager (PDF)", url: "Google%20Local%20Service%20Ads/Google%20Local%20Services%20%28LSA%29%20-%20CINC.pdf" },
        { label: "Talking points (PDF)", url: "Google%20Local%20Service%20Ads/LSA%20-%20Talking%20Points.pdf" }
      ],
      notes: "",
      plan: {
        milestones: [
          { date: "2026-07-29", label: "Launch", done: true }
        ],
        internal: [
          { title: "Talking points for Client Services", due: "", owner: "", status: "complete",
            links: [{ label: "Talking points (PDF)", url: "Google%20Local%20Service%20Ads/LSA%20-%20Talking%20Points.pdf" }], notes: "" },
          { title: "Advisor Edge feature (internal advisor newsletter)", due: "2026-08-04", owner: "", status: "complete", links: [], notes: "" }
        ],
        sales: [
          { title: "Talking points for Sales", due: "", owner: "", status: "complete",
            links: [{ label: "Talking points (PDF)", url: "Google%20Local%20Service%20Ads/LSA%20-%20Talking%20Points.pdf" }], notes: "" },
          { title: "LSA one-pager (leave-behind)", due: "", owner: "", status: "complete",
            links: [{ label: "One-pager (PDF)", url: "Google%20Local%20Service%20Ads/Google%20Local%20Services%20%28LSA%29%20-%20CINC.pdf" }], notes: "" }
        ],
        external: [
          { title: "cinclsa.com landing page", due: "", owner: "", status: "complete",
            links: [{ label: "cinclsa.com", url: "https://cinclsa.com" }], notes: "" },
          { title: "Agent Edge feature (client newsletter)", due: "2026-08-14", owner: "", status: "complete", links: [], notes: "" },
          { title: "LSA one-pager", due: "", owner: "", status: "complete",
            links: [{ label: "One-pager (PDF)", url: "Google%20Local%20Service%20Ads/Google%20Local%20Services%20%28LSA%29%20-%20CINC.pdf" }], notes: "" }
        ]
      }
    },
    {
      id: "gtm-facebook-listing-ads",
      title: "Facebook Listing Ads",
      stage: "past",
      description: "",
      launchDate: "",
      links: [],
      notes: ""
    },
    {
      id: "gtm-agent-accelerator",
      title: "Agent Accelerator",
      stage: "past",
      description: "",
      launchDate: "",
      links: [],
      notes: ""
    }
  ]
};
