import { Icon } from "@iconify/react";

import petshop from "./src/assets/projects-img/petshop.webp";
import portfolio from "./src/assets/projects-img/portfolio.webp";
import lawyer from "./src/assets/projects-img/lawyer.webp";
import lawyerNext from "./src/assets/projects-img/lawyer-next.webp";
import edufocus from "./src/assets/projects-img/edufocus.webp";
// import video from './src/assets/projects-img/video.png'
// import hotel from './src/assets/projects-img/hotel 2.png'
import tv from "./src/assets/projects-img/tv.webp";
import photo from "./src/assets/pages-img/photo.webp";
import thai from "./src/assets/projects-img/thai.webp";
/* HOME
 **************************************************************
  
*/
/* ABOUT
 **************************************************************
 */
export const aboutImage = {
  imageUrl: photo,
};
export const aboutMeTitle = "Some info ABOUT me";

export const aboutMeText = `
  I’m a curious software engineer based in Cape Town, South Africa.
  I love creating beautiful and user-friendly products. I'm also a data enthusiast, always eager to learn new things.

  I've completed an intensive 9-month course at CodeYourFuture, which has provided me with a solid foundation in Full Stack Development.

   With a background in catering and nursing, I bring a unique perspective and creative problem-solving to the table.
    Join me on this journey, and let's build something amazing together!
`;

/* SKILLS
 **************************************************************
 */
export const skillsName = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "JavaScript",
  "React",
  "Next.js",
  "Redux",
  "Node",
  "PostgreSQL",
  "MongoDB",
  "GitHub",
  "Figma",
];
export const divWidths = [100, 75, 75, 50, 50, 75, 50, 50, 50, 50, 50, 75, 75];
/* PROJECTS
 **************************************************************
 */
export const projectsData = [
  {
    id: 1,
    title: "THAI MASSAGE",
    subtitle: "1. Next.js",
    description:
      "This project is a Next.js-based front-end application developed for Ruan Thai, thai massage and beauty treatment center provider in Cape Town. The application spans 12 pages, offering detailed insights into diverse range of services, contact information, and more, ensuring a user-friendly experience from browsing to booking.",
    renderNote: false,
    tools: [
      <Icon icon="devicon:nextjs" key="next-icon" width="30" height="30" />,
      <Icon icon="devicon:tailwindcss" key="next-icon" width="30" height="30"/>,
      <Icon
        key="github-icon"
        icon="mingcute:github-line"
        width="30"
        height="30"
      />,
      <Icon icon="devicon:vercel" key="vercel-icon" width="30" height="30" />,
    ],
    imageUrl: thai,
    codeUrl: "https://github.com/AlexJora/thai-massage",
    viewUrl: "https://www.ruanthai.co.za/",
  },
  {
    id: 2,
    title: "PORTFOLIO",
    subtitle: "1. React",
    description:
      "My portfolio website, crafted using the powerful combination of React for dynamic functionality, Bootstrap for responsive design, and Styled Components for styling. Feel free to explore and get in touch!",
    renderNote: false,
    tools: [
      <Icon key="react-icon" icon="logos:react" width="30" height="30" />,
      <Icon
        key="react-bootstrap-icon"
        icon="devicon:reactbootstrap"
        width="30"
        height="30"
      />,
      <Icon
        key="styled-components-icon"
        icon="file-icons:styledcomponents"
        width="30"
        height="30"
      />,
      <Icon
        key="github-icon"
        icon="mingcute:github-line"
        width="30"
        height="30"
      />,
      <Icon key="netlify-icon" icon="devicon:netlify" width="30" height="30" />,
    ],
    imageUrl: portfolio,
    codeUrl: "https://github.com/AlexJora/portfolio",
    viewUrl: "https://portfolio-alexjora.netlify.app/",
  },
  {
    id: 3,
    title: "PET SHOP",
    subtitle: "2. MERN stack",
    description:
      "This project is an eCommerce website with MERN stack with full featured shopping cart, product reviews and ratings, user profile with orders, admin product, user and order management, checkout process and Paypal.",
    renderNote: false,
    tools: [
      <Icon key="react-icon" icon="logos:react" width="30" height="30" />,
      <Icon
        key="reactrouter-icon"
        icon="devicon:reactrouter"
        width="30"
        height="30"
      />,
      <Icon key="redux-icon" icon="devicon:redux" width="30" height="30" />,
      <Icon
        key="react-bootstrap-icon"
        icon="devicon:reactbootstrap"
        width="30"
        height="30"
      />,
      <Icon
        key="github-icon"
        icon="mingcute:github-line"
        width="30"
        height="30"
      />,
      <Icon
        key="express-icon"
        icon="skill-icons:expressjs-light"
        width="30"
        height="30"
      />,
      <Icon
        key="mongodb-icon"
        icon="simple-icons:mongodb"
        width="30"
        height="30"
      />,
    ],
    imageUrl: petshop,
    codeUrl: "https://github.com/AlexJora/pet-shop",
    viewUrl: "https://pet-shop-o75d.onrender.com/page/1",
  },
  {
    id: 4,
    title: "LAWYER WEBSITE",
    subtitle: "3. React",
    description:
      "Multi-page React app designed to showcase and provide various legal services, built for a Romanian client and targeting the Romanian market. The website features a contact form and WhatsApp integration to facilitate communication between the lawyer and potential clients.",
    renderNote: false,

    tools: [
      <Icon key="react-icon" icon="logos:react" width="30" height="30" />,
      <Icon
        key="reactrouter-icon"
        icon="devicon:reactrouter"
        width="30"
        height="30"
      />,
      <Icon
        key="css-icon"
        icon="vscode-icons:file-type-css"
        width="30"
        height="30"
      />,
      <Icon
        key="react-bootstrap-icon"
        icon="logos:bootstrap"
        width="30"
        height="30"
      />,
      <Icon
        key="github-icon"
        icon="mingcute:github-line"
        width="30"
        height="30"
      />,
      <Icon key="netlify-icon" icon="devicon:netlify" width="30" height="30" />,
    ],
    imageUrl: lawyer,
    codeUrl: "https://github.com/AlexJora/lawyer-website",
    viewUrl: "https://avocat-alinamarin.netlify.app/",
  },
  {
    id: 5,
    title: "LAWYER WEBSITE",
    subtitle: "4. Next.js",
    description:
      "Multi-page Next.js app designed to showcase and provide various legal services, built for a Romanian client and targeting the Romanian market. The website features a contact form to facilitate communication between the lawyer and potential clients.",
    renderNote: false,

    tools: [
      <Icon icon="devicon:nextjs" key="next-icon" width="30" height="30" />,
      <Icon
        key="react-bootstrap-icon"
        icon="logos:bootstrap"
        width="30"
        height="30"
      />,
      <Icon
        key="github-icon"
        icon="mingcute:github-line"
        width="30"
        height="30"
      />,
      <Icon icon="devicon:vercel" key="vercel-icon" width="30" height="30" />,
    ],
    imageUrl: lawyerNext,
    codeUrl: "https://github.com/AlexJora/next-lawyer",
    viewUrl: "www.alinamarin.ro/",
  },
  {
    id: 6,
    title: "EDUFOCUS PROJECTS",
    subtitle: "4. PERN stack",
    description:
      "The project is an educational website developed using the PERN stack as part of an Agile project team. It features user-friendly registration, CRUD operations, a contact form, admin training material upload, and a photo gallery. This project supports Edufocus Projects mission of empowering novice teachers in South Africa through practical training, mentoring, and coaching programs.",
    renderNote: true,

    tools: [
      <Icon key="react-icon" icon="logos:react" width="30" height="30" />,
      <Icon
        key="reactrouter-icon"
        icon="devicon:reactrouter"
        width="30"
        height="30"
      />,
      <Icon
        key="css-icon"
        icon="vscode-icons:file-type-css"
        width="30"
        height="30"
      />,
      <Icon
        key="github-icon"
        icon="mingcute:github-line"
        width="30"
        height="30"
      />,
      <Icon
        key="express-icon"
        icon="skill-icons:expressjs-light"
        width="30"
        height="30"
      />,
      <Icon
        key="postgresql-icon"
        icon="logos:postgresql"
        width="30"
        height="30"
      />,
    ],
    imageUrl: edufocus,
    codeUrl: "https://github.com/AlexJora/edufocus-za",
    viewUrl: "https://starter-kit-g0y0.onrender.com/",
  },
  // {
  //   id: 5,
  //   title: 'VIDEO RECOMMENDATIONS',
  // subtitle: "PERN stack",
  //   description: 'CRUD application with PERN stack. As a user I can view all the videos stored in websites database. Users can also upload a video and its title using its url only if the yourube video does not already exist in the sites database. ',

  //   tools: [<Icon icon="logos:react" width="30" height="30" />, <Icon icon="devicon:reactrouter" width="30" height="30" />, <Icon icon="vscode-icons:file-type-css" width="30" height="30" />, <Icon icon="devicon:express" width="30" height="30" />, <Icon icon="logos:postgresql" width="30" height="30" />],
  //   imageUrl: video,
  //   codeUrl: 'https://github.com/example/project1',
  //   viewUrl: 'https://example.com/project1',
  // },
  // {
  //   id: 5,
  //   title: 'HOTEL',
  // subtitle: "React",
  //   description: 'CRUD application with PERN stack',

  //   tools: [<Icon icon="logos:react" width="30" height="30" />, <Icon icon="vscode-icons:file-type-css" width="30" height="30" />],
  //   imageUrl: hotel,
  //   codeUrl: 'https://github.com/example/project1',
  //   viewUrl: 'https://example.com/project1',
  // },
  {
    id: 7,
    title: "TV SHOW",
    subtitle: "5. JavaScript",
    description:
      "The TV Show project is a web application developed using HTML, CSS, Vanilla JavaScript, seamlessly integrating with the TVmaze API. Users can explore and choose from a diverse range of TV series and episodes, enhanced by a live search feature. This project allowed me to gain experience in manipulating the DOM and fetching data from external APIs.",
    renderNote: false,

    tools: [
      <Icon key="html-icon" icon="iconoir:html5" width="30" height="30" />,
      <Icon
        key="css-icon"
        icon="vscode-icons:file-type-css"
        width="30"
        height="30"
      />,
      <Icon
        key="javascript-icon"
        icon="fluent:javascript-20-regular"
        width="30"
        height="30"
      />,
      <Icon
        key="github-icon"
        icon="mingcute:github-line"
        width="30"
        height="30"
      />,
      <Icon key="api-icon" icon="carbon:api-1" width="30" height="30" />,
      <Icon key="netlify-icon" icon="devicon:netlify" width="30" height="30" />,
    ],
    imageUrl: tv,
    codeUrl: "https://github.com/AlexJora/tv-show-dom-project",
    viewUrl: "https://cyf-alexjora-tv.netlify.app/",
  },
];
