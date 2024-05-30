import { useState } from "react";
import { 
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,    
  } from "react-icons/bs";

export default function Carousel({ slides }) {

    {/* Carousel function */}
    let [current, setCurrent] = useState(0);

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
            {slides.map((slide) => {
                return (
                <img src={slide} className="object-cover"/>
            );
            })}
        </div>

        {/* Arrows and circles for navigating the carousel */}
        <div className="absolute top-0 h-full w-full justify-between item-center flex px-4 text-lg text-gray-300">
            <button onClick={previousSlide} className="text-5xl">
                <BsFillArrowLeftCircleFill/>
                </button>
                <button onClick={nextSlide} className="text-5xl">
                    <BsFillArrowRightCircleFill/>
                    </button>
        </div>
        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((s, i)=>{
                return (
                    <div 
                    onClick={()=>{
                        setCurrent(i)
                    }}
                    key={"circle" + i}
                    className={`rounded-full w-5 h-5 cursor-pointer ${
                        i === current ? "bg-white" : "bg-gray-500"
                    }`}
                ></div>
                );
            })}
        </div>
    </div>
    );
}