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
        <nav className="px-10 py-10 md:px-14 md:py-14 bg-bg-primary">
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
                            className="font-poppins text-base font-normal"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/shop"
                            className="font-poppins text-base font-normal"
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className="font-poppins text-base font-normal"
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="font-poppins text-base font-normal"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="font-poppins text-base font-normal"
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
                                    className="font-poppins text-base font-normal"
                                    onClick={toggleMenu}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/shop"
                                    className="font-poppins text-base font-normal"
                                    onClick={toggleMenu}
                                >
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    className="font-poppins text-base font-normal"
                                    onClick={toggleMenu}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className="font-poppins text-base font-normal"
                                    onClick={toggleMenu}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="font-poppins text-base font-normal"
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
