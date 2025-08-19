import Image from 'next/image';
import React from 'react';
import { images } from '../../../assets/assets';

const AboutPage = () => {
  return (
    <div className="pt-10 px-4 md:px-8 lg:px-16" id="home">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center pb-6 font-bold text-primary">
        About Us
      </h1>
      <p className="text-justify text-gray-700 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto mb-10">
        At Zee Constructions, we don’t just build structures — we build trust, quality, and lasting relationships. With years of experience in residential, commercial, and industrial construction, our team is committed to delivering projects that exceed expectations, on time and within budget.
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Image First on Mobile */}
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
          <Image
            src={images.about}
            alt="About Zee Constructions"
            width={1000}
            height={700}
            className="w-full h-auto rounded object-cover"
          />
        </div>

        {/* Text Sections */}
        <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
          <section aria-labelledby="mission" className="text-center rounded shadow-2xl p-6">
            <h2 id="mission" className="text-2xl sm:text-3xl lg:text-4xl font-semibold py-4 text-primary">
              Our Mission
            </h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl">
              To provide innovative, reliable, and sustainable construction solutions that transform visions into reality.
            </p>
          </section>

          <section aria-labelledby="vision" className="text-center rounded shadow-2xl p-6">
            <h2 id="vision" className="text-2xl sm:text-3xl lg:text-4xl font-semibold py-4 text-primary">
              Our Vision
            </h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl">
              To be recognized as a leading construction company known for quality craftsmanship, integrity, and customer satisfaction.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
