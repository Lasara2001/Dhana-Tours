export const SITE = {
    name: 'Dhana Tours',
    tagline: 'Your Trusted Travel Partner',
    googleRating: '5.0',
    googleReviewsUrl: 'https://maps.app.goo.gl/qx4Q4ifyZvTomEEs9?g_st=aw',

    // Country code + number, no "+" and no spaces. 
    whatsappNumber: '94775975689',

    // Replace these with the real details
    phone: '+94 77 5975689',
    email: 'info@example.com',
    location: 'Weligama, Sri Lanka',
    mapQuery: 'Dhana Tours Weligama', // what Google Maps should show, e.g. 'Negombo, Sri Lanka'

    // Leave a link empty ('') to hide that icon in the footer
    socials: {
        facebook: 'Dhana Tours',
        instagram: '',
        telegram: 'https://t.me/TravelWith_Dhana',
    },
}

// Builds a WhatsApp chat link with a ready-made message
export function whatsappLink(message) {
    const cleanNumber = SITE.whatsappNumber.replace(/\D/g, '')
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`
}
