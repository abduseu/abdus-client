import { Button } from "@material-tailwind/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
    //reverse a string
    const reverseString = (str) => {
        return str.split('').reverse().join('');
    };

    return (
        <div className="mx-5 my-6">
            <div className="mx-auto md:mt-16">
                <div className="md:flex flex-wrap justify-between items-center gap-12">
                    <div>
                        <img src="https://i.ibb.co/s913LHG/about-compressed.jpg" />
                    </div>
                    <div className="max-w-3xl space-y-6">
                        <div className="space-y-3 md:space-y-6">
                            <h4 className="md:text-xl font-medium">About Me</h4>
                            <h1 className="text-2xl md:text-4xl font-semibold">
                                Software Developer
                            </h1>
                            <p className="text-xl">
                                As a Full-stack Software Developer with a focus on Frontend Development. I thrive on creating interactive, visually stunning, and user-friendly websites. With a proactive approach to staying updated on new technologies, I am committed to continuously improving user experiences through responsive and accessible designs. Let's collaborate to shape the future of the web together!
                            </p>
                        </div>
                        <hr />
                        <div className="md:flex text-xl gap-40">
                            <div className="space-y-4 my-4">
                                <p><span className="font-semibold">Name:</span> Abdus Salam</p>
                                <p><span className="font-semibold">Location:</span> Sylhet, BD</p>
                            </div>
                            <div className="space-y-4 my-4">
                                <p><span className="font-semibold">Education:</span> Graduate</p>
                                <p><span className="font-semibold">Email:</span> <h3 className="text-reverse inline select-none">{reverseString("abduseu@gmail.com")}</h3></p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-medium">
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
                        <div>
                            <a href={'#contact'}>
                                <Button variant="filled" color="black" className="rounded-full">
                                    Contact me
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;