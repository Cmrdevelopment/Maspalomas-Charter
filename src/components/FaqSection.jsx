import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { faqs } from '../data/siteData'

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 px-6 py-5 shadow-card">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-base font-semibold text-white sm:text-lg">{item.question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-sand-300 transition ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open ? <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72">{item.answer}</p> : null}
    </div>
  )
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Preguntas frecuentes para quitar fricción antes de reservar"
          text="Una web buena no solo enamora visualmente: también resuelve dudas y facilita que el usuario pase a escribir."
        />

        <div className="mt-10 grid gap-4">
          {faqs.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              open={openIndex === index}
              onToggle={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
