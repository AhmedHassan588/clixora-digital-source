export default function Icon({ name, className = '', fill = false, style, ...props }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`.trim()}
      data-weight={fill ? 'fill' : undefined}
      style={style}
      aria-hidden="true"
      {...props}
    >
      {name}
    </span>
  )
}
