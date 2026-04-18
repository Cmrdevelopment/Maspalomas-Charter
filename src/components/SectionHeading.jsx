function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-sand-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-none text-white sm:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-7 text-white/72 sm:text-lg">{text}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading
