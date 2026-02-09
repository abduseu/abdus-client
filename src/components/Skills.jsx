const Skills = () => {
    return (
        <div className="mx-5 my-6">
            <div className="mx-auto py-8 md:py-20 space-y-6 md:space-y-12">
                {/* <h4 className="md:text-xl font-medium">My Skills</h4> */}
                <h1 className="text-2xl md:text-4xl font-semibold text-center">
                    My Skills
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-10">
                        <span className="text-xl font-semibold">Front-End:</span>
                        <ul className="list-inside list-[circle]">
                            <li>React.js</li>
                            {/* <li>Redux</li>
                            <li>Next.js</li> */}
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>Vanilla CSS3</li>
                            <li>JavaScript(ES6)</li>
                            <li>Figma to HTML</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                    <div className="bg-white p-10">
                        <span className="text-xl font-semibold">Back-End:</span>
                        <ul className="list-inside list-[circle]">
                            {/* <li>Typescript</li> */}
                            {/* <li>RDBMS, Prisma ORM</li> */}
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>MongoDB</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>RestAPI</li>
                            <li>CRUD Operations</li>
                            {/* <li>Aggregation Framework</li> */}
                        </ul>
                    </div>
                    <div className="bg-white p-10">
                        <span className="text-xl font-semibold">Other Skills:</span>
                        <ul className="list-inside list-[circle]">
                            <li>Git & GitHub</li>
                            {/* <li>AWS, Docker, CI/CD</li> */}
                            <li>Firebase, Vercel</li>
                            <li>Deployment</li>
                            <li>DNS Management</li>
                            {/* <li>Reverse Proxy</li> */}
                            {/* <li>Load Balancing</li> */}
                            <li>Unit Testing</li>
                            <li>Cybersecurity</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;