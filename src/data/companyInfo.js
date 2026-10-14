export const COMPANY_INFO = {
  name: 'Darshan Networks',
  legalName: 'Darshan Networks',
  brandTagline: 'CONNECT | SECURE | AUTOMATE',
  secondaryTagline: 'Technology for a Smarter Tomorrow',
  positioning: 'Complete Technology Solutions Under One Roof.',
  
  address: {
    line1: 'Darshan Networks',
    line2: 'Lakshmi Garden, Thindal',
    city: 'Erode',
    state: 'Tamil Nadu',
    pincode: '638012',
    country: 'India',
    formatted: 'Darshan Networks, Lakshmi Garden, Thindal, Erode, Tamil Nadu, India'
  },

  phones: [
    { number: '9994556999', display: '+91 99945 56999', isPrimary: true, isWhatsApp: true },
    { number: '8825616157', display: '+91 88256 16157', isPrimary: false, isWhatsApp: false }
  ],

  email: 'darshannetworks@gmail.com',

  whatsapp: {
    number: '9994556999',
    countryCode: '91',
    defaultMessage: 'Hello Darshan Networks, I would like to inquire about your services.',
    getLink(customMessage) {
      const msg = encodeURIComponent(customMessage || this.defaultMessage);
      return `https://wa.me/${this.countryCode}${this.number}?text=${msg}`;
    }
  },

  workingHours: {
    days: 'Monday – Saturday',
    hours: '9:30 AM – 8:00 PM',
    sunday: 'Closed / By Appointment'
  },

  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15652.887163829778!2d77.67499696229506!3d11.318536294520775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f2e2106606f%3A0xe5427bf6eb98bb55!2sThindal%2C%20Erode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',

  serviceAreas: [
    'Thindal, Erode',
    'Perundurai',
    'Bhavani',
    'Gobichettipalayam',
    'Modakkurichi',
    'Erode District & Western Tamil Nadu'
  ]
};
