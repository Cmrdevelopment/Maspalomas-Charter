import { ChevronRight, PlayCircle } from 'lucide-react'
import { contact, stats } from '../data/siteData'

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/media/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-soft-radial" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-14 pt-32 sm:px-6 lg:px-10 lg:pb-20">
        <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-sand-300">
              Pasito Blanco · Gran Canaria
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.94] text-white sm:text-6xl lg:text-8xl">
              Luxury Boat Experience in Gran Canaria
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
              Experience a luxury yacht adventure in Maspalomas, cruising crystal waters and stunning coastlines. Enjoy a private, customizable tour with drinks, music, comfort, and unforgettable moments with friends or family.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sand-500 px-6 py-3.5 text-sm font-semibold text-ocean-950 transition hover:bg-sand-400"
              >
                Reservar por WhatsApp
                <ChevronRight size={16} />
              </a>
              <a
                href="#experiencias"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Ver experiencias
                <PlayCircle size={16} />
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[2rem] border border-white/12 bg-white/8 p-5 shadow-card backdrop-blur"
              >
                <p className="font-display text-2xl text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
