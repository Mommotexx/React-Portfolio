import PathItem from "./PathItem";
import { DiReact, DiJava } from "react-icons/di";

const Paths = () => {
    return (
        <section className="flex flex-col lg:w-8/12 m-auto bg-white -mt-28 rounded-xl drop-shadow">
            <div className="flex flex-col justify-evenly md:flex-row pt-6">
                <PathItem
                    title={"Frontend Developer"}
                    icon={<DiReact size={64} />}
                />
                <div className="border-[0.1px] border-[#E6ECF8] my-6 md:my-0" />
                <PathItem
                    title={"Backend Developer"}
                    icon={<DiJava size={64} />}
                />
            </div>
        </section>
    );
};

export default Paths;
