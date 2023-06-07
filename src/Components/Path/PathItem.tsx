export interface Props {
    title: string,
    icon: any,
    description: string,
    technologies: string[],
    devTools: any[]
}


const PathItem = (props:Props): JSX.Element => {
    return (
        <article className="flex flex-col items-center text-center md:w-2/6 h-fit">
            {props.icon}
            <h1 className=" font-bold mt-2 text-[#0a0a0a] text-xl">{props.title}</h1>
            <p className="mt-6 md:min-h-[80px]">{props.description}</p>
            <h2 className="mt-8 text-[#3e3e3e] font-semibold text-lg">
                Technologies I use:
            </h2>
            <p>{props.technologies.join(", ")} </p>
            <h2 className="mt-8 text-[#3e3e3e] font-semibold text-lg">
                Dev tools:
            </h2>
            <ul>
                {props.devTools.map((tool) => (
                    <li key={tool}>{tool}</li>
                ))}
                <li className="mt-4">and more..</li>
            </ul>
        </article>
    );
};

export default PathItem;
