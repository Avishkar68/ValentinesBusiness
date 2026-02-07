import { useState } from "react";

const noTexts = [
  "No 😶",
  "Are you sure? 😭",
  "Soch le yaar 💀",
  "Dil tod diya 💔",
  "Cold hearted 🥶",
  "Yaar please 🙏🏽",
  "Harpic pe lungaa",
  "Eak chance dede priyeee",
  "Kya kami hai muzme ?",
  "Dekh yaar aisa mat kar",
];

// ❤️ Floating Hearts (SINGLE FILE)
const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => {
        const left = Math.random() * 100;
        const size = Math.random() * 20 + 18;
        const duration = Math.random() * 8 + 10;
        const delay = Math.random() * 5;

        return (
          <span
            key={i}
            className="absolute text-pink-400 opacity-70 animate-float"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          >
            💖
          </span>
        );
      })}
    </div>
  );
};

export default function Giridhar() {
  const [noPos, setNoPos] = useState({ top: "60%", left: "55%" });
  const [noIndex, setNoIndex] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);

  const moveNo = () => {
    const top = Math.random() * 70 + "%";
    const left = Math.random() * 70 + "%";
    setNoPos({ top, left });
    setNoIndex((i) => (i + 1) % noTexts.length);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 flex items-center justify-center relative overflow-hidden">
      
      {/* 💘 Background Hearts */}
      <FloatingHearts />

      {/* 🌸 Inline animation (single page only) */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(110vh) translateX(0);
            opacity: 0;
          }
          20% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-10vh) translateX(40px);
            opacity: 0;
          }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      {!yesClicked ? (
        <div className="text-center px-4 z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-10">
            Will you be my Valentine? 💌
          </h1>

          <div className="flex gap-6 justify-center">
            <button
              onClick={() => setYesClicked(true)}
              className="px-8 py-3 rounded-xl bg-pink-500 text-white text-lg font-semibold shadow-xl hover:scale-110 transition"
            >
              Yes 💖
            </button>
          </div>

          <button
            style={{ top: noPos.top, left: noPos.left }}
            onMouseEnter={moveNo}
            onClick={moveNo}
            className="absolute px-6 py-3 rounded-xl bg-white border-2 border-pink-500 text-pink-600 font-semibold transition-all duration-200 z-10"
          >
            {noTexts[noIndex]}
          </button>
        </div>
      ) : (
        <div className="text-center animate-bounce z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600">
            LESSSSGOOOO 💃🕺
          </h1>
          <p className="mt-4 text-lg">Screenshot bhejna compulsory 😌</p>
          <div className="mt-6 text-3xl">🎉🎉🎉🎉🎉</div>
        </div>
      )}
    </div>
  );
}
