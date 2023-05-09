const ProjectItem = ({
    title,
    shortDescription,
    technologies,
    demo,
    background,
}) => {
    return (
        <article className="project_item flex flex-col w-full items-center md:w-[30%] bg-[#0a6d1f] text-white py-6 rounded-lg">
            <div className="flex mb-2">
                {technologies.map((tech) => (
                    <img
                        key={"Title " + tech}
                        src={tech}
                        width={32}
                        className="saturate-0 mr-2"
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
