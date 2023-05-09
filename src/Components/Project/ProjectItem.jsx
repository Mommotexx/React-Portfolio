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
            className="project_item flex flex-col w-full items-center md:w-[30%] min-h-[200px] bg-[#0c6b03] text-white py-6 rounded-lg"
            style={
                showBg
                    ? {
                          backgroundImage: `url(${background})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                      }
                    : null
            }
            onFocus={() => setShowBg(false)}
            onMouseEnter={() => setShowBg(false)}
            onMouseLeave={() => setShowBg(true)}
        >
            {showBg && (
                <h2 className="bg-dark rounded px-2 bg-opacity-50">{title}</h2>
            )}
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
