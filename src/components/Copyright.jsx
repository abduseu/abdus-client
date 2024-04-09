import { FaGithub, FaLinkedin } from "react-icons/fa";

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="xl:container mx-auto text-center font-light flex justify-between items-center text-gray-400">
            <div>&copy; {currentYear} Abdus Salam. All rights reserved.</div>
            <div className="flex items-center gap-2">
                <a href="https://github.com/abduseu" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/abduseu/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
};

export default Copyright;