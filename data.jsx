import { Icon } from "@iconify/react";

import petshop from "./src/assets/projects-img/petshop.png";
import portfolio from "./src/assets/projects-img/portfolio.png";
import lawyer from "./src/assets/projects-img/lawyer.png";
import edufocus from "./src/assets/projects-img/edufocus.png";
// import video from './src/assets/projects-img/video.png'
// import hotel from './src/assets/projects-img/hotel 2.png'
import tv from "./src/assets/projects-img/tv.png";
import photo from "./src/assets/pages-img/photo.jpg";
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
// export const aboutMeText = "I’m a dedicated software engineer based in Cape Town, South Africa.
//  I love creating beautiful and user-friendly products. I'm also a data enthusiast, always eager to learn new things.
//  I've successfully completed an intensive 12-month course at CodeYourFuture, which has provided me with a solid foundation in Full Stack Development.
//   With a background in catering and nursing, I bring a unique perspective and creative problem-solving to the table. Join me on this journey, and let's build something amazing together!";

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
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "PostgreSQL",
  "MongoDB",
  "GitHub",
  "Figma",
  "GIPM",
];
export const divWidths = [100, 75, 75, 50, 75, 50, 50, 50, 50, 75, 75, 50];
/* PROJECTS
 **************************************************************
 */
export const projectsData = [
  {
    id: 1,
    title: "PORTFOLIO",
    subtitle: "1. React",
    description:
      "This my portfolio website, crafted using the powerful combination of React for dynamic functionality, Bootstrap React for responsive design, and Styled Components for elegant styling. Feel free to explore and get in touch!",
    tools: [
      <Icon icon="logos:react" width="30" height="30" />,
      <Icon icon="devicon:reactbootstrap" width="30" height="30" />,
      <Icon icon="file-icons:styledcomponents" width="30" height="30" />,
      <Icon icon="mingcute:github-line" width="30" height="30" />,
    ],
    imageUrl: portfolio,
    codeUrl: "https://github.com/example/project1",
    viewUrl: "https://example.com/project1",
  },
  {
    id: 2,
    title: "PET SHOP",
    subtitle: "2. MERN stack",
    description:
      "This project is an eCommerce website with MERN stack with full featured shopping cart, product reviews and ratings, user profile with orders, admin product, user and order management, checkout process and Paypal.",
    tools: [
      <Icon icon="logos:react" width="30" height="30" />,
      <Icon icon="devicon:reactrouter" width="30" height="30" />,
      <Icon icon="devicon:redux" width="30" height="30" />,
      <Icon icon="devicon:reactbootstrap" width="30" height="30" />,
      <Icon icon="devicon:express" width="30" height="30" />,
      <Icon icon="simple-icons:mongodb" width="30" height="30" />,
    ],
    imageUrl: petshop,
    codeUrl: "https://github.com/AlexJora/pet-shop",
    viewUrl: "https://pet-shop-o75d.onrender.com/page/1",
  },
  {
    id: 3,
    title: "LAWYER WEBSITE",
    subtitle: "3. React",
    description:
      "Multi-page React app designed to showcase and provide various legal services. The website features a contact form and WhatsApp integration to facilitate communication between the lawyer and potential clients.",

    tools: [
      <Icon icon="logos:react" width="30" height="30" />,
      <Icon icon="devicon:reactrouter" width="30" height="30" />,
      <Icon icon="vscode-icons:file-type-css" width="30" height="30" />,
      <Icon icon="logos:bootstrap" width="30" height="30" />,
      <Icon icon="devicon:netlify" width="30" height="30" />,
    ],
    imageUrl: lawyer,
    codeUrl: "https://github.com/AlexJora/lawyer-website",
    viewUrl: "https://alinamarin.ro/",
  },
  {
    id: 4,
    title: "EDUFOCUS PROJECTS",
    subtitle: "4. PERN stack",
    description:
      "The project is an educational website developed using the PERN stack for Edufocus Projects. It includes features such as user-friendly registration, CRUD operations, a contact form, admin training material upload, and a photo gallery.",
    tools: [
      <Icon icon="logos:react" width="30" height="30" />,
      <Icon icon="devicon:reactrouter" width="30" height="30" />,
      <Icon icon="vscode-icons:file-type-css" width="30" height="30" />,
      <Icon icon="devicon:express" width="30" height="30" />,
      <Icon icon="logos:postgresql" width="30" height="30" />,
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
    id: 5,
    title: "TV SHOW",
    subtitle: "5. JavaScript",
    description:
      "This is a website developed using Vanilla Javascript. Calls to TvMaze RESTful API are made so that shows and movies are displayed.",

    tools: [
      <Icon icon="iconoir:html5" width="30" height="30" />,
      <Icon icon="vscode-icons:file-type-css" width="30" height="30" />,
      <Icon icon="fluent:javascript-20-regular" width="30" height="30" />,
      <Icon icon="carbon:api-1" width="30" height="30" />,
    ],
    imageUrl: tv,
    codeUrl: "https://github.com/AlexJora/tv-show-dom-project",
    viewUrl: "https://cyf-alexjora-tv.netlify.app/",
  },
];
/* CONTACT
 **************************************************************
  
*/
/* Resume
 **************************************************************
  
*/
