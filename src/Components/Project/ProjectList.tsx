import { projectitem } from "../../Constants/projectitem";
import ProjectItem from "./ProjectItem";
import { projectItemProps } from "./interface/projectItemProps";

const ProjectList = () => {
    const items = projectitem();
    return (
        <>
            {items.map((project: projectItemProps) => (
                <ProjectItem
                    key={"project: " + project.title}
                    title={project.title}
                    shortDescription={project.shortDescription}
                    technologies={project.technologies}
                    demo={project.demo}
                    background={project.background}
                />
            ))}
        </>
    );
};

export default ProjectList;
