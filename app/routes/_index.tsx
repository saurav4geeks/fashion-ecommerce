import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import bannerImg from "../../public/images/banner-girl.png";
import VerticalSpacer from "~/components/VerticalSpacer";
import { useEffect, useState } from "react";
export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <div>
            <BannerComponent />
            <BrandEndorsementsComponent />
            <OurStoryComponent />
        </div>
    );
}

function BannerComponent() {
    const [availableHeight, setAvailableHeight] = useState("auto");
    useEffect(() => {
        const navbar = document.querySelector("#navbar");
        if (navbar) {
            const navbarHeight = navbar.offsetHeight;
            const windowHeight = window.innerHeight;
            const heightToUse = windowHeight - navbarHeight;
            setAvailableHeight(`${heightToUse}px`);
        }
    }, []);
    return (
        <div className="container px-4 bg-bg-secondary min-w-full">
            {/* <h1 className="font-semibold font-poppins">Home</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-end relative">
                    <div
                        className="z-10"
                        style={{ maxHeight: availableHeight }}
                    >
                        <img
                            src={bannerImg}
                            alt="Banner Girl"
                            className="w-full h-auto max-h-full"
                        />
                    </div>
                    <div className="absolute z-0 left-5 top-0">
                        <svg
                            width="682"
                            height="682"
                            viewBox="0 0 682 682"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="container max-w-screen"
                        >
                            <circle
                                cx="341"
                                cy="341"
                                r="340.5"
                                stroke="#FCEFE3"
                            />
                            <circle
                                cx="341.5"
                                cy="341.5"
                                r="245.5"
                                fill="#FFF6EE"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="">
                        <div className="hidden md:flex items-center w-2/5">
                            <div className="flex-grow h-px bg-primary-200"></div>
                            <p className="font-poppins text-base font-normal text-primary-200">
                                2021 fashion Collection
                            </p>
                        </div>
                        <VerticalSpacer />
                        <h1 className="font-old_standard text-heading-black text-8xl font-bold">
                            Spring Wears
                        </h1>
                        <VerticalSpacer />
                        <p className="font-poppins text-sm font-light text-primary-600 leading-relaxed max-w-md">
                            Express your unique style. Don’t miss out on the
                            latest outerwear trends with the 2021 Fashion
                            Collection.
                        </p>
                        <VerticalSpacer />
                        <VerticalSpacer />
                        <Link
                            to="/"
                            className="uppercase text-poppins text-base font-medium text-bg-primary px-10 py-4 bg-primary-400 rounded-sm hover:bg-primary-200 transition-all duration-200 ease-in-out text-left"
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BrandEndorsementsComponent() {
    return (
        <div className="container px-4">
            <p>Brand Endorsement</p>
        </div>
    );
}

function OurStoryComponent() {
    return (
        <div className="container px-4">
            <p>Our Story</p>
        </div>
    );
}
