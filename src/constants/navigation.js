export const ROUTES = {
  home: '/',
  portfolio: '/portfolio',
  pricing: '/pricing',
  services: '/services',
  branding: '/services/branding',
  webDesign: '/services/web-design',
  ecommerce: '/services/e-commerce',
  mobileApps: '/services/mobile-apps',
  webPortals: '/services/web-portals',
  reviews: '/reviews',
  contact: '/contact',
  comboPackages: '/packages',
}

export const NAV_LINKS = [
  { label: 'HOME', path: ROUTES.home, key: 'home' },
  { label: 'SERVICES', path: ROUTES.services, key: 'services' },
  { label: 'PORTFOLIO', path: ROUTES.portfolio, key: 'portfolio' },
  { label: 'PRICING', path: ROUTES.pricing, key: 'pricing' },
  { label: 'COMBO PACKAGES', path: ROUTES.comboPackages, key: 'combos' },
  { label: 'REVIEWS', path: ROUTES.reviews, key: 'reviews' },
  { label: 'CONTACT', path: ROUTES.contact, key: 'contact' },
]

export const PRICING_NAV_LINKS = [
  { label: 'Services', path: ROUTES.branding, key: 'services' },
  { label: 'Portfolio', path: ROUTES.portfolio, key: 'portfolio' },
  { label: 'Pricing', path: ROUTES.pricing, key: 'pricing' },
  { label: 'Reviews', path: ROUTES.reviews, key: 'reviews' },
  { label: 'Contact', path: ROUTES.contact, key: 'contact' },
]

export const FOOTER_SERVICES = [
  { label: 'Branding', path: ROUTES.branding },
  { label: 'Development', path: ROUTES.webDesign },
  { label: 'Marketing', path: ROUTES.home },
  { label: 'SEO', path: ROUTES.home },
]

export const FOOTER_COMPANY = [
  { label: 'About Us', path: ROUTES.home },
  { label: 'Careers', path: ROUTES.home },
]

export const FOOTER_LEGAL = [
  { label: 'Privacy Policy', path: ROUTES.home },
  { label: 'Terms of Service', path: ROUTES.home },
]
