import {
  dsa,
  cpp,
  pm,
  linkedin,
  web,
  project1,
  project2,
  project3,
  project4,
  project5,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  resume,
  kotlin,
  android,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  edu,
  java,
  gh,
  codelio,
  linkertree
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Web Developer",
    icon: web,
  },
  {
    title: "C++ Developer",
    icon: cpp,
  },
  {
    title: "Data Structures & Algorithms",
    icon: dsa,
  },
  {
    title: "Android Developer",
    icon: android,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "C++",
    icon: cpp,
  },

  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "kotlin",
  //   icon: kotlin,
  // },
  {
    name: "git",
    icon: git,
  },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

const experiences = [
  {
    title: "Android Developer Intern",
    company_name: "Eduskill Foundation",
    icon: edu,
    iconBg: "#383E56",
    date: "July 2024 - September 2024",
    points: [
      "Developed and maintained Android applications using Java and Kotlin.",
      "Enhanced app performance and user experience by optimizing layouts and implementing efficient data handling.",
      "Integrated various APIs to enable features such as remote data fetching, push notifications, and other real-time functionalities.",
      "A significant part of the internship probably involved identifying and fixing bugs, as well as testing apps for stability and performance.",
    ],
  },
  
  {
    title: "Web Developer",
    company_name: "Personal Projects",
    icon: pm,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Developing and maintaining web applications using HTML,CSS, Javascript, React.js, MongoDB and other related technologies.",
     "Designed and implemented responsive layouts and components, ensuring cross-browser compatibility and mobile optimization.", 
     "Integrated backend services using Node.js and Express and various databases such as MongoDB, MySQL, enabling seamless data retrieval and manipulation through RESTful APIs.",
    ],
  },
];




const projects = [
  {
    name: "College Chatbot",
    description:
      "This intelligent chatbot, designed for SNJB’s College of Engineering, provides information about faculty, lab locations, and more. Built with Python, HTML, CSS, and MySQL also integrated Gemini API to handle broader inquiries.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/AryanJ2004/SNJB-College-Chatbot",
  },
  {
    name: "Personal Portfolio",
    description:
      "Welcome to my interactive 3D portfolio, designed with React, Three.js, Tailwind CSS, and JavaScript. This immersive experience showcases my web development projects in a captivating way, blending creativity with technology to highlight my skills and vision.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/",
  },

  {
    name: "Airbnb Clone (Ongoing)",
    description:
      "A fully functional website that have the core features of the popular vacation rental platform. Built using modern technologies like Javascript, Expressjs, Node.js, and MongoDB, this project allows users to search for, book, and manage rental properties seamlessly.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
  {
    name: "Spotify Website Clone",
    description:
      "This project is a responsive web application that replicates the core functionalities of the popular music streaming platform, Spotify. Built using HTML, CSS, and JavaScript, the clone features a sleek user interface that allows users to browse a vast library of songs, create and manage playlists, and listen to music seamlessly.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
 ],
    image: project4,
    source_code_link: "https://github.com/AryanJ2004/Spotify-Clone",
  },
  // {
  //   name: "Amazon Website Clone",
  //   description:
  //     "This project is a front-end replica of the e-commerce platform Amazon, made using HTML, CSS, and JavaScript. It features a visually appealing and intuitive user interface, allowing users to browse products, and explore categories. The design closely mirrors Amazon’s layout, focusing on responsiveness and user experience.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project5,
  //   source_code_link: "https://github.com/AryanJ2004/Amazon_Clone",
  // },
];


const publicUrls = {
  socialProfiles: {
    resume: {
      title: "Resume",
      link: "https://www.drive.google.com",
      icon: resume,
    },
    linkedin: {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/aryanj2004/",
      icon: linkedin, 
    },
    github: {
      title: "Github",
      link: "https://github.com/aryanj2004",
      icon: gh, 
    },
    codolio: {
      title: "Codolio",
      link: "https://codolio.com/profile/ditd0TMB",
      icon: codelio, 
    },
    linkertree: {
      title: "Linkertree",
      link: "https://linktr.ee/aryanj2004",
      icon: linkertree, 
    },
  },
};


export { services, technologies, experiences, projects,
  publicUrls };
