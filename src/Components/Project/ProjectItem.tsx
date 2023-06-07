import { useState } from "react";
import { projectItemProps } from "./interface/projectItemProps";

const ProjectItem = (props:projectItemProps) => {
    const [showBg, setShowBg] = useState(true);

    return (
        <article
            className="project_item flex flex-col w-full items-center md:w-[30%] min-h-[200px] bg-[#0c6b03] text-white py-6 rounded-lg"
            style={
                showBg
                    ? {
                          backgroundImage: `url(${props.background})`,
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
                <h2 className="bg-dark rounded px-2 bg-opacity-50">{props.title}</h2>
            )}
            <div
                className={`flex flex-col w-full items-center -z-20 ${
                    !showBg && `z-30`
                }`}
            >
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
