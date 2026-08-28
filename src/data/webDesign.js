import hero from '../assets/web-design/hero.jpg'
import caseImg from '../assets/web-design/case.jpg'
import project1 from '../assets/web-design/project-1.jpg'
import project2 from '../assets/web-design/project-2.jpg'
import project3 from '../assets/web-design/project-3.jpg'
import project4 from '../assets/web-design/project-4.jpg'
import project5 from '../assets/web-design/project-5.jpg'
import project6 from '../assets/web-design/project-6.jpg'

export const WEBSITE_TYPES = [
  {
    icon: 'domain',
    title: 'Corporate Web',
    description:
      'Authoritative, scalable platforms for enterprise presence and stakeholder communication.',
  },
  {
    icon: 'rocket_launch',
    title: 'Startup Pitch',
    description:
      'High-impact, conversion-focused sites designed to secure funding and rapid user acquisition.',
  },
  {
    icon: 'ads_click',
    title: 'Landing Pages',
    description:
      'Hyper-optimized singular funnels engineered for maximum lead generation and ROI.',
  },
  {
    icon: 'code_blocks',
    title: 'Custom Web Apps',
    description:
      'Complex, data-driven web applications with robust backends and dynamic interfaces.',
  },
]

export const CORE_CAPABILITIES = [
  {
    icon: 'devices',
    title: 'Responsive Fluidity',
    description:
      'Flawless execution across all device matrices, ensuring structural integrity on any screen size.',
  },
  {
    icon: 'speed',
    title: 'Sub-Second Performance',
    description:
      'Optimized asset delivery and modern frameworks for instantaneous load times.',
  },
  {
    icon: 'dashboard_customize',
    title: 'Advanced CMS',
    description:
      'Empowering your team with intuitive, secure content management systems for autonomous updates.',
  },
  {
    icon: 'search',
    title: 'Technical SEO',
    description:
      'Built-in schema markup, core web vitals optimization, and crawlability from day one.',
  },
  {
    icon: 'security',
    title: 'Enterprise Security',
    description:
      'Rigorous data protection, SSL protocols, and vulnerability mitigation as standard.',
  },
  {
    icon: 'analytics',
    title: 'Integrated Analytics',
    description:
      'Comprehensive tracking setup for granular insights into user behavior and conversion metrics.',
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'Auditing current infrastructure and defining KPIs, target demographics, and technical requirements.',
  },
  {
    number: '02',
    title: 'UX/UI Architecture',
    description:
      'Wireframing user journeys and establishing the high-fidelity visual design system.',
  },
  {
    number: '03',
    title: 'Frontend Engineering',
    description:
      'Translating static designs into fluid, responsive, and accessible code interfaces.',
  },
  {
    number: '04',
    title: 'Backend Integration',
    description:
      'Configuring the CMS, databases, APIs, and necessary server-side logic.',
  },
  {
    number: '05',
    title: 'QA & Testing',
    description:
      'Rigorous cross-browser, cross-device, and load testing to ensure zero defects.',
  },
  {
    number: '06',
    title: 'Launch & Scale',
    description:
      'Final deployment to production servers followed by ongoing maintenance and optimization.',
  },
]

export const PORTFOLIO_ITEMS = [
  {
    category: 'FINTECH',
    title: 'Nexus Capital Group',
    image: project1,
  },
  {
    category: 'SAAS PLATFORM',
    title: 'Aether Systems',
    image: project2,
  },
  {
    category: 'CYBERSECURITY',
    title: 'Sentinel Protocol',
    image: project3,
  },
  {
    category: 'DATA ANALYTICS',
    title: 'Quantis Grid',
    image: project4,
  },
  {
    category: 'LOGISTICS',
    title: 'OmniRoute Global',
    image: project5,
  },
  {
    category: 'ENTERPRISE E-COMMERCE',
    title: 'Vanguard Supply',
    image: project6,
  },
]

export const CASE_STUDY = {
  label: 'FEATURED CASE STUDY',
  title: 'Revitalizing Legacy Infrastructure for Vertex Dynamics',
  description:
    'Vertex Dynamics required a complete overhaul of their 10-year-old web infrastructure. We executed a phased migration to a modern headless architecture, resulting in a 300% increase in load speed and a 45% uplift in enterprise lead generation.',
  highlights: [
    'Headless CMS Implementation',
    'Interactive 3D Data Visualizations',
    'Global CDN Deployment',
  ],
  image: caseImg,
  imageAlt: 'Case study dashboard visualization',
}

export const PRICING_TIERS = [
  {
    id: 'silver',
    title: 'Silver',
    description: 'Essential framework for emerging ventures.',
    price: '$2,500',
    priceSuffix: '/onwards',
    features: ['Up to 5 Pages', 'Responsive Design', 'Basic SEO Setup'],
    popular: false,
    ctaLabel: 'SELECT',
    ctaVariant: 'outline',
  },
  {
    id: 'gold',
    title: 'Gold',
    description: 'Standard deployment for established SMEs.',
    price: '$5,000',
    priceSuffix: '/onwards',
    features: [
      'Up to 15 Pages',
      'CMS Integration',
      'Advanced Animations',
      'Speed Optimization',
    ],
    popular: true,
    ctaLabel: 'SELECT',
    ctaVariant: 'solid',
  },
  {
    id: 'business-plus',
    title: 'Business Plus',
    description: 'Enhanced capability for high-traffic environments.',
    price: '$8,500',
    priceSuffix: '/onwards',
    features: ['Up to 30 Pages', 'E-commerce Capability', 'CRM Integration'],
    popular: false,
    ctaLabel: 'SELECT',
    ctaVariant: 'outline',
  },
  {
    id: 'platinum',
    title: 'Platinum',
    description: 'Corporate scale architecture.',
    price: '$15,000',
    priceSuffix: '/onwards',
    features: ['Custom Web App Elements', 'Complex Databases', 'Multi-lingual Setup'],
    popular: false,
    ctaLabel: 'SELECT',
    ctaVariant: 'outline',
  },
  {
    id: 'titanium',
    title: 'Titanium',
    description: 'Limitless bespoke engineering.',
    price: 'Custom',
    priceSuffix: '',
    features: ['Full Enterprise Stack', 'Dedicated Team', '24/7 SLA Support'],
    popular: false,
    ctaLabel: 'CONTACT',
    ctaVariant: 'outline',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'How long does a typical build take?',
    answer:
      'Standard corporate builds average 4-6 weeks. Complex integrations or custom web applications require 8-12 weeks for rigorous execution and testing.',
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer:
      'Yes. We offer retainer packages for security patching, performance monitoring, and continuous iterative improvements.',
  },
  {
    question: 'Can we update content ourselves?',
    answer:
      'Absolutely. We integrate intuitive CMS backends (like Webflow, WordPress, or Headless options) ensuring your team maintains operational agility.',
  },
]

export const HERO = {
  badge: 'PREMIUM WEB DESIGN',
  title: 'Crafting High-Performance Digital Experiences',
  description:
    'We engineer digital ecosystems that demand attention. Moving beyond standard templates to deliver institutional intelligence and cutting-edge stability for executive oversight.',
  image: hero,
  imageAlt:
    'A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, dark tech-focused gallery space.',
}

export const INTRODUCTION = {
  title: 'The Precision Approach',
  paragraphs: [
    "Our methodology is rooted in absolute control and technical precision. We don't just build websites; we architect digital command centers. By merging technical glassmorphism with mathematical grid precision, we create environments that reduce visual fatigue while maximizing data throughput and brand impact.",
    'Every pixel is deliberate. Every interaction is calculated. We eschew the chaotic and embrace the structured, providing businesses with robust, scalable web presences that stand as testaments to their operational excellence. From the underlying code architecture to the surface-level animations, Neutrix Lab engineers for speed, security, and conversion.',
  ],
}
