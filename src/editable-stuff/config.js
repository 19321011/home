// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Hashir",
  middleName: "",
  lastName: "Shoaib",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/19321011",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/Fathur.nabilaholic.JKT48/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/pucukedelweiss/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/fathurhidayanto/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/imnotSt4rdust",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"pucukedelweiss",
//b) a link to an hosted image
//      i.e:profilePictureLink:"https://photos.app.goo.gl/jbtnkNTbEvtcUs899",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/pucukedelweiss.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/Resume.pdf"),
//         resume: "https://docs.google.com/document/d/1S_D9uc9TtLgP6IEfsmphw91YWaJx2RnCNlHuzCW6eGM/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/pucukedekweiss.jpg"),
  imageSize: 375,
  message:
    "Perkenalkan nama saya Fathur Hidayanto. Saya adalah mahasiswa Ilmu Komunikasi Universitas Islam Indonesia. Saya memiliki pengalaman di bidang fotografi dan videografi.",
  resume: "https://docs.google.com/document/d/1S_D9uc9TtLgP6IEfsmphw91YWaJx2RnCNlHuzCW6eGM/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "19321011", //i.e."Pucukedelweiss"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Photography", value: 90 },
    { name: "Videography", value: 80 },
    { name: "Adobe Lightroom", value: 85 },
    { name: "Adobe Photoshop", value: 70 },
    { name: "Adobe Premiere", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Saat ini saya sedang mencari peluang Digital Kreatif atau Desain Grafis paruh waktu! Jika Anda mengetahui posisi yang tersedia, jika Anda memiliki pertanyaan, atau jika Anda hanya ingin menyapa, silakan email saya di",
  email: "faturh43@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
