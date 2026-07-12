export const STATS = {
  founded: 2007,
  saccos: 50,
  members: 12000,
  capitalM: 41.6,
  savingsM: 60.9,
  loanPortfolioM: 152,
};

export const SACCOS = [
  { name: "Adama Central SACCO", location: "Adama", members: 620, founded: 2008 },
  { name: "Mojo Farmers SACCO", location: "Mojo", members: 450, founded: 2009 },
  { name: "Bishoftu Traders Union", location: "Bishoftu", members: 380, founded: 2010 },
  { name: "Nazret Women's SACCO", location: "Adama", members: 512, founded: 2010 },
  { name: "Wonji Sugar Workers", location: "Wonji", members: 290, founded: 2011 },
  { name: "Awash Melkassa SACCO", location: "Melkassa", members: 205, founded: 2012 },
  { name: "Dera Cooperative", location: "Dera", members: 178, founded: 2012 },
  { name: "Sodere Community", location: "Sodere", members: 260, founded: 2013 },
  { name: "Bofa Youth SACCO", location: "Bofa", members: 145, founded: 2014 },
  { name: "Boset Rural SACCO", location: "Boset", members: 320, founded: 2014 },
  { name: "Alem Tena Traders", location: "Alem Tena", members: 195, founded: 2015 },
  { name: "Wolenchiti Union", location: "Wolenchiti", members: 240, founded: 2015 },
  { name: "Adama Textile Workers", location: "Adama", members: 410, founded: 2016 },
  { name: "Modjo Leather SACCO", location: "Mojo", members: 155, founded: 2016 },
  { name: "Kaliti Farmers", location: "Kaliti", members: 220, founded: 2017 },
  { name: "Metahara Agricultural", location: "Metahara", members: 385, founded: 2017 },
  { name: "Awash Arba SACCO", location: "Awash", members: 175, founded: 2018 },
  { name: "Adama University Staff", location: "Adama", members: 480, founded: 2018 },
  { name: "Bishoftu Poultry Union", location: "Bishoftu", members: 132, founded: 2019 },
  { name: "Sire Rural Coop", location: "Sire", members: 210, founded: 2019 },
  { name: "Doni Cooperative", location: "Doni", members: 165, founded: 2020 },
  { name: "Fentale Livestock", location: "Fentale", members: 245, founded: 2020 },
  { name: "Adama Merchants Guild", location: "Adama", members: 540, founded: 2020 },
  { name: "Sodere Hospitality", location: "Sodere", members: 128, founded: 2021 },
  { name: "Meki Farmers Coop", location: "Meki", members: 350, founded: 2021 },
];

export type SaccoRow = (typeof SACCOS)[number];

export const MILESTONES = [
  { year: "2007", title: "Union Founded", desc: "Abdi Gudina established in Adama with 8 founding SACCOs." },
  { year: "2010", title: "First Loan Program", desc: "Launched member-directed lending capped at 500,000 Birr." },
  { year: "2013", title: "Insurance Product", desc: "Credit-life insurance introduced for all borrowers." },
  { year: "2016", title: "Investment Arm", desc: "Diversified into grain trading and agro-chemical supply." },
  { year: "2019", title: "50 SACCO Milestone", desc: "Membership reached 10,000 individuals across 50 SACCOs." },
  { year: "2022", title: "Capital Doubling", desc: "Union capital grew past 30M Birr; loan portfolio topped 100M Birr." },
  { year: "2025", title: "Digital Transformation", desc: "Rolled out digital record-keeping and member reporting tools." },
  { year: "2026", title: "19th Anniversary", desc: "12,000+ members, 152M Birr loan portfolio, expanded training." },
];

export type PersonBody = "board" | "management" | "committee";

export type Person = {
  slug: string;
  name: string;
  role: string;
  body: PersonBody;
  tenure?: string;
  bio: string;
  focus: string[];
  education: string;
  hometown: string;
  quote: string;
};

export const PEOPLE: Person[] = [
  {
    slug: "bekele-diriba",
    name: "Ato Bekele Diriba",
    role: "Board Chairperson",
    body: "board",
    tenure: "Since 2021",
    bio: "Ato Bekele has served the cooperative movement for over two decades, first as a SACCO founding member in Adama and later as a regional coordinator with the Oromia Cooperative Bureau. He was elected Chairperson in 2021 and re-elected in 2024.",
    focus: ["Governance", "Strategic Planning", "Member Relations"],
    education: "BA, Cooperative Management — Ambo University",
    hometown: "Adama, Oromia",
    quote: "The Union belongs to its members. Our job is to protect that ownership across every generation.",
  },
  {
    slug: "almaz-tesfaye",
    name: "W/ro Almaz Tesfaye",
    role: "Vice Chairperson",
    body: "board",
    tenure: "Since 2022",
    bio: "W/ro Almaz brings 15 years of experience in women's cooperative organizing across the Rift Valley. She chairs the Union's Women & Youth Committee and represents AG Union at ICA Africa forums.",
    focus: ["Women in Finance", "Youth Programs", "External Partnerships"],
    education: "MA, Development Studies — Addis Ababa University",
    hometown: "Bishoftu, Oromia",
    quote: "A cooperative that doesn't lift its women lifts only half its members.",
  },
  {
    slug: "gemechu-wako",
    name: "Ato Gemechu Wako",
    role: "Board Secretary",
    body: "board",
    tenure: "Since 2020",
    bio: "As Secretary, Ato Gemechu is responsible for board records, resolution tracking, and General Assembly convening. He is a certified cooperative auditor and previously managed the Mojo Farmers SACCO.",
    focus: ["Board Records", "Assembly Coordination", "Compliance"],
    education: "BSc, Accounting — Adama Science & Technology University",
    hometown: "Mojo, Oromia",
    quote: "Good minutes are the beginning of good governance.",
  },
  {
    slug: "tolera-bekele",
    name: "Ato Tolera Bekele",
    role: "Board Member",
    body: "board",
    tenure: "Since 2023",
    bio: "A grain trader and long-time SACCO leader from Meki, Ato Tolera brings deep grassroots credibility and market insight to the Union's investment decisions.",
    focus: ["Investment Portfolio", "Rural Enterprise"],
    education: "Diploma, Business Administration",
    hometown: "Meki, Oromia",
    quote: "Capital is only useful when it moves through real markets.",
  },
  {
    slug: "chaltu-hirpo",
    name: "W/ro Chaltu Hirpo",
    role: "Board Member",
    body: "board",
    tenure: "Since 2023",
    bio: "W/ro Chaltu founded a women-led textile cooperative in Adama in 2011 and now serves on the Union board, focusing on member services and training.",
    focus: ["Member Services", "Training", "Women's Enterprise"],
    education: "BA, Business — Rift Valley University",
    hometown: "Adama, Oromia",
    quote: "Training is the loan that never has to be repaid.",
  },
  {
    slug: "firaol-gemeda",
    name: "Ato Firaol Gemeda",
    role: "Board Member",
    body: "board",
    tenure: "Since 2024",
    bio: "Ato Firaol represents youth SACCOs on the board. He led the digitization pilot in five member cooperatives during 2025-2026.",
    focus: ["Digital Systems", "Youth SACCOs"],
    education: "BSc, Information Systems — Adama Science & Technology University",
    hometown: "Adama, Oromia",
    quote: "Every SACCO deserves the same tools a commercial bank has.",
  },
  {
    slug: "dereje-bekele",
    name: "Ato Dereje Bekele",
    role: "General Manager",
    body: "management",
    tenure: "Since 2019",
    bio: "Ato Dereje leads the Union's professional staff of 24 and reports to the Board of Directors. He joined AG Union as Finance Director in 2015 before being appointed General Manager in 2019.",
    focus: ["Executive Leadership", "Strategy", "Regulatory Relations"],
    education: "MBA — Addis Ababa University · BA Accounting",
    hometown: "Adama, Oromia",
    quote: "Every Birr we hold belongs to a member.",
  },
  {
    slug: "meseret-alemu",
    name: "W/ro Meseret Alemu",
    role: "Finance Director",
    body: "management",
    tenure: "Since 2020",
    bio: "W/ro Meseret oversees treasury, financial reporting, and audit coordination. She previously worked at the Cooperative Bank of Oromia for eight years.",
    focus: ["Treasury", "Financial Reporting", "Audit"],
    education: "ACCA · BA Accounting — Addis Ababa University",
    hometown: "Adama, Oromia",
    quote: "Books that balance to the Birr are the first act of trust.",
  },
  {
    slug: "habtamu-gizaw",
    name: "Ato Habtamu Gizaw",
    role: "Loans & Credit Director",
    body: "management",
    tenure: "Since 2018",
    bio: "Ato Habtamu leads underwriting, disbursement, and portfolio monitoring for the Union's 152M Birr loan portfolio. He designed the Union's 14% standardized lending rate.",
    focus: ["Credit Assessment", "Portfolio Risk", "Loan Operations"],
    education: "MSc, Development Finance — Bahir Dar University",
    hometown: "Bishoftu, Oromia",
    quote: "A loan is a promise between neighbors — we underwrite it that way.",
  },
  {
    slug: "bontu-fufa",
    name: "W/ro Bontu Fufa",
    role: "Member Services Director",
    body: "management",
    tenure: "Since 2021",
    bio: "W/ro Bontu manages SACCO relations, member training programs, and the annual capacity-building calendar.",
    focus: ["SACCO Relations", "Training", "Field Support"],
    education: "BA, Cooperative Studies — Ambo University",
    hometown: "Wolenchiti, Oromia",
    quote: "Serving 50 SACCOs means being on 50 roads a year.",
  },
  {
    slug: "kebede-worku",
    name: "Ato Kebede Worku",
    role: "Control Committee Chair",
    body: "committee",
    tenure: "Since 2022",
    bio: "Ato Kebede chairs the independent three-member Control Committee, elected directly by the General Assembly to audit Union operations and report to members.",
    focus: ["Internal Audit", "Oversight", "Assembly Reporting"],
    education: "BSc, Accounting · Certified Cooperative Auditor",
    hometown: "Adama, Oromia",
    quote: "Oversight is not distrust — it is what makes trust survive.",
  },
  {
    slug: "hanna-lemma",
    name: "W/ro Hanna Lemma",
    role: "Control Committee Member",
    body: "committee",
    tenure: "Since 2023",
    bio: "W/ro Hanna reviews loan approval documentation and quarterly financial statements for the Control Committee.",
    focus: ["Loan Review", "Financial Statements"],
    education: "BA, Accounting — Rift Valley University",
    hometown: "Nazret, Oromia",
    quote: "Every line item is somebody's savings.",
  },
  {
    slug: "solomon-abera",
    name: "Ato Solomon Abera",
    role: "Control Committee Member",
    body: "committee",
    tenure: "Since 2024",
    bio: "Ato Solomon focuses on procurement and vendor compliance reviews, ensuring Union spending aligns with cooperative principles.",
    focus: ["Procurement Review", "Compliance"],
    education: "Diploma, Business Administration",
    hometown: "Mojo, Oromia",
    quote: "Discipline in the small things protects the whole Union.",
  },
];

export const BOARD = PEOPLE.filter((p) => p.body === "board");
export const MANAGEMENT = PEOPLE.filter((p) => p.body === "management");
export const COMMITTEE = PEOPLE.filter((p) => p.body === "committee");

export const NEWS = [
  {
    slug: "19th-anniversary",
    date: "Jul 5, 2026",
    tag: "Announcement",
    title: "AG Union celebrates its 19th anniversary",
    excerpt: "Abdi Gudina marked 19 years of cooperative service with a ceremony attended by member SACCOs and regional partners.",
    body: [
      "On July 5th, Abdi Gudina Financial Cooperatives Union celebrated its 19th anniversary at a ceremony held at its Adama headquarters. Representatives of all 50 member SACCOs joined regional cooperative officials, partner NGOs, and long-standing members to reflect on the union's journey since 2007.",
      "The event opened with a recap of the union's growth from 8 founding SACCOs to today's 12,000+ members, 41.6M Birr in capital, and 152M Birr disbursed in member lending. Board Chairperson Ato Bekele Diriba emphasized the union's continued commitment to member-owned finance and community development.",
      "Awards were presented to the top-performing SACCOs of the year, and a new capacity-building fund was announced for 2026-2027.",
    ],
  },
  {
    slug: "2026-general-assembly",
    date: "Jun 20, 2026",
    tag: "Governance",
    title: "2026 Annual General Assembly convened",
    excerpt: "Representatives from all 50 member SACCOs gathered in Adama to review the year and adopt the 2026–2030 strategic plan.",
    body: [
      "The 2026 Annual General Assembly of Abdi Gudina Financial Cooperatives Union was convened on June 20th with delegates from all 50 member SACCOs. Attendees reviewed audited financial statements for the fiscal year and approved the 2026-2030 strategic plan.",
      "Key resolutions included expanding the loan portfolio to 200M Birr by 2028, launching a digital member portal, and doubling the annual capacity-building budget.",
    ],
  },
  {
    slug: "sacco-leader-training",
    date: "Jun 10, 2026",
    tag: "Capacity Building",
    title: "New training program launched for SACCO leaders",
    excerpt: "A dedicated capacity-building initiative targeting committee members and employees of member cooperatives is now underway.",
    body: [
      "AG Union launched a new training program aimed at SACCO board members, committee leaders, and full-time employees. The curriculum covers cooperative governance, financial management, credit assessment, and digital record keeping.",
      "The program will run in three cohorts throughout 2026 with a target of training over 200 participants from across the Union's 50 member SACCOs.",
    ],
  },
  {
    slug: "grain-market-partnership",
    date: "May 22, 2026",
    tag: "Investment",
    title: "New grain trading partnership announced",
    excerpt: "The Union's investment arm signs a strategic agreement to expand grain trading operations across the Oromia region.",
    body: [
      "A new partnership between AG Union's investment portfolio and regional grain producers will expand aggregation and trading capacity in 2026, providing more predictable pricing for smallholder members.",
    ],
  },
  {
    slug: "insurance-expansion",
    date: "Apr 15, 2026",
    tag: "Announcement",
    title: "Credit-life insurance now covers all active loans",
    excerpt: "Every active loan issued through member SACCOs now automatically includes credit-life protection at no additional member cost.",
    body: [
      "As of April, all active loans issued through member SACCOs are covered by the Union's credit-life insurance program, protecting borrower families in the event of unforeseen loss.",
    ],
  },
  {
    slug: "digital-portal-pilot",
    date: "Mar 8, 2026",
    tag: "Technology",
    title: "Digital member portal enters pilot phase",
    excerpt: "Five pilot SACCOs begin testing a new digital member portal for balances, statements, and loan applications.",
    body: [
      "A pilot of the new digital member portal is underway at five member SACCOs. The platform lets members check savings balances, download statements, and initiate loan applications from their phones.",
    ],
  },
];

export type Story = {
  slug: string;
  name: string;
  role: string;
  location: string;
  loan: string;
  since: string;
  quote: string;
  summary: string;
  before: string;
  after: string;
  chapters: { title: string; body: string }[];
  outcomes: { label: string; value: string }[];
};

export const STORIES: Story[] = [
  {
    slug: "almaz-hailu",
    name: "Almaz Hailu",
    role: "Merchant",
    location: "Adama",
    loan: "2.9M Birr",
    since: "Member since 2016",
    quote: "The transition from a government employee to a successful merchant was possible because Abdi Gudina believed in my vision.",
    summary: "Almaz left a stable civil service job to open a wholesale household-goods business in Adama. Two Union loans and a Nazret Women's SACCO share account carried her through the first two years.",
    before: "Junior officer at a regional bureau · 4,200 Birr monthly salary",
    after: "Wholesaler serving 60+ retailers · 4 employees · 2.9M Birr working capital",
    chapters: [
      { title: "The decision to leave", body: "In 2016, Almaz saved consistently through Nazret Women's SACCO for 18 months before applying for a first-stage loan. Her savings history — not collateral — carried the underwriting decision." },
      { title: "First working-capital loan", body: "A 350,000 Birr loan let Almaz secure a warehouse lease and her first two containers of goods. Credit-life insurance was included at no cost, giving her family protection through the repayment window." },
      { title: "Scaling to wholesale", body: "By 2022 she qualified for a 2.9M Birr expansion loan against her business's cash-flow history. She now supplies retailers across Adama, Mojo, and Bishoftu." },
    ],
    outcomes: [
      { label: "Loan disbursed", value: "2.9M Birr" },
      { label: "Jobs created", value: "4 employees" },
      { label: "Repayment record", value: "100% on time" },
    ],
  },
  {
    slug: "tesfaye-bekele",
    name: "Tesfaye Bekele",
    role: "Grain Trader",
    location: "Mojo",
    loan: "1.2M Birr",
    since: "Member since 2013",
    quote: "With a 1.2M Birr working-capital loan, I expanded my grain storage capacity threefold in two seasons.",
    summary: "Tesfaye aggregates teff and maize from smallholder farmers across the Mojo corridor. A Union working-capital line lets him buy at harvest and hold for peak season.",
    before: "Renting 40 sqm storage · thin margins",
    after: "120 sqm owned warehouse · consistent pre-financing to 30+ farmers",
    chapters: [
      { title: "The seasonal squeeze", body: "Grain traders live or die on their ability to buy at harvest. Without a credit line, Tesfaye could only trade what his own cash held." },
      { title: "Union working capital", body: "A 1.2M Birr revolving line financed through Mojo Farmers SACCO changed the equation. Tesfaye now pre-finances farmers at planting and buys their harvest at fair prices." },
    ],
    outcomes: [
      { label: "Storage capacity", value: "3× in 2 seasons" },
      { label: "Farmers pre-financed", value: "30+" },
      { label: "Repayment record", value: "100% on time" },
    ],
  },
  {
    slug: "meskerem-alemu",
    name: "Meskerem Alemu",
    role: "Bakery Owner",
    location: "Adama",
    loan: "480,000 Birr",
    since: "Member since 2018",
    quote: "My SACCO's savings-first culture taught me to plan. My first loan launched a bakery that now employs six women.",
    summary: "Meskerem's neighborhood bakery in Adama started with a first-stage 180,000 Birr loan and has since grown to employ six women full-time.",
    before: "Home baker · irregular income",
    after: "Full storefront · 6 employees · daily deliveries to 12 cafés",
    chapters: [
      { title: "Savings before credit", body: "Adama Central SACCO required 12 months of consistent savings before Meskerem's first application. That discipline set the rhythm for her whole business." },
      { title: "From storefront to supplier", body: "A follow-on 300,000 Birr loan financed a commercial oven and delivery bicycle. She now supplies 12 cafés across the city." },
    ],
    outcomes: [
      { label: "Loans across 4 years", value: "480,000 Birr" },
      { label: "Jobs created", value: "6 women employed" },
      { label: "Repayment record", value: "100% on time" },
    ],
  },
  {
    slug: "girma-wako",
    name: "Girma Wako",
    role: "Farmer",
    location: "Meki",
    loan: "220,000 Birr",
    since: "Member since 2019",
    quote: "Insurance coverage on my seasonal loan gave my family peace of mind through a difficult harvest.",
    summary: "Girma farms 3 hectares of onion and tomato outside Meki. Seasonal input loans from Meki Farmers Coop and credit-life protection kept his family stable through a lean year.",
    before: "Reliant on informal moneylenders at 40%+ interest",
    after: "Union credit at 14% with credit-life insurance included",
    chapters: [
      { title: "Breaking the moneylender cycle", body: "Before joining Meki Farmers Coop, Girma financed each planting season through informal lenders charging 40% or more. One bad season could take everything." },
      { title: "A season that tested the system", body: "The 2024 harvest was cut short by unseasonal rain. Union insurance covered outstanding loan interest for three months while Girma replanted." },
    ],
    outcomes: [
      { label: "Cost of capital", value: "40% → 14%" },
      { label: "Hectares farmed", value: "3 ha" },
      { label: "Insurance triggered", value: "1 season · covered" },
    ],
  },
  {
    slug: "bontu-fufa-textile",
    name: "Bontu Fufa",
    role: "Textile Cooperative",
    location: "Adama",
    loan: "3.4M Birr (cooperative)",
    since: "Member since 2011",
    quote: "We started with 8 members and 40,000 Birr. Today our cooperative moves over 3M Birr annually.",
    summary: "A women-led weaving cooperative in Adama that has grown from 8 to 34 members, moving over 3M Birr in traditional textiles annually.",
    before: "8 weavers · 40,000 Birr in circulating stock",
    after: "34 weavers · 3M+ Birr annual turnover · export to Djibouti",
    chapters: [
      { title: "Eight women, one loom", body: "The cooperative began in 2011 as an informal savings group. AG Union's first cooperative-to-cooperative loan of 400,000 Birr financed shared looms and raw cotton." },
      { title: "From local market to export", body: "By 2022 the cooperative was exporting cotton scarves to Djibouti. A 3M Birr expansion line financed a dye house and pattern designer." },
    ],
    outcomes: [
      { label: "Members", value: "8 → 34" },
      { label: "Annual turnover", value: "3M+ Birr" },
      { label: "Export markets", value: "Djibouti" },
    ],
  },
  {
    slug: "solomon-girma",
    name: "Solomon Girma",
    role: "Livestock Trader",
    location: "Fentale",
    loan: "850,000 Birr",
    since: "Member since 2020",
    quote: "Being part of a SACCO changed how I think about capital — it's no longer a favor, it's a shared engine.",
    summary: "Solomon aggregates cattle from pastoralist communities in Fentale and moves them to markets in Adama and Addis Ababa.",
    before: "Personal savings only · limited buying capacity",
    after: "Rotating 850,000 Birr line · consistent buying across 4 pastoral zones",
    chapters: [
      { title: "A pastoral supply chain", body: "Fentale's pastoral communities need reliable buyers who arrive with cash when the herd is ready. Solomon fills that role, and Union credit lets him arrive when the herds do." },
      { title: "Repayment discipline", body: "Every cycle closes at the Adama market. Solomon has never missed a payment in six years." },
    ],
    outcomes: [
      { label: "Zones served", value: "4 pastoral zones" },
      { label: "Rotating credit", value: "850,000 Birr" },
      { label: "Repayment record", value: "100% on time" },
    ],
  },
];

export type EventItem = {
  slug: string;
  date: string;
  title: string;
  location: string;
  tag: string;
  time: string;
  audience: string;
  summary: string;
  agenda: { time: string; item: string }[];
  speakers: string[];
};

export const EVENTS: EventItem[] = [
  {
    slug: "sacco-chairs-forum-aug-2026",
    date: "Aug 12, 2026",
    title: "Quarterly SACCO Chairs Forum",
    location: "Adama HQ",
    tag: "Governance",
    time: "9:00 AM — 4:00 PM",
    audience: "Chairs and Vice-Chairs of all 50 member SACCOs",
    summary: "The quarterly forum where SACCO chairs share operational data, coordinate loan disbursement schedules, and align on Union-wide policy.",
    agenda: [
      { time: "09:00", item: "Registration and coffee" },
      { time: "09:30", item: "Q2 FY2026 performance review" },
      { time: "11:00", item: "Digital portal pilot debrief — 5 SACCOs" },
      { time: "13:00", item: "Lunch and delegate networking" },
      { time: "14:00", item: "Working session: 2027 loan volume planning" },
      { time: "15:30", item: "Closing resolutions" },
    ],
    speakers: ["Ato Bekele Diriba", "Ato Dereje Bekele", "W/ro Bontu Fufa"],
  },
  {
    slug: "women-in-cooperative-finance-2026",
    date: "Sep 3, 2026",
    title: "Women in Cooperative Finance Summit",
    location: "Bishoftu",
    tag: "Community",
    time: "8:30 AM — 5:00 PM",
    audience: "Women SACCO members, women-led enterprises, and partner organizations",
    summary: "A full-day summit spotlighting women members, women-led SACCOs, and the financial products that best serve them.",
    agenda: [
      { time: "08:30", item: "Opening keynote — W/ro Almaz Tesfaye" },
      { time: "10:00", item: "Panel: Women-led enterprises across Oromia" },
      { time: "12:00", item: "Lunch" },
      { time: "13:30", item: "Workshops (parallel): credit, savings, insurance" },
      { time: "16:00", item: "Awards and closing" },
    ],
    speakers: ["W/ro Almaz Tesfaye", "W/ro Chaltu Hirpo", "W/ro Meskerem Alemu"],
  },
  {
    slug: "loan-officers-training-oct-2026",
    date: "Oct 18, 2026",
    title: "Annual Loan Officers Training",
    location: "Adama HQ",
    tag: "Training",
    time: "9:00 AM — 5:00 PM · 3 days",
    audience: "Loan officers and credit committee members from all member SACCOs",
    summary: "Three-day intensive on credit assessment, portfolio risk, digital loan operations, and the Union's 14% pricing framework.",
    agenda: [
      { time: "Day 1", item: "Credit assessment fundamentals · case studies" },
      { time: "Day 2", item: "Portfolio risk and delinquency management" },
      { time: "Day 3", item: "Digital loan operations · certification" },
    ],
    speakers: ["Ato Habtamu Gizaw", "W/ro Meseret Alemu"],
  },
  {
    slug: "cooperative-day-2026",
    date: "Nov 25, 2026",
    title: "Cooperative Day Celebration",
    location: "Adama Main Square",
    tag: "Community",
    time: "10:00 AM — 8:00 PM",
    audience: "All members, families, and the general public",
    summary: "An open-air celebration of cooperative life — exhibitions from member SACCOs, member enterprise showcases, cultural performances, and a public financial-literacy fair.",
    agenda: [
      { time: "10:00", item: "SACCO exhibitions open" },
      { time: "12:00", item: "Cultural performances" },
      { time: "14:00", item: "Financial literacy sessions" },
      { time: "17:00", item: "Member awards ceremony" },
      { time: "19:00", item: "Concert and community dinner" },
    ],
    speakers: ["Union Board", "Guest artists", "Regional cooperative officials"],
  },
];

export const REPORTS = [
  { year: "2025", title: "Annual Report 2025", size: "4.2 MB", pages: 68 },
  { year: "2024", title: "Annual Report 2024", size: "3.8 MB", pages: 62 },
  { year: "2023", title: "Annual Report 2023", size: "3.5 MB", pages: 58 },
  { year: "2022", title: "Annual Report 2022", size: "3.2 MB", pages: 54 },
  { year: "2021", title: "Annual Report 2021", size: "2.9 MB", pages: 48 },
];

// ---------- Unified Resource Library ----------
// Maps 1:1 to WordPress custom post types (`policy`, `audit`, `form`,
// `publication`) plus their ACF fields. Detail pages render `body` (post
// content) and the ACF fields declared here.
export type ResourceKind = "policy" | "audit" | "form" | "publication";

export type Resource = {
  slug: string;
  kind: ResourceKind;
  title: string;
  category: string;       // maps to WP taxonomy term (resource_category)
  year: string;
  updated: string;
  summary: string;
  fileSize?: string;
  filePages?: number;
  fileUrl?: string;       // ACF: file_url
  body: string[];         // post_content, split into paragraphs
  fields: { label: string; value: string }[]; // ACF meta rendered as a table
};

export const RESOURCES: Resource[] = [
  {
    slug: "union-bylaws-2024",
    kind: "policy",
    title: "Union Bylaws (Revised 2024)",
    category: "Governance",
    year: "2024",
    updated: "Nov 12, 2024",
    summary: "The constitutional document of AG Union — membership, governance, capital, and dissolution provisions, revised and adopted by the 2024 General Assembly.",
    fileSize: "480 KB",
    filePages: 42,
    body: [
      "The revised Bylaws consolidate 19 years of cooperative practice into a single governing document. They define the rights and obligations of member SACCOs, the authority of the General Assembly, and the composition of the Board of Directors and Control Committee.",
      "Substantive 2024 amendments include a mandatory two-term limit for board officers, a formalized capacity-building levy, and updated procedures for admitting new member SACCOs.",
    ],
    fields: [
      { label: "Adopted by", value: "2024 General Assembly" },
      { label: "Effective", value: "January 1, 2025" },
      { label: "Supersedes", value: "2018 Bylaws" },
    ],
  },
  {
    slug: "credit-lending-policy",
    kind: "policy",
    title: "Credit & Lending Policy",
    category: "Credit",
    year: "2025",
    updated: "Mar 4, 2025",
    summary: "Standardized 14% pricing, underwriting criteria, disbursement workflow, and delinquency treatment for all Union-backed loans.",
    fileSize: "310 KB",
    filePages: 28,
    body: [
      "This policy applies to every loan issued through a member SACCO using Union capital. It sets a uniform 14% annual rate, defines the four-tier loan ladder (from 50,000 up to 5,000,000 Birr), and specifies mandatory credit-life insurance coverage on all disbursements.",
      "Delinquency treatment is codified: 30-day grace, 60-day workout, 90-day loss provisioning, with mandatory Control Committee review at each stage.",
    ],
    fields: [
      { label: "Standard rate", value: "14% APR" },
      { label: "Loan range", value: "50,000 – 5,000,000 Birr" },
      { label: "Credit-life coverage", value: "Mandatory, included" },
    ],
  },
  {
    slug: "governance-handbook",
    kind: "policy",
    title: "Governance Handbook",
    category: "Governance",
    year: "2024",
    updated: "Aug 20, 2024",
    summary: "Operating manual for board members, committee chairs, and SACCO delegates — meeting cadence, resolution formats, and reporting duties.",
    fileSize: "1.2 MB",
    filePages: 84,
    body: [
      "The handbook is the day-to-day reference for anyone holding governance responsibility in AG Union. It covers annual calendars, resolution templates, quorum rules, and conflict-of-interest procedures.",
    ],
    fields: [
      { label: "Audience", value: "Board · Committee · Delegates" },
      { label: "Review cycle", value: "Every 3 years" },
    ],
  },

  {
    slug: "external-audit-fy2025",
    kind: "audit",
    title: "External Audit Report — FY 2025",
    category: "Financial Audit",
    year: "2025",
    updated: "Feb 18, 2026",
    summary: "Unqualified audit opinion for fiscal year 2025 issued by a licensed Ethiopian audit firm. Covers financial statements, internal controls, and loan portfolio classification.",
    fileSize: "1.8 MB",
    filePages: 52,
    body: [
      "The independent auditor issued an unqualified opinion on the FY 2025 financial statements. Total assets grew 12.4% YoY to 218.4M Birr and loan recovery reached 97.3%.",
      "Internal control testing found no material weaknesses. Two administrative observations were raised and closed by the Union within 30 days.",
    ],
    fields: [
      { label: "Auditor", value: "Independent licensed firm" },
      { label: "Opinion", value: "Unqualified" },
      { label: "Fiscal year", value: "July 2024 – June 2025" },
    ],
  },
  {
    slug: "control-committee-report-q2-2026",
    kind: "audit",
    title: "Control Committee Report — Q2 2026",
    category: "Internal Audit",
    year: "2026",
    updated: "Jul 8, 2026",
    summary: "Quarterly internal review by the elected three-member Control Committee. Covers loan approvals, procurement, and SACCO reporting compliance.",
    fileSize: "620 KB",
    filePages: 18,
    body: [
      "The Committee reviewed 100% of loan approvals above 1M Birr in Q2 and a stratified 20% sample of smaller loans. All reviewed files met the standard underwriting checklist.",
    ],
    fields: [
      { label: "Chair", value: "Ato Kebede Worku" },
      { label: "Period", value: "Apr – Jun 2026" },
      { label: "Findings", value: "0 material · 3 observations" },
    ],
  },
  {
    slug: "compliance-audit-2024",
    kind: "audit",
    title: "Cooperative Compliance Audit — 2024",
    category: "Regulatory Audit",
    year: "2024",
    updated: "Dec 15, 2024",
    summary: "Compliance review conducted by the Oromia Cooperative Bureau confirming AG Union's standing under the Federal Cooperative Societies Proclamation.",
    fileSize: "540 KB",
    filePages: 22,
    body: [
      "The Bureau confirmed AG Union's compliance with the Federal Cooperative Societies Proclamation No. 985/2016 and the Oromia Regional Cooperative Regulation.",
    ],
    fields: [
      { label: "Regulator", value: "Oromia Cooperative Bureau" },
      { label: "Result", value: "Compliant · License renewed" },
    ],
  },

  {
    slug: "membership-application",
    kind: "form",
    title: "SACCO Membership Application",
    category: "Membership",
    year: "2026",
    updated: "Jan 10, 2026",
    summary: "Standard membership form used across all 50 member SACCOs. Complete the form, attach ID copies, and submit to your nearest SACCO branch.",
    fileSize: "180 KB",
    body: [
      "The membership application collects identity, contact, and next-of-kin details, plus a short savings-goal declaration. Applications are reviewed by the SACCO management committee within 14 days.",
      "You will also open a savings account and buy a minimum of one Union share as part of joining.",
    ],
    fields: [
      { label: "Format", value: "PDF fillable" },
      { label: "Submit to", value: "Your local SACCO branch" },
      { label: "Processing", value: "≤ 14 days" },
    ],
  },
  {
    slug: "loan-application",
    kind: "form",
    title: "Union Loan Application",
    category: "Credit",
    year: "2026",
    updated: "Mar 5, 2026",
    summary: "Application form for Union-backed loans (50,000 – 5,000,000 Birr). Requires 12 months of savings history and SACCO co-signature.",
    fileSize: "220 KB",
    body: [
      "The loan application covers borrower details, requested amount, purpose of funds, and repayment plan. Attach your SACCO passbook, business documentation (where applicable), and two guarantor signatures.",
    ],
    fields: [
      { label: "Loan range", value: "50,000 – 5,000,000 Birr" },
      { label: "Rate", value: "14% APR (standard)" },
      { label: "Insurance", value: "Credit-life included" },
      { label: "Prerequisites", value: "12 mo savings history" },
    ],
  },
  {
    slug: "beneficiary-designation",
    kind: "form",
    title: "Beneficiary Designation",
    category: "Membership",
    year: "2025",
    updated: "Aug 22, 2025",
    summary: "Nominate beneficiaries for your savings, shares, and credit-life insurance coverage. Recommended for every active member.",
    fileSize: "95 KB",
    body: [
      "Beneficiary designations take precedence over other claims in the event of member death. Update your designation whenever your family circumstances change.",
    ],
    fields: [
      { label: "Format", value: "PDF · notarization required" },
      { label: "Review cadence", value: "On major life events" },
    ],
  },
  {
    slug: "sacco-monthly-report",
    kind: "form",
    title: "SACCO Monthly Report Template",
    category: "Reporting",
    year: "2026",
    updated: "Jan 2, 2026",
    summary: "Standard template every member SACCO uses to report membership, savings, and loan portfolio movement to the Union.",
    fileSize: "60 KB",
    body: [
      "The report is due by the 10th of each month and feeds the Union's consolidated dashboards.",
    ],
    fields: [
      { label: "Due", value: "10th of each month" },
      { label: "Format", value: "Excel / Google Sheets" },
    ],
  },

  {
    slug: "cooperative-finance-2025-field-study",
    kind: "publication",
    title: "Cooperative Finance in Ethiopia: A 2025 Field Study",
    category: "Research",
    year: "2025",
    updated: "Sep 12, 2025",
    summary: "Field study across 12 SACCOs profiling how member savings translate into working-capital lending in the Rift Valley corridor.",
    fileSize: "3.4 MB",
    filePages: 78,
    body: [
      "The study visited 12 primary SACCOs and interviewed 240 individual members. Findings show that a 12-month savings history is the single strongest predictor of successful loan repayment, more so than collateral.",
    ],
    fields: [
      { label: "Type", value: "Peer-reviewed research" },
      { label: "SACCOs visited", value: "12" },
      { label: "Members interviewed", value: "240" },
    ],
  },
  {
    slug: "financial-literacy-workbook",
    kind: "publication",
    title: "Financial Literacy Workbook for Members",
    category: "Education",
    year: "2024",
    updated: "May 30, 2024",
    summary: "Six-chapter workbook covering budgeting, saving, borrowing, insurance, business basics, and cooperative citizenship. Designed for member training sessions.",
    fileSize: "2.1 MB",
    filePages: 96,
    body: [
      "The workbook is used in every new-member orientation and in the Union's quarterly capacity-building sessions. It's freely reproducible for member education by any Ethiopian cooperative.",
    ],
    fields: [
      { label: "Language", value: "Afaan Oromoo · Amharic" },
      { label: "Chapters", value: "6" },
      { label: "License", value: "Free to reproduce for member education" },
    ],
  },
];

// ---------- SACCO logos (optional) ----------
// Real SACCO brand marks are managed as ACF `logo` on the `sacco` CPT.
// When present, the marquee renders <img>; otherwise it falls back to a
// premium monogram chip. Cast is safe — `logo` is optional at the type
// level and each SACCO row is a superset.
export type SaccoBrand = SaccoRow & { logo?: string };
export const SACCO_BRANDS: SaccoBrand[] = SACCOS;
