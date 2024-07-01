import { SiMeta, SiJavascript, SiPython, SiIbm } from "react-icons/si";

const Certifications = () => {
    return (
        <div className="mx-5 my-6">
            <div className="mx-auto py-8 space-y-6 md:space-y-12">
                {/* <h1 className="text-2xl md:text-4xl font-semibold text-center">
                    My Certifications
                </h1> */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <a href="https://www.credly.com/badges/6a205574-dcde-433e-ad1a-f522de1cbbc4" target="_blank" rel="noopener noreferrer">
                        <div className="p-8 rounded-lg">
                            <div className="flex justify-center text-7xl mb-4">
                                <SiMeta />
                            </div>
                            <h3>Meta Frontend Develoepr Professional Certificate</h3>
                        </div>
                    </a>
                    <a href="https://www.coursera.org/account/accomplishments/verify/S4ZZS239B2PR" target="_blank" rel="noopener noreferrer">
                        <div className="p-8 rounded-lg">
                            <div className="flex justify-center text-7xl mb-4">
                                <SiJavascript />
                            </div>
                            <h3>Programming with Javascript</h3>
                        </div>
                    </a>
                    <a href="https://www.coursera.org/account/accomplishments/verify/MJ88J5Z9HP6T" target="_blank" rel="noopener noreferrer">
                        <div className="p-8 rounded-lg">
                            <div className="flex justify-center text-7xl mb-4">
                                <SiPython />
                            </div>
                            <h3>Programming with Python</h3>
                        </div>
                    </a>
                    <a href="https://www.credly.com/badges/97a558a8-0177-4077-90cc-9ee3b22eeccb" target="_blank" rel="noopener noreferrer">
                        <div className="p-8 rounded-lg">
                            <div className="flex justify-center text-7xl mb-4">
                                <SiIbm />
                            </div>
                            <h3>Cybersecurity IT Fundamentals Specialization</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Certifications;