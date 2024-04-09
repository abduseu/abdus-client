const SkillLists = () => {
    return (
        <div className="mx-5 my-6">
            <div className="mx-auto md:py-16 space-y-4">
                {/* <h4 className="md:text-xl font-medium">My Skills</h4> */}
                <h1 className="text-2xl md:text-4xl font-semibold text-center">
                    My Skills
                </h1>
                <div className="md:flex flex-wrap gap-4 text-2xl font-semibold">
                    <span>Front-End:</span>
                    <ul className="md:flex flex-wrap gap-6 list-inside list-[circle] lg:list-none">
                        <li>React</li>
                        <li>Tailwind</li>
                        <li>JavasScript(ES6)</li>
                        <li>Vanilla CSS3</li>
                        <li>Figma to HTML</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
                <div className="md:flex flex-wrap gap-4 text-2xl font-semibold">
                    <span>Back-End:</span>
                    <ul className="md:flex flex-wrap gap-6 list-inside list-[circle] lg:list-none">
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>RestAPI</li>
                        <li>JWT</li>
                        <li>Authentication</li>
                        <li>Authorization</li>
                        <li>CRUD Operations</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default SkillLists;