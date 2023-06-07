import ProjectList from "./ProjectList";

const Project = () => {
    return (
        <section className="mt-20 flex flex-col lg:w-8/12 m-auto items-center text-center">
            <h1 className="font-header font-bold text-2xl">
                My recent projects
            </h1>
            <p className="mt-4">
                Here are some of the latest projects I have worked on
            </p>

            <div className="mt-8 flex justify-between flex-wrap gap-y-11">
                <ProjectList />
            </div>
        </section>
    );
};

export default Project;
