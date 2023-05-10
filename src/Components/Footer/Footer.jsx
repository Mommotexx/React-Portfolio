import { FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="flex flex-col lg:w-full m-auto items-center h-[30vh] bg-dark">
            <div className="flex items-center justify-center m-auto gap-5 flex-1">
                <a
                    href="https://www.linkedin.com/in/marcusvinje/"
                    target="_blank"
                    className="p-3 rounded-full bg-green hover:bg-dark hover:text-white hover:border-green hover:border"
                >
                    <FaLinkedinIn />
                </a>
                <a
                    href="https://github.com/Mommotexx"
                    target="_blank"
                    className="p-3 rounded-full bg-green hover:bg-dark hover:text-white hover:border-green hover:border"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://gitlab.com/mommotexx"
                    target="_blank"
                    className="p-3 rounded-full bg-green hover:bg-dark hover:text-white hover:border-green hover:border"
                >
                    <FaGitlab />
                </a>
                <a
                    href="mailto:tex@duck.com"
                    className="p-3 rounded-full bg-green hover:bg-dark hover:text-white hover:border-green hover:border"
                >
                    <MdOutlineEmail />
                </a>
            </div>
            <p className="text-white mb-8">&copy;2023 Marcus Johansen</p>
        </footer>
    );
};

export default Footer;
