export const SITE = {
    name: 'Dhana Tours',
    tagline: 'Your Trusted Travel Partner',
    googleRating: '5.0',
    googleReviewsUrl: 'https://www.google.com/search?client=ms-android-samsung-ss&hs=7Oxq&sca_esv=384ea729b1f37b35&sxsrf=AKL5yDjTkomf0TWsC8BCOt3MAtPXXBJDKQ:1794049725088&q=dhana+tours+weligama+reviews&uds=AE2AFgY-VZRaJvbs0asLXE-fj-k5op9gnLTkzm39tpKvN6XD8ma4iqNXwNXImzcWLgmkNakluCGwTHn_8wP0z7fCr7xj-JtIYX1HtDZcYoeTZsbfoVohwXy4--BeMe-xFrDZj9gDXsjl6CeDXov__lkGhOYNbeJ7G0uzjYJeogSI8v-GhjgmO2TqSHifmwdeqa5euVyB9CeabXSvkXLxcfX3E6BfjP7ngKvIxbaMDyrCUzkyuW4Tvz7CQ0AOapSdrPkoRUgKivsUtDCWT3CFlMnzJx49iYWyBN821i_MZPmKwrZ-0L9ZbBtuBZcDmfnik-3HFBcvqNi9YM4haqYBeMa9zhak3V6rC3pyJp7YyeoDKXcbW3TaBGwUiAEkES41rSD-HiEJWyCqO8AC4_93VvaS3-d5IiSegg-5gdqNDRArdMD_7Ukyo74yvrd0ecEkih3JfJTpkBEKGmuLayCYSsi2exvmAopMHA&si=AE1YtOqiKPb2pdLXAi8quZ9vbH4aVq_aX8-3H9iFBLpRNK95c1T9EZ7-TV_wjyR183wiNVJvktfAakIFBWbodq5TvTcgRJj3X8QKuLXBON4l1lDCk1-zdsdcmVmiJ5sXv8tncKHqRUiLLJzOIujIwP2GYv1MkCH2eg%3D%3D&sa=X&ved=2ahUKEwiGwMqE3PWXAxWryzgGHaX-K4YQk8gLegQIHBAB&ictx=1&biw=411&bih=808&dpr=2.63', // paste your Google reviews link here; leave empty for no link

    // Country code + number, no "+" and no spaces. 
    whatsappNumber: '94775975689',

    // Replace these with the real details
    phone: '+94 77 5975689',
    email: 'info@example.com',
    location: 'Weligama, Sri Lanka',
    mapQuery: 'Weligama, Sri Lanka', // what Google Maps should show, e.g. 'Negombo, Sri Lanka'

    // Leave a link empty ('') to hide that icon in the footer
    socials: {
        facebook: 'Dhana Tours',
        instagram: '',
        telegram: 'https://t.me/TravelWith_Dhana',
    },
}

// Builds a WhatsApp chat link with a ready-made message
export function whatsappLink(message) {
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
}
