import { SiArtixlinux } from "react-icons/si";
import { IoCall, IoMail, IoLocation } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer2 = () => {
    //reverse a string
    const reverseString = (str) => {
        return str.split('').reverse().join('');
    };

    return (
        <footer id="contact" className="bg-gray-900 text-white">
            <div className="flex justify-center text-center p-12">
                <div>
                    <span className="text-2xl font-medium flex justify-center items-center gap-2">
                        <SiArtixlinux /> Abdus Salam
                    </span>
                    <div className="md:flex gap-6 py-6 text-xl font-light">
                        <div className="flex items-center gap-2">
                            <IoCall />+880 1715 644442
                        </div>
                        <div className="flex items-center gap-2">
                            <IoMail /> <h3 className="text-reverse">{reverseString("abduseu@gmail.com")}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoLocation />Sylhet, BD.
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 font-light">
                        <h3>Follow me on: </h3>
                        <div className="flex gap-2">
                            <a href="https://github.com/abduseu" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/abduseu/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;