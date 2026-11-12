import { useTranslation } from 'react-i18next'
import { FaClock, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { whatsappLink } from '../config/site'

function PackageCard({ pkg }) {
    const { t } = useTranslation()
    const { id, days, image } = pkg

    const title = t(`packages.items.${id}.title`)
    const description = t(`packages.items.${id}.description`)
    const highlightList = t(`packages.items.${id}.highlights`, { returnObjects: true })
    const highlights = Array.isArray(highlightList) ? highlightList : []

    // This message goes to the business, so it stays in English
    const message = `Hello Dhana Tours, I am interested in the "${pkg.title}" tour (${pkg.duration}). Could you please share the price and details?`

    return (
        <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-light shadow-lg">
            {/* Photo + duration badge */}
            <div className="relative h-52 bg-navy">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none' // hide if the photo is missing
                    }}
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                    <FaClock />
                    {/* "count" picks the right word form: 1 день, 3 дня, 7 дней */}
                    {t('packages.days', { count: days })}
                </span>
            </div>

            {/* Text */}
            <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-xl font-semibold text-gold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                    {highlights.map((item) => (
                        <li
                            key={item}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs text-white/90"
                        >
                            <FaMapMarkerAlt className="text-gold" />
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Price note + button (mt-auto keeps this at the bottom of every card) */}
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                    <span className="text-sm italic text-white/70">{t('packages.contactForPrice')}</span>
                    <a
                        href={whatsappLink(message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
                    >
                        <FaWhatsapp className="text-base" />
                        {t('packages.enquire')}
                    </a>
                </div>
            </div>
        </article>
    )
}

export default PackageCard