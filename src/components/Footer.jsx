import { Link } from "react-router-dom";
import { SiArtixlinux } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto xl:container p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between items-center">
                    <div>
                        <Link to={'/'}>
                            <span className="self-center text-2xl flex items-center gap-2 whitespace-nowrap">
                                <SiArtixlinux /> Abdus Salam
                            </span>
                            <h3>Software Developer</h3>
                        </Link>
                    </div>
                    <div className="md:flex mt-8 gap-12">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                                Follow Me
                            </h2>
                            <ul>
                                <li className="mb-4">
                                    <a href="https://github.com/abduseu" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.linkedin.com/in/abduseu/" target="_blank" rel="noopener noreferrer">
                                        Linkedin
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                                Download
                            </h2>
                            <ul>
                                <li className="mb-4">CV</li>
                                <li className="mb-4">Resume</li>
                            </ul>
                        </div> */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                                Services
                            </h2>
                            <ul>
                                <li className="mb-4">Web Development</li>
                                <li className="mb-4">Software Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        ©{currentYear}{" "}
                        <a href="https://abdus.com/" className="hover:underline">
                            Abdus Salam
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex items-center gap-2">
                        <a href="https://github.com/abduseu" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/abduseu/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;