import { useTranslation } from 'react-i18next'
import PackageCard from './PackageCard'
import { packages } from '../data/packages'

function Packages() {
    const { t } = useTranslation()

    return (
        <section id="packages" className="bg-navy py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="text-center">
                    <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        <span className="h-px w-8 bg-gold" />
                        {t('packages.tag')}
                        <span className="h-px w-8 bg-gold" />
                    </p>
                    <h2 className="mt-4 font-heading text-3xl font-bold md:text-5xl">
                        {t('packages.title')}
                    </h2>
                    <p className="mx-auto mt-5 max-w-3xl text-white/80">{t('packages.subtitle')}</p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {packages.map((pkg) => (
                        <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>

                <p className="mt-10 text-center text-sm text-white/70">{t('packages.footerNote')}</p>
            </div>
        </section>
    )
}

export default Packages