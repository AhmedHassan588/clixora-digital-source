import feat1 from '../assets/portfolio/feat-1.jpg'
import feat2 from '../assets/portfolio/feat-2.jpg'
import feat3 from '../assets/portfolio/feat-3.jpg'
import p01 from '../assets/portfolio/p01.jpg'
import p02 from '../assets/portfolio/p02.jpg'
import p03 from '../assets/portfolio/p03.jpg'
import p04 from '../assets/portfolio/p04.jpg'
import p05 from '../assets/portfolio/p05.jpg'
import p06 from '../assets/portfolio/p06.jpg'
import p07 from '../assets/portfolio/p07.jpg'
import p08 from '../assets/portfolio/p08.jpg'
import p09 from '../assets/portfolio/p09.jpg'
import p10 from '../assets/portfolio/p10.jpg'
import p11 from '../assets/portfolio/p11.jpg'
import p12 from '../assets/portfolio/p12.jpg'
import p13 from '../assets/portfolio/p13.jpg'
import p14 from '../assets/portfolio/p14.jpg'
import p15 from '../assets/portfolio/p15.jpg'
import p16 from '../assets/portfolio/p16.jpg'
import p17 from '../assets/portfolio/p17.jpg'
import p18 from '../assets/portfolio/p18.jpg'

export const INDUSTRIES = [
  { id: 'all', label: 'All Industries' },
  { id: 'finance', label: 'Finance & FinTech' },
  { id: 'healthcare', label: 'Healthcare & MedTech' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'logistics', label: 'Logistics' },
  { id: 'saas', label: 'SaaS & Enterprise' },
]

export const TYPE_FILTERS = [
  { id: 'all', label: 'All Work' },
  { id: 'web-app', label: 'Web App' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'mobile-app', label: 'Mobile App' },
  { id: 'branding', label: 'Branding' },
  { id: 'marketing', label: 'Marketing' },
]

export const METRICS = [
  { value: '48+', label: 'Live Client Projects' },
  { value: '3.2×', label: 'Avg. Conversion Lift' },
  { value: '98%', label: 'Client Retention' },
  { value: '12', label: 'Industries Served' },
]

export const FEATURED_CASES = [
  {
    id: 'ledgerly',
    tag: 'FinTech SaaS',
    title: 'Ledgerly Finance OS',
    image: feat1,
    imageAlt: 'Ledgerly finance analytics dashboard on desktop',
    year: '2025',
    metric: '+62% ops speed',
    challenge:
      'A mid-market finance team was stuck in spreadsheets and three disconnected tools. Month-end close took 11 days and reporting errors kept slipping through.',
    approach:
      'We rebuilt their workflow as a unified web app: live dashboards, role-based access, automated reconciliations, and clean data pipelines from their bank feeds.',
    result:
      'Close cycle dropped to 4 days. Ops teams gained 62% faster reporting, and leadership finally got one source of truth.',
  },
  {
    id: 'careloop',
    tag: 'Health Platform',
    title: 'CareLoop Patient Hub',
    image: feat2,
    imageAlt: 'CareLoop healthcare team reviewing patient platform',
    year: '2025',
    metric: '84k monthly visits',
    challenge:
      'A clinic network needed a patient-facing portal that felt trustworthy on mobile, not like a clunky hospital intranet from 2014.',
    approach:
      'We designed a calm clinical UI, appointment booking, secure messaging, and a responsive web experience tuned for older patients and busy staff.',
    result:
      'Patient portal usage hit 84k monthly visits within 5 months, with no-show rates down 27%.',
  },
  {
    id: 'northline',
    tag: 'Brand + Digital',
    title: 'Northline Capital Identity',
    image: feat3,
    imageAlt: 'Northline Capital brand identity and visual system',
    year: '2024',
    metric: '+41% brand recall',
    challenge:
      'An investment firm looked outdated online. Prospects could not tell if they were boutique advisors or a generic template site.',
    approach:
      'Full identity system, typography, motion rules, and a high-trust website rebuild with case narratives and clear next-step CTAs.',
    result:
      'Brand recall in discovery surveys rose 41%. Qualified inbound demos increased 2.3× in the first quarter after launch.',
  },
]

export const ARCHIVE_PROJECTS = [
  {
    id: 'harbor-wealth',
    title: 'Harbor Wealth Portal',
    type: 'web-app',
    typeLabel: 'Web App',
    industry: 'finance',
    image: p01,
    alt: 'Harbor Wealth client portfolio dashboard',
    summary: 'Secure client portal for portfolio tracking and advisor notes.',
  },
  {
    id: 'atelier-home',
    title: 'Atelier Home Store',
    type: 'ecommerce',
    typeLabel: 'E-Commerce',
    industry: 'ecommerce',
    image: p02,
    alt: 'Atelier Home premium lifestyle ecommerce storefront',
    summary: 'Shopify rebuild with faster PDP and cleaner checkout.',
  },
  {
    id: 'signal-studio',
    title: 'Signal Studio Rebrand',
    type: 'branding',
    typeLabel: 'Branding',
    industry: 'saas',
    image: p03,
    alt: 'Signal Studio brand guidelines and logo system',
    summary: 'Logo, color system, and product marketing identity.',
  },
  {
    id: 'routegrid',
    title: 'RouteGrid Driver App',
    type: 'mobile-app',
    typeLabel: 'Mobile App',
    industry: 'logistics',
    image: p04,
    alt: 'RouteGrid logistics mobile app on phone',
    summary: 'Driver routing, proof of delivery, and live status sync.',
  },
  {
    id: 'metricbay',
    title: 'MetricBay Analytics',
    type: 'web-app',
    typeLabel: 'Web App',
    industry: 'saas',
    image: p05,
    alt: 'MetricBay SaaS analytics product interface',
    summary: 'Product analytics UI for SaaS founders and growth teams.',
  },
  {
    id: 'pulse-launch',
    title: 'Pulse Launch Campaign',
    type: 'marketing',
    typeLabel: 'Marketing',
    industry: 'ecommerce',
    image: p06,
    alt: 'Pulse Launch digital marketing campaign creatives',
    summary: 'Paid social + landing pages for a DTC product drop.',
  },
  {
    id: 'linen-lane',
    title: 'Linen & Lane',
    type: 'ecommerce',
    typeLabel: 'E-Commerce',
    industry: 'ecommerce',
    image: p07,
    alt: 'Linen and Lane fashion ecommerce lookbook site',
    summary: 'Fashion storefront with editorial PDP and size guide UX.',
  },
  {
    id: 'craftbench',
    title: 'Craftbench Docs',
    type: 'web-app',
    typeLabel: 'Web App',
    industry: 'saas',
    image: p08,
    alt: 'Craftbench developer documentation web app',
    summary: 'Developer docs site with search, API refs, and dark mode.',
  },
  {
    id: 'formwell',
    title: 'Formwell Fitness',
    type: 'mobile-app',
    typeLabel: 'Mobile App',
    industry: 'healthcare',
    image: p09,
    alt: 'Formwell fitness coaching mobile application',
    summary: 'Workout plans, progress photos, and coach chat in-app.',
  },
  {
    id: 'span-architecture',
    title: 'Span Architecture',
    type: 'branding',
    typeLabel: 'Branding',
    industry: 'saas',
    image: p10,
    alt: 'Span Architecture studio brand and website visuals',
    summary: 'Architecture studio identity + project showcase site.',
  },
  {
    id: 'cleartrade',
    title: 'ClearTrade Charts',
    type: 'web-app',
    typeLabel: 'Web App',
    industry: 'finance',
    image: p11,
    alt: 'ClearTrade financial trading charts interface',
    summary: 'Real-time market charts for retail traders.',
  },
  {
    id: 'orbit-social',
    title: 'Orbit Social Kit',
    type: 'marketing',
    typeLabel: 'Marketing',
    industry: 'saas',
    image: p12,
    alt: 'Orbit Social content marketing kit mockups',
    summary: 'Content system and ad creatives for a B2B SaaS launch.',
  },
  {
    id: 'market-corner',
    title: 'Market Corner',
    type: 'ecommerce',
    typeLabel: 'E-Commerce',
    industry: 'ecommerce',
    image: p13,
    alt: 'Market Corner neighborhood retail ecommerce experience',
    summary: 'Local retail brand online with delivery slots checkout.',
  },
  {
    id: 'autonova',
    title: 'AutoNova Lab Site',
    type: 'web-app',
    typeLabel: 'Web App',
    industry: 'saas',
    image: p14,
    alt: 'AutoNova robotics company product website',
    summary: 'Robotics company site with product storytelling and demos.',
  },
  {
    id: 'freightline',
    title: 'Freightline Mobile',
    type: 'mobile-app',
    typeLabel: 'Mobile App',
    industry: 'logistics',
    image: p15,
    alt: 'Freightline shipping and logistics mobile tracking app',
    summary: 'Shipment tracking for shippers and warehouse teams.',
  },
  {
    id: 'vaultmark',
    title: 'Vaultmark Security',
    type: 'branding',
    typeLabel: 'Branding',
    industry: 'saas',
    image: p16,
    alt: 'Vaultmark cybersecurity brand identity',
    summary: 'Cybersecurity brand system for enterprise sales decks.',
  },
  {
    id: 'briefroom',
    title: 'Briefroom Client Hub',
    type: 'web-app',
    typeLabel: 'Web App',
    industry: 'saas',
    image: p17,
    alt: 'Briefroom consulting client collaboration portal',
    summary: 'Consulting portal for briefs, files, and approvals.',
  },
  {
    id: 'amplify-ads',
    title: 'Amplify Ads Network',
    type: 'marketing',
    typeLabel: 'Marketing',
    industry: 'ecommerce',
    image: p18,
    alt: 'Amplify Ads performance marketing team workspace',
    summary: 'Performance creative system for multi-channel retail ads.',
  },
]

export const ARTICLES = [
  {
    category: 'Case Notes',
    title: 'How we cut Ledgerly’s month-end close from 11 days to 4',
    description: 'A practical look at data model choices, role design, and the UI that finance teams actually used.',
  },
  {
    category: 'Design Process',
    title: 'Building trust into CareLoop’s patient portal',
    description: 'Typography, spacing, and calm UI patterns that helped older patients book without calling the desk.',
  },
  {
    category: 'Brand Strategy',
    title: 'Why Northline’s site needed proof before polish',
    description: 'How case narratives and CTA structure lifted qualified demos after the rebrand.',
  },
]

export const INITIAL_VISIBLE_COUNT = 9
