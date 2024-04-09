const Skills = () => {
    return (
        <div className="mx-5 my-6">
            <div className="mx-auto py-8 md:py-16 space-y-6 md:space-y-12">
                {/* <h4 className="md:text-xl font-medium">My Skills</h4> */}
                <h1 className="text-2xl md:text-4xl font-semibold text-center">
                    My Skills
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-10">
                        <span className="text-xl font-semibold">Front-End:</span>
                        <ul className="list-inside list-[circle]">
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>JavasScript(ES6)</li>
                            <li>Vanilla CSS3</li>
                            <li>Figma to HTML</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                    <div className="bg-white p-10">
                        <span className="text-xl font-semibold">Back-End:</span>
                        <ul className="list-inside list-[circle]">
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>RestAPI</li>
                            <li>Authentication</li>
                            <li>Authorization</li>
                            <li>CRUD Operations</li>
                        </ul>
                    </div>
                    <div className="bg-white p-10">
                        <span className="text-xl font-semibold">Technologies:</span>
                        <ul className="list-inside list-[circle]">
                            <li>Git & GitHub</li>
                            <li>Firebase</li>
                            <li>Vercel</li>
                            <li>JWT</li>
                            <li>VSCODE</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;