import About from "../components/About";

const HomePage = () => {
    return (
        <main>
            <section id="about">
                <div className="xl:container mx-auto">
                    <About></About>
                </div>
            </section>
            <section id="portfolio" className="bg-gray">
                <div className="xl:container mx-auto">
                    <div className="mx-5 my-6">
                        Portfolio
                    </div>
                </div>
            </section>
            <section id="skills">
                <div className="xl:container mx-auto">
                    <div className="mx-5 my-6">
                        Skills
                    </div>
                </div>
            </section>
            <section id="services" className="bg-gray">
                <div className="xl:container mx-auto">
                    <div className="mx-5 my-6">
                        Services
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="xl:container mx-auto">
                    <div className="mx-5 my-6">
                        Contact
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;