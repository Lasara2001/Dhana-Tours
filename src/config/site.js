export const SITE = {
    name: 'Dhana Tours',
    // Country code + number. No "+", no spaces. 
    whatsappNumber: '94775975689',
}

// Builds a WhatsApp chat link with a ready-made message
export function whatsappLink(message) {
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
}