import SectionHeading from './SectionHeading'
import { gallery } from '../data/siteData'

function GallerySection() {
  return (
    <section id="galeria" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Gallery"
          title="Una galería editorial para que el usuario piense: quiero vivir esto"
          text="Con material real, vídeo y fotos lifestyle, esta sección empuja deseo, confianza y percepción premium."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-12">
          {gallery.map((item, index) => {
            const sizeClasses =
              index === 0
                ? 'xl:col-span-5 xl:row-span-2'
                : index === 1
                  ? 'xl:col-span-3'
                  : index === 2
                    ? 'xl:col-span-4'
                    : index === 3
                      ? 'xl:col-span-4'
                      : 'xl:col-span-3'

            return (
              <figure
                key={item.src}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-card ${sizeClasses}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full min-h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/88 via-ocean-950/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/70">{item.description}</p>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
