"use client"
import React, { useEffect, useState } from 'react';
import SliderProductDetail from './SliderProductDetail';

export default function ProductDetail({ images }) {
    const [mainImage, setMainImage] = useState(images[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    function resizeImageName(filename, size = '100x100') {
        const dotIndex = filename.lastIndexOf('.');
        if (dotIndex === -1) return filename;

        const name = filename.substring(0, dotIndex);
        const extension = filename.substring(dotIndex);
        return `${name}-${size}${extension}`;
    }

    return (
        <div className="w-1/2 flex">
            <div className="w-2/10 space-y-3">
                {
                    images.map((item, index) => {
                        return (
                            <div onClick={() => { setSelectedIndex(index); setMainImage(item); }} key={index} className="">
                                <img className={`${selectedIndex === index ? "border border-black" : "border border-transparent"
                                    }`} src={`/images/${resizeImageName(item)}`} alt="" />
                            </div>
                        );
                    })
                }
            </div>
            <SliderProductDetail images={images}/>
            {/* <div className="flex-1">
                <img src={`/images/${mainImage}`} alt="" />
            </div> */}
        </div>
    );
};

