// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import firebaseLogo from './assets/tech_logo/firebase.png';


// Experience Section Logo's
import Thomas_cook_logo from './assets/company_logo/Thomas_cook_logo.webp';

// Education Section Logo's
import college_logo from './assets/education_logo/college_logo.webp';
import school_logo from './assets/education_logo/school_logo.webp';

// Project Section Logo's
import aiBg from './assets/work_logo/aiBg.png';
import Aiimggen from './assets/work_logo/Ai SaaS.png';
import authLogo from './assets/work_logo/authLogo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: Thomas_cook_logo,
    role: "Freelancer Tour Manager",
    company: "Thomas Cook India ltd",
    date: "Jan 2025 – Feb 2025",
    desc: " National Games Event – Uttarakhand : Coordinated logistics and managed operations for large-scale national sporting events. Collaborated with teams to ensure smooth travel, accommodation, and event execution. Handled client interactions and problem resolution, enhancing customer satisfaction. Demonstrated leadership, organizational, and communication skills in high- pressure environments.",
      skills: [
    "Communication", "Leadership", "Problem-Solving", "Teamwork", "Adaptability"
  ],
    },
{
  id: 1,
    img: Thomas_cook_logo,
      role: "Freelancer Tour Manager",
        company: "Thomas Cook India ltd",
          date: "Oct 2023 – Nov 2023",
            desc: "National Games Event – Goa : Coordinated logistics and managed operations for large-scale national sporting events. Collaborated with teams to ensure smooth travel, accommodation, and event execution. Handled client interactions and problem resolution, enhancing customer satisfaction. Demonstrated leadership, organizational, and communication skills in high- pressure environments.",
              skills: [
                "Communication", "Leadership", "Problem-Solving", "Teamwork", "Adaptability"
              ],
    },
  ];

export const education = [
  {
    id: 0,
    img: college_logo,
    school: "School of Information Technology, Bhopal, Madhya Pradesh",
    date: "Sept 2022 - May 2026",
    grade: "7.81 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachlor of Technology - BTech (CSE-AIML)",
  },
  {
    id: 2,
    img: school_logo,
    school: "DAV Public School, Kymore, Madhya Pradesh",
    date: "Apr 2021 - March 2022",
    grade: "75%",
    desc: "I completed my class 12 education from DAV Public School, kymore, under CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: school_logo,
    school: "DAV Public School, Kymore, Madhya Pradesh",
    date: "Apr 2019 - March 2020",
    grade: "87.4%",
    desc: "I completed my class 10 education from DAV Public School, Kymore under CBSE board, where I studied Science with Computer Application.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI Virtual Assistant",
    description:
    "Developed a customizable AI Virtual Assistant with personalized avatars, voice commands (Web Speech API), and Gemini API for accurate NLP-driven responses, achieving 30% faster navigation with React Router DOM. Secured with JWT + bcrypt.js, automated emails via Nodemailer, and optimized image handling using Cloudinary + Multer, supporting 100+ uploads with 25% faster load times.",
    image: aiBg,
    tags: ["React JS", "Node.js", "MongoDB", "Express","Gemini API","Web Speech API","Authentication","REST API"],
    github: "https://github.com/satyamcode-ai/AI-virtual-Assistant",
    webapp: "https://ai-virtual-assistant-ebon.vercel.app/",
  },
  {
    id: 1,
    title: "SaaS AI Image Generator",
    description:
      "Built an AI-powered chatbot SaaS with image generation (100+ prompts) using MERN, integrating Gemini API + ImageKit for creative responses. Implemented a Stripe-based credit model (3 plans, 100–1000 credits), secured with JWT, automated onboarding via Nodemailer, and delivered a responsive React + Tailwind UI with light/dark themes.",
    image: Aiimggen,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "ImageKit", "Open AI", "Gemini API","Stripe","Authentication","Nodemailer",],
    github: "https://github.com/satyamcode-ai/AI-Img-Generator",
    webapp: "https://ai-img-generator-client.vercel.app/",
  },
  {
    id: 2,
    title: "Complete Authentication System",
    description:"A complete MERN-based authentication and authorization system featuring secure user registration, login, JWT-based authentication, Authorization, Email templates for receiving verification and password reset email, and secure user session management.",
    image: authLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "JWT", "Bcrypt", "NodeMailer","REST API","Email Templates"],
    github: "https://github.com/satyamcode-ai/Complete-Authentication-and-Authorization",
    webapp: "https://complete-authentication-and-authori.vercel.app/",
  },
];  