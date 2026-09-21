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
    updated: "2026-09-21"
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
      id: "evt-sendgrid-deliverability-webinar",
      title: "Stop Landing in Spam: Email Deliverability Webinar (with Twilio SendGrid)",
      type: "webinar",
      status: "confirmed",
      startDate: "2026-09-22",
      owner: "",
      links: [
        { label: "Registration page", url: "https://www.cincpro.com/email-deliverability-for-real-estate-live-webinar" }
      ],
      notes: "1-2pm ET. Speaker: Ashley Ortiz, Principal Email Deliverability Consultant, Twilio SendGrid. Landing page is live.",
      todos: [
        { title: "Prep call", due: "", owner: "", status: "planned", links: [], notes: "" },
        { title: "Promotional emails", due: "", owner: "", status: "planned", links: [], notes: "" }
      ]
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
    },
    {
      id: "evt-zillow-unlock",
      title: "Zillow Unlock",
      type: "tradeshow",
      status: "planning",
      startDate: "2026-10-12",
      endDate: "2026-10-15",
      location: "",
      owner: "",
      links: [],
      notes: "",
      todos: [
        { title: "Choose who is going", due: "", owner: "", status: "planned", links: [], notes: "Behind schedule — still deciding." },
        { title: "Deliver creative", due: "2026-09-04", owner: "", status: "complete", links: [], notes: "Booth design done." },
        { title: "Order swag", due: "", owner: "", status: "in-progress", links: [], notes: "Swag and apparel coming." },
        { title: "FedEx login/password for shipping (from Jenn)", due: "", owner: "Jenn", status: "planned", links: [], notes: "" }
      ]
    },
    {
      id: "evt-ascend-lakeland",
      title: "Ascend (Lakeland)",
      type: "tradeshow",
      status: "planning",
      startDate: "",
      endDate: "",
      location: "Lakeland, FL",
      owner: "",
      links: [],
      notes: "",
      todos: [
        { title: "Swag / apparel", due: "", owner: "", status: "in-progress", links: [], notes: "Coming." },
        { title: "FedEx login/password for shipping (from Jenn)", due: "", owner: "Jenn", status: "planned", links: [], notes: "" }
      ]
    },
    {
      id: "evt-flair-labs-webinar",
      title: "Call AI Webinar (with Flair Labs)",
      type: "webinar",
      status: "planning",
      startDate: "2026-10-06",
      owner: "",
      links: [],
      notes: "Tentative date. Still need a client to join and someone to run it day-of. Jenn is prepping as much as possible before she's out starting Friday (9/25).",
      todos: [
        { title: "Prep call", due: "2026-09-25", owner: "Jenn", status: "planned", links: [], notes: "" },
        { title: "Promotions", due: "", owner: "Jenn", status: "in-progress", links: [], notes: "" },
        { title: "Secure a client to join", due: "", owner: "", status: "planned", links: [], notes: "" },
        { title: "Assign someone to run the webinar day-of", due: "", owner: "", status: "planned", links: [], notes: "" }
      ]
    },
    {
      id: "evt-lpt-conference",
      title: "LPT Conference",
      type: "tradeshow",
      status: "planning",
      startDate: "2026-10-06",
      endDate: "2026-10-08",
      location: "",
      owner: "",
      links: [],
      notes: "What needs to get done here?"
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
      title: "Never Take Call Notes Again: CINC's Improved Mobile Dialer for Real Estate Agents",
      type: "blog",
      category: "product",
      status: "published",
      dueDate: "",
      publishDate: "2026-09-02",
      owner: "",
      links: [
        { label: "Read on cincpro.com", url: "https://www.cincpro.com/blog/never-take-call-notes-again-cincs-improved-mobile-dialer-for-real-estate-agents" },
        { label: "Draft (Word)", url: "Product/Mobile%20Dialer%20copy/mobile_dialer_blog.docx" }
      ],
      notes: "Launch article for Mobile VOIP Dialer."
    },
    {
      id: "cnt-matt-mitchell-referral-engine",
      title: "How This Ohio Team Leader Turned Internet Leads into a Referral Engine",
      type: "testimonial",
      category: "client-success",
      status: "published",
      dueDate: "",
      publishDate: "2026-08-26",
      owner: "",
      links: [
        { label: "Read on cincpro.com", url: "https://www.cincpro.com/blog/how-this-ohio-team-leader-turned-internet-leads-into-a-referral-engine" }
      ],
      notes: "Client: Matt Mitchell (Ohio team leader)."
    },
    {
      id: "cnt-lead-gen-companies-guide",
      title: "Best real estate lead generation companies in 2026: A complete guide",
      type: "white-paper",
      category: "industry",
      status: "scheduled",
      dueDate: "2026-10-05",
      owner: "",
      links: [],
      notes: "Blog will be loaded and prospect email ready to go out the week after next."
    },
    {
      id: "cnt-lead-gen-companies-blog",
      title: "Best real estate lead generation companies in 2026 — blog (white paper download)",
      type: "blog",
      category: "industry",
      status: "scheduled",
      dueDate: "2026-10-05",
      owner: "",
      links: [],
      notes: "Promotes the white paper as a gated download. Blog will be loaded and prospect email ready to go out the week after next."
    },
    {
      id: "cnt-client-story-molly",
      title: "Client success story: Molly",
      type: "testimonial",
      category: "client-success",
      status: "drafting",
      dueDate: "",
      owner: "",
      links: [],
      notes: "Recorded — not yet edited."
    },
    {
      id: "cnt-client-story-susan",
      title: "Client success story: Susan Patton",
      type: "testimonial",
      category: "client-success",
      status: "scheduled",
      dueDate: "2026-09-28",
      owner: "",
      links: [],
      notes: "Blog will be loaded and prospect email ready to go out next week."
    },
    {
      id: "cnt-client-story-patti",
      title: "Client success story: Patti",
      type: "testimonial",
      category: "client-success",
      status: "drafting",
      dueDate: "",
      owner: "",
      links: [],
      notes: "Recorded — not yet edited."
    },
    {
      id: "cnt-client-story-stacia",
      title: "Client success story: Stacia",
      type: "testimonial",
      category: "client-success",
      status: "drafting",
      dueDate: "",
      owner: "",
      links: [],
      notes: "Recorded — not yet edited."
    },
    {
      id: "cnt-call-ai-article",
      title: "AI Phone Calls in Real Estate: How CINC's Partnership with Flair Labs Is Changing Lead Follow-Up",
      type: "blog",
      category: "product",
      status: "published",
      dueDate: "",
      publishDate: "2026-09-15",
      owner: "",
      links: [
        { label: "Read on cincpro.com", url: "https://www.cincpro.com/blog/ai-phone-calls-in-real-estate" },
        { label: "Draft (Word)", url: "Product/Call%20AI/CINC_AI_Phone_Calls_Article%20copy.docx" }
      ],
      notes: "Launch article for Call AI."
    },
    {
      id: "cnt-ai-seo-article",
      title: "AI Is Already Recommending Agents. Make Sure It's Recommending You.",
      type: "blog",
      category: "product",
      status: "published",
      dueDate: "",
      publishDate: "2026-08-19",
      owner: "",
      links: [
        { label: "Read on cincpro.com", url: "https://www.cincpro.com/blog/ai-is-already-recommending-agents.-make-sure-its-recommending-you" },
        { label: "Draft (Word)", url: "Product/AI%20%26%20SEO%20copy/AI_SEO_Settings_Article.docx" }
      ],
      notes: "Launch article for AI & SEO Metadata Fields."
    },
    {
      id: "cnt-q2-buyside-index-blog",
      title: "The Top Buyer's Agents and Teams in Every State Are Now on the Record",
      type: "blog",
      category: "industry",
      status: "published",
      dueDate: "",
      publishDate: "2026-09-09",
      owner: "",
      links: [
        { label: "Read on cincpro.com", url: "https://www.cincpro.com/blog/the-top-buyers-agents-and-teams-in-every-state-are-now-on-the-record" },
        { label: "Draft (Word)", url: "cinc_blog_quarterly_index_q2_2026%20copy.docx" }
      ],
      notes: "Q2 2026 Buy-Side Performance Index, with Agent Pronto."
    },
    {
      id: "cnt-q2-buyside-index-pr",
      title: "Q2 2026 Buy-Side Index Finds Sharp Price Divergence Across State Markets",
      type: "press-release",
      category: "industry",
      status: "published",
      dueDate: "",
      publishDate: "2026-09-11",
      owner: "",
      links: [
        { label: "Read on PR Newswire", url: "https://www.prnewswire.com/news-releases/q2-2026-buy-side-index-finds-sharp-price-divergence-across-state-markets-302875944.html" },
        { label: "Draft (Word)", url: "q2_2026_press_release_v2%20copy.docx" }
      ],
      notes: "Q2 2026 Buy-Side Performance Index, with Agent Pronto."
    },
    {
      id: "cnt-nurture-engine-article",
      title: "AI Nurture Engine launch article",
      type: "blog",
      category: "product",
      status: "in-review",
      dueDate: "",
      owner: "Jenn",
      links: [],
      notes: "Draft done and delivered. Targeting launch end of September/early October."
    },
    {
      id: "cnt-google-market-report",
      title: "Google Market Report",
      type: "white-paper",
      category: "industry",
      status: "idea",
      dueDate: "2026-09-25",
      owner: "Jenn",
      links: [],
      notes: "Expecting data from Dan this week."
    },
    {
      id: "cnt-lvi-report-q2",
      title: "LVI Report (Q2)",
      type: "white-paper",
      category: "industry",
      status: "idea",
      dueDate: "2026-09-25",
      owner: "Jenn",
      links: [],
      notes: "Expecting data from Dan this week."
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
          { title: "Talking points", due: "2026-09-02", owner: "", status: "complete",
            links: [{ label: "Talking points (PDF)", url: "Product/Mobile%20Dialer%20copy/CA_mobile%20dialer_talking_points%20.pdf" }], notes: "" }
        ],
        external: [
          { title: "Launch article", due: "2026-09-02", owner: "", status: "complete",
            links: [{ label: "Read on cincpro.com", url: "https://www.cincpro.com/blog/never-take-call-notes-again-cincs-improved-mobile-dialer-for-real-estate-agents" }], notes: "" },
          { title: "Launch video", due: "2026-09-02", owner: "", status: "complete",
            links: [{ label: "Video script (Word)", url: "Product/Mobile%20Dialer%20copy/mobile_dialer_video_script.docx" }], notes: "Final cut delivered — not yet uploaded to a public host." }
        ]
      },
      checklist: [
        { item: "Positioning & messaging doc", done: false },
        { item: "Sales enablement / one-pager", done: true },
        { item: "Launch email(s)", done: false },
        { item: "In-app announcement", done: false },
        { item: "Webinar or demo video", done: true },
        { item: "Blog / press release", done: true }
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
      description: "New AI & SEO Settings section (Settings > General) that lets clients feed AI platforms and search engines structured information about their business via an llms.txt file and JSON-LD structured data.",
      launchDate: "",
      links: [],
      notes: "Feature is already live for all clients — empty until the client fills it in.",
      plan: {
        milestones: [],
        internal: [
          { title: "Client advisor talking points", due: "", owner: "", status: "complete",
            links: [{ label: "Talking points (Word)", url: "Product/AI%20%26%20SEO%20copy/AI_SEO_Settings_Client_Advisor_Talking_Points.docx" }], notes: "" }
        ],
        sales: [],
        external: [
          { title: "Launch article", due: "", owner: "", status: "complete",
            links: [{ label: "Read on cincpro.com", url: "https://www.cincpro.com/blog/ai-is-already-recommending-agents.-make-sure-its-recommending-you" }], notes: "" }
        ]
      },
      checklist: [
        { item: "Positioning & messaging doc", done: true },
        { item: "Sales enablement / one-pager", done: false },
        { item: "Launch email(s)", done: false },
        { item: "In-app announcement", done: false },
        { item: "Webinar or demo video", done: false },
        { item: "Blog / press release", done: true }
      ]
    },
    {
      id: "gtm-call-ai",
      title: "Call AI",
      stage: "current",
      description: "AI voice calling built with Flair Labs — automatically calls new and high-intent leads, holds a qualifying conversation, and live-transfers interested ones to an agent.",
      launchDate: "",
      links: [
        { label: "Existing help article (Tamara)", url: "https://help.cincpro.com/s/article/CINC-Call-Ai-Through-Flair-Labs" }
      ],
      notes: "Webinar with Flair Labs tentatively scheduled for Oct 6 — still need a client to join and someone to run it day-of; promotions going out. Once confirmed, work backward on video and talking points (article already live). Also still discussing a possible joint webinar with Agent Accelerator, tentatively October — no date set.",
      plan: {
        milestones: [],
        internal: [],
        sales: [
          { title: "Sales one-pager", due: "", owner: "", status: "complete",
            links: [{ label: "One-pager (Word)", url: "Product/Call%20AI/CINC_Call_AI_One_Pager%20copy.docx" }], notes: "" }
        ],
        external: [
          { title: "Launch article", due: "", owner: "", status: "complete",
            links: [{ label: "Read on cincpro.com", url: "https://www.cincpro.com/blog/ai-phone-calls-in-real-estate" }], notes: "" }
        ]
      },
      checklist: [
        { item: "Positioning & messaging doc", done: false },
        { item: "Sales enablement / one-pager", done: true },
        { item: "Launch email(s)", done: false },
        { item: "In-app announcement", done: false },
        { item: "Webinar or demo video", done: false },
        { item: "Blog / press release", done: true }
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
      stage: "current",
      description: "",
      launchDate: "",
      links: [],
      notes: "Targeting launch end of September/early October.",
      plan: {
        milestones: [],
        internal: [],
        sales: [],
        external: [
          { title: "Launch article", due: "2026-09-17", owner: "Jenn", status: "complete", links: [], notes: "" }
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
