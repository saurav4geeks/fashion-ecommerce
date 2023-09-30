import { useState, useEffect } from "react";
import { getEnvironmentVariable } from "~/server/utilities.server";
export default function ResponsiveImage({
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
