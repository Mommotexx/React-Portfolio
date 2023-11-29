import React from "react";

import { FaReact, FaJava, FaHtml5, FaGithub } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiMysql, SiSpring } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

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

interface IconProps {
  name: keyof typeof techIcons;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  return techIcons[name] || null;
};

export default Icon;
