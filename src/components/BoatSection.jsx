import { Compass, Sofa, Sparkles, Waves } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { boatFeatures } from '../data/siteData'

const featureIcons = [Waves, Sofa, Compass, Sparkles]

function BoatSection() {
  return (
    <section id="barco" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-glow">
          <img
            src="/media/gallery-4.jpg"
            alt="Barco Maspalomas Charter navegando"
            className="h-full min-h-[420px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-ocean-950/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-sand-300">Princess Riviera 46</p>
            <h3 className="mt-3 max-w-xl font-display text-4xl text-white sm:text-5xl">
              Un yate pensado para disfrutar con imagen premium.
            </h3>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="The boat"
            title="Una sección visual para presentar el barco sin caer en una ficha técnica pesada"
            text="La idea es enseñar comodidad, zonas de relax, navegación agradable y una percepción de lujo accesible, perfecta para un charter privado bien posicionado."
          />

          <div className="mt-8 grid gap-4">
            {boatFeatures.map((feature, index) => {
              const Icon = featureIcons[index]
              return (
                <div
                  key={feature}
                  className="flex gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5"
                >
                  <div className="mt-1 rounded-2xl bg-sand-500/10 p-3 text-sand-400">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm leading-7 text-white/72">{feature}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoatSection
