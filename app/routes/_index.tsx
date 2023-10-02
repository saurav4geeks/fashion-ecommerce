import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import VerticalSpacer from "~/components/VerticalSpacer";
import { useEffect, useState } from "react";
import { ResponsiveImage, OptimizedVideo } from "~/components/AssetsFetcher";
import { imageNametoUrl } from "~/utilities/imageNametoUrlMapped.js";
import { ClothingCollection, Currency } from "~/utilities/enum";
import type { Item } from "~/utilities/typeDefinitions";
import ItemCard from "~/components/ItemCard";
export const meta: MetaFunction = () => {
    return [
        { title: "Urbanizee" },
        {
            name: "Urbanizee",
            content: "Welcome to Urbanizee! Your one stop for fashion needs",
        },
    ];
};

export default function Index() {
    return (
        <div>
            <BannerComponent />
            <VerticalSpacer />
            <VerticalSpacer />
            <VerticalSpacer />
            <BrandEndorsementsComponent />
            <VerticalSpacer />
            <VerticalSpacer />
            <VerticalSpacer />
            <OurStoryComponent />
            <VerticalSpacer />
            <VerticalSpacer />
            <VerticalSpacer />
            <LatestTrendsComponent />
            <VerticalSpacer />
            <VerticalSpacer />
            <VerticalSpacer />
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
                <div className="flex justify-end relative order-2 md:order-1">
                    <div
                        className="z-10"
                        style={{ maxHeight: availableHeight }}
                    >
                        <ResponsiveImage
                            publicId={imageNametoUrl["banner_girl"].id}
                            imageClass="w-full h-auto max-h-full"
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
                <div className="flex items-center order-1 md:order-2">
                    <div className="text-center md:text-left">
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
        <div className="container px-4 text-center min-w-full">
            <h1 className="font-old_standard text-4xl md:text-4xl text-heading-black font-normal">
                An{" "}
                <span className="border-b-4 border-primary-200">exclusive</span>{" "}
                choice of designer brands
            </h1>
            <VerticalSpacer />
            {/* TODO: Need better UI design to handle the mobile version of this */}
            <div className="flex flex-wrap justify-center px-16">
                {imageNametoUrl["brand_endorsement_logos"].map(
                    (imageNametoUrl) => {
                        return (
                            <>
                                <ResponsiveImage
                                    publicId={imageNametoUrl.id}
                                    imageClass="inline-block"
                                />
                            </>
                        );
                    }
                )}
            </div>
        </div>
    );
}

function OurStoryComponent() {
    return (
        <div className="container text-center min-w-full">
            <h1 className="font-old_standard text-subheading-black text-3xl md:text-4xl">
                Our Story
            </h1>
            <p className="font-poppins text-text-black text-sm mt-2">
                Take a look at our short journey clip.
            </p>
            <VerticalSpacer />
            <VerticalSpacer />
            <OptimizedVideo
                publicId={imageNametoUrl["story_video"].id}
                videoClass=""
            />
        </div>
    );
}

function LatestTrendsComponent() {
    const items: Item[] = [
        {
            id: "123",
            imageId: imageNametoUrl["item1"].id,
            collectionType: ClothingCollection.OUTWEAR,
            name: "Creamy Long Coat",
            currency: Currency.USD,
            price: 183.0,
        },
        {
            id: "123",
            imageId: imageNametoUrl["item2"].id,
            collectionType: ClothingCollection.SUMMER,
            name: "Floral half shirt",
            currency: Currency.USD,
            price: 93,
        },
        {
            id: "123",
            imageId: imageNametoUrl["item3"].id,
            collectionType: ClothingCollection.OUTWEAR,
            name: "Creamy Long Coat",
            currency: Currency.USD,
            price: 183.0,
        },
        {
            id: "123",
            imageId: imageNametoUrl["item4"].id,
            collectionType: ClothingCollection.SUMMER,
            name: "Floral half shirt",
            currency: Currency.USD,
            price: 93,
        },
    ];
    return (
        <div className="container text-center min-w-full px-8 md:px-12">
            <h1 className="font-old_standard text-subheading-black text-4xl md:text-5xl text font-medium">
                Latest Trends
            </h1>
            <p className="font-poppins text-text-black text-base mt-2">
                Always start with perfection
            </p>
            <VerticalSpacer />
            <VerticalSpacer />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-min-full gap-8">
                {items.map((item) => {
                    return <ItemCard item={item} key={item.id} />;
                })}
            </div>
            <VerticalSpacer />
            <VerticalSpacer />
            <Link
                to="/"
                className="uppercase font-poppins font-medium text-sm bg-transparent border-2 border-border-btn-primary border-opacity-60 rounded-full px-8 py-4 text-subheading-black hover:border-text-black hover:border-opacity-40"
            >
                View All
            </Link>
        </div>
    );
}
