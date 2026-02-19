import { useEffect, useState } from "react";
import { heroSlides } from "../data/heroData";


const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-linear-to-r transition-all duration-2000 "
        style={{
          backgroundImage: `url(${heroSlides[current].image})`,
         
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 text-white">
        
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
          {heroSlides[current].title}
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-3xl text-gray-300">
          {heroSlides[current].description}
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            View Projects
          </button>

          <button id="contact" className="border border-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition">
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
