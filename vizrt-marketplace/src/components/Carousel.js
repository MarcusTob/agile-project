import { useEffect, useState } from 'react';
import PackageService from '../services/PackageService';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const imageUrl = "http://localhost:5219/images";

const Carousel = ({graphicPackage}) => {
  const [packages, setPackages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const packageIDs = [4, 5, 6];
    const packagePromises = packageIDs.map(id => PackageService.getPackageById(id));

    Promise.all(packagePromises)
      .then(fetchedPackages => {
        setPackages(fetchedPackages);
      });
  }, []);

  let previousSlide = () => {
    if(current === 0) setCurrent(packages.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if(current === packages.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const navigate = useNavigate();

  const handleViewItem = () => {
    const graphicPackage = packages[current];
    navigate(`/package/${graphicPackage.packageID}`);
    console.log(graphicPackage);
  };

  return (
    <div className="overflow-hidden relative flex flex-col items-center">
      <h1 className="text-white text-3xl font-bold mb-2">Featured Items</h1>
      <div
        className={`flex transition ease-out duration-400`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {packages.map((graphicPackage) => (
          <div key={graphicPackage.id} className="w-full flex justify-center items-center flex-shrink-0" style={{ width: '100%' }}>
            <div>
              <img src={`${imageUrl}/${graphicPackage.packageImage}`} className="object-cover"/>
              <button onClick={ handleViewItem } className="bg-black text-white py-2 px-4 rounded mt-auto z-10">View Item</button>
            </div>
          </div>
        ))}
      </div>
  
      <div className="absolute top-1/2 w-full justify-between item-center flex px-4 text-lg text-gray-300">
        <button onClick={previousSlide} className="text-5xl">
          <BsFillArrowLeftCircleFill/>
        </button>
        <button onClick={nextSlide} className="text-5xl">
          <BsFillArrowRightCircleFill/>
        </button>
      </div>
    </div>
  );
};

export default Carousel;