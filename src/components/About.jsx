import {
    FaCarSide,
    FaFileInvoiceDollar,
    FaSlidersH,
    FaMapSigns,
    FaWhatsapp,
    FaIdCard,
} from 'react-icons/fa'

const features = [
    {
        icon: FaCarSide,
        title: 'Modern Executive Fleet',
        text: 'Every vehicle in our fleet is rigorously inspected, air-conditioned, non-smoking, and outfitted with passenger Wi-Fi, USB phone chargers, and luggage racks.',
    },
    {
        icon: FaFileInvoiceDollar,
        title: 'Transparent & Fair Pricing',
        text: 'Zero hidden charges. Vehicle, fuel, driver meals/stay, highway tolls, and parking are clearly itemized.',
    },
    {
        icon: FaSlidersH,
        title: 'Total Route Flexibility',
        text: 'Pause whenever inspiration strikes, for roadside fresh coconuts, unexpected tea valley vistas, or artisanal spice gardens without rushed deadlines.',
    },
    {
        icon: FaMapSigns,
        title: 'Zero Tourist Traps',
        text: 'Strict policy against commissioned tourist traps. We recommend authentic family-run eateries, ethical wildlife reserves, and genuine local crafts.',
    },
    {
        icon: FaWhatsapp,
        title: 'Frictionless WhatsApp Booking',
        text: 'Skip complex checkout forms and endless booking portals. Chat directly with human travel coordinators; they will respond to you within minutes with clear recommendations.',
    },
    {
        icon: FaIdCard,
        title: 'Licensed Driver & Fully Insured',
        text: 'Government licensed, professional drivers and insured vehicles, for your peace of mind on every journey.',
    },
]

function About() {
    return (
        <section id="about" className="bg-cream py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                {/* Photo + intro */}
                <div className="grid items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
                    {/* Photo with a gold frame behind it */}
                    <div className="relative mb-4 mr-4">
                        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-gold-dark/50" />
                        <div className="relative z-10 h-64 overflow-hidden rounded-2xl bg-navy-light shadow-lg sm:h-72 lg:h-80">
                            <img
                                src="/images/about.webp"
                                alt="Dhana Tours driver and vehicle"
                                loading="lazy"
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none'
                                }}
                            />
                        </div>
                        <div className="absolute -bottom-4 left-4 z-20 flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-semibold text-gold shadow-lg">
                            <FaIdCard />
                            Licensed & Insured
                        </div>
                    </div>

                    {/* Intro text */}
                    <div>
                        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                            <span className="h-px w-8 bg-gold-dark" />
                            About Us
                        </p>
                        <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-4xl">
                            Your Local Travel Partner in Sri Lanka
                        </h2>
                        <p className="mt-5 leading-relaxed text-navy/80">
                            Dhana Tours is a Sri Lankan travel company offering private tours, airport
                            transfers and car rental with a professional driver. We help visitors from
                            Europe, Russia and around the world explore the island safely and
                            comfortably.
                        </p>
                    </div>
                </div>

                {/* Why choose us */}
                <h3 className="mt-20 text-center font-heading text-2xl font-semibold text-navy md:text-3xl">
                    Why Travelers Choose Us
                </h3>

                <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map(({ icon: Icon, title, text }) => (
                        <li
                            key={title}
                            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Gold line that grows on hover */}
                            <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />

                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-xl text-gold-dark">
                                <Icon />
                            </span>
                            <h4 className="mt-5 font-heading text-lg font-semibold text-navy">
                                {title}
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default About