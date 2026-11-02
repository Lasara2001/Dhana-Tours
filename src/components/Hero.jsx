import {
    FaArrowRight,
    FaShieldAlt,
    FaUserTie,
    FaLeaf,
    FaHeadset,
} from 'react-icons/fa'
import { whatsappLink } from '../config/site'

const features = [
    { icon: FaShieldAlt, line1: 'Safe & Reliable', line2: 'Transportation' },
    { icon: FaUserTie, line1: 'Experienced &', line2: 'Friendly Driver' },
    { icon: FaLeaf, line1: 'Customizable', line2: 'Tour Packages' },
    { icon: FaHeadset, line1: 'Fully Insured &', line2: 'SLTDA Certified' },
]

function Hero() {
    const taxiLink = whatsappLink('Hello Dhana Tours, I would like to book a taxi.')
    const tourLink = whatsappLink('Hello Dhana Tours, I would like to book a tour.')

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
                        <span className="h-px w-8 bg-gold" />
                        Your Trusted Travel Partner
                        <span className="h-px w-8 bg-gold" />
                    </p>

                    <h1 className="mt-6 font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                        Discover the Beauty of Sri Lanka with{' '}
                        <span className="block text-5xl sm:text-6xl md:text-7xl">Dhana Tours</span>
                    </h1>

                    <p className="mt-6 text-sm font-medium italic leading-relaxed text-lime-200 sm:text-base">
                        We offer private tours, airport transfers and car rental with a professional
                        driver. Explore breathtaking destinations, enjoy comfortable private
                        transportation and discover Sri Lanka with a friendly, certified local
                        driver-guide.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href={taxiLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-xl bg-gold px-7 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
                        >
                            Taxi Booking
                            <FaArrowRight />
                        </a>
                        <a
                            href={tourLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-xl border border-gold bg-white/10 px-7 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-gold hover:text-navy"
                        >
                            Tour Booking
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom feature strip */}
            <div className="relative z-10 border-t border-white/10 bg-navy/70 backdrop-blur">
                <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-5 md:grid-cols-4 md:px-8">
                    {features.map(({ icon: Icon, line1, line2 }) => (
                        <li key={line1} className="flex items-center gap-3">
                            <Icon className="shrink-0 text-xl text-gold" />
                            <span className="text-xs leading-tight text-white/90">
                                {line1}
                                <br />
                                {line2}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Hero