import React, { useState, useEffect, useCallback } from "react";
import type { LinksFunction } from "@remix-run/node";
import type { CarousalItem } from "~/utilities/typeDefinitions";
import { ResponsiveImage } from "~/components/AssetsFetcher";

import useEmblaCarousel, {
    EmblaCarouselType,
    EmblaOptionsType,
} from "embla-carousel-react";

import {
    DotButton,
    PrevButton,
    NextButton,
} from "~/components/embla-support-files/EmblaCarouselArrowsDotsButtons";
import { Link } from "@remix-run/react";
interface CarouselProps {
    items: CarousalItem[];
}
const Carousel: React.FC<CarouselProps> = ({ items }) => {
    // const slides = items.length;
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    );
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    );
    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );
    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return (
        <>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {items.map((item) => (
                            <div className="embla__slide" key={item.id}>
                                <div className="relative">
                                    <ResponsiveImage
                                        publicId={item.imageId}
                                        imageClass="w-full h-auto max-h-full"
                                    />
                                    <div className="absolute bottom-[40%] left-[50%] max-w-lg p-4 bg-opacity-50 flex flex-col">
                                        <p className="font-poppins text-sm md:text-lg text-subheading-black font-medium">
                                            {item.quote}
                                        </p>
                                        <h2 className="font-poppins md:text-3xl text-xl text-subheading-black font-medium mt-4 lg:mt-12">
                                            {item.name}
                                        </h2>
                                        <div className="mt-8 md:mt-8 lg:mt-12">
                                            <Link
                                                to="/"
                                                className="uppercase font-poppins font-medium text-sm bg-transparent border-2 border-border-btn-primary border-opacity-80 rounded-sm px-8 py-4 text-subheading-black hover:border-text-black hover:border-opacity-60"
                                            >
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="embla__buttons">
                    <PrevButton
                        onClick={scrollPrev}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={scrollNext}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>

            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={"embla__dot".concat(
                            index === selectedIndex
                                ? " embla__dot--selected"
                                : ""
                        )}
                    />
                ))}
            </div>
        </>
    );
};

export default Carousel;
