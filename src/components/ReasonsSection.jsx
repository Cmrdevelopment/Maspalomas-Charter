import { reasons } from '../data/siteData'
import SectionHeading from './SectionHeading'

function ReasonsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-glow sm:p-10 lg:p-12">
        <SectionHeading
          eyebrow="Why choose us"
          title="Una sección de confianza para reforzar el valor diferencial"
          text="La primera versión no necesita complicarse: basta con dejar muy claro por qué esta marca puede percibirse como un plan mejor, más bonito y más exclusivo."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-ocean-950/55 p-6">
                <div className="inline-flex rounded-2xl bg-sand-500/12 p-3 text-sand-400">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ReasonsSection
