export interface WorkExperience {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export const workExperience:WorkExperience[] = [
  {
    title: "Freelance Full Stack Developer",
    company: "Ozum",
    date: "2025 to present",
    description: [
      "Developed an event management SPA in Vue 3 + TypeScript with dual visualization (Kanban board + calendar view), multi-stage status flow, and team and staff coordination across 15+ views, with role-based access control (JWT + automatic refresh token).",
      "Architected a scalable composables layer with TanStack Vue Query for server state caching, Pinia for client state, and 60+ custom hooks with strict typing and automatic cache invalidation.",
      "Implemented reusable UI patterns: centralized HTTP client with interceptors and automatic refresh token, Pinia-based modal stack system, and autosave/undo forms validated with Vee-Validate + Yup.",
      "Developed custom models and views in Odoo ERP tailored to the company's operational workflows.",
      "Implemented serverless automations in AWS Lambda integrated with S3 for business file and data processing.",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Alteza LLC",
    date: "2025 to present",
    description: [
      "Designed and implemented a FastAPI REST API with a layered architecture (API → Services → Repositories → Connector → Odoo), integrating Odoo ERP via XML-RPC with a singleton client, per-model repositories, and a fluent domain filter builder.",
      "Built an automated scraper agent with Playwright that authenticates with MFA via IMAP, paginates and extracts data from an external incentives platform (IRIS), and syncs results to Odoo daily via APScheduler.",
      "Implemented a CSV export service that cross-references orders, rebate claims, partners, and products from Odoo to generate submission reports for PSE (Puget Sound Energy).",
      "Built an enterprise frontend in Vue 3 + TypeScript with a layered architecture (Views → Composables → Services → Mappers → Types), including a multi-filter claims table with automatic multi-request pagination and CSV export.",
      "Developed an analytics dashboard with ApexCharts for claims metrics visualization across 9 disclosure states with dynamic color-coding.",
      "Implemented full JWT authentication with Axios interceptors, role-based route guards, and a user admin panel with full CRUD managed via Pinia.",
    ],
  },
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
    date: "October 2021 to December 2022",
    description: [
      "Developed and maintained cross-platform applications, using React Native for mobile and Next.js with Tailwind CSS for the web.",
      "Implemented state management with Redux, ensuring scalable performance and smooth user experience.",
      "Conducted mobile app testing and deployment with Android Studio, guaranteeing stability and quality before releases.",
      "Utilized Azure cloud services and deployment pipelines for efficient CI/CD and cloud integration.",
      "Applied Agile methodology and managed tasks with Jira, ensuring timely delivery of features aligned with business objectives."
    ],  },
];
