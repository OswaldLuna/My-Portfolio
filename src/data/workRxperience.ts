export interface WorkExperience {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export const workExperience:WorkExperience[] = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    date: "January 2025 to present",
    description: [
      "Built and deployed landing pages with Astro, hosting them on GitHub Pages and Netlify for high performance and scalability.",
      "Developed complete web applications from scratch using React.js, Next.js, and Vue.js.",
      "Implemented state management with Zustand, TanStack Query, and Pinia, ensuring efficient data handling and synchronization.",
      "Integrated form handling and validation with React Hook Form, Formik, VeeValidate, and Yup for reliable user input management.",
      "Designed and implemented RESTful APIs with Python (FastAPI), leveraging Beanie and Docker for scalable back-end services.",
      "Worked with databases including MongoDB and PostgreSQL, optimizing data persistence and queries.",
      "Delivered responsive and user-friendly UIs using Ant Design and component-driven development.",
      "Collaborated on team-based projects and independently managed end-to-end solutions, from design to deployment."
    ],  },
  {
    title: "Full Stack Developer",
    company: "EventSight",
    date: "January 2023 to December 2024",
    description: [
      "Developed and maintained the company’s event management platform using Django for the back-end and Vue.js with Tailwind CSS for the front-end.",
      "Designed responsive and dynamic user interfaces, enhancing user experience and accessibility across devices.",
      "Integrated AWS services, including S3 for secure file uploads and efficient media management.",
      "Collaborated with cross-functional teams to deliver scalable, cloud-based solutions aligned with business and technical requirements."
    ],  },
  {
    title: "Web and Mobile Developer",
    company: "Bizzne",
    date: "October 2020 to December 2022",
    description: [
      "Developed and maintained cross-platform applications, using React Native for mobile and Next.js with Tailwind CSS for the web.",
      "Implemented state management with Redux, ensuring scalable performance and smooth user experience.",
      "Conducted mobile app testing and deployment with Android Studio, guaranteeing stability and quality before releases.",
      "Utilized Azure cloud services and deployment pipelines for efficient CI/CD and cloud integration.",
      "Applied Agile methodology and managed tasks with Jira, ensuring timely delivery of features aligned with business objectives."
    ],  },
];
