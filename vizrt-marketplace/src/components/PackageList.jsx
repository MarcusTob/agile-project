import React from 'react';
import PackageItem from "./PackageItem";

const PackageList = ({ graphicPackages }) => {
    return (
        <div className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-2">
            {graphicPackages.map(graphicPackage => (
                <PackageItem key={graphicPackage.PackageID} graphicPackage={graphicPackage} />
            ))}
        </div>
    )
}

export default PackageList;
