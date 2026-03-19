import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

//configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

//to upload files to cloudinary
export async function uploadToCloudinary(filePath, foder = "Doctors") {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            foder,
            resource_type: "image",
        });

        //remove the local file after upload
        fs.unlinkSync(filePath);
        return result;

    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        throw error;
    }
}

//to delete files from cloudinary
export async function deleteFromCloudinary(publicId) {
    try {
        if (publicId) {
            await cloudinary.uploader.destroy(publicId);
        }
    } catch (error) {
        console.error("Cloudinary delete error:", error);
        throw error;
    }
}

export default cloudinary;

