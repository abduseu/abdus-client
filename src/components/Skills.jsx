const Skills = () => {
    return (
        <div className="mx-5 my-6">
            <div className="mx-auto md:py-16 space-y-12">
                {/* <h4 className="md:text-xl font-medium">My Skills</h4> */}
                <h1 className="text-2xl md:text-4xl font-semibold text-center">
                    My Skills
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-10">
                        <span>Front-End:</span>
                    </div>
                    <div className="bg-white p-10">
                        <span>Back-End:</span>
                    </div>
                    <div className="bg-white p-10">
                        <span>Technologies:</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;