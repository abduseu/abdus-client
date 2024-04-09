import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";

const HomePage = () => {
    return (
        <main className="space-y-8 md:space-y-16">
            <section id="about">
                <div className="xl:container mx-auto">
                    <About></About>
                </div>
            </section>
            <section id="skills" className="bg-gray">
                <div className="xl:container mx-auto">
                    <Skills></Skills>
                </div>
            </section>
            <section id="portfolio" className="bg-gray">
                <div className="xl:container mx-auto">
                    <Portfolio></Portfolio>
                </div>
            </section>
        </main>
    );
};

export default HomePage;