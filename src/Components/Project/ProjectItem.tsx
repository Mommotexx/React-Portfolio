import { FaReact, FaJava, FaHtml5, FaGithub } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiMysql, SiSpring } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

import { projectItemProps } from "./interface/projectItemProps";

const iconStyling = "fill-white mr-2 h-[32px] w-[32px]";

const techIcons = {
  react: <FaReact className={iconStyling} />,
  css: <IoLogoCss3 className={iconStyling} />,
  javascript: <IoLogoJavascript className={iconStyling} />,
  tailwind: <SiTailwindcss className={iconStyling} />,
  java: <FaJava className={iconStyling} />,
  mysql: <SiMysql className={iconStyling} />,
  postgres: <DiPostgresql className={iconStyling} />,
  html: <FaHtml5 className={iconStyling} />,
  git: <FaGithub className={iconStyling} />,
  github: <FaGithub className={iconStyling} />,
  spring: <SiSpring className={iconStyling} />,
};

const ProjectItem = (props: projectItemProps) => {
  return (
    <article className="project_item flex flex-col w-full items-center text-white py-6 rounded-lg bg-center bg-no-repeat bg-cover relative">
      <img src={props.background} alt={props.title} />
      <h2 className="bg-dark rounded px-2 bg-opacity-50">{props.title}</h2>
      <div className="hover:opacity-100 bg-dark absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 transition-all ease-in-out duration-300">
        <div className="flex mb-2">

          {props.technologies.map((tech) => {
            // Extract the technology name from the image path
            const techName = tech.split("/").pop().split(".")[0];
            return (
              <span
                key={"Title " + techName}
                className="saturate-0 mr-2"
                style={{ color: "white", width: "32px", height: "32px" }}
              >
                {techIcons[techName]}
              </span>
            );
          })}
        </div>
        <h1 className="font-opensans">{props.title}</h1>
        <p className="font-opensans mb-2">{props.shortDescription}</p>
        <a
          href={props.demo}
          target="_blank"
          className="border-green border-[1.5px] p-2 rounded-2xl hover:bg-green hover:text-dark mt-4 transition-all ease-in-out duration-300"
        >
          Visit Website
        </a>
      </div>
    </article>
  );
};

export default ProjectItem;
