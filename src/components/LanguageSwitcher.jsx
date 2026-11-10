import { useTranslation } from 'react-i18next'

const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
]

function LanguageSwitcher() {
    const { i18n, t } = useTranslation()

    return (
        <div
            role="group"
            aria-label={t('nav.language')}
            className="inline-flex rounded-full border border-white/20 p-0.5"
        >
            {languages.map(({ code, label }) => {
                const active = i18n.resolvedLanguage === code
                return (
                    <button
                        key={code}
                        type="button"
                        onClick={() => i18n.changeLanguage(code)}
                        aria-pressed={active}
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${active ? 'bg-gold text-navy' : 'text-white/80 hover:text-white'
                            }`}
                    >
                        {label}
                    </button>
                )
            })}
        </div>
    )
}

export default LanguageSwitcher