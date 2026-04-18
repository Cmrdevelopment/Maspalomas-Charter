import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { socialLinks } from '../data/siteData'

function SocialSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Social proof"
            title="Instagram y TikTok como extensión natural de la marca"
            text="Esta sección está pensada para que la web y las redes se refuercen mutuamente: la web vende, y las redes terminan de validar la experiencia."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-sand-300/40 hover:bg-white/10"
              >
                {link.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <img
            src="/media/gallery-2.jpg"
            alt="Vista desde el barco en Gran Canaria"
            className="h-[340px] w-full rounded-[2rem] border border-white/10 object-cover shadow-card sm:h-[420px]"
          />
          <div className="grid gap-5">
            <img
              src="/media/gallery-3.jpg"
              alt="Plan familiar en el barco"
              className="h-[200px] w-full rounded-[2rem] border border-white/10 object-cover shadow-card"
            />
            <img
              src="/media/gallery-4.jpg"
              alt="Barco premium navegando"
              className="h-[200px] w-full rounded-[2rem] border border-white/10 object-cover shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialSection
