const GOOGLE_DRIVE_PREFIX = "https://drive.google.com/uc?export=view&id=";
const PROFILE_PICTURE = "1-Rn49ksl9N2nRLT1yKeRzWba0Fa8070J";
// Education
const EDUCATION = {
    school: "Wilfrid Laurier University",
    program: "Business Administration & Computer Science",
    from: "September 2017",
    to: "August 2022 (Expected)",
};

const ACTIVITIES = [
  {
    name: "President - Laurier Computing Society",
    reflection: [
      "If I had to pick, this would be my favourite experience. It was the first time I had a leadership role aside from being the eldest child. It put me in a position where I was the key decision-maker. My decisions had a direct impact on the success or the failure of the club.",
      "This role spans over three semesters, two of which are active club seasons. In this role, I had learning experiences during the club's first active semester. Some decisions were made that could have been better. But overall, the experience improved my creative and problem-solving skillset, which resulted in a multitude of successful events.",
    ],
  },
  {
    name: "Global Engagement Student Ambassador - Laurier International",
    reflection: [
      "I understand the importance of support, especially when leaving your environment to a foreign environment. I reflect on being 16 in my first year in university, after being in Toronto for a year, I felt so lost like a needle in a haystack. There was so much going on and no sense of direction on what to do. This is why I am proud of this role. I was given the opportunity to help students in a similar situation, who are coming or going on the student exchange program.",
    ],
  },
  {
    name: "Peer Mentor/Tutor - Mathematics and Statistics Support",
    reflection: [
      "It is important to give back to your community or a source that helped you get to where you currently are. This resource was that to me. In my first year, I used it a lot to better understand concepts taught in class. I had the opportunity to meet upper-year students and get valuable advice. When I became an upper-year student ('old'), I felt the need to give back. Hence, my involvement with this role.",
    ],
  },
  {
    name: "Instructional Assistant - Computer Science department",
    reflection: [],
  },
  {
    name: "Headstart Ambassador - Teaching and Learning",
    reflection: [
      "As a headstart ambassador, my role officially is to ease the transition of students into the university lifestyle. Upon reflection, my role unofficially expands to their parents. I am reminded of how much love parents have for their kids. I see parents asking more questions, being more worried than their kids, and honestly, in need of the service more than the students. This is why sometimes I take it upon myself to cater to the needs of the parents.",
      "This role taught me how to be more compassionate, patient and understanding, that sometimes you should be open to doing a little bit more. The worst that could happen is you learn or experience something new."
    ],
  },
  { name: "Icebreaker - Student Union", reflection: [] },
  { name: "GoTeam - Student Union", reflection: [] },

  {
    name: "Proctor/Marker - Mathematics Department",
    reflection: [],
  },
  { name: "WebMaster - Laurier Data Science Society", reflection: [] },
];

// Experiences
const COOPS = [
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
    summary: [
      "Compared to my other coop terms, this coop was unique in many ways. One, it was the first full-term I worked virtually from my bedroom. Secondly, it allowed me to work more autonomously. A repetitive task or process would be presented to me during my weekly meeting, and  I had full creative control on deciding what the best approach was to automate it. I had to factor in the level of technological savviness of the person that would use the tool, the approach that relied the least on 3rd party libraries or tools, and the company's current technological infrastructure.",
      "I worked on one web application to automate sending paystubs to vendors. The project was built on NodeJS and relied on a pdf and CSV data to know who to email the appropriate information. I worked on 2 Excel-based solutions using VBA, to read, represent and export data in an appropriate format that can be imported on QuickBooks. Also, I developed a python tool that auto-filled information from a CSV file to a PDF file.",
      "Overall, I appreciated the trust, the level of support I got, and the constant check-up to see how I was coping with the situation at the time (COVID)."
    ],
    type: "coop",
  },
  {
    company: "ATS Automation",
    date_from: "Jan. 2020",
    date_to: "Dec. 2020",
    title: "Software Developer",
    location: "Waterloo, ON, Canada",
    tools_and_technologies: ["SVN", "Atlassian", "Visual Studio", "SSMS"],
    languages_and_frameworks: [
      "HTML",
      "CSS",
      "JavaScript",
      "AngularJS",
      "C#",
      "SQL",
    ],
    summary: [
      "This role was structured and supportive that if I was ever confused or lost, I knew where to ask for help. I had the opportunity to work with a lot of amazing individuals, both full-time and part-time employees. I learnt various aspects of the development workflow ranging from coding to testing and approving a task.",
      "I worked on a web-based application built on C#. Even as a developer, I got the opportunity to be involved with testing, seeing aspects of automating a test, and checking potential memory leaks in an application.",
      "I appreciated the guidance and the individuals I got to meet, who helped me be better as a professional."
    ],
    type: "coop",
  },
  {
    company: "The Incubator - The Co-operators Group Limited",
    date_from: "May 2019",
    date_to: "Aug. 2019",
    title: "Software Developer",
    location: "Waterloo, ON, Canada",
    tools_and_technologies: ["Git", "Atlassian", "Visual Studio", "MongoDB"],
    languages_and_frameworks: [
      "HTML",
      "CSS",
      "JavaScript",
      "Angular",
      "NodeJS",
    ],
    summary: [],
    type: "coop",
  },
];

const WORK = [
  {
    company: "Mathematics and Statistics Support - WLU",
    date_from: "Jan. 2019",
    date_to: "April 2021",
    title: "Peer Tutor/Mentor",
    location: "Waterloo, ON, Canada",
    main_skills: ["Communication", "Punctuality", "Knowledgeable", "Patience"],
    summary: [],
    type: "work",
  },
  {
    company: "Science Department - WLU",
    date_from: "Sept. 2019",
    date_to: "April 2021",
    title: "Instructional Assistant",
    location: "Waterloo, ON, Canada",
    main_skills: ["Communication", "Punctuality", "Knowledgeable", "Patience"],
    summary: [],
    type: "work",
  },
  {
    company: "Mathematics Department - WLU",
    date_from: "Sept. 2018",
    date_to: "Dec. 2019",
    title: "Proctor and Marker",
    location: "Waterloo, ON, Canada",
    main_skills: [
      "Attention to Details",
      "Punctuality",
      "Knowledgeable",
      "Patience",
    ],
    summary: [],
    type: "work",
  },
  {
    company: "Teaching and Learning - WLU",
    date_from: "May 2018",
    date_to: "Sept. 2018",
    title: "Headstart Ambassador",
    location: "Waterloo, ON, Canada",
    main_skills: [
      "Communication",
      "Team Work",
      "Punctuality",
      "Knowledgeable",
      "Patience",
      "Leadership",
    ],
    summary: [],
    type: "work",
  },
];

const VOLUNTEER = [
  {
    company: "Student Union - WLU",
    date_from: "May 2019",
    date_to: "April 2020",
    title: "Icebreaker",
    location: "Waterloo, ON, Canada",
    main_skills: [
      "Communication",
      "Team Work",
      "Punctuality",
      "Knowledgeable",
      "Patience",
      "Leadership",
    ],
    summary: [],
    type: "volunteer",
  },
  {
    company: "Laurier International - WLU",
    date_from: "June 2018",
    date_to: "April 2019",
    title: "Global Engagement Student Ambassador",
    location: "Waterloo, ON, Canada",
    main_skills: [
      "Communication",
      "Team Work",
      "Punctuality",
      "Knowledgeable",
      "Patience",
      "Leadership",
    ],
    summary: [],
    type: "volunteer",
  },
  {
    company: "Laurier Computing Society - WLU",
    date_from: "May 2020",
    date_to: "April 2021",
    title: "President",
    location: "Waterloo, ON, Canada",
    main_skills: [
      "Communication",
      "Team Work",
      "Punctuality",
      "Knowledgeable",
      "Patience",
      "Leadership",
    ],
    summary: [],
    type: "volunteer",
  },
  {
    company: "Laurier Data Science Society - WLU",
    date_from: "Sept. 2020",
    date_to: "April 2021",
    title: "Web Master",
    location: "Waterloo, ON, Canada",
    main_skills: [
      "Communication",
      "Team Work",
      "Punctuality",
      "Knowledgeable",
      "Patience",
      "Leadership",
    ],
    summary: [],
    type: "volunteer",
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
  },
  {
    name: "KARA",
    languages_and_frameworks: ["Python", "React", "JavaScript", "HTML", "CSS", "SQL"],
    tools_and_technologies: ["Visual Studio", "Git"],
    production_link: "",
    source_code_link: "https://github.com/AbdulBaseetShabi/KARA_CP465",
    description:
      "A web based application that serves as a more user friendly Database Management System for MSSQL servers, especially for individuals who are not familiar with SQL. This project frontend was built using React and its backend was built on Python (Flask library).",
    image: "14_lOg_iv0p1s04JPNfjt08JpVWIyvG2W",
  },
];

module.exports = {
  GOOGLE_DRIVE_PREFIX,
  PROFILE_PICTURE,
  EDUCATION,
  ACTIVITIES,
  COOPS,
  WORK,
  VOLUNTEER,
  PROJECTS,
};
