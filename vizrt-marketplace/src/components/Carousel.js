import { useEffect, useState } from 'react';
import PackageService from '../services/PackageService';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

const imageUrl = "http://localhost:5219/images";

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const packageIDs = [4, 5, 6];
    const packagePromises = packageIDs.map(id => PackageService.getPackageById(id));

    Promise.all(packagePromises)
      .then(packages => {
        const slides = packages.map(pkg => `${imageUrl}/${pkg.packageImage}`);
        setSlides(slides);
      });
  }, []);

  let previousSlide = () => {
    if(current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if(current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative flex flex-col items-center">
      <h1 className="text-white text-3xl font-bold mb-6">Featured Items</h1>
      <div
        className={`flex transition ease-out duration-400`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <img key={index} src={slide} className="object-cover"/>
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between item-center flex px-4 text-lg text-gray-300">
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