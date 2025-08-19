import React from 'react'
import { images } from '../../../assets/assets'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Background Image with blur */}
            <Image 
                src={images.w1} 
                alt="Construction Image" 
                className="absolute inset-0 w-full h-full object-cover filter blur brightness-50" 
                priority
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
                <h1 className="animate-left-right text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold leading-snug text-white drop-shadow-lg">
                    Building Dreams, <span className="text-yellow-400">Creating Foundations</span>
                </h1>
                <h2 className="animate-right-left mt-4 text-md sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl drop-shadow-md">
                    Trusted construction solutions for residential, commercial, and industrial projects.
                </h2>
            </div>
        </div>
    )
}

export default Hero
