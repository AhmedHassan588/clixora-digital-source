import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../common/Icon'
import NeutrixLogo from '../common/NeutrixLogo'
import { NAV_LINKS, PRICING_NAV_LINKS, ROUTES } from '../../constants/navigation'
import { openLiveChat } from '../../lib/liveChat'

function linkClass(isActive, variant) {
  if (variant === 'light') {
    return isActive
      ? 'text-secondary border-b-2 border-secondary text-label-bold font-label-bold pb-1'
      : 'text-on-surface-variant hover:text-secondary transition-colors text-label-bold font-label-bold'
  }
  return isActive
    ? 'text-primary border-b-2 border-primary pb-1'
    : 'text-on-surface-variant hover:text-primary transition-colors hover:text-primary-container transition-all duration-300'
}

export default function Navbar({ activeKey = 'home', variant = 'dark', showLiveChat = true }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const links = variant === 'light' ? PRICING_NAV_LINKS : NAV_LINKS

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (variant === 'light') {
    return (
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
        <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto z-50">
          <NeutrixLogo className="text-body-lg font-display-lg font-black tracking-tighter text-secondary" />
          <nav className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={linkClass(activeKey === link.key, 'light')}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            to={ROUTES.contact}
            className="hidden md:inline-flex bg-secondary hover:bg-accent-hover text-on-secondary font-label-bold text-label-bold rounded-lg px-[24px] py-[12px] transition-all duration-200"
          >
            Get Started
          </Link>
          <button
            type="button"
            aria-label="Open Menu"
            aria-expanded={open}
            className="md:hidden text-on-surface"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} className="text-[24px]" />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-outline-variant/30 bg-surface px-gutter py-md flex flex-col gap-md">
            {links.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={`font-label-bold text-label-bold py-sm ${
                  activeKey === link.key ? 'text-secondary' : 'text-on-surface-variant'
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={ROUTES.contact}
              className="bg-secondary text-on-secondary font-label-bold text-label-bold rounded-lg px-lg py-md text-center"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </header>
    )
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl dark:bg-surface/80 border-b border-outline-variant/30 shadow-2xl transition-colors ${
        scrolled ? 'bg-surface/90' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-margin-desktop py-4 max-w-[1440px] mx-auto">
        <NeutrixLogo className="font-display-lg text-display-lg-mobile text-primary dark:text-primary-fixed tracking-tight" />
        <div className="hidden lg:flex items-center space-x-lg font-label-caps text-label-caps">
          {links.map((link) => (
            <Link
              key={link.key}
              to={link.path}
              className={linkClass(activeKey === link.key, 'dark')}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-md">
          {showLiveChat && (
            <button
              type="button"
              onClick={() => openLiveChat()}
              className="flex items-center text-on-surface-variant hover:text-primary-container transition-all duration-300 font-label-caps text-label-caps"
            >
              <Icon name="chat" className="mr-xs" style={{ fontVariationSettings: "'FILL' 0" }} />
              Live Chat
            </button>
          )}
          <Link
            to={ROUTES.contact}
            className="bg-primary-container text-on-primary-fixed font-label-caps text-label-caps px-lg py-sm rounded cyber-glow transition-transform hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        </div>
        <button
          type="button"
          aria-label="Open Menu"
          aria-expanded={open}
          className="lg:hidden text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-surface/95 px-margin-desktop py-md flex flex-col gap-md">
          {links.map((link) => (
            <Link
              key={link.key}
              to={link.path}
              className={`font-label-caps text-label-caps py-sm ${
                activeKey === link.key ? 'text-primary' : 'text-on-surface-variant'
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {showLiveChat && (
            <button
              type="button"
              className="font-label-caps text-label-caps py-sm text-left text-on-surface-variant"
              onClick={() => {
                setOpen(false)
                openLiveChat()
              }}
            >
              Live Chat
            </button>
          )}
          <Link
            to={ROUTES.contact}
            className="bg-primary-container text-on-primary-fixed font-label-caps text-label-caps px-lg py-sm rounded cyber-glow text-center"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
