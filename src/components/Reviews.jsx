import { FaStar, FaQuoteLeft, FaWhatsapp } from 'react-icons/fa'
import { reviews } from '../data/reviews'
import { whatsappLink } from '../config/site'

function Stars({ rating }) {
    return (
        <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((n) => (
                <FaStar key={n} className={n <= rating ? 'text-gold' : 'text-white/20'} />
            ))}
        </div>
    )
}

function Reviews() {
    const shareLink = whatsappLink(
        'Hello Dhana Tours, I would like to share my feedback about my trip.'
    )

    return (
        <section id="reviews" className="bg-navy py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="text-center">
                    <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        <span className="h-px w-8 bg-gold" />
                        Reviews
                        <span className="h-px w-8 bg-gold" />
                    </p>
                    <h2 className="mt-4 font-heading text-3xl font-bold md:text-5xl">
                        What Our Guests Say
                    </h2>
                </div>

                {reviews.length > 0 ? (
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {reviews.map((review) => (
                            <article
                                key={review.id}
                                className="flex flex-col rounded-2xl border border-white/10 bg-navy-light p-6"
                            >
                                <Stars rating={review.rating} />
                                <FaQuoteLeft className="mt-4 text-gold/60" />
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/85">
                                    {review.text}
                                </p>
                                <div className="mt-5 border-t border-white/10 pt-4">
                                    <p className="font-semibold text-gold">{review.name}</p>
                                    <p className="text-xs text-white/60">
                                        {review.country}
                                        {review.source ? ` · via ${review.source}` : ''}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    // Shown when there are no real reviews yet
                    <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-navy-light p-8 text-center">
                        <p className="text-white/85">
                            Guest reviews will appear here soon. Traveled with us? We would love to
                            hear about your trip.
                        </p>
                        <a
                            href={shareLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
                        >
                            <FaWhatsapp className="text-lg" />
                            Share your experience
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Reviews