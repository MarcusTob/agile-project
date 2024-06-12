import React, { useEffect, useState } from "react";
import CollectionList from "../components/Profile/CollectionList";
import MyNavbar from "../components/Profile/MyNavbar";

const MyCollectionPage = () => {
  // State to store the collection items
  const [collection, setCollection] = useState([]);

  // useEffect to fetch collection from local storage when the component mounts
  useEffect(() => {
    const storedCollection = JSON.parse(localStorage.getItem('myCollection')) || [];
    setCollection(storedCollection);
  }, []);
  
  return (
    <div className="bg-brandBgLight min-h-screen">
      <MyNavbar />
      <div className="flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-screen-xl">
          <CollectionList products={collection} />
        </div>
      </div>
    </div>
  );
};

export default MyCollectionPage;
