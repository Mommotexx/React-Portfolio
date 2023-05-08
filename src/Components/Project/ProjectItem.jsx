import React from "react";

const ProjectItem = ({ title, shortDescription, technologies, demo }) => {
    return (
        <article className="flex flex-col w-full items-center md:w-4/12">
            <div className="flex">
                {technologies.map((tech) => (
                    <img
                        key={tech}
                        src={tech}
                        width={24}
                        className="saturate-0"
                    />
                ))}
            </div>
            <h1 className="font-opensans">{title}</h1>
            <p className="font-opensans mb-2">{shortDescription}</p>
            <a
                href={demo}
                className=" border-green border-[1.5px] p-2 rounded-2xl"
            >
                Visit Website
            </a>
        </article>
    );
};

export default ProjectItem;
