import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import FormField, { CheckboxField, inputClass } from './FormField'
import {
    tourInitial,
    validateTour,
    buildTourMessage,
    todayISO,
} from '../utils/booking'
import { whatsappLink } from '../config/site'
import { packages } from '../data/packages'

function TourForm() {
    const [values, setValues] = useState(tourInitial)
    const [errors, setErrors] = useState({})

    // Tick boxes use "checked", other inputs use "value"
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const found = validateTour(values)
        setErrors(found)
        if (Object.keys(found).length > 0) return

        window.open(whatsappLink(buildTourMessage(values)), '_blank', 'noopener,noreferrer')
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <FormField label="Your name" htmlFor="tour-name" error={errors.name}>
                <input
                    id="tour-name"
                    name="name"
                    type="text"
                    maxLength={60}
                    value={values.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. Anna Smith"
                />
            </FormField>

            <FormField label="Tour" htmlFor="tour" error={errors.tour}>
                <select
                    id="tour"
                    name="tour"
                    value={values.tour}
                    onChange={handleChange}
                    className={inputClass}
                >
                    <option value="">Choose a tour</option>
                    {packages.map((pkg) => (
                        <option key={pkg.id} value={`${pkg.title} (${pkg.duration})`}>
                            {pkg.title} ({pkg.duration})
                        </option>
                    ))}
                    <option value="Customized tour">Customized tour (tell us your ideas)</option>
                </select>
            </FormField>

            <div className="grid gap-4 sm:grid-cols-3">
                <FormField label="Start date" htmlFor="tour-date" error={errors.date}>
                    <input
                        id="tour-date"
                        name="date"
                        type="date"
                        min={todayISO()}
                        value={values.date}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </FormField>
                <FormField label="Passengers" htmlFor="passengers" error={errors.passengers}>
                    <input
                        id="passengers"
                        name="passengers"
                        type="number"
                        min={1}
                        max={30}
                        value={values.passengers}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </FormField>
                <FormField label="Luggage (bags)" htmlFor="tour-luggage" error={errors.luggage}>
                    <input
                        id="tour-luggage"
                        name="luggage"
                        type="number"
                        min={0}
                        max={30}
                        value={values.luggage}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </FormField>
            </div>

            <FormField label="Pickup location" htmlFor="tour-pickup" error={errors.pickup}>
                <input
                    id="tour-pickup"
                    name="pickup"
                    type="text"
                    maxLength={120}
                    value={values.pickup}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Hotel, city or airport"
                />
            </FormField>

            <CheckboxField
                id="tour-childSeat"
                name="childSeat"
                label="I need a child seat"
                checked={values.childSeat}
                onChange={handleChange}
            />

            <FormField label="Notes (optional)" htmlFor="tour-notes">
                <textarea
                    id="tour-notes"
                    name="notes"
                    rows={3}
                    maxLength={300}
                    value={values.notes}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Interests, places to include, special requests..."
                />
            </FormField>

            <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 font-semibold text-navy transition-colors hover:bg-gold-light"
            >
                <FaWhatsapp className="text-lg" />
                Send Tour Request on WhatsApp
            </button>
        </form>
    )
}

export default TourForm