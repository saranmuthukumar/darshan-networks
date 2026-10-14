export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    hasDropdown: true,
    children: [
      { name: 'Overview / All Services', path: '/services', description: 'Directory of all IT, security & automation services' },
      { name: 'Networking Solutions', path: '/services/networking', description: 'Cat6 structured cabling, racks & switches' },
      { name: 'Computer & Laptop Sales & Service', path: '/services/computers', description: 'PC/laptop repairs, upgrades & sales' },
      { name: 'Printer & Toner Solutions', path: '/services/printers', description: 'LaserJet, Inkjet service & A4 toner refill' },
      { name: 'CCTV Surveillance', path: '/services/cctv', description: 'HD/IP camera setup & remote monitoring' },
      { name: 'Biometric & Access Control', path: '/services/biometric-access-control', description: 'eSSL attendance devices & EM door locks' },
      { name: 'Wi-Fi Solutions', path: '/services/wifi', description: 'Access points, roaming & dead-zone fixes' },
      { name: 'Intercom Systems', path: '/services/intercom', description: 'Audio & video door phones for homes & offices' },
      { name: 'Gate & Boom Barrier Automation', path: '/services/automation', description: 'Motorized gates, barriers & RFID access' },
      { name: 'UPS & Power Backup', path: '/services/power-backup', description: 'Home UPS, system UPS & battery service' },
      { name: 'Specialized IT Solutions', path: '/services/specialized-it', description: 'Healthcare IT, client-server & software support' },
    ]
  },
  { name: 'Networking', path: '/services/networking' },
  { name: 'Contact Us', path: '/contact' },
];

export const FOOTER_QUICK_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'All Services Directory', path: '/services' },
  { name: 'Contact & Location', path: '/contact' },
];

export const FOOTER_SERVICE_LINKS = [
  { name: 'Networking Solutions', path: '/services/networking' },
  { name: 'Computer & Laptop Service', path: '/services/computers' },
  { name: 'Printer & Toner Solutions', path: '/services/printers' },
  { name: 'CCTV Surveillance Systems', path: '/services/cctv' },
  { name: 'Biometric Attendance & EM Locks', path: '/services/biometric-access-control' },
  { name: 'Enterprise Wi-Fi Solutions', path: '/services/wifi' },
  { name: 'Intercom & Video Door Phones', path: '/services/intercom' },
  { name: 'Gate & Boom Barrier Automation', path: '/services/automation' },
  { name: 'UPS & Power Backup Systems', path: '/services/power-backup' },
  { name: 'Specialized IT & Healthcare Tech', path: '/services/specialized-it' },
];
