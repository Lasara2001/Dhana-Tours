import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { SITE, whatsappLink } from '../config/site'

function Contact({ onBook }) {
    // "tel:" links only accept digits and "+"
    const phoneHref = `tel:${SITE.phone.replace(/[^+\d]/g, '')}`

    const items = [
        {
            icon: FaWhatsapp,
            label: 'WhatsApp',
            value: 'Start a chat',
            href: whatsappLink('Hello Dhana Tours, I have a question.'),
            external: true,
        },
        { icon: FaPhoneAlt, label: 'Phone', value: SITE.phone, href: phoneHref },
        { icon: FaEnvelope, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
        { icon: FaMapMarkerAlt, label: 'Location', value: SITE.location },
    ]

    return (
        <section id="contact" className="bg-cream py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="text-center">
                    <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                        <span className="h-px w-8 bg-gold-dark" />
                        Contact
                        <span className="h-px w-8 bg-gold-dark" />
                    </p>
                    <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-5xl">
                        Plan Your Trip With Us
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-navy/80">
                        Questions about a tour, a transfer or a custom plan? Message us any time and
                        we will get back to you.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    {/* Contact cards */}
                    <div className="space-y-4">
                        {items.map(({ icon: Icon, label, value, href, external }) => {
                            const content = (
                                <>
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-gold-dark">
                                        <Icon className="text-lg" />
                                    </span>
                                    <span>
                                        <span className="block text-xs uppercase tracking-wide text-gray-500">
                                            {label}
                                        </span>
                                        <span className="block font-semibold text-navy">{value}</span>
                                    </span>
                                </>
                            )
                            const cardClass =
                                'flex items-center gap-4 rounded-2xl bg-white p-4 shadow ring-1 ring-black/5'

                            return href ? (
                                <a
                                    key={label}
                                    href={href}
                                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className={`${cardClass} transition-shadow hover:shadow-lg`}
                                >
                                    {content}
                                </a>
                            ) : (
                                <div key={label} className={cardClass}>
                                    {content}
                                </div>
                            )
                        })}

                        <button
                            type="button"
                            onClick={() => onBook('taxi')}
                            className="w-full rounded-xl bg-navy px-6 py-3.5 font-semibold text-white transition-colors hover:bg-navy-light"
                        >
                            Request a Booking
                        </button>
                    </div>

                    {/* Map */}
                    <div className="h-80 overflow-hidden rounded-2xl bg-white shadow ring-1 ring-black/5 lg:h-auto lg:min-h-[24rem]">
                        <iframe
                            title="Dhana Tours location map"
                            src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-full w-full border-0"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact