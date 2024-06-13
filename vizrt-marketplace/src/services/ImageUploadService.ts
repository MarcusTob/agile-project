import axios from "axios";

const ImageUploadService =( () =>{
    //api endpoint
    const imageUploadUrl = "http://localhost:5219/ImageUpload";

    //function to upload image through the api
    const uploadImage = async (image: File) => {
        const formData = new FormData();
        formData.append("file", image);

        const result = await axios({
            url: imageUploadUrl,
            method: "POST",
            data: formData,
            headers: { "Content-Type": "multipart/form-data"}
        });
        formData.delete("file");

        return result
    }
    return {
        uploadImage
    }

})();
export default ImageUploadService;