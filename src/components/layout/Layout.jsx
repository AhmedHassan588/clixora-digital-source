import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { LiveChatProvider } from '../../context/LiveChatContext'
import LiveChatWidget from '../chat/LiveChatWidget'
import TawkToWidget from '../chat/TawkToWidget'
import Navbar from './Navbar'
import Footer from './Footer'

function getActiveKey(pathname) {
  if (pathname.startsWith('/portfolio')) return 'portfolio'
  if (pathname.startsWith('/pricing')) return 'pricing'
  if (pathname.startsWith('/services')) return 'services'
  if (pathname.startsWith('/reviews')) return 'reviews'
  if (pathname.startsWith('/contact')) return 'contact'
  if (pathname.startsWith('/packages')) return 'combos'
  return 'home'
}

export default function Layout({ variant = 'dark', showLiveChat = true }) {
  const location = useLocation()
  const isLight = variant === 'light'
  const activeKey = getActiveKey(location.pathname)

  useEffect(() => {
    const root = document.documentElement
    if (isLight) {
      root.classList.remove('dark')
      root.classList.add('theme-light', 'scroll-smooth')
    } else {
      root.classList.add('dark')
      root.classList.remove('theme-light')
    }
    return () => {
      root.classList.add('dark')
      root.classList.remove('theme-light')
    }
  }, [isLight])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <LiveChatProvider>
      <div
        className={`bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen ${
          isLight ? '' : ''
        }`}
      >
        <Navbar activeKey={activeKey} variant={variant} showLiveChat={showLiveChat} />
        <main className={isLight ? 'pt-24 pb-section-padding-sm md:pb-section-padding-lg' : 'pt-[90px]'}>
          <Outlet />
        </main>
        <Footer variant={variant} />
        <LiveChatWidget />
        <TawkToWidget />
      </div>
    </LiveChatProvider>
  )
}
