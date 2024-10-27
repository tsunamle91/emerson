"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"General" | "Sports" | "Academics">("General");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categoryContent = {
    General: "Emerson is a well-rounded individual with a passion for sports and academics. She's known for her leadership skills and commitment to excellence in all areas of her life.",
    Sports: "Emerson excels in multiple sports, including softball, basketball, and track. She's a key player for the Germantown Red Devils, known for her versatility on the field.",
    Academics: "With a perfect 4.0 GPA, Emerson demonstrates her dedication to academic excellence. She's particularly interested in science and mathematics, and participates in various academic clubs."
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/jeffrey-f-lin-GLKM5guF69Y-unsplash.jpg"
          alt="Athlete Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <nav className="absolute top-0 right-0 p-6 z-30 bg-transparent">
          {isMobile ? (
            <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#ff26b9] focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              {isMenuOpen && (
                <ul className="absolute right-0 mt-2 py-2 w-48 bg-black rounded-md shadow-xl">
                  <li><a href="#about" className="block px-4 py-2 text-[#ff26b9] hover:bg-gray-800">About</a></li>
                  <li><a href="#gallery" className="block px-4 py-2 text-[#ff26b9] hover:bg-gray-800">Gallery</a></li>
                  <li><a href="#contact" className="block px-4 py-2 text-[#ff26b9] hover:bg-gray-800">Contact</a></li>
                </ul>
              )}
            </div>
          ) : (
            <ul className="flex space-x-6">
              <li><a href="#about" className="text-[#ff26b9] hover:text-white transition duration-300">About</a></li>
              <li><a href="#gallery" className="text-[#ff26b9] hover:text-white transition duration-300">Gallery</a></li>
              <li><a href="#contact" className="text-[#ff26b9] hover:text-white transition duration-300">Contact</a></li>
            </ul>
          )}
        </nav>
        <div className="absolute top-0 left-0 right-0 flex justify-center pt-8 z-20">
          <Image
            src="/emerson logo.png"
            alt="Emerson Logo"
            width={150}
            height={150}
            objectFit="contain"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-bold text-6xl mb-4" style={{ fontFamily: 'TeX Gyre Pagella Bold, serif' }}>
            Professional Athlete
          </h1>
          <p className="text-2xl mb-8">Courage and Resilience - On and Off the Field</p>
          <button className="bg-[#ff26b9] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition duration-300 mb-8">
            Learn More
          </button>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/instagram copy.png"
                alt="Instagram"
                width={40}
                height={40}
              />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/x social copy.png"
                alt="X (Twitter)"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <blockquote className="text-center max-w-[500px] mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-6" style={{ fontFamily: 'TeX Gyre Pagella Bold, serif' }}>
              "Be strong and of a good courage, fear not, nor be afraid of them: for the LORD thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee."
            </p>
            <footer className="text-base md:text-lg text-white">Deuteronomy 31:6</footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'TeX Gyre Pagella Bold, serif' }}>
            Emerson Callahan
          </h2>
          <p className="text-center text-lg mb-8">
            Memphis, TN | SS/OF/2B | Lausanne Collegiate School '28 | Germantown Red Devils (Club/Travel) | 4.0 GPA
          </p>
          
          <div className="mb-8 bg-gray-800 rounded overflow-hidden">
            <div className="flex">
              {["General", "Sports", "Academics"].map((category) => (
                <button
                  key={category}
                  className={`flex-1 px-4 py-2 ${activeCategory === category ? 'bg-[#ff26b9] text-white' : 'bg-gray-700 text-gray-300'}`}
                  onClick={() => setActiveCategory(category as "General" | "Sports" | "Academics")}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="p-4">
              <p>{categoryContent[activeCategory]}</p>
            </div>
          </div>

          <div className="space-y-6 text-lg">
            <p>
              As one of the most dynamic young athletes in my age group, I've been told that I exude a sense of confidence and maturity beyond my years. From an early age, I've shown advanced signs in both athletics and academics, which I continue to develop and refine.
            </p>
            <p>
              My passion for sports knows no bounds. I actively participate in multiple disciplines, including basketball, soccer, volleyball, and track. Despite the demanding nature of these activities, I've maintained a 4.0 GPA, showcasing my commitment to excellence both on and off the field.
            </p>
            <p>
              Leadership is another area where I thrive. As the student body president at GSL, I relish opportunities to lead and make a positive impact. I've been described as articulate, empathetic, organized, and responsible - qualities that I strive to embody in all aspects of my life.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <Image
                src="/emerson logo.png"
                alt="Emerson Logo"
                width={100}
                height={100}
                objectFit="contain"
              />
            </div>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/instagram copy.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/x social copy.png"
                  alt="X (Twitter)"
                  width={30}
                  height={30}
                />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2024 Emerson Callahan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
