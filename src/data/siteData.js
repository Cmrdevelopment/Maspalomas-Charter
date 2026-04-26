import {
  Anchor,
  BadgeCheck,
  CalendarHeart,
  Camera,
  GlassWater,
  Heart,
  MapPinned,
  ShipWheel,
  Sparkles,
  Sunset,
  Users,
  Waves,
} from 'lucide-react'

export const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'El barco', href: '#barco' },
  { label: 'Galería', href: '#galeria' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export const stats = [
  { value: 'Private tours', label: 'Private tours • Ocean vibes • Party & Relax' },
  { value: 'Pasito Blanco', label: 'Salida premium en el sur' },
  { value: 'Family · Friends · Corporate', label: 'Planes adaptados' },
]

export const highlights = [
  {
    icon: Waves,
    title: 'Lujo relajado en el mar',
    text: 'Una experiencia pensada para disfrutar sin prisas, con vistas, navegación y momentos memorables.',
  },
  {
    icon: Users,
    title: 'Ideal para grupos privados',
    text: 'Parejas, familias, amigos o pequeñas celebraciones con una atención mucho más cercana y personal.',
  },
  {
    icon: Camera,
    title: 'Experiencia muy visual',
    text: 'La costa, el barco y la luz de Gran Canaria convierten cada salida en un recuerdo para repetir.',
  },
]

export const experiences = [
  {
    icon: Anchor,
    title: '🎉 Bachelor Party',
    text: 'Celebrate your bachelor party at sea with music, drinks, and unforgettable moments.',
    tag: 'Exclusivo',
  },
  {
    icon: Sunset,
    title: '🌅 Sunset experience',
    text: 'Enjoy a magical sunset cruise with relaxing vibes, ocean views, and golden light.',
    tag: 'Top plan',
  },
  {
    icon: Heart,
    title: '🎂 Birthday Party',
    text: 'Make your birthday special at sea with great vibes, music, and unforgettable memories.',
    tag: 'Eventos',
  },
  {
    icon: CalendarHeart,
    title: '🐬 Dolphins Watching',
    text: 'Watch dolphins in their natural habitat and experience the ocean in a unique way.',
    tag: 'Family',
  },
]

export const boatFeatures = [
  'Ambiente premium con zonas para relajarse y disfrutar de la travesía.',
  'Solárium amplio y espacios exteriores pensados para desconectar.',
  'Interior cómodo y acogedor para una experiencia más completa a bordo.',
  'Perfecto para grupos reducidos que buscan privacidad y buena imagen.',
]

export const gallery = [
  {
    src: '/media/gallery-1.jpg',
    title: 'Momentos a bordo',
    description: 'Experiencia lifestyle con luz, mar y navegación.',
  },
  {
    src: '/media/gallery-2.jpg',
    title: 'Mar abierto',
    description: 'El barco como escenario principal de la experiencia.',
  },
  {
    src: '/media/gallery-3.jpg',
    title: 'Plan familiar',
    description: 'Opciones pensadas para disfrutar en grupo.',
  },
  {
    src: '/media/gallery-4.jpg',
    title: 'Ambiente premium',
    description: 'Detalles que elevan la percepción de la marca.',
  },
  {
    src: '/media/gallery-5.png',
    title: 'Maspalomas Charter',
    description: 'Identidad ligada a mar, sol y experiencia privada.',
  },
]

export const reasons = [
  {
    icon: BadgeCheck,
    title: 'Experiencia privada',
    text: 'No es una excursión genérica. Es un plan mucho más exclusivo y cuidado.',
  },
  {
    icon: MapPinned,
    title: 'Salida desde Pasito Blanco',
    text: 'Ubicación premium en el sur de Gran Canaria, ideal para un posicionamiento aspiracional.',
  },
  {
    icon: ShipWheel,
    title: 'Boat lifestyle',
    text: 'Una propuesta enfocada en sensaciones, recuerdos, relax y celebraciones.',
  },
  {
    icon: Sparkles,
    title: 'Reserva fácil',
    text: 'Toda la web está pensada para convertir por WhatsApp de forma rápida y directa.',
  },
]

export const testimonials = [
  {
    quote:
      'Una experiencia preciosa, muy cómoda y perfecta para disfrutar el sur de Gran Canaria desde el mar.',
    author: 'Private group',
  },
  {
    quote:
      'La sensación es premium desde el primer minuto. Ideal para celebrar algo especial con amigos o en familia.',
    author: 'Sunset charter',
  },
  {
    quote:
      'El barco, el ambiente y la atención hacen que no parezca una salida cualquiera, sino un plan memorable.',
    author: 'Family experience',
  },
]

export const faqs = [
  {
    question: '¿Desde dónde sale la experiencia?',
    answer: 'La propuesta de marca está planteada para salidas desde Pasito Blanco, en el sur de Gran Canaria.',
  },
  {
    question: '¿La experiencia es privada?',
    answer: 'Sí. La web está diseñada con enfoque de charter privado, ideal para grupos, familias, amigos o eventos.',
  },
  {
    question: '¿Se puede celebrar un evento especial?',
    answer: 'Sí. Cumpleaños, aniversarios, celebraciones íntimas o planes corporativos encajan perfectamente en esta línea de marca.',
  },
  {
    question: '¿Cómo se reserva?',
    answer: 'La conversión principal se plantea por WhatsApp, para facilitar consultas rápidas y cierre directo.',
  },
]

export const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/maspalomas_charter?igsh=bWU3eWoxMjNjZXRs&utm_source=qr',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@maspalomas.charte?_r=1&_t=ZN-95eFlAFuPpe',
  },
]

export const contact = {
  whatsappHref: 'https://wa.me/34603526087',
  phone: '+34 685 80 27 23',
  phoneAlt: '+34 685 80 27 23',
  email: 'maspalomascharter@gmail.com',
  location: 'Pasito Blanco, Gran Canaria',
  bookingUrl: 'https://www.pasitoblanco.com/embarcaciones/maspalomas-charter-gran-canaria/',
}
