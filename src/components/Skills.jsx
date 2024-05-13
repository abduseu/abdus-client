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
                            <li>Redux</li>
                            <li>Typescript</li>
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
                            <li>Next.js</li>
                            <li>Express.js</li>
                            <li>RDBMS, Prisma ORM</li>
                            <li>MySQL, PostgreSQL</li>
                            <li>MongoDB, Mongoose</li>
                            <li>RestAPI, GraphQL</li>
                            <li>Node, PHP, Python</li>
                            <li>CRUD Operations</li>
                            <li>Aggregation pipelines</li>
                        </ul>
                    </div>
                    <div className="bg-white p-10">
                        <span className="text-xl font-semibold">Other Skills:</span>
                        <ul className="list-inside list-[circle]">
                            <li>Git & GitHub</li>
                            <li>Docker, CI/CD</li>
                            <li>AWS, Firebase, Vercel</li>
                            <li>Server Setup, Deployment</li>
                            <li>DNS Management</li>
                            <li>Reverse Proxy</li>
                            <li>Load Balancing</li>
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