import { Link } from 'react-router-dom'
import Icon from '../common/Icon'
import NeutrixLogo from '../common/NeutrixLogo'
import {
  FOOTER_COMPANY,
  FOOTER_LEGAL,
  FOOTER_SERVICES,
  ROUTES,
} from '../../constants/navigation'
import { BRAND } from '../../constants/brand'

export default function Footer({ variant = 'dark' }) {
  if (variant === 'light') {
    return (
      <footer className="bg-primary text-on-primary pt-section-padding-sm pb-8">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <NeutrixLogo
              as="div"
              className="text-2xl font-black tracking-tighter mb-4 text-on-primary"
              markClassName="w-8 h-8"
            />
            <p className="text-on-primary/70 text-body-md font-body-md mb-6">
              {BRAND.tagline}
            </p>
          </div>
          <div>
            <h4 className="font-label-bold text-label-bold uppercase tracking-widest mb-6 opacity-60">
              Services
            </h4>
            <ul className="space-y-4 text-body-md font-body-md">
              <li>
                <Link to={ROUTES.webDesign} className="hover:text-secondary-fixed transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to={ROUTES.webPortals} className="hover:text-secondary-fixed transition-colors">
                  Portal Development
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ecommerce} className="hover:text-secondary-fixed transition-colors">
                  E-Commerce
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-bold text-label-bold uppercase tracking-widest mb-6 opacity-60">
              Company
            </h4>
            <ul className="space-y-4 text-body-md font-body-md">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="hover:text-secondary-fixed transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-label-bold text-label-bold uppercase tracking-widest mb-6 opacity-60">
              Connect
            </h4>
            <ul className="space-y-4 text-body-md font-body-md">
              <li>
                <a href="#" className="hover:text-secondary-fixed transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-fixed transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-fixed transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-gutter border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-on-primary/50">© 2026 {BRAND.name}. All Rights Reserved.</p>
          <div className="flex gap-6 text-sm text-on-primary/50">
            {FOOTER_LEGAL.map((item) => (
              <Link key={item.label} to={item.path} className="hover:text-on-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="relative w-full bottom-0 bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-gutter px-margin-desktop py-xxl max-w-[1440px] mx-auto">
        <div className="md:col-span-2">
          <NeutrixLogo
            as="div"
            className="font-headline-md text-headline-md text-primary mb-lg"
            markClassName="w-9 h-9"
          />
          <p className="font-body-md text-body-md text-on-surface-variant mb-lg max-w-[300px]">
            Engineering the future of digital commerce and brand experiences.
          </p>
          <div className="flex space-x-md text-on-surface-variant">
            <Icon name="language" className="cursor-pointer hover:text-primary transition-all" />
            <Icon name="mail" className="cursor-pointer hover:text-primary transition-all" />
            <Icon name="phone" className="cursor-pointer hover:text-primary transition-all" />
          </div>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface mb-lg opacity-50">SERVICES</h4>
          <ul className="space-y-md font-body-md text-body-md">
            {FOOTER_SERVICES.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-on-surface-variant hover:text-primary transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface mb-lg opacity-50">COMPANY</h4>
          <ul className="space-y-md font-body-md text-body-md">
            {FOOTER_COMPANY.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-on-surface-variant hover:text-primary transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface mb-lg opacity-50">LEGAL</h4>
          <ul className="space-y-md font-body-md text-body-md">
            {FOOTER_LEGAL.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-on-surface-variant hover:text-primary transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-outline-variant/20 py-lg text-center px-margin-desktop">
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          © 2026 {BRAND.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
