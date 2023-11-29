
import { projectItemProps } from "./interface/projectItemProps";

const ProjectItem = (props: projectItemProps) => {
  return (
    <article className="project_item flex flex-col w-full items-center  text-white py-6 rounded-lg bg-center bg-no-repeat bg-cover">
      <img src={props.background} alt={props.title} />     
      <h2 className=" rounded px-2 bg-opacity-50">{props.title}</h2>
      <div className="flex flex-col w-full items-center transition-all ease-in-out transition-duration-300">
        <div className="flex mb-2">
          {props.technologies.map((tech) => (
            <img
              key={"Title " + tech}
              src={tech}
              width={32}
              className="saturate-0 mr-2"
            />
          ))}
        </div>
        <h1 className="font-opensans">{props.title}</h1>
        <p className="font-opensans mb-2">{props.shortDescription}</p>
        <a
          href={props.demo}
          target="_blank"
          className=" border-green border-[1.5px] p-2 rounded-2xl hover:bg-green hover:text-dark"
        >
          Visit Website
        </a>
      </div>
    </article>
  );
};

export default ProjectItem;
