import {
    FaUserCheck,
    FaRoute,
    FaShieldAlt,
    FaHeadset,
    FaMapSigns,
    FaWhatsapp,
    FaIdCard,
    FaStar,
} from 'react-icons/fa'
import { SITE } from '../config/site'

const features = [
    {
        icon: FaUserCheck,
        title: 'Experienced & Licensed Driver',
        text: 'Years of professional experience driving across Sri Lanka, fully certified for tourism.',
    },
    {
        icon: FaRoute,
        title: 'Customized Itineraries',
        text: 'Every trip is tailored to your pace, preferences and budget. No rush, no stress.',
    },
    {
        icon: FaShieldAlt,
        title: 'Safe & Insured Vehicles',
        text: 'Air-conditioned, modern cars and vans regularly inspected for your safety and comfort.',
    },
    {
        icon: FaHeadset,
        title: '24/7 WhatsApp Support',
        text: 'We stay in touch before and throughout your journey to answer questions and help.',
    },
    {
        icon: FaMapSigns,
        title: 'Local Hidden Gems',
        text: 'Beyond the tourist spots - discover local food, quiet beaches and authentic culture.',
    },
    {
        icon: FaWhatsapp,
        title: 'Direct Driver Booking',
        text: 'Deal directly with us, not a middleman agency. Clear communication and fair prices.',
    },
]

// The "5.0 Google Reviews" badge on top of the photo
function RatingBadge() {
    const badgeClass =
        'absolute -top-4 left-4 z-20 flex items-center gap-3 rounded-xl bg-white px-3 py-2 shadow-lg ring-1 ring-black/5'

    const content = (
        <>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/30 text-gold-dark">
                <FaStar />
            </span>
            <div>
                <p className="flex items-center gap-1.5 text-sm font-bold text-navy">
                    {SITE.googleRating}
                    <span className="flex gap-0.5 text-xs text-gold">
                        {[1, 2, 3, 4, 5].map((n) => (
                            <FaStar key={n} />
                        ))}
                    </span>
                </p>
                <p className="text-xs text-gray-600">Google Reviews</p>
            </div>
        </>
    )

    // If you added a Google reviews link in site.js, the badge becomes clickable
    return SITE.googleReviewsUrl ? (
        <a
            href={SITE.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={badgeClass}
        >
            {content}
        </a>
    ) : (
        <div className={badgeClass}>{content}</div>
    )
}

function About() {
    return (
        <section id="about" className="bg-cream py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="text-center">
                    <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                        <span className="h-px w-8 bg-gold-dark" />
                        About Us
                        <span className="h-px w-8 bg-gold-dark" />
                    </p>
                </div>
                {/* Photo + intro */}
                <div className="grid items-center gap-8 lg:grid-cols-[2fr_3fr] lg:gap-16">
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
                        <RatingBadge />
                        <div className="absolute -bottom-4 right-6 z-20 flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-semibold text-gold shadow-lg">
                            <FaIdCard />
                            Licensed & Insured
                        </div>
                    </div>

                    {/* Intro text */}
                    <div>
                        <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-4xl">
                            Meet Your Dedicated Driver-Guide
                        </h2>
                        <p className="mt-5 leading-relaxed text-navy/80">
                            We are a family-owned Sri Lankan tour operator based in Weligama, Sri Lanka, specializing in personalized private tours and transfers. My name is Dhananjaya (Dhana) and I am a licensed driver with over 10 years of experience helping travelers from around the world explore the island safely and comfortably.
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
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-xl text-gold transition duration-300 group-hover:bg-gold group-hover:text-navy">
                                <Icon />
                            </span>
                            <h4 className="mt-4 font-semibold text-navy">{title}</h4>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default About
