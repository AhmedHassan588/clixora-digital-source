export const BRAND = {
  name: 'Neutrix Lab',
  shortName: 'Neutrix',
  tagline: 'Precision digital engineering for ambitious brands.',
  email: 'hello@neutrixlab.com',
  emailHref: 'mailto:hello@neutrixlab.com',
  phone: '+1 (415) 555-0198',
  phoneHref: 'tel:+14155550198',
}

export const BRAND_TITLE = (page) => (page ? `${page} | ${BRAND.name}` : BRAND.name)
