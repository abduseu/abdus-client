import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Skills from "../components/Skills";

const HomePage = () => {
    return (
        <main className="space-y-8 md:space-y-16">
            <section id="about">
                <div className="xl:container mx-auto">
                    <About></About>
                </div>
            </section>
            <section id="skills">
                <div className="xl:container mx-auto">
                    <Skills></Skills>
                </div>
            </section>
            <section id="portfolio" className="bg-gray">
                <div className="xl:container mx-auto">
                    <Portfolio></Portfolio>
                </div>
            </section>
            <section id="education">
                <div className="xl:container mx-auto">
                    <Education></Education>
                </div>
            </section>
            <section id="services" className="bg-gray">
                <div className="xl:container mx-auto">
                    <Services></Services>
                </div>
            </section>
            <section id="contact">
                <div className="xl:container mx-auto">
                    <Contact></Contact>
                </div>
            </section>
        </main>
    );
};

export default HomePage;