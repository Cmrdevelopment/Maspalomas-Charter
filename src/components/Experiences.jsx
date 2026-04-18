import SectionHeading from './SectionHeading'
import { experiences } from '../data/siteData'

function Experiences() {
  return (
    <section id="experiencias" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experiences"
          title="Planes diseñados para vender mucho más que un barco"
          text="En esta primera versión, la web presenta experiencias aspiracionales y flexibles para reforzar el posicionamiento premium de la marca."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {experiences.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/6 to-white/[0.02] p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-sand-400/30"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-sand-400/30 bg-sand-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-sand-300">
                    {item.tag}
                  </span>
                  <div className="rounded-2xl bg-white/5 p-3 text-sand-400">
                    <Icon size={20} />
                  </div>
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
                <a
                  href="#contacto"
                  className="mt-8 inline-flex text-sm font-semibold text-sand-300 transition group-hover:text-sand-200"
                >
                  Consultar disponibilidad
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experiences
