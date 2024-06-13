import axios from "axios";

const PackageService = (() => {
  const packageUrl = "http://localhost:5219/Marketplace/Packages";

  // Function to fetch all packages
  const getAllPackages = async () => {
    try {
      // Send a GET request to the packageUrl
      const response = await axios.get(packageUrl);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // Log any errors that occur during the request
      console.error("Error getting packages", error);
    }
  };

  // Function to fetch a package by its ID
  const getPackageById = async (id) => {
    try {
      // Send a GET request to the specific package URL using the provided ID
      const response = await axios.get(`${packageUrl}/${id}`);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // Log any errors that occur during the request
      console.error("Error getting package by ID", error);
    }
  };

  return {
    getAllPackages,
    getPackageById,
  };
})();

export default PackageService;
