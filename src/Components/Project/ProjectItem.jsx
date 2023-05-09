import { useState } from "react";

const ProjectItem = ({
    title,
    shortDescription,
    technologies,
    demo,
    background,
}) => {
    const [showBg, setShowBg] = useState(true);
    return (
        <article
            className={`project_item flex flex-col w-full items-center md:w-[30%] min-h-[200px] text-white bg-[#0c6b03]  py-6 rounded-lg ${
                showBg &&
                `bg-[url('${background}')] bg-cover bg-no-repeat bg-left bg-center`
            } `}
            onFocus={() => setShowBg(false)}
            onMouseEnter={() => setShowBg(false)}
            onMouseLeave={() => setShowBg(true)}
        >
            {showBg && <h2>{title}</h2>}
            <div
                className={`flex flex-col w-full items-center -z-20 ${
                    !showBg && `z-30`
                }`}
            >
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
            </div>
        </article>
    );
};

export default ProjectItem;
