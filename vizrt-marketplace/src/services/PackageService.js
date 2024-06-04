import axios from "axios";

const PackageService = (() => {
  const packageUrl = "http://localhost:5219/Marketplace/Packages";

  const getAllPackages = async () => {
    try {
      const response = await axios.get(packageUrl);
      return response.data;
    } catch (error) {
      console.error("error getting packages", error);
    }
  };

  const getPackageById = async (id) => {
    try {
      const response = await axios.get(`${packageUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error("error getting package by id", error);
    }
  };

  return {
    getAllPackages,
    getPackageById,
  };
})();
export default PackageService;
