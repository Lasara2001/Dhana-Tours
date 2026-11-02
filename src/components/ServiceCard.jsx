import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { whatsappLink } from '../config/site'

function ServiceCard({ service }) {
    const { title, icon: Icon, image, description, features, buttonLabel, message } = service

    return (
        <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
            {/* Photo + icon badge */}
            <div className="relative h-44 bg-navy-light">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none' // hide if the photo is missing
                    }}
                />
                <span className="absolute -bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gold-dark shadow-md ring-1 ring-black/5">
                    <Icon />
                </span>
            </div>

            {/* Text */}
            <div className="flex flex-1 flex-col p-5 pt-8">
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
                <ul className="mb-6 mt-4 space-y-2 border-t border-gray-100 pt-4">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                            <FaCheckCircle className="mt-0.5 shrink-0 text-gold-dark" />
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* mt-auto pushes the button to the bottom so all cards line up */}
                <a
                    href={whatsappLink(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-between gap-3 rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
                >
                    {buttonLabel}
                    <FaArrowRight />
                </a>
            </div>
        </article>
    )
}

export default ServiceCard
