export interface WorkExperience {
  title: string;
  company: string;
  date: string;
  description: string;
}

export const workExperience:WorkExperience[] = [
  {
    title: "Web and Mobile Developer",
    company: "Bizzne",
    date: "November 2023 to present",
    description: "As a Web and Mobile Developer at Bizzne, I played a key role in developing and maintaining cross-platform applications using React Native for mobile and Next.js with TailwindCSS for the web. I implemented state management with Redux to ensure smooth and scalable application performance. I worked with Android Studio for mobile app testing and deployment, while utilizing Azure for cloud services and deployment pipelines. Following Agile methodology and using tools like Jira for project management, I collaborated closely with the development team to deliver high-quality features on time and in alignment with business goals.",
  },
  {
    title: "Full Stack Developer",
    company: "EventSight",
    date: "April 2023 to November 2023",
    description: "During my eight months as a Full Stack Developer at EventSight, I developed and maintained the company's event management platform using Django for the back-end and Vue.js with TailwindCSS for the front-end. I built and optimized RESTful APIs, and designed responsive, dynamic user interfaces to enhance user experience. I also integrated AWS services, including AWS S3 for secure file uploads, ensuring efficient media management for event content. My work involved close collaboration with cross-functional teams, focusing on delivering scalable, cloud-based solutions that aligned with business ",
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    date: "May 2022  to March 2023",
    description: "As a freelance developer, I have led and contributed to a diverse range of web projects, demonstrating my ability to deliver innovative and efficient technological solutions. Throughout these projects, I gained extensive experience with React.js, Svelte.js, Tailwind CSS, Git, and AWS, further honing my expertise in front-end development, responsive design, and cloud integration.",
  },
];
