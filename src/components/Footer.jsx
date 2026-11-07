import { FaFacebookF, FaInstagram, FaTripadvisor, FaTelegramPlane } from 'react-icons/fa'
import { SITE } from '../config/site'

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Services', href: '#services' },
    { label: 'Tour Packages', href: '#packages' },
    { label: 'About Us', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
]

const socialIcons = {
    facebook: FaFacebookF,
    instagram: FaInstagram,
    tripadvisor: FaTripadvisor,
    telegram: FaTelegramPlane,
}

function formatSocialUrl(key, url) {
    if (!url) return '#'
    if (url.startsWith('http://') || url.startsWith('https://')) return url
    const lower = key.toLowerCase()
    if (lower === 'telegram') {
        return `https://t.me/${url.replace(/^@/, '')}`
    }
    if (lower === 'facebook') {
        return `https://facebook.com/${url.replace(/^\//, '')}`
    }
    if (lower === 'instagram') {
        return `https://instagram.com/${url.replace(/^@/, '')}`
    }
    return `https://${url}`
}

function Footer() {
    // Only show social icons that have a link
    const socials = Object.entries(SITE.socials).filter(([, url]) => url)

    return (
        <footer className="border-t border-white/10 bg-navy">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-8">
                {/* Brand */}
                <div>
                    <a href="#home" className="flex items-center gap-3">
                        <img
                            src="/images/logo.jpg"
                            alt={`${SITE.name} logo`}
                            className="h-12 w-12 rounded-full object-cover"
                        />
                        <span className="font-heading text-xl font-semibold text-gold">
                            {SITE.name.toUpperCase()}
                        </span>
                    </a>
                    <p className="mt-4 text-sm text-white/70">{SITE.tagline}</p>

                    {socials.length > 0 && (
                        <div className="mt-5 flex gap-3">
                            {socials.map(([key, url]) => {
                                const Icon = socialIcons[key.toLowerCase()]
                                if (!Icon) return null
                                return (
                                    <a
                                        key={key}
                                        href={formatSocialUrl(key, url)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={key}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-gold transition-colors hover:bg-gold hover:text-navy"
                                    >
                                        <Icon />
                                    </a>
                                )
                            })}
                        </div>
                    )}
                </div>

                {/* Quick links */}
                <div>
                    <h3 className="font-semibold text-gold">Quick Links</h3>
                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:text-gold">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold text-gold">Contact</h3>
                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                        <li>{SITE.phone}</li>
                        <li>{SITE.email}</li>
                        <li>{SITE.location}</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
                © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
