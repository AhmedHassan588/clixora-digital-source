const contactEmail =
  import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'syedahmed3072@gmail.com'

export const BRAND = {
  name: 'Neutrix Lab',
  shortName: 'Neutrix',
  tagline: 'Precision digital engineering for ambitious brands.',
  email: contactEmail,
  emailHref: `mailto:${contactEmail}`,
  hours: 'Mon–Fri, 9:00 AM – 6:00 PM',
  location: 'Remote worldwide',
}

export const BRAND_TITLE = (page) => (page ? `${page} | ${BRAND.name}` : BRAND.name)
