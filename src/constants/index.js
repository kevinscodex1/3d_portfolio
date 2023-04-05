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
    carrent,
    jobit,
    tripguide,
    arcana1,
    arcana2,
    arcana3,
    charm,
    daiben,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: backend,
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Marketing Head",
      company_name: "MassiveSuccess Merchandising",
      // icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2019 - Dec 2022",
      points: [
        "Manage and coordinate the team in charge with advertising the company.",
        "Finding new clients and investors by pitching the strengths of the company.",
        "Showcasing the previous work of the company to attract new clients and investors.",
        "Streamlined the company's communication channels.",
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
    {
      title: "Full stack Developer Graduate",
      company_name: "KodeGO",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "Trained in developing and maintaining web applications using React.js and other related technologies.",
        "Acted as the leader of both Mini Project 2 (MP2) and Capstone Project.",
        "Top 2 in MP1 (Arcana Archive).",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "During his time at KodeGo bootcamp, Kevin stood out as an exceptional student who served as a project leader twice. He possessed a unique drive and always demonstrated a willingness to explore and incorporate new and exciting technologies into his projects.",
      name: "Daiben Sanchez",
      designation: "Instructor",
      company: "KodeGo",
      image: daiben,
    },
    {
      testimonial:
        "I highly recommend my fellow web developer for his top-notch technical skills, problem-solving abilities, and collaborative mindset. He could be an asset to any organization and an absolute pleasure to work with.",
      name: "Charmaine David",
      designation: "Graduate",
      company: "KodeGo",
      image: charm,
    },
    // {
    //   testimonial:
    //     "After kevinoptimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Arcana | Phase 1",
      description:
        " As a concept it is an online library provides easy access to a vast collection of digital educational materials, allowing individuals to learn at their own pace from anywhere. Its advanced search and personalized recommendation features enable users to discover.",
      tags: [
        {
          name: "HTML",
          color: "gold-text-gradient",
        },
        {
          name: "CSS",
          color: "gold-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "gold-text-gradient",
        },
      ],
      image: arcana1,
      source_code_link: "https://github.com/kevinscodex1/Arcana-Archive-Phase1",
    },
    {
      name: "Arcana | Phase 2",
      description:
        "The website's design has been enhanced to improve the user experience, and new features have been added, including JavaScript and jQuery functionalities. These additions allow for interactive and dynamic elements on the website, making it more engaging and user-friendly.",
      tags: [
        {
          name: "HTML",
          color: "gold-text-gradient",
        },
        {
          name: "CSS",
          color: "gold-text-gradient",
        },
        {
          name: "Javascript",
          color: "gold-text-gradient",
        },
      ],
      image: arcana2,
      source_code_link: "https://github.com/kevinscodex1/Arcana-Archive-Phase2",
    },
    {
      name: "Arcana | Phase 3",
      description:
        "Arcana Archive, built with MERN stack, now features improved usability and functionality. The backend support has been enhanced, along with the sign up and sign in pages. An admin database has also been added to the platform. The updates made the website ergonomic. ",
      tags: [
        {
          name: "react.js",
          color: "gold-text-gradient",
        },
        {
          name: "mongoDB",
          color: "gold-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "gold-text-gradient",
        },
      ],
      image: arcana3,
      source_code_link: "https://github.com/kevinscodex1/Aracana-Archive-Phase3",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };