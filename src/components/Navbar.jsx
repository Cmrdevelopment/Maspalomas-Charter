import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { contact, navItems } from '../data/siteData'

function BrandMark() {
  return (
    <a href="#inicio" className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 shadow-card backdrop-blur">
        <div className="relative h-7 w-7 overflow-hidden rounded-full bg-gradient-to-br from-sand-400 to-sand-600">
          <div className="absolute inset-x-1 bottom-2 h-2 rounded-full bg-ocean-900" />
          <div className="absolute left-1 right-1 bottom-1 h-1 rounded-full bg-white/80" />
          <div className="absolute left-3 top-[7px] h-[2px] w-3 rounded-full bg-ocean-900" />
        </div>
      </div>
      <div>
        <p className="font-display text-2xl leading-none text-white">Maspalomas Charter</p>
        <p className="text-[11px] uppercase tracking-[0.32em] text-white/55">Gran Canaria</p>
      </div>
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/12 bg-ocean-950/70 px-4 py-3 shadow-glow backdrop-blur-xl sm:px-6">
        <BrandMark />

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${contact.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
          >
            <Phone size={16} />
            {contact.phone}
          </a>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-sand-500 px-5 py-2.5 text-sm font-semibold text-ocean-950 transition hover:bg-sand-400"
          >
            Reservar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/5 text-white lg:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-ocean-900/96 p-5 shadow-glow backdrop-blur lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-sand-500 px-5 py-3 text-sm font-semibold text-ocean-950"
          >
            Reservar por WhatsApp
          </a>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
