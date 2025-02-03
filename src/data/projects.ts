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
    images: ["/alteza1.webp","alteza2.webp","alteza4.webp"]
  },
  {
    title: "Landing Page",
    description:"I developed a landing page for a company, designed to showcase its services and provide an interactive contact form for potential clients. I used Next.js and Tailwind CSS to create a modern and responsive design, while React Hook Form ensured efficient form validation. Additionally, I implemented animations and transitions to enhance the user experience, making the page more engaging and intuitive.",
    url: "http://sbx.landing.zhowit.com/",
    images: ["/bizzne1.webp","bizzne2.webp","bizzne4.webp"]
  },
  // {
  //   title: "ALTEZA Website - Commercial Kitchen Equipment Supplier",
  //   description:"Designed and developed the complete user interface using Vue 3, Tailwind CSS, and vee-validate for custom form validations.Implemented a dynamic product filtering system by ZIP code, enabling users to view products available in their location.Developed functionality for generating orders and directing them to the appropriate department to initiate the purchase process.Integrated Google Analytics and Tag Manager to monitor website traffic and analyze performance by tracking visits and button clicks.Independently handled the frontend development while collaborating with a teammate responsible for the backend to ensure seamless integration.",
  //   url: "https://altezaconnect.com/",
  //   images: ["/alteza1.webp","alteza2.webp","alteza3.webp"]
  // }
]