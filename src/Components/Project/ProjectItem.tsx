
import { projectItemProps } from "./interface/projectItemProps";

const ProjectItem = (props: projectItemProps) => {
  return (
    <article className="project_item flex flex-col w-full items-center text-white py-6 rounded-lg bg-center bg-no-repeat bg-cover relative">
  <img src={props.background} alt={props.title} />
  <h2 className="bg-dark rounded px-2 bg-opacity-50">{props.title}</h2>
  <div className="hover:opacity-100 bg-dark absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 transition-all ease-in-out duration-300">
    <div className="flex mb-2">
      {props.technologies.map((tech) => (
        <img key={"Title " + tech} src={tech} width={32} className="saturate-0 mr-2" />
      ))}
    </div>
    <h1 className="font-opensans">{props.title}</h1>
    <p className="font-opensans mb-2">{props.shortDescription}</p>
    <a
      href={props.demo}
      target="_blank"
      className="border-green border-[1.5px] p-2 rounded-2xl hover:bg-green hover:text-dark"
    >
      Visit Website
    </a>
  </div>
</article>

  );
};

export default ProjectItem;
