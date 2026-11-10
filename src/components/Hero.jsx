import { useTranslation } from 'react-i18next'
import {
    FaArrowRight,
    FaShieldAlt,
    FaUserTie,
    FaLeaf,
    FaHeadset,
} from 'react-icons/fa'

// "key" points to hero.features.safe, hero.features.driver ...
const features = [
    { icon: FaShieldAlt, key: 'safe' },
    { icon: FaUserTie, key: 'driver' },
    { icon: FaLeaf, key: 'packages' },
    { icon: FaHeadset, key: 'insured' },
]

function Hero({ onBook }) {
    const { t } = useTranslation()

    return (
        <section
            id="home"
            className="relative flex min-h-[max(100vh,740px)] flex-col bg-cover"
            style={{
                backgroundImage: "url('/images/hero.webp')",
                backgroundPosition: 'center 20%',
            }}
        >
            {/* Dark overlay so the text is easy to read */}
            <div className="absolute inset-0 bg-linear-to-r from-navy/90 via-navy/50 to-navy/10" />

            {/* Main content */}
            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 pb-10 pt-28 md:px-8">
                <div className="max-w-xl">
                    <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-gold sm:text-sm">
                        <span className="h-px w-8 shrink-0 bg-gold" />
                        {t('hero.tagline')}
                        <span className="h-px w-8 shrink-0 bg-gold" />
                    </p>

                    <h1 className="mt-6 font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                        {t('hero.titleLine1')}{' '}
                        <span className="block text-5xl sm:text-6xl md:text-7xl">
                            {t('hero.titleBrand')}
                        </span>
                    </h1>

                    <p className="mt-6 text-sm font-medium italic leading-relaxed text-lime-200 sm:text-base">
                        {t('hero.description')}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            type="button"
                            onClick={() => onBook('taxi')}
                            className="inline-flex items-center gap-3 rounded-xl bg-gold px-7 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
                        >
                            {t('hero.taxiBooking')}
                            <FaArrowRight />
                        </button>
                        <button
                            type="button"
                            onClick={() => onBook('tour')}
                            className="inline-flex items-center gap-3 rounded-xl border border-gold bg-white/10 px-7 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-gold hover:text-navy"
                        >
                            {t('hero.tourBooking')}
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom feature strip */}
            <div className="relative z-10 border-t border-white/10 bg-navy/70 backdrop-blur">
                <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-5 md:grid-cols-4 md:px-8">
                    {features.map(({ icon: Icon, key }) => (
                        <li key={key} className="flex items-center gap-3">
                            <Icon className="shrink-0 text-xl text-gold" />
                            <span className="text-xs leading-tight text-white/90">
                                {t(`hero.features.${key}`)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Hero