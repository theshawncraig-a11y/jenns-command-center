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
    updated: "2026-08-26"
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
    }
  ],

  // ---------------------------------------------------------------
  // CONTENT MARKETING — types: "blog" | "white-paper" | "testimonial"
  //   | "buy-side-brief" | "press-release"
  // statuses: "idea" | "drafting" | "in-review" | "scheduled" | "published"
  // ---------------------------------------------------------------
  content: [
    {
      id: "cnt-sample-brief",
      sample: true,
      title: "Buy-side industry brief: Q3 market shift",
      type: "buy-side-brief",
      status: "drafting",
      dueDate: "2026-09-12",
      owner: "Jenn",
      links: [],
      notes: "Sample entry — use the links list to point at the Google Doc draft, design files, and the published URL."
    },
    {
      id: "cnt-sample-pr",
      sample: true,
      title: "Press release: MMS image texting launch",
      type: "press-release",
      status: "idea",
      dueDate: "2026-09-30",
      owner: "Jenn",
      links: [],
      notes: "Sample entry — tie press releases to the GTM project they support."
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
      launchDate: "",
      links: [],
      notes: "",
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
      stage: "current",
      description: "",
      launchDate: "",
      links: [],
      notes: "",
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
      id: "gtm-ai-seo-metadata",
      title: "AI & SEO Metadata Fields",
      stage: "current",
      description: "",
      launchDate: "",
      links: [],
      notes: "",
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
      links: [],
      notes: "",
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
      launchDate: "",
      links: [],
      notes: "",
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
      notes: "",
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
      description: "",
      launchDate: "",
      links: [],
      notes: ""
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
