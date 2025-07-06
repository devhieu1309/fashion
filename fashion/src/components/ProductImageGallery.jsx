"use client"
import React, { useState } from 'react';

export default function ProductImageGallery({ images }) {
    const [mainImage, setMainImage] = useState(images[0]);

    console.log();
    return (
        <div>
            <div className="w-[186px] h-[223px] overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={`/images/${mainImage}`}
                    alt=""
                />
            </div>
            <div className="flex py-1 space-x-2">
                {images.map((img, index) => (
                    <div key={index} onMouseEnter={() => setMainImage(img)} className={`w-[25px] h-[25px] bg-[url(/images/${img})] bg-no-repeat bg-center bg-cover border border-black rounded-[3px] hover:border-amber-600`}></div>
                ))}
            </div>
        </div>
    );
};

