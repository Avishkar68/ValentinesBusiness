import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import photo1 from "../../assets/krushna/photo1.jpg"
import photo2 from "../../assets/krushna/photo2.jpg"
import photo3 from "../../assets/krushna/photo3.jpg"
import photo4 from "../../assets/krushna/photo4.jpg"
import photo5 from "../../assets/krushna/photo5.jpg"
import photo6 from "../../assets/krushna/photo6.jpg"
import photo7 from "../../assets/krushna/photo7.jpg"
import photo8 from "../../assets/krushna/photo8.jpg"
import photo9 from "../../assets/krushna/photo9.jpg"
import photo10 from "../../assets/krushna/photo10.jpeg"

export default function KrushnaSub1() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/krushna/subpage2");
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];

  return (
    <div className="min-h-screen bg-[#FFF6F8] px-6 py-20 overflow-hidden">
      <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
        Some moments don’t need captions.  
        They just stay with you.
      </p>

      <div className="flex gap-10 animate-slowSlide">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-[300px] h-[420px] object-cover rounded-xl shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}
