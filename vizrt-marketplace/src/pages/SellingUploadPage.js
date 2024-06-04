import React from "react";
import SellingUpload from "../components/SellingUpload";
import MyNavbar from "../components/MyNavbar";

const SellingUploadPage = () => {
  return (
    <div>
      {/* Render the navbar */}
      <MyNavbar />
      <div>
        {/* Render the SellingUpload component */}
        <SellingUpload />
      </div>
    </div>
  );
};

export default SellingUploadPage;
