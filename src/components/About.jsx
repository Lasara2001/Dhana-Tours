import { useTranslation } from 'react-i18next'
import {
    FaUserCheck,
    FaRoute,
    FaShieldAlt,
    FaHeadset,
    FaMapSigns,
    FaWhatsapp,
    FaIdCard,
    FaStar,
} from 'react-icons/fa'
import { SITE } from '../config/site'

// "key" points to about.features.driver, about.features.itineraries ... in the locale files
const features = [
    { icon: FaUserCheck, key: 'driver' },
    { icon: FaRoute, key: 'itineraries' },
    { icon: FaShieldAlt, key: 'vehicles' },
    { icon: FaHeadset, key: 'support' },
    { icon: FaMapSigns, key: 'gems' },
    { icon: FaWhatsapp, key: 'direct' },
]

// The numbers stay here (they don't change with language). Edit the values here.
const stats = [
    { key: 'safety', value: '100%' },
    { key: 'experience', value: '5+' },
]

// One style for both badges on the photo: white card + gold icon tile.
// "position" says where it sits. "small" makes it more compact.
// If "href" is empty it is a plain box, not a link.
function FloatingBadge({ icon: Icon, position, href, small, children }) {
    const className = `absolute z-20 flex items-center rounded-xl bg-white shadow-lg ring-1 ring-black/5 ${small ? 'gap-2 px-2.5 py-1.5' : 'gap-3 px-3.5 py-2.5'
        } ${position}`

    const content = (
        <>
            <span
                className={`flex shrink-0 items-center justify-center rounded-lg bg-gold/30 text-gold-dark ${small ? 'h-7 w-7 text-sm' : 'h-9 w-9'
                    }`}
            >
                <Icon />
            </span>
            <div>{children}</div>
        </>
    )

    return href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {content}
        </a>
    ) : (
        <div className={className}>{content}</div>
    )
}

function About() {
    const { t } = useTranslation()

    return (
        <section id="about" className="bg-cream py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                {/* Photo + intro (items-start keeps both tops level) */}
                <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-16">
                    {/* Photo with a gold frame behind it */}
                    <div className="relative mb-4 mr-4">
                        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-gold-dark/50" />
                        <div className="relative z-10 h-64 overflow-hidden rounded-2xl bg-navy-light shadow-lg sm:h-72 lg:h-80">
                            <img
                                src="/images/about.webp"
                                alt={t('about.photoAlt')}
                                loading="lazy"
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none'
                                }}
                            />
                        </div>

                        {/* Top-left badge: Google rating */}
                        <FloatingBadge
                            icon={FaStar}
                            position="-top-4 left-4"
                            href={SITE.googleReviewsUrl}
                        >
                            <p className="flex items-center gap-1.5 text-sm font-bold text-navy">
                                {SITE.googleRating}
                                <span className="flex gap-0.5 text-xs text-gold">
                                    {[1, 2, 3, 4, 5].map((n) => (
                                        <FaStar key={n} />
                                    ))}
                                </span>
                            </p>
                            <p className="text-xs text-gray-600">{t('about.googleReviews')}</p>
                        </FloatingBadge>

                        {/* Bottom-right badge: licensed and insured (small, so the car stays visible) */}
                        <FloatingBadge icon={FaIdCard} position="-bottom-3 right-4" small>
                            <p className="text-xs font-bold text-navy">{t('about.licensed')}</p>
                        </FloatingBadge>
                    </div>

                    {/* Intro text */}
                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-brand-blue md:text-4xl">
                            {t('about.title')}
                        </h2>
                        <div className="mt-4 h-1 w-16 rounded bg-gold" />
                        <p className="mt-5 leading-relaxed text-navy/80">{t('about.paragraph')}</p>

                        {/* Stat blocks */}
                        <div className="mt-8 grid max-w-lg grid-cols-2 gap-4">
                            {stats.map(({ key, value }) => (
                                <div key={key} className="rounded-xl bg-gold/15 px-5 py-4">
                                    <p className="font-heading text-2xl font-bold text-navy">
                                        {value}
                                    </p>
                                    <p className="mt-1 text-xs text-gray-600">
                                        {t(`about.stats.${key}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why choose us */}
                <h3 className="mt-20 text-center font-heading text-2xl font-semibold text-navy md:text-3xl">
                    {t('about.whyTitle')}
                </h3>

                <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map(({ icon: Icon, key }) => (
                        <li
                            key={key}
                            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-xl text-gold transition duration-300 group-hover:bg-gold group-hover:text-navy">
                                <Icon />
                            </span>
                            <h4 className="mt-4 font-semibold text-navy">
                                {t(`about.features.${key}.title`)}
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                {t(`about.features.${key}.text`)}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default About