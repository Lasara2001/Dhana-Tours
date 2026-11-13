import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaStar, FaQuoteLeft, FaWhatsapp, FaGoogle } from 'react-icons/fa'
import { reviews } from '../data/reviews'
import { SITE, whatsappLink } from '../config/site'

const LONG_TEXT = 260 // reviews longer than this get a "Read more" button

function Stars({ rating }) {
    const { t } = useTranslation()

    return (
        <div className="flex gap-1" aria-label={t('reviews.starsLabel', { rating })}>
            {[1, 2, 3, 4, 5].map((n) => (
                <FaStar key={n} className={n <= rating ? 'text-gold' : 'text-white/20'} />
            ))}
        </div>
    )
}

function ReviewCard({ review }) {
    const { t, i18n } = useTranslation()
    const [expanded, setExpanded] = useState(false)

    // Russian visitors see the original Russian text when we have it
    const showOriginal = i18n.resolvedLanguage === 'ru' && review.textRu
    const text = showOriginal ? review.textRu : review.text
    const isTranslated = Boolean(review.translatedFrom) && !showOriginal
    const isLong = text.length > LONG_TEXT

    return (
        <article className="flex flex-col rounded-2xl border border-white/10 bg-navy-light p-6">
            <Stars rating={review.rating} />

            <div className="flex-1">
                <FaQuoteLeft className="mt-4 text-gold/60" />

                {/* whitespace-pre-line keeps the paragraph breaks of the review */}
                <p
                    className={`mt-3 whitespace-pre-line text-sm leading-relaxed text-white/85 ${isLong && !expanded ? 'line-clamp-6' : ''
                        }`}
                >
                    {text}
                </p>

                {isLong && (
                    <button
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                        aria-expanded={expanded}
                        className="mt-2 text-xs font-semibold text-gold hover:underline"
                    >
                        {expanded ? t('reviews.showLess') : t('reviews.readMore')}
                    </button>
                )}

                {isTranslated && (
                    <p className="mt-2 text-xs italic text-white/50">
                        {t('reviews.translatedFrom', {
                            language: t(`reviews.languages.${review.translatedFrom}`, {
                                defaultValue: review.translatedFrom,
                            }),
                        })}
                    </p>
                )}
            </div>

            <div className="mt-5 flex items-end justify-between gap-3 border-t border-white/10 pt-4">
                <div>
                    <p className="font-semibold text-gold">{review.name}</p>
                    <p className="text-xs text-white/60">
                        {[review.country, review.date].filter(Boolean).join(' · ')}
                    </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-white/60">
                    <FaGoogle />
                    {review.source || 'Google'}
                </span>
            </div>
        </article>
    )
}

function Reviews() {
    const { t } = useTranslation()

    // The message that reaches the business stays in English
    const shareLink = whatsappLink(
        'Hello Dhana Tours, I would like to share my feedback about my trip.'
    )

    return (
        <section id="reviews" className="bg-navy py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="text-center">
                    <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        <span className="h-px w-8 bg-gold" />
                        {t('reviews.tag')}
                        <span className="h-px w-8 bg-gold" />
                    </p>
                    <h2 className="mt-4 font-heading text-3xl font-bold md:text-5xl">
                        {t('reviews.title')}
                    </h2>

                    {/* Google summary bar */}
                    {reviews.length > 0 && (
                        <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/15 bg-navy-light px-6 py-3">
                            <FaGoogle className="text-gold" />
                            <span className="text-lg font-bold">{SITE.googleRating}</span>
                            <Stars rating={Math.round(Number(SITE.googleRating))} />
                            <span className="text-sm text-white/70">{t('reviews.googleReviews')}</span>
                        </div>
                    )}
                </div>

                {reviews.length > 0 ? (
                    <>
                        <div className="mt-12 grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {reviews.map((review) => (
                                <ReviewCard key={review.id} review={review} />
                            ))}
                        </div>

                        {/* Links to Google (only shown when you added the links in site.js) */}
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                            {SITE.googleReviewsUrl && (
                                <a
                                    href={SITE.googleReviewsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl border border-gold px-6 py-3 text-sm font-semibold transition-colors hover:bg-gold hover:text-navy"
                                >
                                    <FaGoogle />
                                    {t('reviews.seeAll')}
                                </a>
                            )}
                            {SITE.googleWriteReviewUrl && (
                                <a
                                    href={SITE.googleWriteReviewUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
                                >
                                    <FaStar />
                                    {t('reviews.write')}
                                </a>
                            )}
                        </div>
                    </>
                ) : (
                    // Shown when there are no reviews yet
                    <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-navy-light p-8 text-center">
                        <p className="text-white/85">{t('reviews.emptyText')}</p>
                        <a
                            href={shareLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
                        >
                            <FaWhatsapp className="text-lg" />
                            {t('reviews.share')}
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Reviews