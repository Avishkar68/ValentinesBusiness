import React, { useState } from 'react';

const krushna = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '60%' });
  const [yesPressed, setYesPressed] = useState(false);
  const [yesButtonSize, setYesButtonSize] = useState(1);

  const handleNoHover = () => {
    // Generate random position within 80% of the screen height/width
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    
    setNoButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    // Make the Yes button grow slightly every time they try to hit No
    setYesButtonSize(prev => prev + 0.2);
  };

  if (yesPressed) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-pink-100 text-center p-4">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Zic3BxdXN4Znd4Znd4Znd4Znd4Znd4Znd4Znd4Znd4Znd4Znd4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l41lH4ADRtAYnGsLe/giphy.gif" 
          alt="Celebrating cat" 
          className="rounded-lg shadow-xl mb-4"
        />
        <h1 className="text-4xl font-bold text-pink-600 animate-bounce">
          Yay!!! See you on the 14th! ❤️
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-50 relative overflow-hidden">
      {/* Main Card */}
      <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border-4 border-white text-center z-10">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-8">
          Shivani, <br />
          <span className="text-pink-500">will you be my Valentine?</span>
        </h1>

        <div className="flex items-center justify-center gap-6">
          {/* YES BUTTON */}
          <button
            onClick={() => setYesPressed(true)}
            style={{ transform: `scale(${yesButtonSize})` }}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform duration-200"
          >
            YES
          </button>

          {/* NO BUTTON (Teleporting) */}
          <button
            onMouseEnter={handleNoHover}
            style={{ 
              position: 'absolute', 
              top: noButtonPosition.top, 
              left: noButtonPosition.left,
              transition: 'all 0.2s ease-out' 
            }}
            className="bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg border-2 border-gray-300 pointer-events-auto"
          >
            NO
          </button>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-10 left-10 text-pink-200 text-6xl">❤️</div>
      <div className="absolute bottom-10 right-10 text-pink-200 text-6xl animate-pulse">💖</div>
    </div>
  );
};

export default krushna;