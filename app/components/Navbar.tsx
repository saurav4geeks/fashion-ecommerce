import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-heading-black transition ease transform duration-300`;
    return (
        <nav
            className="px-8 py-8 md:px-12 md:py-12 bg-bg-secondary"
            id="navbar"
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto font-normal">
                <Link to="/">
                    <h1 className="font-oswald text-4xl md:text-5xl text-heading-black">
                        Urbanizee<span className="text-primary-400">.</span>
                    </h1>
                </Link>

                <button
                    className="flex flex-col md:hidden h-10 w-10 border-none rounded justify-center items-center group"
                    onClick={toggleMenu}
                >
                    <div
                        className={`${genericHamburgerLine} ${
                            isMenuOpen
                                ? "rotate-45 translate-y-3 opacity-75 group-hover:opacity-100"
                                : "opacity-75 group-hover:opacity-100"
                        }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${
                            isMenuOpen
                                ? "opacity-0"
                                : "opacity-75 group-hover:opacity-100"
                        }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${
                            isMenuOpen
                                ? "-rotate-45 -translate-y-3 opacity-75 group-hover:opacity-100"
                                : "opacity-75 group-hover:opacity-100"
                        }`}
                    />
                </button>

                {/* Display the menu items in desktop view */}
                <ul className="hidden md:flex md:space-x-8">
                    <li>
                        <NavLink
                            to="/"
                            className="font-poppins text-base font-normal hover:text-primary-400 hover:border-b-2 hover:border-primary-400 pb-0.5 transition-all duration-200 ease-in-out"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/shop"
                            className="font-poppins text-base font-normal hover:text-primary-400 hover:border-b-2 hover:border-primary-400 pb-0.5 transition-all duration-200 ease-in-out"
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className="font-poppins text-base font-normal hover:text-primary-400 hover:border-b-2 hover:border-primary-400 pb-0.5 transition-all duration-200 ease-in-out"
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="font-poppins text-base font-normal hover:text-primary-400 hover:border-b-2 hover:border-primary-400 pb-0.5 transition-all duration-200 ease-in-out"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="font-poppins text-base font-normal hover:text-primary-400 hover:border-b-2 hover:border-primary-400 pb-0.5 transition-all duration-200 ease-in-out"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>

                {/* Toggle the dropdown menu in mobile view */}
                <div
                    className={`w-full md:hidden ${
                        isMenuOpen ? "block" : "hidden"
                    } bg-bg-tertiary mt-4`}
                    id="navbar-default"
                >
                    <CSSTransition
                        in={isMenuOpen}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                    >
                        <ul className="flex flex-col p-4 mt-4 text-center space-y-4">
                            <li>
                                <NavLink
                                    to="/"
                                    className="font-poppins text-base text-subheading-black font-medium hover:text-primary-400 hover:border-b-2 hover:border-primary-400 pb-0.5 transition-all duration-200 ease-in-out"
                                    onClick={toggleMenu}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/shop"
                                    className="font-poppins text-base text-subheading-black font-medium hover:text-primary-400 hover:border-b-2 hover:border-primary-400 pb-0.5 transition-all duration-200 ease-in-out"
                                    onClick={toggleMenu}
                                >
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    className="font-poppins text-base text-subheading-black font-medium hover:text-primary-400 hover:border-b-2 hover:border-primary-400 pb-0.5 transition-all duration-200 ease-in-out"
                                    onClick={toggleMenu}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className="font-poppins text-base text-subheading-black font-medium hover:text-primary-400 hover:border-b-2 hover:border-primary-400 pb-0.5 transition-all duration-200 ease-in-out"
                                    onClick={toggleMenu}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="font-poppins text-base text-subheading-black font-medium hover:text-primary-400 hover:border-b-2 hover:border-primary-400 pb-0.5 transition-all duration-200 ease-in-out"
                                    onClick={toggleMenu}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </CSSTransition>
                </div>
            </div>
        </nav>
    );
}
