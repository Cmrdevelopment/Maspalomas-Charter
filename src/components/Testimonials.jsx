import SectionHeading from './SectionHeading'
import { testimonials } from '../data/siteData'

function Testimonials() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Espacio preparado para prueba social"
          text="En esta versión inicial he dejado una estructura elegante para testimonios. Luego podrás sustituirlos por reseñas reales, capturas o valoraciones verificadas."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.quote} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-card">
              <p className="font-display text-3xl leading-none text-sand-300">“</p>
              <p className="mt-4 text-base leading-8 text-white/78">{item.quote}</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-sand-300">
                {item.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
