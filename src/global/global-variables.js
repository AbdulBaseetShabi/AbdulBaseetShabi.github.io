const GOOGLE_DRIVE_PREFIX = "https://drive.google.com/uc?export=view&id=";
// const PROFILE_PICTURE = "1-Rn49ksl9N2nRLT1yKeRzWba0Fa8070J";

//Descriptions 
const DESCRIPTIONS = [
  "👋🏿 Hi, I am Abdul-Baseet Shabi",
  "🙂 Abdul for short",
  "⭐ Welcome to my personal website ⭐",
  "🏗️ It was built from scratch on React",
  "👨‍💻 Full-Stack Developer",
  "🤖 Technological Euthasits",
  "📚 Favorite stack: MERN (MongoDB + Express + React + NodeJs)",
  "🤳🏿 Favourite language: Tie between JavaScript and Python",
  "💹 Unique value proposition: Experience in varying industries",
  "❤️ Hobbies: Cooking, Basketball, NFL playoffs",
  "🍕 Pineapple on Pizza: Yes",
]

// Socials
const SOCIALS = [
  {
    name: "Resume",
    url: "https://docs.google.com/viewer?url=https://github.com/AbdulBaseetShabi/web-resume/raw/master/public/assets/resume/resume.pdf",
    src: "https://img.icons8.com/plasticine/60/000000/file.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abdulbaseet/",
    src: "https://img.icons8.com/fluency/60/000000/linkedin.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bsquare480/",
    src: "https://img.icons8.com/fluency/60/000000/instagram-new.png",
  },
  {
    name: "Email",
    url: "mailto:shab7430@mylaurier.ca",
    src: "https://img.icons8.com/fluency/60/000000/email-open.png",
  },
  {
    name: "GitHub",
    src: "https://img.icons8.com/glyph-neue/64/FFFFFF/github.png",
    url: "https://github.com/AbdulBaseetShabi",
  },

];


// Education
const EDUCATION = {
  school: "Wilfrid Laurier University",
  program: "Business Administration & Computer Science",
  from: "September 2017",
  to: "August 2022 (Expected)",
};

const ACTIVITIES = [
  {
    title: "President",
    company: "Laurier Computing Society",
    responsibilities: [],
    date_from: "Aug 2020",
    date_to: "March 2022",
  },

  {
    title: "Global Engagement Student Ambassador",
    company: "Laurier International",
    responsibilities: [],
    date_from: "June 2018",
    date_to: "April 2019",
  },
  {
    title: "Icebreaker",
    company: "Student Union",
    responsibilities: [],
    date_from: "May 2019",
    date_to: "April 2020",
  },
  {
    title: "GoTeam",
    company: "Student Union",
    responsibilities: [],
    date_from: "Mar 2018",
    date_to: "Sept 2018",
  },
  {
    title: "WebMaster",
    company: "Laurier Data Science Society",
    responsibilities: [],
    date_from: "May 2020",
    date_to: "April 2021",
  },
  {
    title: "Director of Operations",
    company: "The GoldenHack",
    responsibilities: [],
    date_from: "May 2019",
    date_to: "Oct 2019",
  }
];

// Experiences
const EXPERIENCES = [
  {
    company: "PepsiCo",
    date_from: "Sept. 2021",
    date_to: "Dec. 2021",
    title: "RPA Developer",
    location: "Virtual",
    tools_and_technologies: ["Azure Devops", "Visual Studio", "Excel"],
    languages_and_frameworks: ["UiPath", "C#"],
    isCoop: true,
  },
  {
    company: "Rodan Energy Solutions",
    date_from: "Sept. 2020",
    date_to: "Dec. 2020",
    title: "IT Analyst, Process Improvement & Automation",
    location: "Virtual",
    tools_and_technologies: ["Git", "Azure Devops", "Visual Studio", "Excel"],
    languages_and_frameworks: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "VBA",
      "Python",
    ],
    isCoop: true,
  },
  {
    company: "ATS Automation",
    date_from: "Jan. 2020",
    date_to: "Dec. 2020",
    title: "Software Developer",
    location: "Kitchener, ON, Canada",
    tools_and_technologies: ["SVN", "Atlassian", "Visual Studio", "SSMS"],
    languages_and_frameworks: [
      "HTML",
      "CSS",
      "JavaScript",
      "AngularJS",
      "C#",
      "SQL",
    ],
    isCoop: true,
  },
  {
    company: "The Incubator - The Co-operators Group Limited",
    date_from: "May 2019",
    date_to: "Aug. 2019",
    title: "Software Developer",
    location: "Kitchener, ON, Canada",
    tools_and_technologies: ["Git", "Atlassian", "Visual Studio", "MongoDB"],
    languages_and_frameworks: [
      "HTML",
      "CSS",
      "JavaScript",
      "Angular",
      "NodeJS",
    ],
    isCoop: true,
  },
  {
    company: "Mathematics and Statistics Support",
    date_from: "Jan. 2019",
    date_to: "April 2021",
    title: "Peer Tutor/Mentor",
    location: "Waterloo, ON, Canada",
    isPartTime: true,
  },
  {
    company: "Science Department",
    date_from: "Sept. 2019",
    date_to: "April 2021",
    title: "Instructional Assistant",
    location: "Waterloo, ON, Canada",
    isPartTime: true,
  },
  {
    company: "Mathematics Department",
    date_from: "Sept. 2018",
    date_to: "Dec. 2019",
    title: "Proctor and Marker",
    location: "Waterloo, ON, Canada",
    isPartTime: true,
  },
  {
    company: "Laurier 101",
    date_from: "May 2018",
    date_to: "Sept. 2018",
    title: "Headstart Ambassador",
    location: "Waterloo, ON, Canada",
    isPartTime: true,
  },
];

// Projects
const PROJECTS = [
  {
    name: "Web Resume",
    languages_and_frameworks: ["HTML", "CSS", "JavaScript", "React"],
    tools_and_technologies: ["Visual Studio", "Git"],
    production_link: "https://abdulbaseetshabi.github.io/web-resume/",
    source_code_link: "https://github.com/AbdulBaseetShabi/web-resume",
    description:
      "This project is a web application that highlight my experiences. It gives people an insight into my roles and experiences, and what I gained from them.",
    image: "1bhhFCL67o7Nuij-qV5Ad5wDa2GVr0gZk",
    type: [2],
  },
  {
    name: "Web Resume REST API",
    languages_and_frameworks: ["NodeJS", "Express", "MongoDB"],
    tools_and_technologies: ["Visual Studio", "Git"],
    production_link: "https://desolate-shelf-14448.herokuapp.com/",
    source_code_link: "https://github.com/AbdulBaseetShabi/resume_backend",
    description:
      "A REST API built on NodeJS and Express, that is used to update (via a mobile app) and get the content to display on my website",
    image: "1zs8eyFarmICVLZMtDRDv-gyyQTFTjTBa",
    type: [3],
  },
  {
    name: "Web Resume Updater",
    languages_and_frameworks: ["Dart", "Flutter SDK"],
    tools_and_technologies: ["Visual Studio", "Git"],
    production_link: "",
    source_code_link: "https://github.com/AbdulBaseetShabi/resume_updater",
    description:
      "A mobile application built on Flutter SDK used to update the content on my website via the Web Resume REST API",
    image: "1uxtCTvYaUPKJky5vBasGDWHCML9zJWGw",
    type: [2, 3, 4],
  },
  {
    name: "KARA",
    languages_and_frameworks: [
      "Python",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
    ],
    tools_and_technologies: ["Visual Studio", "Git"],
    production_link: "",
    source_code_link: "https://github.com/AbdulBaseetShabi/KARA_CP465",
    description:
      "A web based application that serves as a user friendly alternative to managing databases on MSSQL servers, especially for individuals who are not familiar with SQL.",
    image: "14_lOg_iv0p1s04JPNfjt08JpVWIyvG2W",
    type: [1, 2, 3, 4],
  },
];

module.exports = {
  GOOGLE_DRIVE_PREFIX,
  DESCRIPTIONS,
  EDUCATION,
  SOCIALS,
  ACTIVITIES,
  EXPERIENCES,
  PROJECTS,
};