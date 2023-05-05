import React from "react";

const PathItem = ({ title, icon, description, technologies, devTools }) => {
    return (
        <article className="flex flex-col items-center text-center md:w-2/6 h-fit">
            {icon}
            <h1 className="font-opensans font-bold mt-2">{title}</h1>
            <p className="mt-6 md:min-h-[80px]">{description}</p>
            <p className="mt-8 text-green font-semibold">Technologies I use:</p>
            <p>HTML, CSS, JavaScript, React, Tailwind CSS, Git</p>
            <p className="mt-8 text-green font-semibold">Dev tools:</p>
            <ul>
                {devTools.map((tool) => (
                    <li key={tool}>{tool}</li>
                ))}
                <li className="mt-4">and more..</li>
            </ul>
        </article>
    );
};

export default PathItem;
