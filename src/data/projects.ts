export interface Projects {
  title: string;
  description: string;
  url?: string;
  images : string[]
}

export const projects: Projects[] = [
  {
    title: "Alteza Kitchen — B2B E-commerce Platform for Commercial Kitchen Equipment",
    description:"Built a fullstack B2B e-commerce platform with a Flask REST API middleware integrating Odoo ERP via XML-RPC and a Vue 3 SPA with layered architecture, featuring dynamic tier-based pricing by zip code and sales rep, dual-layer JWT auth, programmatic PDF generation with ReportLab, bulk order processing from XLSX files, and a multi-step checkout flow with discounts, rebates, and customer credits.",
    url: "https://altezaconnect.com/",
    images: ["/My-Portfolio/alteza1.webp","/My-Portfolio/alteza2.webp","/My-Portfolio/alteza3.webp"]
  },
  {
    title: "Vekio — Performance Center Management System",
    description:"Developed a multi-tenant SaaS platform for gym management deployed as a PWA and Google Play TWA, built on Next.js 15 + React 19 with per-gym brand isolation, real-time WebSocket integration with ZKTeco biometric devices (fingerprint, facial recognition, QR check-in), Stripe payments, recurring class scheduling, and global state managed with TanStack Query v5 and Zustand v5.",
    url: "https://vekio.app/",
    images: ["/My-Portfolio/vekio1.webp","/My-Portfolio/vekio2.webp","/My-Portfolio/vekio3.webp"]
  },
  {
    title: "WebApp - EventSight",
    description:"Contributed to the development of an event management web application, implementing user authentication, access control, dynamic event browsing, and modules for event creation, attendee management, notifications, and ticketing. Built a responsive and modern frontend with Vue.js, Ant Design, and Tailwind CSS, managed state with Pinia, navigation with Vue Router, and ensured reliable form validation with VeeValidate and Yup.",
    url: "https://app.eventsight.io/login",
    images: ["/My-Portfolio/event1.webp","/My-Portfolio/event2.webp","/My-Portfolio/event3.webp"]
  },
  {
    title: "WebGame - CoinFLip",
    description:"Developed a cryptocurrency-based “heads or tails” web game, implementing a secure backend with PostgreSQL and GORM in Golang, and a responsive SvelteKit frontend with Tailwind CSS, Yup validation, and Three.js 3D models. Added real-time matchmaking and chat to boost engagement, ensuring secure digital transactions throughout the platform.",
    url: "https://coinflip.bitlucky.app/",
    images: ["/My-Portfolio/coin1.webp","/My-Portfolio/coin2.webp","/My-Portfolio/coin3.webp"]
  },
]