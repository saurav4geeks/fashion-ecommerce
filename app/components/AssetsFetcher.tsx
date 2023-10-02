import { useState, useEffect } from "react";
import { getEnvironmentVariable } from "~/server/utilities.server";
function ResponsiveImage({
    publicId,
    transformations,
    imageClass,
}: {
    publicId: string;
    transformations?: string;
    imageClass?: string;
}) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const cloudName = "dvksolfwi";
        const deliveryUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${
            transformations == undefined || transformations.length === 0
                ? "/"
                : `/${transformations}`
        }/v1/Urbanizee/${publicId}`;
        setImageUrl(deliveryUrl);
    }, [publicId, transformations]);

    // useEffect(() => {
    //     getEnvironmentVariable("CLOUDINARY_CLOUD_NAME")
    //         .then((cloudName) => {
    //             const deliveryUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${
    //                 transformations == undefined || transformations.length === 0
    //                     ? "/"
    //                     : `/${transformations}`
    //             }/v1/Urbanizee/${publicId}`;
    //             setImageUrl(deliveryUrl);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching Cloudinary URL:", error);
    //         });
    // }, [publicId, transformations]);

    return (
        <img
            src={imageUrl}
            alt="Cloudinary"
            className={imageClass != undefined ? imageClass : ""}
        />
    );
}

function OptimizedVideo({
    publicId,
    transformations,
    videoClass,
}: {
    publicId: string;
    transformations?: string;
    videoClass?: string;
}) {
    const [videoUrl, setVideoUrl] = useState("");
    useEffect(() => {
        const cloudName = "dvksolfwi";
        const deliveryUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${
            transformations == undefined || transformations.length === 0
                ? "/"
                : `/${transformations}`
        }/v1/Urbanizee/${publicId}`;
        setVideoUrl(deliveryUrl);
    }, [publicId, transformations]);

    //TODO: Fix Height issue of image
    return (
        <div
            className={videoClass}
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
            id="iframe-container"
        >
            <iframe
                className=""
                src={videoUrl}
                height="100%"
                title="Video Player"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            ></iframe>
        </div>
    );
}

export { ResponsiveImage, OptimizedVideo };
