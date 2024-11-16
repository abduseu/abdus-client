import { SiMeta, SiJavascript, SiPython, SiIbm, SiGoogle } from "react-icons/si";

const Certifications = () => {
    return (
        <div className="mx-5 my-6">
            <div className="mx-auto py-8 space-y-6 md:space-y-12">
                <h1 className="text-2xl md:text-4xl font-semibold text-center">
                    My Certifications
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
                    <a 
                        href="https://www.credly.com/badges/4bdcf887-175d-405a-992a-8eec62a4ced9" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Meta Full-Stack Engineer Certificate"
                    >
                        <div className="p-8 rounded-lg">
                            <div className="flex justify-center text-7xl mb-4" aria-hidden="true">
                                <SiMeta />
                            </div>
                            <h3>Meta Full-Stack Engineer Certificate</h3>
                        </div>
                    </a>
                    <a 
                        href="https://www.coursera.org/account/accomplishments/verify/S4ZZS239B2PR" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Programming with Javascript Certificate"
                    >
                        <div className="p-8 rounded-lg">
                            <div className="flex justify-center text-7xl mb-4" aria-hidden="true">
                                <SiJavascript />
                            </div>
                            <h3>Programming with Javascript</h3>
                        </div>
                    </a>
                    <a 
                        href="https://www.coursera.org/account/accomplishments/verify/MJ88J5Z9HP6T" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Programming with Python Certificate"
                    >
                        <div className="p-8 rounded-lg">
                            <div className="flex justify-center text-7xl mb-4" aria-hidden="true">
                                <SiPython />
                            </div>
                            <h3>Programming with Python</h3>
                        </div>
                    </a>
                    <a 
                        href="https://www.credly.com/badges/97a558a8-0177-4077-90cc-9ee3b22eeccb" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Cybersecurity IT Fundamentals Certificate"
                    >
                        <div className="p-8 rounded-lg">
                            <div className="flex justify-center text-7xl mb-4" aria-hidden="true">
                                <SiIbm />
                            </div>
                            <h3>Cybersecurity IT Fundamentals</h3>
                        </div>
                    </a>
                    <a 
                        href="https://www.credly.com/badges/9e94dd64-2b7c-4df6-84fc-bb457a362bda" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Google IT Support Certificate"
                    >
                        <div className="p-8 rounded-lg">
                            <div className="flex justify-center text-7xl mb-4" aria-hidden="true">
                                <SiGoogle />
                            </div>
                            <h3>Google IT Support Certificate</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Certifications;