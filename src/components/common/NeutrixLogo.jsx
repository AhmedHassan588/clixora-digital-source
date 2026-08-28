import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/navigation'
import { BRAND } from '../../constants/brand'
import neutrixMark from '../../assets/neutrix-mark.png'

/**
 * Primary Neutrix Lab brand mark + wordmark.
 * Use in Navbar / Footer / hero moments.
 */
export default function NeutrixLogo({
  to = ROUTES.home,
  className = '',
  markClassName = 'w-9 h-9',
  showWordmark = true,
  as = 'link',
}) {
  const content = (
    <>
      <span className="relative shrink-0 inline-flex items-center justify-center">
        <img
          src={neutrixMark}
          alt=""
          className={`${markClassName} object-contain rounded-lg`}
          aria-hidden="true"
        />
      </span>
      {showWordmark && (
        <span className="leading-none tracking-tight">
          <span className="font-semibold">Neutrix</span>
          <span className="font-light opacity-90"> Lab</span>
        </span>
      )}
    </>
  )

  if (as === 'div') {
    return (
      <div className={`inline-flex items-center gap-sm ${className}`.trim()} aria-label={BRAND.name}>
        {content}
      </div>
    )
  }

  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-sm ${className}`.trim()}
      aria-label={BRAND.name}
    >
      {content}
    </Link>
  )
}
