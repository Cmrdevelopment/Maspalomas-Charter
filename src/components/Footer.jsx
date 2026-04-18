import { contact, navItems, socialLinks } from '../data/siteData'

function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr_0.8fr]">
        <div>
          <p className="font-display text-3xl text-white">Maspalomas Charter</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/60">
            Primera versión conceptual de una landing premium en React + Vite + Tailwind para
            presentar experiencias privadas en barco en el sur de Gran Canaria.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-sand-300">Secciones</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/65 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-sand-300">Contacto</p>
          <div className="mt-4 space-y-2 text-sm text-white/65">
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="block transition hover:text-white">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="block transition hover:text-white">
              {contact.email}
            </a>
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
