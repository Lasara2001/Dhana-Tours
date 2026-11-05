// Today's date as YYYY-MM-DD (local time), used to block past dates
export function todayISO() {
    const now = new Date()
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    return local.toISOString().split('T')[0]
}

// Taxi services. roundTrip: true means the form also asks for a return date and time
export const taxiServices = [
    { label: 'Airport pickup (one way)', roundTrip: false },
    { label: 'Airport drop-off (one way)', roundTrip: false },
    { label: 'Airport pickup & drop-off (both ways)', roundTrip: true },
    { label: 'Point to point transfer (one way)', roundTrip: false },
    { label: 'Round trip (go and return)', roundTrip: true },
]

export function isRoundTrip(service) {
    return taxiServices.some((s) => s.label === service && s.roundTrip)
}

export const taxiInitial = {
    service: taxiServices[0].label,
    name: '',
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    returnDate: '',
    returnTime: '',
    passengers: '1',
    luggage: '1',
    childSeat: false,
    notes: '',
}

export const tourInitial = {
    name: '',
    tour: '',
    date: '',
    passengers: '2',
    luggage: '2',
    childSeat: false,
    pickup: '',
    notes: '',
}

function checkDate(date) {
    if (!date) return 'Please choose a date.'
    if (date < todayISO()) return 'The date cannot be in the past.'
    return ''
}

function checkCount(value, max, label) {
    const n = Number(value)
    if (!Number.isInteger(n) || n < 1 || n > max) {
        return `${label} must be between 1 and ${max}.`
    }
    return ''
}
// Luggage can be 0, so it has its own check
function checkLuggage(value) {
    const n = Number(value)
    if (value === '' || !Number.isInteger(n) || n < 0 || n > 30) {
        return 'Luggage must be between 0 and 30.'
    }
    return ''
}

// Each validate function returns an object like { name: 'message' }.
// An empty object means the form is valid.
export function validateTaxi(v) {
    const errors = {}
    if (!v.name.trim()) errors.name = 'Please enter your name.'
    if (!v.pickup.trim()) errors.pickup = 'Please enter the pickup location.'
    if (!v.dropoff.trim()) errors.dropoff = 'Please enter the drop-off location.'
    const dateError = checkDate(v.date)
    if (dateError) errors.date = dateError
    if (!v.time) errors.time = 'Please choose a time.'
    const countError = checkCount(v.passengers, 20, 'Passengers')
    if (countError) errors.passengers = countError
    const luggageError = checkLuggage(v.luggage)
    if (luggageError) errors.luggage = luggageError

    // Return trip fields are only checked for round-trip services
    if (isRoundTrip(v.service)) {
        if (!v.returnDate) {
            errors.returnDate = 'Please choose the return date.'
        } else if (v.date && v.returnDate < v.date) {
            errors.returnDate = 'The return date cannot be before the first date.'
        }
        if (!v.returnTime) errors.returnTime = 'Please choose the return time.'
    }
    return errors
}

export function validateTour(v) {
    const errors = {}
    if (!v.name.trim()) errors.name = 'Please enter your name.'
    if (!v.tour) errors.tour = 'Please choose a tour.'
    const dateError = checkDate(v.date)
    if (dateError) errors.date = dateError
    const countError = checkCount(v.passengers, 30, 'Passengers')
    if (countError) errors.passengers = countError
    const luggageError = checkLuggage(v.luggage)
    if (luggageError) errors.luggage = luggageError

    if (!v.pickup.trim()) errors.pickup = 'Please enter where we should pick you up.'
    return errors
}

// Builds the text that will be sent on WhatsApp
export function buildTaxiMessage(v) {
    return [
        'Hello Dhana Tours, I would like to book a taxi.',
        '',
        `Name: ${v.name.trim()}`,
        `Service: ${v.service}`,
        `Pickup: ${v.pickup.trim()}`,
        `Drop-off: ${v.dropoff.trim()}`,
        `Date: ${v.date}`,
        `Time: ${v.time}`,
        ...(isRoundTrip(v.service)
            ? [`Return date: ${v.returnDate}`, `Return time: ${v.returnTime}`]
            : []),
        `Passengers: ${v.passengers}`,
        `Luggage: ${v.luggage}`,
        `Child seat: ${v.childSeat ? 'Yes' : 'No'}`,
        v.notes.trim() ? `Notes: ${v.notes.trim()}` : null,
    ]
        .filter(Boolean)
        .join('\n')
}

export function buildTourMessage(v) {
    return [
        'Hello Dhana Tours, I would like to book a tour.',
        '',
        `Name: ${v.name.trim()}`,
        `Tour: ${v.tour}`,
        `Start date: ${v.date}`,
        `Passengers: ${v.passengers}`,
        `Luggage: ${v.luggage}`,
        `Child seat: ${v.childSeat ? 'Yes' : 'No'}`,
        `Pickup: ${v.pickup.trim()}`,
        v.notes.trim() ? `Notes: ${v.notes.trim()}` : null,
    ]
        .filter(Boolean)
        .join('\n')
}