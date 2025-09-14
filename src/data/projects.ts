export interface Projects {
  title: string;
  description: string;
  url?: string;
  images : string[]
}

export const projects: Projects[] = [
  {
    title: "ALTEZA Website - Commercial Kitchen Equipment Supplier",
    description:"Designed and developed the complete user interface using Vue 3, Tailwind CSS, and vee-validate for custom form validations.Implemented a dynamic product filtering system by ZIP code, enabling users to view products available in their location.Developed functionality for generating orders and directing them to the appropriate department to initiate the purchase process.Integrated Google Analytics and Tag Manager to monitor website traffic and analyze performance by tracking visits and button clicks.Independently handled the frontend development while collaborating with a teammate responsible for the backend to ensure seamless integration.",
    url: "https://altezaconnect.com/",
    images: ["/My-Portfolio/alteza1.webp","/My-Portfolio/alteza2.webp","/My-Portfolio/alteza4.webp"]
  },
  {
    title: "Landing Page",
    description:"I developed a landing page for a company, designed to showcase its services and provide an interactive contact form for potential clients. I used Next.js and Tailwind CSS to create a modern and responsive design, while React Hook Form ensured efficient form validation. Additionally, I implemented animations and transitions to enhance the user experience, making the page more engaging and intuitive.",
    url: "http://sbx.landing.zhowit.com/",
    images: ["/My-Portfolio/bizzne1.webp","/My-Portfolio/bizzne2.webp","/My-Portfolio/bizzne4.webp"]
  },
  {
    title: "WebApp - EventSight",
    description:"Contributed to the development of an event management web application, implementing user authentication, access control, dynamic event browsing, and modules for event creation, attendee management, notifications, and ticketing. Built a responsive and modern frontend with Vue.js, Ant Design, and Tailwind CSS, managed state with Pinia, navigation with Vue Router, and ensured reliable form validation with VeeValidate and Yup.",
    url: "https://app.eventsight.io/login",
    images: ["/My-Portfolio/event1.webp","/My-Portfolio/event2.webp","/My-Portfolio/event3.webp"]
  }
]