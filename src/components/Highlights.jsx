import SectionHeading from './SectionHeading'
import { highlights } from '../data/siteData'

function Highlights() {
  return (
    <section className="relative border-t border-white/8 bg-ocean-950 px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The experience"
          title="Más que una salida en barco: una experiencia privada para disfrutar Gran Canaria desde el mar"
          text="La propuesta está construida para vender sensaciones: exclusividad, relax, buen clima, mar abierto y momentos que se convierten en recuerdo."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-card"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-sand-500/15 p-3 text-sand-400">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Highlights
