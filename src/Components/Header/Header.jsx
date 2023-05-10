import { FaLinkedinIn } from "react-icons/fa";
const Header = () => {
    return (
        <header className="flex justify-start items-center lg:w-8/12 m-auto">
            <img
                src="/images/logo.svg"
                alt="logo Marcus"
                className="ml-6 w-40 md:w-80 xl:w-3/12 hover:cursor-pointer"
            />
            <div className="flex gap-6 items-center justify-end flex-1 mr-10">
                <FaLinkedinIn className="hover:text-green hover:cursor-pointer text-lg" />
                <a
                    type="button"
                    className="text-dark border-2 border-green rounded-3xl px-6 py-2 hover:cursor-pointer hover:bg-green hover:text-white ease-in transition-all text-lg"
                    href="#contact"
                >
                    Contact
                </a>
            </div>
        </header>
    );
};

export default Header;
