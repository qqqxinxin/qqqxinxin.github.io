import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  figma,
  docker,
  RGA,
  DCCA,
  AWS
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
    title: "Backend Developer",
    icon: backend,
  }
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
    name: "Express JS",
    icon: nodejs,
  },
  {
    name: "DynamoDb",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Data Computer Corporation of America",
    icon: DCCA,
    iconBg: "#383E56",
    date: "Jan 2019 - July 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Use CMS Design System (design.cms.gov) to incorporate components.",
      "Make sure all components are 508 Compliant and accessible through screen-readers.",
      "Use Kendo React UI components for components not available through CMS Design System.",
      "Use axios for handling API calls.",
      "Use 3rd party utility libraries like Lodash and moment to make life simple.",
      "Use React.js with Redux to create the application. "
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Reinsurance Group Of America",
    icon: RGA,
    iconBg: "#E6DEDD",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developed SPA(single page application) project using React and Typescript for frontend, Express JS and Postgres and DynamoDB for backend",
      "Worked on Lambda functions and configuration in AWS.",
      "Used Jest framework to write Unit test cases for the API. Also, used different developer tools respective to the browser to debug the code",
      "Expert in performance monitoring tools like AWS Cloud Watch and X-Ray.",
      "Strong troubleshooting skills in the API Management and Gateway space (API Gateway)",
      "Experienced in Cloud automation using AWS Cloud Formation, Terraform templates.",
      "Worked with Agile software lifecycle methodology and involve in daily SCRUM meetings for report, plan and expect purpose.",
      "Use aws amplify to signIn and signOut with Amazon Cognito user pool."
    ],
  },
];

const projects = [
  {
    name: "AWS Certified Developer - Associate",
    description:
      "AWS Certified Developer - Associate showcases knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS. Preparing for and attaining this certification gives certified individuals more confidence and credibility. Organizations with AWS Certified developers have the assurance of having the right talent to give them a competitive advantage and ensure stakeholder and customer satisfaction.",
    image: AWS,
    source_code_link: "https://www.credly.com/badges/a44a2892-957a-4b47-a8a7-ecba98bd5625",
  },
];

export { services, technologies, experiences, projects };
