import { useState } from "react";

export default function KrushnaSub2() {
  const [accepted, setAccepted] = useState(false);

  const dodgeNo = (e) => {
    const btn = e.currentTarget;
    btn.style.position = "absolute";
    btn.style.top = `${Math.random() * 60 + 20}%`;
    btn.style.left = `${Math.random() * 60 + 20}%`;
  };

  if (accepted) {
    return (
      <div className="min-h-screen bg-[#FFF6F8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading text-4xl mb-4 text-[#2B2B2B]">
            I knew it ❤️
          </h1>
          <p className="text-gray-600">
            Happy Valentine’s Day, Ishwari  
            <br />— Krushna
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF6F8] flex items-center justify-center px-6 relative">
      <div className="text-center max-w-md relative z-10">
        <h1 className="heading text-4xl mb-6 text-[#2B2B2B]">
          Ishwari,
        </h1>

        <p className="text-gray-600 mb-10">
          Would you be my Valentine?
        </p>

        <div className="flex justify-center gap-6 relative h-[80px]">
          {/* YES — FULLY CLICKABLE */}
          <button
            onClick={() => setAccepted(true)}
            className="px-8 py-3 rounded-full bg-[#E75480] text-white
                       hover:scale-105 transition
                       pointer-events-auto z-20"
          >
            Yes
          </button>

          {/* NO — DODGES BUT NEVER BLOCKS YES */}
          <button
            onMouseEnter={dodgeNo}
            className="px-8 py-3 rounded-full border border-gray-300
                       text-gray-400 cursor-not-allowed
                       pointer-events-auto transition z-10"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
