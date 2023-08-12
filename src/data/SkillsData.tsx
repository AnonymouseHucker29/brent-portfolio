import ISkills from "@/interfaces/ISkills";
import { Icons } from "@/components/misc/icons";
import { BsGithub } from "react-icons/bs";

const SkillsData: ISkills[] = [
  {
    id: 1,
    title: "Web Technologies",
    icons: [
      {
        name: "HTML5",
        logo: <Icons icons="HTML5" />,
        description:
          "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
      },
      {
        name: "CSS3",
        logo: <Icons icons="CSS3" />,
        description:
          "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
      },
      {
        name: "JavaScript",
        logo: <Icons icons="Javascript" />,
        description:
          "JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.",
      },
      {
        name: "TypeScript",
        logo: <Icons icons="Typescript" />,
        description:
          "TypeScript is an open-source language which builds on JavaScript, one of the world's most used tools, by adding static type definitions.",
      },
    ],
  },
  {
    id: 2,
    title: "CSS Frameworks",
    icons: [
      {
        name: "Bootstrap",
        logo: <Icons icons="Bootstrap" />,
        description:
          "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
      },
      {
        name: "Tailwind CSS",
        logo: <Icons icons="TailwindCSS" />,
        description:
          "Tailwind CSS is a utility-first and highly customizable CSS framework for rapidly building custom user interfaces.",
      },
    ],
  },
  {
    id: 3,
    title: "JavaScript Frameworks",
    icons: [
      {
        name: "Next.js",
        logo: <Icons icons="NextJS" />,
        description:
          "Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.",
      },
      {
        name: "Angular",
        logo: <Icons icons="Angular" />,
        description:
          "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
      },
    ],
  },
  {
    id: 4,
    title: "JavaScript Library",
    icons: [
      {
        name: "React",
        logo: <Icons icons="React" />,
        description:
          "React is an open-source front-end JavaScript library for building user interfaces or UI components.",
      },
    ],
  },
  {
    id: 5,
    title: "Version Control",
    icons: [
      {
        name: "Git",
        logo: <Icons icons="Git" />,
        description:
          "Git is a software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
      },
      {
        name: "GitHub",
        logo: <BsGithub size={40} />,
        description:
          "GitHub is a provider of Internet hosting for software development and version control using Git.",
      },
    ],
  },
  {
    id: 6,
    title: "Database",
    icons: [
      {
        name: "MySQL",
        logo: <Icons icons="MySQL" />,
        description:
          "MySQL is an open-source relational database management system.",
      },
      {
        name: "MariaDB",
        logo: <Icons icons="MariaDB" />,
        description:
          "MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system.",
      },
      {
        name: "PostgreSQL",
        logo: <Icons icons="PostgreSQL" />,
        description:
          "PostgreSQL is a free and open-source relational database management system emphasizing extensibility and SQL compliance.",
      },
    ],
  },
  {
    id: 7,
    title: "Other Languages",
    icons: [
      {
        name: "C++",
        logo: <Icons icons="C++" />,
        description:
          "C++ is a general-purpose programming language as an extension of the C programming language, or 'C with Classes'.",
      },
      {
        name: "Kotlin",
        logo: <Icons icons="Kotlin" />,
        description:
          "Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference.",
      },
      {
        name: "Python",
        logo: <Icons icons="Python" />,
        description:
          "Python is an interpreted, high-level and general-purpose programming language.",
      },
      {
        name: "PHP",
        logo: <Icons icons="PHP" />,
        description:
          "PHP is a general-purpose scripting language especially suited to web development.",
      },
    ],
  },
  {
    id: 8,
    title: "Other Tools",
    icons: [
      {
        name: "Visual Studio Code",
        logo: <Icons icons="VSCode" />,
        description:
          "Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS.",
      },
      {
        name: "Jupyter Notebook",
        logo: <Icons icons="JupyterNotebook" />,
        description:
          "Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text.",
      },
      {
        name: "Android Studio",
        logo: <Icons icons="AndroidStudio" />,
        description:
          "Android Studio is the official integrated development environment for Google's Android operating system, built on JetBrains' IntelliJ IDEA software and designed specifically for Android development.",
      },
      {
        name: "Node.js",
        logo: <Icons icons="NodeJS" />,
        description:
          "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
      },
    ],
  },
];

export default SkillsData;
