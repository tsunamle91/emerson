"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"General" | "Sports" | "Academics">("General");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categoryContent = {
    General: "Emerson is a well-rounded individual with a passion for sports and academics. She is known for her leadership skills and commitment to excellence in all areas of her life. Emerson has an interest in becoming a therapist and will be looking for academic programs that support that journey.",
    Sports: (
      <div>
        <p>Emerson excels in multiple sports, including softball, basketball, and track. She&apos;s a key player for the Germantown Red Devils, known for her versatility on the field.</p>
        <ul className="list-disc list-inside mt-2">
          <li>Height: 5&apos;5&quot;</li>
          <li>Bats: Right</li>
          <li>Exit Velocity: 55mph</li>
          <li>Overhand Velocity: 56mph</li>
          <li>Shuttle: 5.31</li>
          <li>Home to First Base: 3.42</li>
        </ul>
      </div>
    ),
    Academics: (
      <ul className="list-disc list-inside">
        <li>4.0 GPA</li>
        <li>Student Body President (GSL)</li>
      </ul>
    )
  };

  const scrollToSectionAnchor = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const scrollToSectionButton = (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const images = [
    "/gallery1.JPEG",
    "/gallery2.JPEG",
    "/gallery3.JPEG",
    "/gallery4.JPEG",
    "/gallery5.JPEG",
    "/gallery6.JPEG"
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Add this useEffect for debugging
  useEffect(() => {
    console.log('Current image index:', currentIndex);
    console.log('Current image path:', images[currentIndex]);
  }, [currentIndex]);

  return (
    <main className={`min-h-screen bg-black text-white ${inter.className}`}>
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/emerson red devils.JPEG"
          alt="Emerson Red Devils"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="grayscale"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <nav className="absolute top-0 right-0 p-4 md:p-6 z-30 bg-transparent">
          {isMobile ? (
            <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#ff26b9] focus:outline-none border border-[#ff26b9] rounded-md p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              {isMenuOpen && (
                <ul className="absolute right-0 mt-2 py-2 w-48 bg-black rounded-md shadow-xl border border-[#ff26b9]">
                  <li><a href="#about" onClick={(e) => scrollToSectionAnchor(e, 'about')} className="block px-4 py-2 text-[#ff26b9] hover:bg-gray-800">About</a></li>
                  <li><a href="#gallery" onClick={(e) => scrollToSectionAnchor(e, 'gallery')} className="block px-4 py-2 text-[#ff26b9] hover:bg-gray-800">Gallery</a></li>
                  <li><a href="mailto:mbalduf@nsr-inc.com?subject=Connecting%20Regarding%20Emerson%20Callahan" className="block px-4 py-2 text-[#ff26b9] hover:bg-gray-800">Contact</a></li>
                </ul>
              )}
            </div>
          ) : (
            <ul className="flex space-x-6 border border-[#ff26b9] rounded-full px-6 py-2">
              <li><a href="#about" onClick={(e) => scrollToSectionAnchor(e, 'about')} className="text-[#ff26b9] hover:text-white transition duration-300">About</a></li>
              <li><a href="#gallery" onClick={(e) => scrollToSectionAnchor(e, 'gallery')} className="text-[#ff26b9] hover:text-white transition duration-300">Gallery</a></li>
              <li><a href="mailto:mbalduf@nsr-inc.com?subject=Connecting%20Regarding%20Emerson%20Callahan" className="text-[#ff26b9] hover:text-white transition duration-300">Contact</a></li>
            </ul>
          )}
        </nav>
        <div className="absolute top-0 left-0 right-0 flex justify-center pt-4 md:pt-8 z-20">
          <Image
            src="/emerson logo.png"
            alt="Emerson Logo"
            width={112}
            height={112}
            objectFit="contain"
          />
        </div>
        <div className="relative z-10 text-center px-4 md:px-0">
          <h1 className={`${playfair.className} font-bold text-4xl md:text-6xl mb-4`}>
            Dynamic Student Athlete and Leader
          </h1>
          <p className="text-xl md:text-2xl mb-6 md:mb-8 font-light">Courage and Resilience - On and Off the Field</p>
          <button 
            onClick={(e) => scrollToSectionButton(e, 'about')}
            className="bg-[#ff26b9] text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-opacity-80 transition duration-300 mb-6 md:mb-8"
          >
            Learn More
          </button>
          <div className="flex justify-center space-x-4 md:space-x-6">
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

      <section className="bg-black text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <blockquote className="text-center max-w-[500px] mx-auto">
            <p className={`${playfair.className} text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 md:mb-6 italic`}>
              &ldquo;Be strong and of a good courage, fear not, nor be afraid of them: for the LORD thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee.&rdquo;
            </p>
            <footer className="text-sm md:text-base lg:text-lg text-white font-light">Deuteronomy 31:6</footer>
          </blockquote>
        </div>
      </section>

      <section id="about" className="bg-gray-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-[#ff26b9]`}>
            Emerson Callahan
          </h2>
          <p className="text-center text-sm md:text-base lg:text-lg mb-6 md:mb-8 font-light">
            Memphis, TN | SS/OF/2B | Lausanne Collegiate School &apos;28 | Germantown Red Devils (Club/Travel) | 4.0 GPA
          </p>
          
          <div className="mb-8 flex flex-col items-center">
            <a href="https://evo.nsr-inc.com/prospect_detail?prospect_id=213905" target="_blank" rel="noopener noreferrer">
              <Image
                src="/nsr-logo.png"
                alt="NSR Logo"
                width={150}
                height={75}
                objectFit="contain"
              />
            </a>
            <p className="mt-2 text-sm text-gray-400">(Recruitment Profile)</p>
          </div>

          <div className="mb-6 md:mb-8 bg-gray-800 rounded overflow-hidden">
            <div className="flex">
              {["General", "Sports", "Academics"].map((category) => (
                <button
                  key={category}
                  className={`flex-1 px-4 py-2 ${activeCategory === category ? 'bg-[#ff26b9] text-white' : 'bg-gray-700 text-gray-300'} font-medium`}
                  onClick={() => setActiveCategory(category as "General" | "Sports" | "Academics")}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="p-4">
              <p className="leading-relaxed">{categoryContent[activeCategory]}</p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              Emerson Callahan is one of the most dynamic young athletes in her age group, exuding a sense of confidence and maturity beyond her years. From an early age, she has shown advanced signs in both athletics and academics, which she continues to develop and refine.
            </p>
            <p>
              Her passion for sports knows no bounds. Emerson actively participates in multiple disciplines, including basketball, soccer, volleyball, and track. Known for her enthusiastic spirit, she is a vocal presence on the field, loudly cheering on her teammates and fellow athletes with unwavering support. Despite the demanding nature of these activities, she has maintained a 4.0 GPA, showcasing her commitment to excellence both on and off the field.
            </p>
            <p>
              Leadership is another area where Emerson thrives. As the student body president at GSL, she relishes opportunities to lead and make a positive impact. Emerson has been described as articulate, empathetic, organized, and responsible - qualities that she strives to embody in all aspects of her life.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white text-black py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center text-[#ff26b9]`}>
            Gallery
          </h2>
          <div className="relative max-w-6xl mx-auto px-12">
            <div className="flex items-center justify-center">
              <button 
                onClick={prevImage} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#ff26b9] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-80 transition duration-300 z-10"
                style={{ left: '-20px' }}
              >
                &#8592;
              </button>
              <div className="flex justify-center items-center space-x-2 md:space-x-4">
                {/* Show 1 image on mobile, 2 on tablet, 3 on desktop */}
                {[...Array(isMobile ? 1 : window.innerWidth < 1024 ? 2 : 3)].map((_, i) => {
                  const index = (currentIndex + i) % images.length;
                  return (
                    <div 
                      key={index} 
                      className={`relative ${
                        isMobile 
                          ? 'w-full' 
                          : window.innerWidth < 1024 
                            ? 'w-1/2' 
                            : 'w-1/3'
                      } h-[200px] md:h-[300px]`}
                    >
                      <Image
                        src={images[index]}
                        alt={`Gallery image ${index + 1}`}
                        width={800}
                        height={600}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        className="rounded-lg"
                        priority
                        unoptimized
                        onError={(e) => {
                          console.error(`Error loading image: ${images[index]}`);
                          console.error(e);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <button 
                onClick={nextImage} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#ff26b9] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-80 transition duration-300 z-10"
                style={{ right: '-20px' }}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Content removed as requested */}
        </div>
      </section>

      <footer className="bg-black text-white py-8 md:py-12">
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
          <div className="mt-6 md:mt-8 text-center text-xs md:text-sm font-light">
            <p>&copy; 2024 Emerson Callahan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
