import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: "your_api_key",
    api_secret: "your_api_secret",
});

// export async function getImagesFromCloudinary(tag: string): Promise<string[]> {
//     try {
//     } catch (error) {
//         console.error("Error fetching images from cloudinary: ", error);
//         throw error;
//     }
// }
