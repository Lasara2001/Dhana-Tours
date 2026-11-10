
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import { whatsappLink } from '../config/site'
import LanguageSwitcher from './LanguageSwitcher'

// "key" points to the text in the locale files: nav.home, nav.services ...
const links = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'packages', href: '#packages' },
    { key: 'about', href: '#about' },
    { key: 'reviews', href: '#reviews' },
    { key: 'contact', href: '#contact' },
]

function Navbar() {
    const { t } = useTranslation()
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('#home')

    const handleLinkClick = (href) => {
        setActive(href)
        setMenuOpen(false)
    }

    // The message that reaches the business stays in English
    const whatsappHref = whatsappLink('Hello Dhana Tours, I would like to make an inquiry.')

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-navy/95 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:h-20 md:px-8">
                {/* Logo + name */}
                <a href="#home" className="flex items-center gap-3">
                    <img
                        src="/images/logo.jpg"
                        alt="Dhana Tours logo"
                        className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
                    />
                    <span className="hidden font-heading text-xl font-semibold tracking-wide text-gold min-[400px]:inline md:text-2xl">
                        DHANA TOURS
                    </span>
                </a>

                {/* Desktop menu */}
                <ul className="hidden items-center gap-8 lg:flex">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => handleLinkClick(link.href)}
                                className={`border-b-2 pb-1 text-sm transition-colors hover:text-gold ${active === link.href
                                    ? 'border-gold text-gold'
                                    : 'border-transparent text-white'
                                    }`}
                            >
                                {t(`nav.${link.key}`)}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right side: language switch, WhatsApp button (desktop), menu button (mobile) */}
                <div className="flex items-center gap-3">
                    <LanguageSwitcher />

                    <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden items-center gap-2 rounded-xl border border-green-400 bg-green-700 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-green-600 lg:inline-flex"
                    >
                        <FaWhatsapp className="text-lg" />
                        {t('nav.bookWhatsapp')}
                    </a>

                    <button
                        className="text-2xl text-gold lg:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={t('nav.toggleMenu')}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu panel */}
            {menuOpen && (
                <div className="border-t border-white/10 bg-navy px-4 pb-6 lg:hidden">
                    <ul className="flex flex-col gap-1 pt-2">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={`block rounded-lg px-3 py-3 ${active === link.href ? 'bg-white/5 text-gold' : 'text-white'
                                        }`}
                                >
                                    {t(`nav.${link.key}`)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-green-400 bg-green-700 px-5 py-3 font-semibold"
                    >
                        <FaWhatsapp className="text-lg" />
                        {t('nav.bookWhatsapp')}
                    </a>
                </div>
            )}
        </header>
    )
}

export default Navbar