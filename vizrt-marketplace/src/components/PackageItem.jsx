import React from 'react';
import { useNavigate } from 'react-router-dom';

const imageUrl = "http://localhost:5219/images";

//cannot use Package because it is restricted, using GraphicPackage instead
const PackageItem = ({ graphicPackage }) => {

    const navigate = useNavigate();

    const handeViewItem = () => {
        navigate(`/package/${graphicPackage.packageID}`);
        console.log(graphicPackage)
        console.log(graphicPackage.packageID)
    }


    return (
        <div className="flex bg-brandOrange rounded-lg shadow-lg overflow-hidden my-4 w-full max-w-2xl mx-auto min-h-96">
            {/* Image Section */}
            <div className="w-1/2 h-full relative">
                <img className="object-cover w-full h-full" src={`${imageUrl}/${graphicPackage.packageImage}`} alt={`Picture of ${graphicPackage.name}`} />
            </div>

            {/* Text Section */}
            <div className="w-1/2 p-8 flex flex-col justify-start">
                <h1 className="text-3xl font-bold mb-2">{graphicPackage.name}</h1>
                <p className="text-xl font-semibold text-black-700 mb-4">${graphicPackage.price}</p>
                <p className="text-base text-black-600 mb-4">{graphicPackage.description}</p>
                <div className="flex-grow"></div>
                <button onClick={ handeViewItem } className="bg-black text-white py-2 px-4 rounded mt-auto">View Item</button>
            </div>
        </div>
    );
}

export default PackageItem;
