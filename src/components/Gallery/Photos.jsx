import { useEffect, useState } from "react";
import "./Photos.css";

const Photos = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div className="flex items-center justify-center min-h-screen text-xl font-medium">
        Loading photos...
      </div>
    );
  }

  return (
    <div className="">
      <h2 className="text-2xl sm:text-3xl flex justify-center gap-2 text-center font-semibold mb-5">
        Photo Gallery{" "}
        <span className="flex items-center">(Better Backpacking)</span>
      </h2>

      <div className="hidden sm:block">
        <div className=" box overflow-x-auto scrollbar-hide  px-4 ">
            <div className="flex gap-2 w-max">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-60 h-40 object-cover flex-shrink-0 rounded"
            />
          ))}
          </div>
        </div>
      </div>

      <div className="block sm:hidden overflow-x-auto px-4 mt-4">
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
