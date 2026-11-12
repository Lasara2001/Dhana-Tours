import { useTranslation } from 'react-i18next'
import ServiceCard from './ServiceCard'
import { services } from '../data/services'

function Services() {
    const { t } = useTranslation()

    return (
        <section id="services" className="bg-cream py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="text-center">
                    <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                        <span className="h-px w-8 bg-gold-dark" />
                        {t('services.tag')}
                        <span className="h-px w-8 bg-gold-dark" />
                    </p>
                    <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-5xl">
                        {t('services.title')}
                    </h2>
                    <p className="mx-auto mt-5 max-w-3xl text-navy/80">{t('services.subtitle')}</p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services