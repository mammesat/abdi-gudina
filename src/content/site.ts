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

export const BOARD = [
  { name: "Ato Bekele Diriba", role: "Board Chairperson", tenure: "Since 2021" },
  { name: "W/ro Almaz Tesfaye", role: "Vice Chairperson", tenure: "Since 2022" },
  { name: "Ato Gemechu Wako", role: "Secretary", tenure: "Since 2020" },
  { name: "Ato Tolera Bekele", role: "Board Member", tenure: "Since 2023" },
  { name: "W/ro Chaltu Hirpo", role: "Board Member", tenure: "Since 2023" },
  { name: "Ato Firaol Gemeda", role: "Board Member", tenure: "Since 2024" },
];

export const MANAGEMENT = [
  { name: "Ato Dereje Bekele", role: "General Manager" },
  { name: "W/ro Meseret Alemu", role: "Finance Director" },
  { name: "Ato Habtamu Gizaw", role: "Loans & Credit Director" },
  { name: "W/ro Bontu Fufa", role: "Member Services" },
];

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

export const STORIES = [
  {
    name: "Almaz Hailu",
    role: "Merchant · 2.9M Birr loan",
    quote: "The transition from a government employee to a successful merchant was possible because Abdi Gudina believed in my vision.",
  },
  {
    name: "Tesfaye Bekele",
    role: "Grain Trader · Mojo",
    quote: "With a 1.2M Birr working-capital loan, I expanded my grain storage capacity threefold in two seasons.",
  },
  {
    name: "Meskerem Alemu",
    role: "Bakery Owner · Adama",
    quote: "My SACCO's savings-first culture taught me to plan. My first loan launched a bakery that now employs six women.",
  },
  {
    name: "Girma Wako",
    role: "Farmer · Meki",
    quote: "Insurance coverage on my seasonal loan gave my family peace of mind through a difficult harvest.",
  },
  {
    name: "Bontu Fufa",
    role: "Textile Cooperative · Adama",
    quote: "We started with 8 members and 40,000 Birr. Today our cooperative moves over 3M Birr annually.",
  },
  {
    name: "Solomon Girma",
    role: "Livestock Trader · Fentale",
    quote: "Being part of a SACCO changed how I think about capital — it's no longer a favor, it's a shared engine.",
  },
];

export const EVENTS = [
  { date: "Aug 12, 2026", title: "Quarterly SACCO Chairs Forum", location: "Adama HQ", tag: "Governance" },
  { date: "Sep 3, 2026", title: "Women in Cooperative Finance Summit", location: "Bishoftu", tag: "Community" },
  { date: "Oct 18, 2026", title: "Annual Loan Officers Training", location: "Adama HQ", tag: "Training" },
  { date: "Nov 25, 2026", title: "Cooperative Day Celebration", location: "Adama Main Square", tag: "Community" },
];

export const REPORTS = [
  { year: "2025", title: "Annual Report 2025", size: "4.2 MB", pages: 68 },
  { year: "2024", title: "Annual Report 2024", size: "3.8 MB", pages: 62 },
  { year: "2023", title: "Annual Report 2023", size: "3.5 MB", pages: 58 },
  { year: "2022", title: "Annual Report 2022", size: "3.2 MB", pages: 54 },
  { year: "2021", title: "Annual Report 2021", size: "2.9 MB", pages: 48 },
];
