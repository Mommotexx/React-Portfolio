import PathItem from "./PathItem";
import { DiReact, DiJava } from "react-icons/di";
import { devitem } from "../../Constants/devitem";

const Paths = () => {
    return (
        <section className="flex flex-col lg:w-8/12 bg-white -mt-20 md:-mt-28 rounded-xl drop-shadow p-6 m-6 md:p-0 md:m-auto">
            <div className="flex flex-col justify-evenly md:flex-row py-6">
                <PathItem
                    title={devitem[0].title}
                    description={devitem[0].description}
                    technologies={devitem[0].technologies}
                    devTools={devitem[0].devTools}
                    icon={<DiReact size={64} />}
                />
                <div className="border-[0.1px] border-[#E6ECF8] my-6 md:-my-6" />
                <PathItem
                    title={devitem[1].title}
                    description={devitem[1].description}
                    technologies={devitem[1].technologies}
                    devTools={devitem[1].devTools}
                    icon={<DiJava size={64} />}
                />
            </div>
        </section>
    );
};

export default Paths;
