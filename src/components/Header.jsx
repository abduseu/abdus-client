import React from "react";
import { Navbar, MobileNav, Typography, IconButton } from "@material-tailwind/react";
import { SiArtixlinux } from "react-icons/si";
import {ReactTyped} from 'react-typed';
import {Link} from 'react-router-dom';

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#about" className="flex items-center">About</a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#skills" className="flex items-center">Skills</a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#portfolio" className="flex items-center">Portfolio</a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#contact" className="flex items-center">Contact</a>
            </Typography>
        </ul>
    );

    return (
        <div>
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="xl:container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Link to={'/'} className="mx-5 cursor-pointer py-1.5 font-medium uppercase text-xl flex items-center gap-2">
                        <SiArtixlinux /> Abdus Salam
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <IconButton variant="text" ripple={false} onClick={() => setOpenNav(!openNav)} className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden">
                            {openNav ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                </MobileNav>
            </Navbar>

            {/* Banner Section */}
            <div className=" mx-auto pb-12 text-white bg-banner">
                <div className="flex flex-col justify-center items-center h-screen">
                    <h3 className="text-base md:text-2xl font-light pb-4">Hello! I am</h3>
                    <h3 className="text-4xl md:text-6xl font-bold pb-4">Abdus Salam</h3>
                    <h2 className="text-2xl md:text-4xl font-bold"><ReactTyped strings={["Software Developer", "Front-End Developer"]} typeSpeed={100} backSpeed={50} loop /></h2>
                </div>
            </div>
        </div>
    );
}

export default Header;