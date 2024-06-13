import { useEffect, useState } from "react";
import PackageService from "../../services/PackageService";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const imageUrl = "http://localhost:5219/images";

const Carousel = (graphicPackage) => {
  // State to store the fetched packages
  const [packages, setPackages] = useState([]);
  // State to track the current slide index
  const [current, setCurrent] = useState(0);

  // Fetch packages to be shown by their IDs
  useEffect(() => {
    const packageIDs = [4, 5, 6];
    const packagePromises = packageIDs.map((id) =>
      PackageService.getPackageById(id)
    );

    Promise.all(packagePromises).then((fetchedPackages) => {
      setPackages(fetchedPackages);
    });
  }, []);

  // Function to move to the previous slide
  let previousSlide = () => {
    if (current === 0) setCurrent(packages.length - 1);
    else setCurrent(current - 1);
  };

  // Function to move to the next slide
  let nextSlide = () => {
    if (current === packages.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const navigate = useNavigate();

  // Function to handle view item button click and navigate to the package details page
  const handleViewItem = () => {
    const graphicPackage = packages[current];
    navigate(`/package/${graphicPackage.packageID}`);
    console.log(graphicPackage);
  };

  return (
    <div className="overflow-hidden relative flex flex-col items-center">
      <h1 className="text-white text-h3 font-bold mb-2">Featured Items</h1>
      <div
        className={`flex transition ease-out duration-400`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {packages.map((graphicPackage) => (
          <div
            key={graphicPackage.id}
            className="w-full flex justify-center items-center flex-shrink-0"
            style={{ width: "100%" }}
          >
            <div className="relative">
              <img
                src={`${imageUrl}/${graphicPackage.image}`}
                className="object-cover rounded-xl"
                alt={graphicPackage.name}
              />
              <div className="absolute top-0 left-0 bg-white text-black p-2 rounded-xl">
                <h1 className="text-p font-customFont">{graphicPackage.name}</h1>
                <p className="text-p3 font-customFont">Price: {graphicPackage.price}$</p>
                <button
                  onClick={handleViewItem}
                  className="bg-black text-white py-1 px-9 rounded mt-2 text-p font-customFont"
                >
                  View Item
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 w-full justify-between item-center flex px-4 text-lg text-gray-300">
        <button onClick={previousSlide} className="text-5xl">
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} className="text-5xl">
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3">
        {packages.map((graphicPackage, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={graphicPackage.id}
              className={`rounded-full w-5 h-5 cursor-pointer ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
