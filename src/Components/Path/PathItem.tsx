export interface Props {
    title: string,
    icon: any,
    description: string,
    technologies: string[],
    devTools: any[]
}


const PathItem = (props:Props): JSX.Element => {
    return (
        <article className="flex flex-col text-left md:w-2/6 h-fit">
            {props.icon}
            <h1 className=" font-bold mt-2 text-[#0a0a0a] text-xl">{props.title}</h1>
            <p className="mt-4 md:min-h-[60px]">{props.description}</p>
            <h2 className="mt-4 text-[#3e3e3e] font-semibold text-lg">
                Technologies I use:
            </h2>
            <p>{props.technologies.join(", ")} </p>
            <h2 className="mt-6 text-[#3e3e3e] font-semibold text-lg">
                Dev tools:
            </h2>
            <div>
            <p>{props.devTools.join(", ")} </p>
            </div>
           
        </article>
    );
};

export default PathItem;
