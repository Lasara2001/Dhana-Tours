import { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import TaxiForm from './TaxiForm'
import TourForm from './TourForm'

const tabs = [
    { id: 'taxi', label: 'Taxi Booking' },
    { id: 'tour', label: 'Tour Booking' },
]

function BookingModal({ open, type, onTypeChange, onClose }) {
    // While the popup is open: close on Escape, and stop the page behind it from scrolling
    useEffect(() => {
        if (!open) return

        const handleKey = (e) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'

        // Cleanup runs when the popup closes
        return () => {
            document.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [open, onClose])

    if (!open) return null

    return (
        // Dark backdrop: clicking it closes the popup
        <div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 sm:items-center sm:p-4"
            onClick={onClose}
            role="presentation"
        >
            {/* The popup itself: stopPropagation so clicks inside don't close it */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Booking form"
                onClick={(e) => e.stopPropagation()}
                className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-t-2xl border border-white/10 bg-navy-light p-5 shadow-2xl sm:rounded-2xl sm:p-7"
            >
                <div className="flex items-start justify-between">
                    <h2 className="font-heading text-2xl font-semibold text-gold">
                        Book with Dhana Tours
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="text-xl text-white/70 hover:text-white"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Tabs */}
                <div className="mt-5 grid grid-cols-2 gap-2 rounded-xl bg-navy p-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => onTypeChange(tab.id)}
                            className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${type === tab.id ? 'bg-gold text-navy' : 'text-white/80 hover:text-white'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="mt-5">{type === 'taxi' ? <TaxiForm /> : <TourForm />}</div>
            </div>
        </div>
    )
}

export default BookingModal