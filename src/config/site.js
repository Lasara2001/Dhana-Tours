export const SITE = {
    name: 'Dhana Tours',
    tagline: 'Your Trusted Travel Partner',

    // Country code + number, no "+" and no spaces. 
    whatsappNumber: '94775975689',

    // Replace these with the real details
    phone: '+94 77 5917689',
    email: 'info@example.com',
    location: 'Weligama Sri Lanka',
    mapQuery: 'Sri Lanka', // what Google Maps should show, e.g. 'Negombo, Sri Lanka'

    // Leave a link empty ('') to hide that icon in the footer
    socials: {
        facebook: 'Dhana Tours',
        instagram: '',
        tripadvisor: '',
    },
}

// Builds a WhatsApp chat link with a ready-made message
export function whatsappLink(message) {
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
}