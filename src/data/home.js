import { ROUTES } from '../constants/navigation'
import heroWorkspace from '../assets/home/hero-workspace.jpg'
import heroCinematic from '../assets/home/hero-cinematic.jpg'
import agencyTeam from '../assets/home/agency-team.jpg'
import processStrategy from '../assets/home/process-strategy.jpg'
import feat1 from '../assets/portfolio/feat-1.jpg'
import feat2 from '../assets/portfolio/feat-2.jpg'
import p02 from '../assets/portfolio/p02.jpg'

export const TRUSTED_LOGOS = [
  { id: 'nexus', name: 'Harbor Wealth' },
  { id: 'aura', name: 'Ledgerly' },
  { id: 'vanguard', name: 'Northline' },
  { id: 'omniflow', name: 'CareLoop' },
  { id: 'vitality', name: 'RouteGrid' },
  { id: 'axiom', name: 'MetricBay' },
]

export const HERO_STATS = [
  { end: 48, suffix: '+', label: 'Live Client Projects' },
  { end: 98, suffix: '%', label: 'Client Retention' },
  { end: 49, suffix: '', label: 'Avg Rating', display: '4.9★' },
  { end: 12, suffix: '+', label: 'Industries Served' },
]

export const HERO_ROTATING = ['Websites', 'Brands', 'Products', 'Experiences']

export const TICKER_WORDS = [
  'BRANDING',
  'WEB DESIGN',
  'E-COMMERCE',
  'MOBILE APPS',
  'SEO',
  'ANIMATION',
  'STRATEGY',
  'GROWTH',
]

export const MANIFESTO = {
  lead: 'Most agencies decorate.',
  punch: 'We build digital weapons.',
  body: 'Every pixel, page, and product is engineered to earn trust fast and turn attention into revenue.',
}

export const FEATURES = [
  {
    icon: 'lightbulb',
    title: 'Strategy',
    description:
      'Data-driven roadmaps that align technical execution with overarching business objectives for measurable ROI.',
  },
  {
    icon: 'design_services',
    title: 'Design',
    description:
      'Immersive user experiences and striking visual identities crafted to captivate audiences and drive conversions.',
  },
  {
    icon: 'code',
    title: 'Development',
    description:
      'Scalable, high-performance architectures utilizing cutting-edge frameworks for robust digital platforms.',
  },
]

export const SERVICES = [
  {
    number: '01',
    icon: 'brush',
    title: 'Branding',
    subtitle: 'Identity systems that feel inevitable',
    path: ROUTES.branding,
  },
  {
    number: '02',
    icon: 'web',
    title: 'Web Design',
    subtitle: 'Interfaces that convert on first glance',
    path: ROUTES.webDesign,
  },
  {
    number: '03',
    icon: 'developer_mode',
    title: 'Web Dev',
    subtitle: 'Fast, scalable engineering',
    path: ROUTES.webDesign,
  },
  {
    number: '04',
    icon: 'shopping_cart',
    title: 'E-Commerce',
    subtitle: 'Stores built to sell harder',
    path: ROUTES.ecommerce,
  },
  {
    number: '05',
    icon: 'smartphone',
    title: 'Mobile Apps',
    subtitle: 'Products people keep opening',
    path: ROUTES.mobileApps,
  },
  {
    number: '06',
    icon: 'campaign',
    title: 'Marketing',
    subtitle: 'Campaigns with clear ROI',
    path: ROUTES.comboPackages,
  },
  {
    number: '07',
    icon: 'search',
    title: 'SEO',
    subtitle: 'Visibility that compounds',
    path: ROUTES.comboPackages,
  },
  {
    number: '08',
    icon: 'video_library',
    title: 'Motion',
    subtitle: 'Animation with purpose',
    path: ROUTES.portfolio,
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    description: 'We audit your brand, audience, and goals to define a clear digital north star.',
    icon: 'search',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes and high-fidelity UI that look premium and convert with intent.',
    icon: 'draw',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Clean, fast engineering with performance, SEO, and scalability baked in.',
    icon: 'terminal',
  },
  {
    step: '04',
    title: 'Launch & Grow',
    description: 'Ship, measure, optimize - then keep compounding results after go-live.',
    icon: 'rocket_launch',
  },
]

export const FEATURED_WORK = [
  {
    title: 'Ledgerly Finance OS',
    category: 'FinTech SaaS',
    result: '+62% ops speed',
    image: feat1,
    path: ROUTES.portfolio,
    size: 'large',
  },
  {
    title: 'Atelier Home Store',
    category: 'E-Commerce',
    result: '+2.1× checkout rate',
    image: p02,
    path: ROUTES.ecommerce,
    size: 'tall',
  },
  {
    title: 'CareLoop Patient Hub',
    category: 'Health Platform',
    result: '84k monthly visits',
    image: feat2,
    path: ROUTES.mobileApps,
    size: 'wide',
  },
]

export const HOME_IMAGES = {
  heroWorkspace,
  heroCinematic,
  agencyTeam,
  processStrategy,
}
