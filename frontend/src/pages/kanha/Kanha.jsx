import React, { useState } from "react";

const Preetam = () => {
  const [opened, setOpened] = useState(false);
  const [showNoText, setShowNoText] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [accepted, setAccepted] = useState(false);

  const handleNo = (e) => {
    e.stopPropagation();
    setShowNoText(true);
    setYesScale((prev) => prev + 0.25);

    setTimeout(() => {
      setShowNoText(false);
    }, 1200);
  };

  const handleYes = (e) => {
    e.stopPropagation();
    setAccepted(true);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 flex items-center justify-center overflow-hidden">

      {/* ✉️ ENVELOPE + CARD CONTAINER */}
      <div
        className="relative cursor-pointer"
        onClick={() => setOpened(true)}
      >
        {/* 💌 CARD */}
        <div
          className={`
            absolute left-1/2 w-80 bg-white rounded-2xl shadow-xl px-8 py-8 text-center transition-all duration-700 z-10
            -translate-x-1/2
            ${
              opened
                ? "top-1/2 -translate-y-1/2 opacity-100"
                : "top-16 translate-y-0 opacity-0"
            }
          `}
        >
          {!accepted ? (
            <>
              <h1 className="text-2xl font-bold mb-4">
                Will you be my Valentine? 💖
              </h1>

              {showNoText && (
                <p className="mb-4 text-pink-600 font-semibold animate-pulse">
                  ❌ No not allowed 😤
                </p>
              )}

              <div className="flex gap-6 justify-center mt-4">
                <button
                  onClick={handleYes}
                  style={{ transform: `scale(${yesScale})` }}
                  className="px-8 py-3 rounded-xl bg-pink-500 text-white text-lg font-semibold shadow-lg transition-all duration-300"
                >
                  Yes 💘
                </button>

                <button
                  onClick={handleNo}
                  className="px-6 py-3 rounded-xl bg-white border-2 border-pink-500 text-pink-600 font-semibold"
                >
                  No 😶
                </button>
              </div>
            </>
          ) : (
            <div className="animate-scale-in">
              <h1 className="text-3xl font-bold text-pink-600 mb-3">
                YAYYY 💖
              </h1>
              <p className="text-lg font-semibold">
                Officially Valentine’s 😌
              </p>
              <div className="mt-4 text-2xl">🎉💘🎉💘</div>
            </div>
          )}
        </div>

        {/* ✉️ ENVELOPE BODY */}
        <div className="relative w-[360px] h-[220px] bg-pink-500 rounded-2xl shadow-xl overflow-hidden">
          {/* FLAP */}
          <div
            className={`absolute top-0 left-0 w-full h-[45%] bg-pink-400 origin-top transition-transform duration-700
              ${opened ? "-rotate-180" : ""}`}
            style={{
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
            }}
          />

          {/* BOTTOM */}
          <div className="absolute bottom-0 w-full h-[55%] bg-pink-600" />
        </div>

        {!opened && (
          <p className="text-center mt-6 text-lg font-semibold">
            Tap to open 💌
          </p>
        )}
      </div>

      {/* ✨ tiny animation */}
      <style>{`
        @keyframes scaleIn {
          0% {
            transform: scale(0.6);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Preetam;
