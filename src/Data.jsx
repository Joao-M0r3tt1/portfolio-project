import Image1 from './assets/testimonial1.png' 
import Image2 from './assets/testimonial2.png';
import Image3 from './assets/testimonial3.png';

import Work1 from './assets/work1.jpg';
import Work2 from './assets/work2.jpg';
import Work3 from './assets/work3.jpg';
import Work4 from './assets/work4.jpg';
import Work5 from './assets/work5.jpg';

// Header
// Links - Header
export const linksHeader = [
    {
      name: 'Home',
      icon: 'uil-estate',
      path: 'home',
    },
    {
      name: 'About',
      icon: 'uil-user-circle',
      path: 'about',
    },
    {
      name: 'Skills',
      icon: 'uil-file-check-alt',
      path: 'skills',
    },
    {
      name: 'Qualifications',
      icon: 'uil-newspaper',
      path: 'qualification',
    },
    {
      name: 'Portfolio',
      icon: 'uil-desktop-alt',
      path: 'portfolio',
    },
    {
      name: 'Contact',
      icon: 'uil-message',
      path: 'contact',
    },
];

// Portfolio
// data for session content - Portfolio
export const projectsData = [
    {
      id: 1,
      image: Work1,
      title: "Web design",
      url: "https://github.com",
      category: "web",
      title_description: "projeto bbb",
      description: "Esse projeto tá legal, pq fala disso e sisso...",
    },
    {
      id: 2,
      image: Work2,
      title: "App movil",
      url: "https://github.com",
      category: "app",
      title_description: "projeto aaa",
      description: "Esse projeto tá legal, pq fala disso e sisso...",
    },
    {
      id: 3,
      image: Work3,
      title: "Brand design",
      url: "https://github.com",
      category: "design",
      title_description: "projeto ccc",
      description: "Esse projeto tá legal, pq fala disso e sisso...",
    },
    {
      id: 4,
      image: Work4,
      title: "App movil",
      url: "https://github.com",
      category: "app",
      title_description: "projeto aaa",
      description: "Esse projeto tá legal, pq fala disso e sisso...",
    },
    {
      id: 5,
      image: Work5,
      title: "Web design",
      url: "https://github.com",
      category: "web",
      title_description: "projeto aaa",
      description: "Esse projeto tá legal, pq fala disso e sisso...",
    },
];

// data for the filter - Portfolio
export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
    {
        name: 'design',
    },
];

// Achievements
// Data Certifications and Badges - Achievements
export const data = [
    {
        id: 1,
        image: Image1,
        title: "Jhon Doe",
        description:
          "A really good job, all aspects of the project were followed step by step and with good results.",
    },
    {
        id: 2,
        image: Image2,
        title: "Harry Clinton",
        description:
          "A really good job, all aspects of the project were followed step by step and with good results.",
    },
    {
        id: 3,
        image: Image3,
        title: "Sara Cill",
        description:
          "A really good job, all aspects of the project were followed step by step and with good results.",
    },
];

// Skills
// skills front-end - Skills
export const skillsFront1 = [
    {
        id: 1,
        icon: 'bx-badge-check',
        name: "HTML",
        level: "Basic",
    },
    {
        id: 2,
        icon: 'bx-badge-check',
        name: "CSS",
        level: "Basic",
    },
    {
        id: 3,
        icon: 'bx-badge-check',
        name: "JavaScript",
        level: "Basic",
    },
];

export const skillsFront2 = [
    {
        id: 1,
        icon: 'bx-badge-check',
        name: "Bootstrap",
        level: "Basic",
    },
    {
        id: 2,
        icon: 'bx-badge-check',
        name: "React",
        level: "Basic",
    },
    {
        id: 3,
        icon: 'bx-badge-check',
        name: "Oi",
        level: "Hello",
    },
];

// skills back-end - Skills
export const skillsBack1 = [
    {
        id: 1,
        icon: 'bx-badge-check',
        name: "Node",
        level: "Basic",
    },
    {
        id: 2,
        icon: 'bx-badge-check',
        name: "C",
        level: "Basic",
    },
    {
        id: 3,
        icon: 'bx-badge-check',
        name: "Java",
        level: "Basic",
    },
];

export const skillsBack2 = [
    {
        id: 1,
        icon: 'bx-badge-check',
        name: "Python",
        level: "Basic",
    },
    {
        id: 2,
        icon: 'bx-badge-check',
        name: "SQL",
        level: "Basic",
    },
    {
        id: 3,
        icon: 'bx-badge-check',
        name: "Outro",
        level: "Basic",
    },
];

// skills security - Skills
export const skillsSecurity1 = [
    {
        id: 1,
        icon: 'bx-badge-check',
        name: "Hacking",
        level: "Basic",
    },
    {
        id: 2,
        icon: 'bx-badge-check',
        name: "Other",
        level: "Basic",
    },
    {
        id: 3,
        icon: 'bx-badge-check',
        name: "Forensic",
        level: "Basic",
    },
];

export const skillsSecurity2 = [
    {
        id: 1,
        icon: 'bx-badge-check',
        name: "Governance",
        level: "Basic",
    },
    {
        id: 2,
        icon: 'bx-badge-check',
        name: "Cryptography",
        level: "Basic",
    },
    {
        id: 3,
        icon: 'bx-badge-check',
        name: "Phishing",
        level: "Basic",
    },
];

// skills technologies - Skills
export const skillsTechnologies1 = [
    {
        id: 1,
        icon: 'bx-badge-check',
        name: "Virtualization",
        level: "Basic",
    },
    {
        id: 2,
        icon: 'bx-badge-check',
        name: "SOs",
        level: "Basic",
    },
    {
        id: 3,
        icon: 'bx-badge-check',
        name: "Cloud",
        level: "Basic",
    },
];

export const skillsTechnologies2 = [
    {
        id: 1,
        icon: 'bx-badge-check',
        name: "AI",
        level: "Basic",
    },
    {
        id: 2,
        icon: 'bx-badge-check',
        name: "Auditoria",
        level: "Basic",
    },
    {
        id: 3,
        icon: 'bx-badge-check',
        name: "esqueci",
        level: "Basic",
    },
];

// Footer
// Links - Footer
export const linksFooter = [
    {
      name: 'About',
      path: 'about',
    },
    {
      name: 'Porjects',
      path: 'portfolio',
    },
    {
      name: 'Articles',
      path: 'articles',
    },
];