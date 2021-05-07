// Education
const EDUCATION = [
  {
    school: "Wilfrid Laurier University",
    program: "Business Administration",
    from: "2017",
    to: "2021 (Expected)",
  },
  {
    school: "Wilfrid Laurier University",
    program: "Computer Science",
    from: "2017",
    to: "2021 (Expected)",
  },
];

const ACTIVITIES = [
  {
    name: "President - Laurier Computing Society",
    reflection: [
      "A multi-paragraph essay commonly includes introduction and conclusion paragraphs, with topic paragraphs in between.",
      "The introduction usually includes a thesis statement, and provides general direction for the paper. The conclusion ties together the key points. The middle paragraphs, typically one to three of them, include specific topics or points that support the thesis, or provide details related to the essay theme. An outline is helpful in organizing the content in a multi-paragraph essay. Each supporting paragraph should only cover one main topic or point.",
    ],
  },
  {
    name: "Global Engagement Student Ambassador - Laurier International",
    reflection: [],
  },
  {
    name: "Peer Mentor/Tutor - Mathematics and Statistics Support",
    reflection: [],
  },
  {
    name: "Instructional Assistant - Computer Science department",
    reflection: [],
  },
  { name: "Icebreaker - Student Union", reflection: [] },
  { name: "GoTeam - Student Union", reflection: [] },
  {
    name: "Headstart Ambassador - Laurier International",
    reflection: [],
  },
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
    summary: [],
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
      "Leadership"
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
      "Leadership"
    ],
    summary: [
    ],
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
      "Leadership"
    ],
    summary: [
    ],
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
      "Leadership"
    ],
    summary: [
    ],
    type: "volunteer",
  }
  ,
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
      "Leadership"
    ],
    summary: [
    ],
    type: "volunteer",
  }
];

// Projects
const PROJECTS = [
  {
    name: "Web Resume",
    languages_and_frameworks: ["HTML", "CSS", "JavaScript", "React"],
    tools_and_technologies: ["Visual Studio", "Git"],
    production_link: "http://developer.mozilla.org",
    source_code_link: "http://googlecode.com",
    description:
      "The tears of a clown make my lipstick run, but my shower cap is still intact.",
    image: "/assets/images/test.jpg",
  },
  {
    name: "Web Resume",
    languages_and_frameworks: ["HTML", "CSS", "JavaScript", "React"],
    tools_and_technologies: ["Visual Studio", "Git"],
    production_link: "http://developer.mozilla.org",
    source_code_link: "http://googlecode.com",
    description:
      "The tears of a clown make my lipstick run, but my shower cap is still intact.",
    image: "/assets/images/aboutme.jpg",
  },
  {
    name: "Web Resume",
    languages_and_frameworks: ["HTML", "CSS", "JavaScript", "React"],
    tools_and_technologies: ["Visual Studio", "Git"],
    production_link: "",
    source_code_link: "http://googlecode.com",
    description:
      "The tears of a clown make my lipstick run, but my shower cap is still intact.",
    image: "/assets/images/aboutme.jpg",
  },
];

module.exports = {
  EDUCATION,
  ACTIVITIES,
  COOPS,
  WORK,
  VOLUNTEER,
  PROJECTS
}