import React from "react";
import { projectitem } from "../../Constants/projectitem";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
    const items = projectitem();
    console.log(items);
    return items.map((project) => (
        <ProjectItem
            key={"project: " + project.title}
            title={project.title}
            shortDescription={project.shortDescription}
            technologies={project.technologies}
            demo={project.demo}
            background={project.background}
        />
    ));
};

export default ProjectList;
