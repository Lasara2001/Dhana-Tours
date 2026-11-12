import {
    FaPlaneArrival,
    FaMapMarkedAlt,
    FaCar,
    FaSun,
    FaLandmark,
    FaRoute,
} from 'react-icons/fa'

// What visitors read (title, description, features, button) is in the locale files,
// found with the "id". "message" stays in English: it is sent to the business on WhatsApp.
export const services = [
    {
        id: 'airport',
        icon: FaPlaneArrival,
        image: '/images/services/airport.webp',
        message: 'Hello Dhana Tours, I would like to reserve an airport transfer.',
    },
    {
        id: 'round-tours',
        icon: FaMapMarkedAlt,
        image: '/images/services/round-tour.webp',
        message: 'Hello Dhana Tours, I would like to plan a private round tour.',
    },
    {
        id: 'car-rental',
        icon: FaCar,
        image: '/images/services/car-rental.webp',
        message: 'Hello Dhana Tours, I would like to rent a car with a driver.',
    },
    {
        id: 'day-tours',
        icon: FaSun,
        image: '/images/services/day-tour.webp',
        message: 'Hello Dhana Tours, I would like to book a day tour.',
    },
    {
        id: 'city-tours',
        icon: FaLandmark,
        image: '/images/services/city-tour.webp',
        message: 'Hello Dhana Tours, I would like to book a city tour.',
    },
    {
        id: 'custom-itineraries',
        icon: FaRoute,
        image: '/images/services/custom-itinerary.webp',
        message: 'Hello Dhana Tours, I would like a customized itinerary.',
    },
]