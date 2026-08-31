import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../components/common/BrandLogo'
import CountUp from '../components/common/CountUp'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'
import ReviewSlider from '../components/common/ReviewSlider'
import TextReveal from '../components/common/TextReveal'
import NeutrixLogo from '../components/common/NeutrixLogo'
import { ROUTES } from '../constants/navigation'
import {
  FEATURED_WORK,
  HERO_ROTATING,
  HERO_STATS,
  HOME_IMAGES,
  MANIFESTO,
  PROCESS_STEPS,
  SERVICES,
  TICKER_WORDS,
  TRUSTED_LOGOS,
} from '../data/home'
import { REVIEWS } from '../data/reviews'
import useInView from '../hooks/useInView'

function MagLink({ to, className = '', children }) {
  const nodeRef = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = nodeRef.current
    if (!el) return undefined

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      setOffset({ x: x * 0.18, y: y * 0.18 })
    }
    const onLeave = () => setOffset({ x: 0, y: 0 })

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <Link
      ref={nodeRef}
      to={to}
      className={`magnetic-cta ${className}`.trim()}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      {children}
    </Link>
  )
}

function SpotlightHero({ children }) {
  const ref = useRef(null)
  const [spot, setSpot] = useState({ x: 50, y: 40 })

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      setSpot({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={ref}
      className="home-hero relative min-h-[100svh] flex items-end overflow-hidden"
      style={{ '--spot-x': `${spot.x}%`, '--spot-y': `${spot.y}%` }}
    >
      {children}
    </section>
  )
}

function ProcessRail() {
  const [ref, isInView] = useInView(0.2)

  return (
    <div ref={ref} className={`home-process-rail ${isInView ? 'is-visible' : ''}`}>
      <div className="home-process-line" aria-hidden="true" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl lg:gap-md">
        {PROCESS_STEPS.map((item, index) => (
          <div
            key={item.step}
            className="home-process-step"
            style={{ transitionDelay: `${index * 140}ms` }}
          >
            <div className="home-process-dot">
              <span>{item.step}</span>
            </div>
            <Icon name={item.icon} className="text-primary-container text-[28px] mb-md" />
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">{item.title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[260px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Filmstrip({ children }) {
  const ref = useRef(null)
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const onDown = (e) => {
      drag.current = {
        active: true,
        startX: e.pageX - el.offsetLeft,
        scrollLeft: el.scrollLeft,
      }
      el.classList.add('is-dragging')
    }
    const onUp = () => {
      drag.current.active = false
      el.classList.remove('is-dragging')
    }
    const onMove = (e) => {
      if (!drag.current.active) return
      e.preventDefault()
      const x = e.pageX - el.offsetLeft
      el.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX) * 1.2
    }

    el.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('mouseleave', onUp)
    el.addEventListener('mousemove', onMove)
    return () => {
      el.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('mouseleave', onUp)
      el.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div ref={ref} className="home-filmstrip" tabIndex={0} aria-label="Services filmstrip">
      {children}
    </div>
  )
}

export default function HomePage() {
  const [wordIndex, setWordIndex] = useState(0)
  const marqueeLogos = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS]
  const ticker = [...TICKER_WORDS, ...TICKER_WORDS]
  const featuredReviews = REVIEWS.slice(0, 4)
  const largeWork = FEATURED_WORK.find((p) => p.size === 'large') || FEATURED_WORK[0]
  const sideWork = FEATURED_WORK.filter((p) => p !== largeWork)

  useEffect(() => {
    document.title =
      'Neutrix Lab | Transform Your Business With Powerful Digital Experiences'
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % HERO_ROTATING.length)
    }, 2400)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="home-page">
      {/* 1 - Cinematic hero */}
      <SpotlightHero>
        <div className="absolute inset-0">
          <img
            src={HOME_IMAGES.heroCinematic}
            alt=""
            className="hero-ken-burns absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-wash-x" />
          <div className="absolute inset-0 hero-wash-y" />
          <div className="absolute inset-0 home-hero-spotlight pointer-events-none" />
          <div className="absolute inset-0 hero-grid opacity-[0.14] light:opacity-[0.05]" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-desktop pt-[120px] pb-[88px]">
            <div className="pointer-events-none select-none hidden xl:block light:hidden absolute right-[3%] top-[48%] -translate-y-1/2">
            <NeutrixLogo
              as="div"
              variant="lockup"
              markClassName="w-[240px] h-[240px] xl:w-[300px] xl:h-[300px] opacity-95"
            />
          </div>
          <div className="home-hero-copy relative max-w-[640px]">
          <p className="hero-enter font-label-caps text-label-caps text-primary-container mb-md tracking-[0.28em]">
            NEUTRIX LAB
          </p>
          <h1 className="hero-enter hero-enter-delay-1 font-display-lg text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] leading-[0.98] tracking-[-0.035em] text-on-surface max-w-[980px] mb-lg">
            We craft{' '}
            <span className="relative inline-block align-bottom min-w-[9ch]">
              <span
                key={HERO_ROTATING[wordIndex]}
                className="hero-rotating-word text-transparent bg-clip-text bg-gradient-to-r from-[#4F6EFF] via-[#7C3AED] to-[#6D28D9]"
              >
                {HERO_ROTATING[wordIndex]}
              </span>
            </span>
            <br />
            that feel inevitable.
          </h1>
          <p className="hero-enter hero-enter-delay-2 font-body-lg text-body-lg text-on-surface-variant max-w-[520px] mb-xl">
            Premium websites, brands, and products engineered to look elite - and convert like a
            growth machine.
          </p>
          <div className="hero-enter hero-enter-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-md">
            <MagLink
              to={ROUTES.contact}
              className="w-full sm:w-auto text-center bg-primary-container text-on-primary-fixed font-headline-sm text-headline-sm px-xl py-md rounded cyber-glow"
            >
              Start Your Project
            </MagLink>
            <Link
              to={ROUTES.portfolio}
              className="home-ghost-link w-full sm:w-auto text-center font-headline-sm text-headline-sm px-xl py-md inline-flex items-center justify-center gap-sm text-primary-container"
            >
              Explore the work
              <Icon name="arrow_outward" className="text-[18px]" />
            </Link>
          </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-xs opacity-70">
          <span className="font-label-caps text-label-caps text-on-surface-variant">SCROLL</span>
          <span className="hero-scroll-line" />
        </div>
      </SpotlightHero>

      {/* 2 - Dual direction ticker (unique, not logo cards) */}
      <section className="home-ticker-section py-lg overflow-hidden border-y border-outline-variant/25 bg-surface-container-lowest">
        <div className="home-ticker home-ticker-left mb-md">
          <div className="home-ticker-track">
            {ticker.map((word, i) => (
              <span key={`a-${word}-${i}`} className="home-ticker-item">
                {word}
                <span className="home-ticker-dot" />
              </span>
            ))}
          </div>
        </div>
        <div className="home-ticker home-ticker-right">
          <div className="home-ticker-track">
            {ticker.map((word, i) => (
              <span key={`b-${word}-${i}`} className="home-ticker-item home-ticker-item-muted">
                {word}
                <span className="home-ticker-dot" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3 - Manifesto big type (no cards) */}
      <section className="home-manifesto relative px-margin-desktop py-[100px] md:py-[140px] overflow-hidden">
        <div className="absolute inset-0 home-noise opacity-[0.35] pointer-events-none" />
        <div className="max-w-[1100px] mx-auto relative">
          <TextReveal
            as="p"
            text={MANIFESTO.lead}
            className="font-display-lg text-[36px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-[-0.03em] text-on-surface-variant mb-md"
            stagger={55}
          />
          <TextReveal
            as="h2"
            text={MANIFESTO.punch}
            className="font-display-lg text-[40px] md:text-[64px] lg:text-[80px] leading-[1.02] tracking-[-0.035em] text-on-surface mb-xl"
            delay={220}
            stagger={55}
          />
          <TextReveal
            as="p"
            text={MANIFESTO.body}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-[640px]"
            delay={480}
            stagger={28}
          />
        </div>
      </section>

      {/* 4 - Impact numbers as typography strip */}
      <section className="home-impact px-margin-desktop pb-xxl">
        <div className="max-w-[1440px] mx-auto home-impact-grid">
          {HERO_STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90} className="home-impact-item">
              <div className="home-impact-value">
                {stat.display ? (
                  <span>{stat.display}</span>
                ) : (
                  <CountUp end={stat.end} suffix={stat.suffix} />
                )}
              </div>
              <div className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.16em]">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5 - Services as cinematic horizontal filmstrip */}
      <section className="home-services py-xxl overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-margin-desktop mb-xl flex flex-col md:flex-row md:items-end md:justify-between gap-md">
          <div>
            <p className="font-label-caps text-label-caps text-primary-container mb-md tracking-[0.2em]">
              CAPABILITIES
            </p>
            <TextReveal
              as="h2"
              text="Drag through what we build"
              className="font-headline-md text-[34px] md:text-[48px] text-on-surface tracking-[-0.02em]"
              stagger={40}
            />
          </div>
          <p className="text-on-surface-variant font-body-md max-w-[360px]">
            A full-stack digital studio - scroll sideways, pick a lane, go deeper.
          </p>
        </div>

        <Filmstrip>
          {SERVICES.map((service) => (
            <Link key={service.number} to={service.path} className="home-film-card group">
              <span className="home-film-number">{service.number}</span>
              <Icon name={service.icon} className="text-primary-container text-[40px] mb-lg" />
              <h3 className="font-headline-sm text-[28px] text-on-surface mb-sm group-hover:text-primary-container transition-colors">
                {service.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-xl">{service.subtitle}</p>
              <span className="inline-flex items-center gap-sm text-primary-container font-label-caps text-label-caps tracking-[0.14em]">
                OPEN
                <Icon name="arrow_forward" className="text-[16px] transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </Filmstrip>
      </section>

      {/* 6 - Why NEUTRIX split sticky */}
      <section className="home-split px-margin-desktop py-xxl">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xxl items-start">
          <div className="home-split-sticky">
            <div className="home-split-media">
              <img src={HOME_IMAGES.agencyTeam} alt="NEUTRIX team crafting product UI" />
              <div className="home-split-media-glow" />
              <div className="home-split-badge">
                <p className="font-label-caps text-label-caps text-primary-container mb-xs">SIGNAL</p>
                <p className="font-headline-sm text-on-surface">Avg +180% leads in 90 days</p>
              </div>
            </div>
          </div>
          <div className="home-split-copy py-md">
            <p className="font-label-caps text-label-caps text-primary-container mb-md tracking-[0.2em]">
              WHY NEUTRIX LAB
            </p>
            <TextReveal
              as="h2"
              text="Not another template agency."
              className="font-display-lg text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.03em] text-on-surface mb-lg"
              stagger={45}
            />
            <Reveal delay={100}>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                We treat your site like a sales asset. Strategy, design, and engineering move as one -
                so every section earns trust and pushes the next click.
              </p>
            </Reveal>
            <div className="home-split-list">
              {[
                { n: '01', t: 'Strategy-first roadmaps', d: 'Clarity before pixels.' },
                { n: '02', t: 'Conversion-led design', d: 'Beauty that sells.' },
                { n: '03', t: 'Performance engineering', d: 'Speed is a feature.' },
                { n: '04', t: 'Launch + growth loops', d: 'Ship, measure, compound.' },
              ].map((row, i) => (
                <Reveal key={row.n} delay={i * 90}>
                  <div className="home-split-row">
                    <span className="text-primary-container font-label-caps text-label-caps">{row.n}</span>
                    <div>
                      <p className="font-headline-sm text-on-surface text-[18px] mb-xs">{row.t}</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{row.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <Link
                to={ROUTES.portfolio}
                className="home-ghost-link mt-xl inline-flex items-center gap-sm text-primary-container font-headline-sm"
              >
                See how we work
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7 - Process with animated rail */}
      <section className="home-process px-margin-desktop py-xxl relative overflow-hidden">
        <div className="absolute right-[-10%] top-1/4 w-[480px] h-[480px] bg-secondary-container/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative">
          <div className="mb-xl max-w-[720px]">
            <p className="font-label-caps text-label-caps text-primary-container mb-md tracking-[0.2em]">
              PROCESS
            </p>
            <TextReveal
              as="h2"
              text="Four steps. Zero chaos."
              className="font-headline-md text-[36px] md:text-[52px] text-on-surface tracking-[-0.02em] mb-md"
              stagger={45}
            />
            <p className="text-on-surface-variant font-body-lg">
              A rhythm that keeps quality high and timelines honest.
            </p>
          </div>
          <ProcessRail />
        </div>
      </section>

      {/* 8 - Asymmetric bento work */}
      <section className="home-work px-margin-desktop py-xxl bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-md mb-xl">
            <div>
              <p className="font-label-caps text-label-caps text-primary-container mb-md tracking-[0.2em]">
                SELECTED WORK
              </p>
              <TextReveal
                as="h2"
                text="Proof over promises"
                className="font-headline-md text-[36px] md:text-[52px] text-on-surface tracking-[-0.02em]"
                stagger={45}
              />
            </div>
            <Link
              to={ROUTES.portfolio}
              className="home-ghost-link inline-flex items-center gap-sm text-primary-container font-headline-sm"
            >
              Full portfolio
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>

          <div className="home-bento">
            <Link to={largeWork.path} className="home-bento-main group">
              <img src={largeWork.image} alt={largeWork.title} />
              <div className="home-bento-shade" />
              <div className="home-bento-meta">
                <span className="font-label-caps text-label-caps text-primary-container tracking-[0.16em]">
                  {largeWork.category}
                </span>
                <h3 className="font-headline-md text-[28px] md:text-[36px] text-on-surface mt-sm mb-xs">
                  {largeWork.title}
                </h3>
                <p className="text-primary-container font-body-md">{largeWork.result}</p>
              </div>
              <span className="home-bento-arrow">
                <Icon name="arrow_outward" className="text-[22px]" />
              </span>
            </Link>

            <div className="home-bento-side">
              {sideWork.map((project) => (
                <Link key={project.title} to={project.path} className="home-bento-tile group">
                  <img src={project.image} alt={project.title} />
                  <div className="home-bento-shade" />
                  <div className="home-bento-meta">
                    <span className="font-label-caps text-label-caps text-primary-container tracking-[0.16em]">
                      {project.category}
                    </span>
                    <h3 className="font-headline-sm text-[22px] text-on-surface mt-sm mb-xs">
                      {project.title}
                    </h3>
                    <p className="text-primary-container font-body-sm">{project.result}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9 - Logos soft marquee */}
      <section className="py-xl overflow-hidden">
        <p className="text-center font-label-caps text-label-caps text-on-surface-variant opacity-55 mb-lg tracking-[0.18em]">
          TRUSTED BY TEAMS THAT MOVE FAST
        </p>
        <div className="logo-marquee">
          <div className="logo-marquee-track px-margin-desktop">
            {marqueeLogos.map((logo, index) => (
              <BrandLogo key={`${logo.id}-${index}`} id={logo.id} name={logo.name} />
            ))}
          </div>
        </div>
      </section>

      {/* 10 - Reviews */}
      <section className="px-margin-desktop py-xxl relative overflow-hidden">
        <div className="absolute left-[-5%] bottom-0 w-[420px] h-[420px] bg-[#4F6EFF]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute right-[-8%] top-[-10%] w-[380px] h-[380px] bg-[#8B5CF6]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative">
          <div className="text-center mb-xl max-w-[700px] mx-auto">
            <p className="font-label-caps text-label-caps text-primary-container mb-md tracking-[0.2em]">
              CLIENT SIGNAL
            </p>
            <TextReveal
              as="h2"
              text="Words from brands that hired us"
              className="font-headline-md text-[34px] md:text-[48px] text-on-surface tracking-[-0.02em] mb-md"
              stagger={40}
            />
          </div>
          <Reveal delay={100}>
            <ReviewSlider reviews={featuredReviews} />
          </Reveal>
          <div className="text-center mt-xl">
            <Link
              to={ROUTES.reviews}
              className="home-ghost-link inline-flex items-center gap-sm text-primary-container font-headline-sm"
            >
              Read all reviews
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11 - Final CTA full-bleed */}
      <section className="home-finale relative min-h-[70vh] flex items-center overflow-hidden">
        <img
          src={HOME_IMAGES.processStrategy}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-105 home-finale-bg"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 home-finale-ring pointer-events-none" />
        <div className="relative z-10 w-full max-w-[900px] mx-auto px-margin-desktop text-center py-xxl">
          <p className="font-label-caps text-label-caps text-primary-container mb-md tracking-[0.24em]">
            NEXT MOVE
          </p>
          <TextReveal
            as="h2"
            text="Ready to look inevitable?"
            className="font-display-lg text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.03em] text-on-surface mb-lg"
            stagger={50}
          />
          <Reveal delay={200}>
            <p className="font-body-lg text-on-surface-variant mb-xl max-w-[560px] mx-auto">
              Book a free consult. We&apos;ll map a clear plan for a digital presence that wins trust -
              and clients.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <MagLink
                to={ROUTES.contact}
                className="bg-primary-container text-on-primary-fixed font-headline-sm px-xxl py-lg rounded-lg cyber-glow"
              >
                Get Free Consultation
              </MagLink>
              <Link
                to={ROUTES.pricing}
                className="home-ghost-link font-headline-sm px-xxl py-lg text-primary-container inline-flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
