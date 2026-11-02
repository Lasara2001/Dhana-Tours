import { useState } from 'react'
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import { whatsappLink } from '../config/site'

const links = [
    { label: 'Home', href: '#home' },
    { label: 'Our Services', href: '#services' },
    { label: 'Tour Packages', href: '#packages' },
    { label: 'About Us', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('#home')

    const handleLinkClick = (href) => {
        setActive(href)
        setMenuOpen(false)
    }

    const whatsappHref = whatsappLink('Hello Dhana Tours, I would like to make an inquiry.')

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-navy/95 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
                {/* Logo + name */}
                <a href="#home" className="flex items-center gap-3">
                    <img
                        src="/images/logo.jpg"
                        alt="Dhana Tours logo"
                        className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
                    />
                    <span className="font-heading text-xl font-semibold tracking-wide text-gold md:text-2xl">
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
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop WhatsApp button */}
                <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center gap-2 rounded-xl border border-green-400 bg-green-700 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-green-600 lg:inline-flex"
                >
                    <FaWhatsapp className="text-lg" />
                    Book via WhatsApp
                </a>

                {/* Mobile menu button */}
                <button
                    className="text-2xl text-gold lg:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
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
                                    {link.label}
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
                        Book via WhatsApp
                    </a>
                </div>
            )}
        </header>
    )
}

export default Navbar