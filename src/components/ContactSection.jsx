import { Mail, MapPin, MessageCircleMore, PhoneCall } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { contact } from '../data/siteData'

const contactItems = [
  {
    icon: PhoneCall,
    label: 'Teléfono principal',
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s+/g, '')}`,
  },
  {
    icon: PhoneCall,
    label: 'Teléfono alternativo',
    value: contact.phoneAlt,
    href: `tel:${contact.phoneAlt.replace(/\s+/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: contact.location,
    href: contact.bookingUrl,
  },
]

function ContactSection() {
  return (
    <section id="contacto" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-glow sm:p-10">
          <SectionHeading
            eyebrow="Contact"
            title="Tu próximo día inolvidable en el mar empieza aquí"
            text="La llamada a la acción principal está pensada para WhatsApp, pero he dejado preparado un bloque de contacto elegante y completo para futuras ampliaciones."
          />

          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-sand-500 px-6 py-3.5 text-sm font-semibold text-ocean-950 transition hover:bg-sand-400"
          >
            <MessageCircleMore size={18} />
            Reservar por WhatsApp
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.03] p-6 shadow-card transition hover:border-sand-300/35"
              >
                <div className="inline-flex rounded-2xl bg-sand-500/10 p-3 text-sand-400">
                  <Icon size={20} />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-white/45">{item.label}</p>
                <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
