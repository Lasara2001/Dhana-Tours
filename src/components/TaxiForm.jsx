import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import FormField, { CheckboxField, inputClass } from './FormField'
import {
    taxiInitial,
    taxiServices,
    isRoundTrip,
    validateTaxi,
    buildTaxiMessage,
    todayISO,
} from '../utils/booking'
import { whatsappLink } from '../config/site'

function TaxiForm() {
    const [values, setValues] = useState(taxiInitial)
    const [errors, setErrors] = useState({})

    // One handler for every field. Tick boxes use "checked", other inputs use "value"
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault() // stop the page from reloading
        const found = validateTaxi(values)
        setErrors(found)
        if (Object.keys(found).length > 0) return // stop if there are errors

        window.open(whatsappLink(buildTaxiMessage(values)), '_blank', 'noopener,noreferrer')
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <FormField label="Service" htmlFor="service">
                <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    className={inputClass}
                >
                    {taxiServices.map((s) => (
                        <option key={s.label} value={s.label}>
                            {s.label}
                        </option>
                    ))}
                </select>
            </FormField>

            <FormField label="Your name" htmlFor="name" error={errors.name}>
                <input
                    id="name"
                    name="name"
                    type="text"
                    maxLength={60}
                    value={values.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. Anna Smith"
                />
            </FormField>

            <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Pickup location" htmlFor="pickup" error={errors.pickup}>
                    <input
                        id="pickup"
                        name="pickup"
                        type="text"
                        maxLength={120}
                        value={values.pickup}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Airport, hotel, address"
                    />
                </FormField>
                <FormField label="Drop-off location" htmlFor="dropoff" error={errors.dropoff}>
                    <input
                        id="dropoff"
                        name="dropoff"
                        type="text"
                        maxLength={120}
                        value={values.dropoff}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Hotel, city, address"
                    />
                </FormField>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Date" htmlFor="date" error={errors.date}>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        min={todayISO()}
                        value={values.date}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </FormField>
                <FormField label="Time" htmlFor="time" error={errors.time}>
                    <input
                        id="time"
                        name="time"
                        type="time"
                        value={values.time}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </FormField>
            </div>

            {/* Only shown for round-trip services */}
            {isRoundTrip(values.service) && (
                <div className="grid gap-4 sm:grid-cols-2">
                    <FormField label="Return date" htmlFor="returnDate" error={errors.returnDate}>
                        <input
                            id="returnDate"
                            name="returnDate"
                            type="date"
                            min={values.date || todayISO()}
                            value={values.returnDate}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    </FormField>
                    <FormField label="Return time" htmlFor="returnTime" error={errors.returnTime}>
                        <input
                            id="returnTime"
                            name="returnTime"
                            type="time"
                            value={values.returnTime}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    </FormField>
                </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Passengers" htmlFor="passengers" error={errors.passengers}>
                    <input
                        id="passengers"
                        name="passengers"
                        type="number"
                        min={1}
                        max={20}
                        value={values.passengers}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </FormField>
                <FormField label="Luggage (bags)" htmlFor="luggage" error={errors.luggage}>
                    <input
                        id="luggage"
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

            <CheckboxField
                id="childSeat"
                name="childSeat"
                label="I need a child seat"
                checked={values.childSeat}
                onChange={handleChange}
            />

            <FormField label="Notes (optional)" htmlFor="notes">
                <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    maxLength={300}
                    value={values.notes}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Flight number, special requests..."
                />
            </FormField>

            <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 font-semibold text-navy transition-colors hover:bg-gold-light"
            >
                <FaWhatsapp className="text-lg" />
                Send Taxi Request on WhatsApp
            </button>
        </form>
    )
}

export default TaxiForm