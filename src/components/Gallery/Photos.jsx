import { useEffect, useState } from "react";
import "./Photos.css";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Photos = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.5; // scroll by ~80% of container width

      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          "https://travel-backend-pearl.vercel.app/api/photos"
        );
        const data = await res.json();
        const allImages = data.flatMap((entry) => entry.images || []);
        setImages(allImages);
      } catch (err) {
        console.error("Failed to fetch images:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-lg font-medium text-gray-700">Loading photos...</p>
      </div>
    );
  }


  return (

    <div className="relative">
      <h2 className="text-2xl sm:text-3xl flex justify-center gap-2 text-center font-semibold mb-5">
        Photo Gallery{" "}
        <span className="flex items-center">(Better Backpacking)</span>
      </h2>

      {/* Desktop */}
      <div className="hidden sm:block relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white z-10"
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={scrollRef}
          className="box overflow-x-auto scrollbar-hide px-4 scroll-smooth"
        >
          <div className="flex gap-2 w-max">
            {images.map((img, i) => (
              <LazyImage
                key={i}
                src={img}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="w-60 h-40 object-cover flex-shrink-0 rounded"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block sm:hidden overflow-x-auto px-4 mt-4 scroll-smooth">
        <div className="flex space-x-4 pb-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-60 h-40 object-cover rounded-lg shadow-md"
              alt={`Gallery ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};



export default Photos;


const LazyImage = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "50px" } // preload a bit before visible
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ""}
      alt={alt}
      className={className}
    />
  );
};
