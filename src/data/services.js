import {
    FaPlaneArrival,
    FaMapMarkedAlt,
    FaCar,
    FaSun,
    FaLandmark,
    FaRoute,
} from 'react-icons/fa'

export const services = [
    {
        id: 'airport',
        title: 'Airport Transfers',
        icon: FaPlaneArrival,
        image: '/images/services/airport.webp',
        description:
            'Direct greeting at Bandaranaike International Airport with a personalised name board. Flight delay tracking, ice-cold bottled water and plush leather air-conditioned seating.',
        features: [
            'Flight tracking with complimentary waiting time',
            'Direct express highway tolls & parking included',
            'Luggage assistance & cold refreshment towels',
        ],
        buttonLabel: 'Reserve Airport Chauffeur',
        message: 'Hello Dhana Tours, I would like to reserve an airport transfer.',
    },
    {
        id: 'round-tours',
        title: 'Private Round Tours',
        icon: FaMapMarkedAlt,
        image: '/images/services/round-tour.webp',
        description:
            'Immersive, unhurried journeys through the Cultural Triangle, mist-capped tea estates, highland railways and wildlife sanctuaries, with a local driver-companion.',
        features: [
            'Bespoke daily itineraries tailored to your rhythm',
            'Handpicked boutique viewpoints & photo spots',
            'Train ticket reservations & safari jeep sync',
        ],
        buttonLabel: 'Plan My Round Tour',
        message: 'Hello Dhana Tours, I would like to plan a private round tour.',
    },
    {
        id: 'car-rental',
        title: 'Car Rental with Private Driver',
        icon: FaCar,
        image: '/images/services/car-rental.webp',
        description:
            'Enjoy complete freedom without the stress of navigating mountain roads. Hire an executive vehicle with a professional chauffeur for 5, 7 or 14+ days.',
        features: [
            'Unlimited flexibility to alter stops daily',
            'Driver food, lodging & fuel included',
            'English speaking chauffeur choice',
        ],
        buttonLabel: 'Hire a Car with Driver',
        message: 'Hello Dhana Tours, I would like to rent a car with a driver.',
    },
    {
        id: 'day-tours',
        title: 'Day Tours',
        icon: FaSun,
        image: '/images/services/day-tour.webp',
        description:
            'Short on time? Enjoy a comfortable full-day trip to the best sights near you and be back at your hotel by evening.',
        features: [
            'Pick-up and drop-off at your hotel',
            'Flexible stops for photos and meals',
            'Popular routes or your own choice',
        ],
        buttonLabel: 'Book a Day Tour',
        message: 'Hello Dhana Tours, I would like to book a day tour.',
    },
    {
        id: 'city-tours',
        title: 'City Tours',
        icon: FaLandmark,
        image: '/images/services/city-tour.webp',
        description:
            'Explore the history, markets and landmarks of Colombo, Kandy or Galle with a friendly local who knows the best places.',
        features: [
            'Temples, forts, museums and local markets',
            'Half-day or full-day options',
            'Local tips on food and shopping',
        ],
        buttonLabel: 'Book a City Tour',
        message: 'Hello Dhana Tours, I would like to book a city tour.',
    },
    {
        id: 'custom-itineraries',
        title: 'Customized Itineraries',
        icon: FaRoute,
        image: '/images/services/custom-itinerary.webp',
        description:
            'Tell us your dates, interests and budget and we will design a travel plan made just for you.',
        features: [
            'Plan built around your interests',
            'Hotel and route suggestions',
            'Easy changes before and during the trip',
        ],
        buttonLabel: 'Design My Trip',
        message: 'Hello Dhana Tours, I would like a customized itinerary.',
    },
]