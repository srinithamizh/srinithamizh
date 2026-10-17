import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Genesys",
    role: "Senior Software Engineer",
    dates: "2024 — Present",
    location: "Chennai, India",
    bullets: [
      "Developed multiple features across several Genesys Cloud projects, including Social Listening, Messaging Gadgets, and Analytics, delivering both frontend (React) and backend (TypeScript and Spring Boot) components",
      "Designed and implemented features end-to-end from scratch, validating them through comprehensive unit, integration, and end-to-end testing (JUnit, Mockito, Vitest, Playwright) and delivering on schedule",
      "Automated Jenkins jobs to trigger builds and run Playwright functional verification, with PagerDuty alerts configured for repeated failure scenarios",
      "Served as Scrum Master for multiple sprints, facilitating sprint planning, daily stand-ups, and retrospectives to drive team alignment and delivery",
      "Developed multiple features for Genesys Engage projects using Java (Spring and Spring Boot), contributing significantly to the successful delivery of project milestones",
      "Upgraded Spring and Spring Security to the latest versions, ensuring compatibility and improved security",
      "Proactively tracked code vulnerabilities and upgraded third-party libraries (e.g., Jetty, JDBC drivers) to maintain code quality and security compliance",
    ],
  },
  {
    company: "Genesys",
    role: "Software Engineer",
    dates: "2022 — 2024",
    location: "Chennai, India",
    bullets: [
      "Developed and implemented key features, including Permission Control, XSS Blacklist, and Caching, adopted across multiple business groups and customers",
      "Achieved 100% unit test coverage across all projects, preventing defects from reaching QA and production environments",
      "Containerized the local development environment using Docker, enabling faster and more reliable local testing of application functionality",
    ],
  },
  {
    company: "Genesys",
    role: "Associate Software Engineer",
    dates: "2020 — 2022",
    location: "Chennai, India",
    bullets: [
      "Provided customer support by investigating, troubleshooting, and resolving production defects in a timely manner",
      "Refactored and migrated the AngularJS application to the modern Angular framework, improving maintainability and performance",
    ],
  },
  {
    company: "Genesys",
    role: "Software Engineering Intern",
    dates: "2019 — 2020",
    location: "Chennai, India",
    bullets: [
      "Designed and developed high-performance Spring Boot microservices for the Genesys Cloud platform",
      "Authored comprehensive unit and integration tests using JUnit and Mockito to ensure code quality and reliability",
      "Led the migration of source code repositories from Mercurial to GitHub",
      "Conducted peer code reviews to uphold coding standards and best practices",
    ],
    type: "Full-Time"
  },
  {
    company: "TenSketch",
    role: "Full Stack Developer - Intern",
    dates: "2018 — 2019",
    location: "Chennai, India",
    bullets: [
      "Developed dynamic, responsive web applications for clients using HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL",
   "Managed source code version control and collaboration using GitHub",
   "Participated in requirements-gathering sessions with stakeholders to define project scope and technical specifications",
    ],
    type: "Part-Time"
  },
];
