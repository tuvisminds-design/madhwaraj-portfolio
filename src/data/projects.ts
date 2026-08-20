export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  featured: boolean;
  problem: string;
  approach: string;
  outcome: string;
  productLens: string;
  tags: string[];
  artifacts: string[];
  drive?: string;
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const projects: Project[] = [
  {
    slug: "speakeasy",
    title: "SpeakEasy",
    subtitle: "AI public speaking assistant for introverts",
    category: "Self-initiated product",
    year: "2025",
    featured: true,
    problem:
      "Novice speakers and introverts freeze before they ever get to the stage — not because they lack ideas, but because they lack a structured, low-shame way to practice.",
    approach:
      "Independent discovery: user research, competitive teardown of Yoodli, Speeko, and Orai, then user journeys, low-fidelity wireframes, and a vibe-coded prototype tested with customers.",
    outcome:
      "A customer-tested prototype, not a scaled product. Feedback from early users and education-sector professionals went back into the concept. The real learning: emotional attachment to an idea is not product-market fit.",
    productLens:
      "I treated this as a PM apprenticeship — problem framing, competitor maps, onboarding flows, and stakeholder demos to education professionals — then killed the ‘must ship this’ instinct when the market signal was weak.",
    tags: ["Discovery", "Competitive analysis", "User journeys", "AI product"],
    artifacts: [
      "Problem space & pain-point notes",
      "Competitive analysis of 6+ speaking tools",
      "User journeys, low-fi wireframes, and a vibe-coded prototype",
      "Customer tests and feedback from education-sector professionals",
    ],
    sections: [
      {
        heading: "The problem I wanted to own",
        body: [
          "Public speaking anxiety is a well-served market on paper. In practice, most tools either grade your delivery after the fact or assume you already have a speech. I wanted a guided first mile: help someone who is stuck at a blank page structure a talk, rehearse it conversationally, and reduce the panic of ‘what do I even say’.",
        ],
      },
      {
        heading: "What I actually did",
        body: [
          "I mapped pain points, motivations, and unmet needs through independent research. I tore down Yoodli, Speeko, Orai and others on positioning, feature depth, and who they really serve. Then I designed onboarding and speech-structuring flows and walked early concepts past people in education.",
          "The honest outcome: I became attached to the idea. The market did not. That gap — building the right product versus building the right product for the current market — is what pushed me toward product analysis and product management rather than founder-by-emotion.",
        ],
      },
      {
        heading: "How I would run this as a PM",
        body: [
          "I would start with a narrower ICP (campus placement talks, not ‘everyone who is shy’), run five problem interviews before another wireframe, and test a conversational structured-outline prototype instead of a full coaching product. Scope would be one job-to-be-done: get a first draft out loud in ten minutes.",
        ],
      },
    ],
  },
  {
    slug: "conversational-ai",
    title: "HR Conversational AI",
    subtitle: "Intents, entities, and escalation for an employee chatbot",
    category: "AI product specs",
    year: "2026",
    featured: true,
    problem:
      "Employees ask the same HR questions every week — onboarding status, payslips, leave, relieving letters — and the bot only works if intents, entities, and human handoff are specified with the same care as a product spec.",
    approach:
      "Documented how conversational AI actually works (utterance → intent → entity → dialogue flow → fallback), then wrote an HR chatbot requirements pack with sample utterances and escalation rules.",
    outcome:
      "A reusable requirement document covering nine HR intents, entity types, and when the bot must stop guessing and route to HR or payroll.",
    productLens:
      "Chatbots fail as products when fallback is an afterthought. I treated fallback rate as a product metric, not an NLP footnote.",
    tags: ["Chatbots", "Intents", "Requirements", "HR"],
    artifacts: [
      "How Conversation AI works",
      "HR Chatbot Requirement Document",
      "Sample utterances, entities, escalation logic",
    ],
    drive: "https://drive.google.com/drive/folders/1Faw53WIqrzNVUxJNThUpgvauKf-pVybV",
    sections: [
      {
        heading: "Framing the product, not the model",
        body: [
          "Conversational AI is a stack: user, UI channel, LLM, and conversation manager. The interesting product work sits between utterance and fallback. Intent is ‘I want to book a service’. Entity is ‘20 August 2026’. Dialogue flow is Book service → Date → Time → Confirm. Fallback is what happens when confidence collapses.",
        ],
      },
      {
        heading: "HR chatbot requirements",
        body: [
          "The HR agent needed to cover onboarding, offboarding, payroll, relieving, leave, internal movement, attendance, policy, and benefits. I wrote sample utterances (‘What date will my salary be credited?’, ‘What documents are still pending for my onboarding?’) and listed entity types such as employee ID, joining date, document status, and notice period.",
          "Escalation was explicit: escalate onboarding if verification fails or SLA is breached; escalate payroll if salary is missing or a deduction is disputed; escalate offboarding if clearance is blocked. The bot is not the product if it cannot admit it does not know.",
        ],
      },
      {
        heading: "PM takeaway",
        body: [
          "This is the kind of spec I want to keep writing: not ‘the bot should be helpful’, but named intents, named entities, named failure modes. That is how you brief engineering and how you later measure quality.",
        ],
      },
    ],
  },
  {
    slug: "employee-onboarding",
    title: "Employee Onboarding Automation",
    subtitle: "BRD and user stories for a paperless day-one experience",
    category: "Process → product",
    year: "2026",
    featured: true,
    problem:
      "New joiners still sign annexures on paper, courier them, and wait for HR to verify — so they are not productive on day one.",
    approach:
      "Wrote a v1 BRD (purpose, problem, objectives, scope, stakeholders, as-is, to-be, business rules) and a user-story set for an HRMS-backed digital onboarding flow on IB-X.",
    outcome:
      "A scoped automation proposal aiming to cut onboarding time, drop paper forms, and keep an audit trail — with payroll and attendance explicitly out of scope.",
    productLens:
      "Scope is a product decision. I kept payroll and appraisal out so the first release could be ‘join, sign, start’.",
    tags: ["BRD", "User stories", "HRMS", "IB-X"],
    artifacts: [
      "BRD for Employee Onboarding Process v1",
      "User stories spreadsheet",
      "As-is vs proposed digital flow",
    ],
    drive: "https://drive.google.com/drive/folders/1crl9pad2Nm4bBa9-KS51M7O96u05TT5G",
    sections: [
      {
        heading: "Business problem",
        body: [
          "Onboarding still ran on annexures A–D, courier, and HR verification before a welcome email went out. The cost is not stationery — it is a delayed first week and error-prone records.",
        ],
      },
      {
        heading: "What went into the BRD",
        body: [
          "Objectives: reduce onboarding time by 60%, eliminate paper, improve experience, reduce manual errors, keep an audit trail. In scope: digital forms, manager and HR approval, welcome email, employee record creation. Out of scope: payroll, attendance, appraisal.",
          "The proposed flow: HR is notified of a join date in HRMS; credentials exist on day one; documents are signed digitally; the joiner reports to their manager. Business rules included unique employee IDs, no past joining dates, HR as finaliser, and mandatory manager approval.",
        ],
      },
      {
        heading: "PM takeaway",
        body: [
          "A good BRD is a product contract. Naming out-of-scope items is how you protect the first release. Assumptions (HRMS APIs, email service, employee internet access) are risks, not boilerplate.",
        ],
      },
    ],
  },
  {
    slug: "invoice-processing",
    title: "Invoice Processing & IDP",
    subtitle: "Three-way match, as-is mapping, and intelligent document intake",
    category: "Finance operations",
    year: "2026",
    featured: true,
    problem:
      "Accounts payable still receives invoices by mail, checks them by hand, and only then matches PO, GRN, and invoice — so exceptions sit in inboxes instead of a queue.",
    approach:
      "Documented the as-is AP narrative end to end, then captured requirements for intelligent document processing (IDP) so extraction and exception handling could be designed as a product, not a bot demo.",
    outcome:
      "A clear process baseline: receive → verify → three-way match → exception hold → approval → ERP entry → payment → archive.",
    productLens:
      "The product is not ‘OCR the invoice’. The product is exception handling: what happens when amount, quantity, or vendor does not match.",
    tags: ["AP", "IDP", "As-is mapping", "Exceptions"],
    artifacts: [
      "Invoice Processing As-is Process",
      "Invoice Processing Exercise",
      "Requirements for IDP for invoice handling",
    ],
    drive: "https://drive.google.com/drive/folders/12V93-HsZBXBJqDrfs9bFnt6jMxNc44VC",
    sections: [
      {
        heading: "As-is process",
        body: [
          "Vendor invoices arrive by email, paper, or portal. AP records receipt, checks vendor, invoice number, date, amount, and tax, then matches against PO and GRN. Three-way match is the gate. Mismatches go on hold while AP coordinates with procurement and the vendor. Approvers accept or reject. Finance schedules payment; the invoice is archived.",
        ],
      },
      {
        heading: "Where a product can live",
        body: [
          "IDP only pays off if extraction confidence, mismatch reasons, and hold states are first-class. I wrote requirements so automation would sit inside that exception path rather than pretending every invoice is clean.",
        ],
      },
    ],
  },
  {
    slug: "erp-migration",
    title: "ERP Migration",
    subtitle: "BRD, change plan, and test cases for leaving a 15-year-old system",
    category: "Change & delivery",
    year: "2026",
    featured: true,
    problem:
      "A 15-year-old ERP could not support how the business actually worked, so people invented Excel trackers, duplicate entry, and manual reconciliation.",
    approach:
      "Wrote the migration BRD (as-is, cutover, parallel run, functional and non-functional requirements), a change management plan, and a test-case sheet.",
    outcome:
      "Requirements covering training, support tickets, FAQs, adoption monitoring, and a 99% uptime expectation — so migration is treated as a people problem, not only a data problem.",
    productLens:
      "Adoption is the product. If operators keep Excel, the new ERP is a failed launch even if cutover is ‘green’.",
    tags: ["Migration", "Change management", "Test cases", "ERP"],
    artifacts: [
      "BRD Migration Project",
      "Change Management Plan",
      "Test cases spreadsheet",
    ],
    drive: "https://drive.google.com/drive/folders/1cglWN-9yddkWrlSZGLwz9KznNwWYe1R1",
    sections: [
      {
        heading: "As-is: the shadow system",
        body: [
          "Transactions still hit the old ERP, then hit Excel, email, and side documents. Duplicate entry and monthly reconciliation were the real process. Reports were assembled by hand for management.",
        ],
      },
      {
        heading: "Requirements that treat people as users",
        body: [
          "Functional requirements included role-based training, session scheduling, notifications, practice scenarios, issue tickets with a status pipeline, FAQs, feedback, and reports on who still uses legacy workarounds. Non-functional asks: performance, single source of data, 99% uptime, and room to scale.",
          "Cutover and parallel run were named explicitly: a task list to switch, and a period where both systems run so the organisation can trust the new one.",
        ],
      },
    ],
  },
  {
    slug: "expense-reimbursement",
    title: "Expense Reimbursement",
    subtitle: "Workflow, approval thresholds, and sprint-ready user stories",
    category: "Finance operations",
    year: "2026",
    featured: false,
    problem:
      "Employees pay out of pocket, compile reports, and wait on manager then finance — with unclear thresholds for when the CEO must sign.",
    approach:
      "Mapped as-is, proposed a form-based workflow, wrote FRs and user stories, then sliced epics into three sprints.",
    outcome:
      "A backlog-shaped spec: submission → manager decision → finance review (with amount edit) → pay, plus approval bands for large claims.",
    productLens:
      "I wrote this like a delivery backlog, not a process essay — epics, sprints, and stories a team could pull.",
    tags: ["User stories", "Approvals", "Workflow", "Backlog"],
    artifacts: [
      "Employee expense As-is",
      "Functional requirements FR-001 to FR-005",
      "Epics and sprint slices",
    ],
    drive: "https://drive.google.com/drive/folders/1N3g6HpB-TYpPU7Xsjh-6buffvOh7IC9R",
    sections: [
      {
        heading: "Proposed product flow",
        body: [
          "Employee submits a form; manager approves or rejects; finance reviews, can edit amount, then pays. Thresholds: claims in a mid band can go without CEO approval if funds exist; very large claims cannot skip CEO review.",
        ],
      },
      {
        heading: "Backlog shape",
        body: [
          "Sprint 1: employee submission and manager review. Sprint 2: decision tracking and finance notification. Sprint 3: finance review, amount correction, approve/reject. Stories were written in ‘as a… I should be able to… so that…’ form for employee, manager, finance executive, and CFO.",
        ],
      },
    ],
  },
  {
    slug: "employee-offboarding",
    title: "Employee Offboarding",
    subtitle: "Exit workflow with asset return and full-and-final settlement",
    category: "Process → product",
    year: "2026",
    featured: false,
    problem:
      "Exit still depends on HR calling people, informal KT, and a late experience letter — with weak control over asset return.",
    approach:
      "Documented as-is gaps, then proposed an IB-X solution: relieve request, asset-return form with asset image, finance task for F&F, account closure.",
    outcome:
      "A to-be flow that makes IT and finance first-class actors in exit, not afterthoughts.",
    productLens:
      "Offboarding is an operations product with a hard SLA: last working day. Assets and money are the two failure modes that hurt trust.",
    tags: ["IB-X", "Exit", "Assets", "HR"],
    artifacts: [
      "Employee Offboarding narrative",
      "Employee Off-Boarding IB-X Solution",
    ],
    drive: "https://drive.google.com/drive/folders/1VfSpPb4r9lZ-xsp716gmd5USgMRM1Pey",
    sections: [
      {
        heading: "As-is and gaps",
        body: [
          "Relieve request in HRMS, HR phone verification, knowledge transfer date, then experience letter and settlement. Manual document checks are slow and easy to miss.",
        ],
      },
      {
        heading: "Proposed automation",
        body: [
          "Form-based relieve request, asset-return form where entering an asset number surfaces an image for IT, finance tasked to pay F&F by a date, and the salary account closed after. Exit becomes a cross-functional workflow instead of a sequence of calls.",
        ],
      },
    ],
  },
  {
    slug: "traf-fix",
    title: "TRAF-FIX",
    subtitle: "Real-time congestion alerts for Pune commuters",
    category: "Academic product",
    year: "2023",
    featured: false,
    problem:
      "Commuters on corridors like Senapati Bapat Road learn about jams too late to change route.",
    approach:
      "Collaborative academic project: UI mock-ups, user workflows, feature definition for congestion tracking and alerts, plus a light feasibility pass.",
    outcome:
      "A concept app with documented workflows and mock-ups — planning and design, not a production system.",
    productLens:
      "The product question is not ‘can we show traffic’ (maps already do). It is ‘what alert, on which corridor, at which lead time, changes a commute decision?’",
    tags: ["Mobile", "Workflows", "UI mock-ups", "Pune"],
    artifacts: ["UI mock-ups", "User workflows", "Feature and requirements notes"],
    sections: [
      {
        heading: "Scope of the academic build",
        body: [
          "We proposed a traffic alert system for congestion on Senapati Bapat Road in Pune. I contributed mock-ups, user workflows, and feature definition for tracking and notifications as part of a team project.",
        ],
      },
    ],
  },
  {
    slug: "plant-analytics",
    title: "Plant Operations Dashboards",
    subtitle: "Power BI visibility for manufacturing leadership",
    category: "Analytics",
    year: "2021",
    featured: false,
    problem:
      "Plant leaders could not see production, quality, and efficiency in one place, so improvement talks started from anecdotes.",
    approach:
      "Root-cause analysis plus Power BI (and later Looker Studio) dashboards, with data integration to shrink reporting lag.",
    outcome:
      "Leadership views of operational trends and bottlenecks; reporting time reduced by automating plant data pull into the dashboard layer.",
    productLens:
      "A dashboard is a product if someone uses it in a meeting to decide. I designed for that moment: KPIs, trends, and a path from ‘red’ to a cause.",
    tags: ["Power BI", "Looker Studio", "Manufacturing", "KPIs"],
    artifacts: ["Operational dashboards", "Root-cause notes", "KPI views"],
    sections: [
      {
        heading: "What I built",
        body: [
          "At PV Clean Mobility Technologies I analysed process inefficiencies and built dashboards so leaders could see production, quality, and efficiency. ETL-style integration in Power BI cut reporting lag. The job was less ‘pretty charts’ and more ‘make the plant legible’.",
        ],
      },
    ],
  },
  {
    slug: "document-processing",
    title: "Document Digitisation",
    subtitle: "From paper piles to a queryable repository",
    category: "AI + operations",
    year: "2026",
    featured: false,
    problem:
      "Paper is scanned, named by hand, logged in Excel, and retrieved by memory — so records vanish or get misfiled.",
    approach:
      "Mapped as-is digitisation steps, listed gaps, proposed IB-X ingestion plus OCR and an AI agent that can answer questions on the corpus.",
    outcome:
      "A to-be model: central repository, chronological ingest, access control, and Q&A instead of folder archaeology.",
    productLens:
      "Digitisation is not scanning. The product is retrieval: metadata, permissions, and a question interface.",
    tags: ["OCR", "IB-X", "Knowledge", "Records"],
    artifacts: ["Digitizing Paper Based Documents"],
    drive: "https://drive.google.com/drive/folders/1di0NnlXpiqg4b5CZ2Dl7jeNheVeInfQG",
    sections: [
      {
        heading: "As-is and proposed",
        body: [
          "Today: receive paper, scan, name, upload, log in Excel, retrieve manually. Gaps: time, accidental deletes, messy categories, bad file names.",
          "Proposed: central repository, IB-X ingestion, chronological storage, OCR for images, and an AI agent so people ask questions instead of hunting files. Access control is part of the product, not an IT add-on.",
        ],
      },
    ],
  },
  {
    slug: "payroll",
    title: "Payroll Processing",
    subtitle: "As-is mapping for a high-stakes monthly workflow",
    category: "HR operations",
    year: "2026",
    featured: false,
    problem:
      "Payroll is unforgiving: one missed input becomes a wrong credit and a spike of tickets.",
    approach:
      "Documented as-is payroll processing and a companion process note to locate where automation and validation should sit.",
    outcome:
      "A process baseline to pair with the HR chatbot’s payroll intent — so bot answers and back-office flow do not contradict each other.",
    productLens:
      "Payroll products win on exception handling and explanation (‘why is August lower than July?’), not on running the happy path.",
    tags: ["Payroll", "As-is", "HR"],
    artifacts: ["Payroll Processing", "Payroll Processing As-is"],
    drive: "https://drive.google.com/drive/folders/1U4w6V8oH-Y0_VfQwjtBbLS_C2whRkxAY",
    sections: [
      {
        heading: "Why this sits next to the chatbot work",
        body: [
          "The HR agent’s payroll intent only works if the back office is understood. I mapped payroll processing so chatbot answers, escalations, and ops reality stay aligned.",
        ],
      },
    ],
  },
  {
    slug: "purchase-order",
    title: "Purchase Order Approval",
    subtitle: "As-is narrative and BPMN for PO creation",
    category: "Procurement",
    year: "2026",
    featured: false,
    problem:
      "PO approval is a chain of handoffs. If the narrative and the diagram disagree, automation will encode the wrong process.",
    approach:
      "Wrote the as-is narrative for PO approval and captured a BPMN diagram so the flow could be reviewed with operations.",
    outcome:
      "Paired narrative + diagram — the format I use when a process is about to be automated.",
    productLens:
      "BPMN is a product artifact when it is the contract between analyst, ops, and RPA. If stakeholders cannot read it, it is decoration.",
    tags: ["BPMN", "Procurement", "As-is"],
    artifacts: ["As-is narrative for PO Approval", "BPMN diagram (.drawio)"],
    drive: "https://drive.google.com/drive/folders/1ptqzD4aHVWUVJXA8h_utjZqcPL7SpDdI",
    sections: [
      {
        heading: "Method",
        body: [
          "I start with a prose as-is so a manager can disagree in sentences, then lock the same flow in BPMN so engineering and RPA have a single picture. PO approval is a classic candidate: many roles, one document, expensive mistakes.",
        ],
      },
    ],
  },
  {
    slug: "budget-variance",
    title: "Budget Variance",
    subtitle: "Explaining the gap between plan and actual",
    category: "Finance analysis",
    year: "2026",
    featured: false,
    problem:
      "Variance is a management conversation. Without a shared process for how it is calculated and reviewed, it becomes a blame chart.",
    approach:
      "Documented budget variance and accompanied it with a process diagram.",
    outcome:
      "A written and visual explanation of how variance should be read as a control loop, not a one-off report.",
    productLens:
      "If I productise this, the job is ‘tell me why we missed and who owns the next action’ — not another spreadsheet tab.",
    tags: ["Finance", "Variance", "Process diagram"],
    artifacts: ["Budget Variance document", "Budget variance .drawio"],
    drive: "https://drive.google.com/drive/folders/174NjLRia7K5GiecVTmqANcSUO-4uwFOl",
    sections: [
      {
        heading: "Lens",
        body: [
          "Variance work sits with my analytics background: numbers only matter when they change a decision. The document and diagram were about making that review ritual explicit.",
        ],
      },
    ],
  },
  {
    slug: "uipath-scheduling",
    title: "UiPath Bot Scheduling",
    subtitle: "Business case for unattended Excel scheduling",
    category: "RPA",
    year: "2026",
    featured: false,
    problem:
      "A bot that only runs when someone remembers is not automation — it is a chore with extra software.",
    approach:
      "Wrote a business case for UiPath bot scheduling and built an Excel Scheduler Bot workflow as a concrete artefact.",
    outcome:
      "A case for scheduled, unattended runs instead of click-to-start bots.",
    productLens:
      "RPA value is reliability. Scheduling, failure alerts, and ownership are the product surface, not the XAML file.",
    tags: ["UiPath", "RPA", "Business case"],
    artifacts: ["UiPath Bot Scheduling Business Case", "Excel Scheduler Bot.xaml"],
    drive: "https://drive.google.com/drive/folders/1Ff743QOSLMbKusbPHrD86E_2Osgm4RzD",
    sections: [
      {
        heading: "Why scheduling is the feature",
        body: [
          "I treated scheduling as the actual product decision: when does the bot run, what happens when Excel is locked, who is paged when it fails. The XAML is proof of skill; the business case is the PM artefact.",
        ],
      },
    ],
  },
  {
    slug: "agile-vs-waterfall",
    title: "Agile vs Waterfall",
    subtitle: "When to sequence a build versus ship in slices",
    category: "Delivery method",
    year: "2026",
    featured: false,
    problem:
      "Teams still argue method as identity. The useful question is where requirements are stable enough for a sequence, and where change is the plan.",
    approach:
      "Compared Waterfall and Scrum on approach, requirements, delivery, BA involvement, change, feedback, testing, and documentation — using expense-report automation as the worked example.",
    outcome:
      "A one-page comparison plus an epic framing: expense automation as submission → approval → finance → reimbursement, not one big-bang system.",
    productLens:
      "A BA in Agile does not disappear after the BRD. Involvement is continuous, documentation is just enough, and an epic is a capability that cannot fit in one sprint.",
    tags: ["Agile", "Waterfall", "Epics", "Delivery"],
    artifacts: ["Agile Vs Waterfall comparison"],
    drive: "https://drive.google.com/drive/folders/1_z43F4wkdgtkrtx6fD6uaAEUbFvD-7fX",
    sections: [
      {
        heading: "The comparison I actually needed",
        body: [
          "Waterfall: sequential, requirements largely upfront, delivery at the end, heavy BA work at the start, change is expensive. Agile: iterative, requirements evolve, incremental delivery, continuous BA involvement, change is expected. Expense reimbursement is the example — do not wait to build the entire system; ship submission, then approval, then finance, then pay.",
        ],
      },
    ],
  },
  {
    slug: "waste-management",
    title: "Waste Management in Heavy Industry",
    subtitle: "Workflow concept for compliant disposal",
    category: "Academic product",
    year: "2024",
    featured: false,
    problem:
      "Heavy-machinery manufacturers need a clearer path to follow disposal rules — the gap is coordination, not a lack of regulation.",
    approach:
      "Analysed operational inefficiencies, then turned findings into Figma wireframes and a solution concept connecting manufacturers with the compliance process.",
    outcome:
      "A presentation and wireframes for a fictional coordination app — analysis plus product sketch, shared with project stakeholders.",
    productLens:
      "I used wireframes the way I use them as a BA: a picture that collapses a 12-page requirements debate.",
    tags: ["Figma", "Compliance", "Workflow", "Manufacturing"],
    artifacts: ["Operational analysis", "Figma wireframes", "Stakeholder presentation"],
    sections: [
      {
        heading: "From analysis to a product sketch",
        body: [
          "This academic project asked how chemical and heavy-industry players stay inside disposal rules. I analysed process gaps and visualised a workflow product so stakeholders could react to a screen, not a paragraph.",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
export const moreProjects = projects.filter((project) => !project.featured);
export const driveProjects = projects.filter((project) => Boolean(project.drive));

export const processLibraryGroups = [
  {
    title: "People & HR",
    blurb: "Employee journeys, chatbot intents, and payroll as a product surface.",
    slugs: [
      "conversational-ai",
      "employee-onboarding",
      "employee-offboarding",
      "payroll",
    ],
  },
  {
    title: "Finance & operations",
    blurb: "As-is maps, approvals, exceptions, and intelligent document intake.",
    slugs: [
      "invoice-processing",
      "expense-reimbursement",
      "purchase-order",
      "budget-variance",
      "document-processing",
    ],
  },
  {
    title: "Systems & delivery",
    blurb: "Migration, unattended bots, and how the work gets sliced.",
    slugs: ["erp-migration", "uipath-scheduling", "agile-vs-waterfall"],
  },
] as const;
