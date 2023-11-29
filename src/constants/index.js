import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
} from "../assets";

import nic from '../assets/nic.png';
import device from '../assets/device.png';
import st from '../assets/st.png';
import fn from '../assets/fn.png';
import naturalera from '../assets/naturalera.png';
import food from '../assets/food.png';
import pet from '../assets/pet.png';
import emoney from '../assets/emoney.png';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile app Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui/Ux Designer",
    icon: creator,
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React Js Developer",
    company_name: "ACPT",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "ACPT",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NIC To Birthday",
    description:
      "Find Birthday and Gender using NIC number 😊",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nic,
    source_code_link: "https://github.com/Mskelum/NIC_To_Birthday",
  },
  {
    name: "Device Manager",
    description:
      "Introducing a cutting-edge device details app that provides comprehensive information about your phone. Unlock the power of knowledge with just a tap",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: device,
    source_code_link: "https://github.com/Mskelum/Device-Manager",
  },
  {
    name: "Student Management",
    description:
    "Efficient student management system built with NetBeans. Register, update, and delete student details seamlessly.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "netbeans",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: st,
    source_code_link: "https://github.com/Mskelum/Student-Management",
  },
  {
    name: "NaturalEra Website",
    description:
      "Experience the seamless power of a React.js website that combines stunning design with unmatched functionality",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: naturalera,
    source_code_link: "https://github.com/Mskelum/simple-site",
  },
  {
    name: "Idealize Project",
    description:
      " fineAnswer, a comprehensive and user-friendly money management app designed to empower you with the tools and insights you need to take control of your financial life",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fn,
    source_code_link: "https://github.com/Mskelum/Idealize-project",
  },
]
const psprojects = [
  {
    name: "FineAnswer",
    description:
      "FineAnswer, a comprehensive and user-friendly money management app designed to empower you with the tools and insights you need to take control of your financial life",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: fn,
    source_code_link: "https://play.google.com/store/apps/details?id=com.mskelum.fineanswer",
  },
  {
    name: "Rasa Saraniya",
    description:
      "Introducing Rasa Saraniya, your ultimate culinary companion! Embark on a delightful gastronomic journey with our food recipe app",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://play.google.com/store/apps/details?id=com.my_foods",
  },
  {
    name: "Pet Care",
    description:
      "Discover the future of pet care with our revolutionary Pet Care App. Designed for pet owners who want the best for their furry companions, our app is your all-in-one solution for pet management and well-being",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pet,
    source_code_link: "https://play.google.com/store/apps/details?id=com.mskelum.petcare",
  },
  {
    name: "E Money",
    description:
      " EMoney, your all-in-one financial companion. In today's fast-paced world, managing your finances and working towards your financial goals should be easy, convenient, and rewarding",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: emoney,
    source_code_link: "https://play.google.com/store/apps/details?id=com.ms_kelum.emoney",
  },
]

;

export { services, technologies, experiences, testimonials, projects, psprojects };
