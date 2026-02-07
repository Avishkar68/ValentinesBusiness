import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import song from "../../assets/krushna/song.mp3";

import photo1 from "../../assets/krushna/photo1.jpg";
import photo2 from "../../assets/krushna/photo2.jpg";
import photo3 from "../../assets/krushna/photo3.jpg";
import photo4 from "../../assets/krushna/photo4.jpg";
import photo5 from "../../assets/krushna/photo5.jpg";
import photo6 from "../../assets/krushna/photo6.jpg";
import photo7 from "../../assets/krushna/photo7.jpg";
import photo8 from "../../assets/krushna/photo8.jpg";
import photo9 from "../../assets/krushna/photo9.jpg";
import myPhoto from "../../assets/krushna/myPhoto.png"
/* -------------------- NO BUTTON TEXTS -------------------- */
const noTexts = [
  "No 😶",
  "Are you sure? 😭",
  "Soch le yaar 💀",
  "Dil tod diya 💔",
  "Cold hearted 🥶",
  "Yaar please 🙏🏽",
  "Ek chance dede 😭",
  "Kya kami hai mujhme?",
  "Dekh yaar aisa mat kar",
];

export default function Krushna() {
  const audioRef = useRef(null);
  const scrollRef = useRef(null);

  /* -------------------- LOCOMOTIVE + GSAP -------------------- */
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.9,
    });

    gsap.utils.toArray(".float-img").forEach((img, i) => {
      gsap.to(img, {
        y: i % 2 === 0 ? -18 : 18,
        duration: 5 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => scroll.destroy();
  }, []);

  const startSong = () => {
    audioRef.current.volume = 0.6;
    audioRef.current.play();
    document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
  };

  const images = [
    photo1, photo2, photo3,
    photo4, photo5, photo6,
    photo7, photo8, photo9,
  ];

  return (
    <div data-scroll-container ref={scrollRef} className="bg-[#FFF1F4] relative">

      {/* ❤️ GLOBAL FLOATING HEARTS */}
      <FloatingHearts />

      <audio ref={audioRef} src={song} loop />

      {/* -------------------- SECTION 1 : MUSIC -------------------- */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <p className="text-[#2B2B2B] font-semibold text-xl mb-6 max-w-md">
          Here’s a dedicated song for you
          that describes what you mean to me…
        </p>

        <button
          onClick={startSong}
          className="px-8 py-3 cursor-pointer rounded-full bg-[#E6396A] text-white hover:opacity-90 transition"
        >
          Play Song & Continue
        </button>
      </section>

      {/* -------------------- SECTION 2 : LETTER -------------------- */}
      <section
        id="letter"
        className="bg-[#FFF8EC] min-h-screen flex justify-center items-center py-32 px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center text-[#3A2E2A]">
          <h2 className="handwritten text-4xl mb-8">
            A Letter From My Heart
          </h2>

          <p className="handwrittentext text-2xl font-semibold tracking-0 text-[#4c403c] text-justify ">
            Five years.<br/>
            Sometimes I sit and think about that number and it doesn’t feel real. From that boy in 8th standard who could only look at you again and again, to today—where my heart still looks for you the same way—it’s been a whole journey.
            <br />
            <br />

            I fell for you first, quietly, slowly… without even knowing what love really meant. And then you proposed to me. That moment still lives inside me. You didn’t just choose me that day—you changed my life.
            <br />
            <br />

            Before I say anything else, I need to say this from my heart.
            <br />
            <br />

            I am sorry.
            I am sorry for the times I became too possessive.
            I am sorry for the moments when my words were rude, when my behavior hurt you.
            I am sorry for the days I didn’t give you time, when I ignored you, especially when we were around other people.
            I am sorry for the misunderstandings, for the silence, for the last few months that caused you pain and confusion.
            <br />
            <br />

            None of that was ever because I didn’t love you.
            It was because I didn’t know how to handle my emotions properly—and that is my mistake.
            <br />
            <br />

            I know those months were heavy for you. I know they may have left marks inside your heart. And I want you to know this clearly:
            I am working on myself. Every single day.
            <br />
            <br />

            I am paying attention to how I behave.
            I am learning to understand you instead of reacting.
            I am making sure that no trauma, no pain, no stress ever comes to you because of me again.
            <br />
            <br />

            If you say yes, it is yes.
            If you say no, it is no.
            If you need time, space, silence, or just someone to listen—I am here.
            <br />
            <br />

            As your partner, I promise to be more aware, more gentle, more present.
            My love for you is not casual. It is deep, honest, and from my soul.
            <br />
            <br />

            We have been through misunderstandings, distance, and tough phases—but we are still here. Still choosing each other. Still holding on. And that itself tells me one thing: we are strong.
            <br />
            <br />

            Bala, you are not just my girlfriend.
            You are my comfort.
            My peace.
            My home.
            <br />
            <br />
            I don’t want perfection.
            I want us—growing, healing, choosing each other every day.

            I love you.
            With respect.
            With responsibility.
            With my whole heart.

            Always yours,
            <br />

            — Me
          </p>
        </div>
      </section>

      {/* -------------------- SECTION 3 : BENTO / MASONRY -------------------- */}
      <section className="py-32 px-8 bg-[#8B1E3F] relative z-10">
        <div
          className="
            columns-1
            sm:columns-2
            lg:columns-3
            gap-6
            max-w-6xl
            mx-auto
          "
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="float-img mb-6 break-inside-avoid"
            >
              <img
                src={img}
                alt=""
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- SECTION 4 : VALENTINE ASK -------------------- */}
      <ValentineAsk />
    </div>
  );
}

/* ==================== VALENTINE ASK ==================== */
function ValentineAsk() {
  const [noPos, setNoPos] = useState({ top: "60%", left: "55%" });
  const [noIndex, setNoIndex] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);

  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [celebrate, setCelebrate] = useState(false);
const [showGlow, setShowGlow] = useState(false);



  const moveNo = () => {
    setNoPos({
      top: Math.random() * 70 + "%",
      left: Math.random() * 70 + "%",
    });
    setNoIndex((i) => (i + 1) % noTexts.length);
  };

  /* ---------------- CAMERA START ---------------- */
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 720 },
          height: { ideal: 1280 },
        },
        audio: false,
      });

      setShowCamera(true);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.muted = true;
          videoRef.current.playsInline = true;
          videoRef.current.play();
        }
      }, 200); // ⬅️ CRITICAL DELAY
    } catch (err) {
      alert("Camera access denied 🙏");
      console.error(err);
    }
  };


  /* ---------------- CAPTURE + COMBINE ---------------- */
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // canvas size (frame)
    canvas.width = 700;
    canvas.height = 450;

    // left: her selfie
    ctx.drawImage(video, 0, 0, 350, 450);

    // right: your photo
    const myImg = new Image();
    myImg.src = myPhoto;

    myImg.onload = () => {
      ctx.drawImage(myImg, 350, 0, 350, 450);

      // cute frame
      ctx.strokeStyle = "#ff4d88";
      ctx.lineWidth = 16;
      ctx.strokeRect(0, 0, 700, 450);

      // text
      ctx.fillStyle = "#ff4d88";
      ctx.font = "bold 28px sans-serif";
      ctx.fillText("Our Valentine 💖", 230, 40);

      setCapturedImage(canvas.toDataURL("image/png"));

      // stop camera
      video.srcObject.getTracks().forEach(track => track.stop());
    };
  };

  /* ---------------- DOWNLOAD ---------------- */
  const downloadImage = () => {
    const link = document.createElement("a");
    link.download = "valentine_memory.png";
    link.href = capturedImage;
    link.click();
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center relative z-[10000] bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300">
{showGlow && <ScreenGlow />}
{celebrate && <CelebrationOverlay />}


      {!yesClicked ? (
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-10">
            Will you be my Valentine? 💌
          </h1>

          <button
           onClick={() => {
            setYesClicked(true);
          
            setCelebrate(true);
            setShowGlow(true);
          
            // stop glow after 2s
            setTimeout(() => setShowGlow(false), 2000);
          
            // stop crackers after 4.5s
            setTimeout(() => setCelebrate(false), 4500);
          }}
          
            
            className="px-8 py-3 rounded-xl bg-pink-500 text-white text-lg font-semibold shadow-xl hover:scale-110 transition"
          >
            Yes 💖
          </button>

          <button
            style={{ top: noPos.top, left: noPos.left }}
            onMouseEnter={moveNo}
            onClick={moveNo}
            className="absolute px-6 py-3 rounded-xl bg-white border-2 border-pink-500 text-pink-600 font-semibold transition-all duration-200"
          >
            {noTexts[noIndex]}
          </button>
        </div>
      ) : (
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4">
            LESSSSGOOOO 💃🕺
          </h1>

          <p className="mb-6 text-lg">
            Let’s capture this moment 🥹
          </p>

          {/* BUTTON */}
          {!showCamera && !capturedImage && (
            <button
              onClick={startCamera}
              className="px-6 py-3 cursor-pointer rounded-xl bg-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              📸 Let’s take a selfie
            </button>
          )}

          {/* CAMERA */}
          {showCamera && !capturedImage && (
            <div className="mt-6 flex flex-col items-center gap-4">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="
    w-[260px]
    h-[360px]
    bg-black
    object-cover
    rounded-2xl
    border-4
    border-pink-500
    shadow-2xl
  "
              />


              <button
                onClick={capturePhoto}
                className="px-6 py-3 bg-pink-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition"
              >
                📸 Capture this moment
              </button>

              <p className="text-sm text-gray-600">
                (Allow camera access if asked)
              </p>
            </div>
          )}

          {/* RESULT */}
          <canvas ref={canvasRef} className="hidden" />

          {capturedImage && (
            <div className="mt-6">
              <img
                src={capturedImage}
                alt="Valentine Memory"
                className="rounded-xl mx-auto mb-4 shadow-2xl"
              />

              <button
                onClick={downloadImage}
                className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition"
              >
                💾 Download this memory
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}


/* ==================== FLOATING HEARTS ==================== */
function FloatingHearts() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 9999 }}   // 🔴 THIS IS IMPORTANT
    >
      {[...Array(30)].map((_, i) => {
        const left = Math.random() * 100;
        const size = Math.random() * 18 + 12;
        const duration = Math.random() * 10 + 12;
        const delay = Math.random() * 10;
        const drift = Math.random() * 60 - 30;

        return (
          <span
            key={i}
            className="floating-heart"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              "--drift": `${drift}px`,
            }}
          >
            🩷
          </span>
        );
      })}
    </div>
  );
}


function CelebrationOverlay() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.children;

    gsap.fromTo(
      items,
      {
        scale: 0,
        opacity: 1,
        x: 0,
        y: 0,
      },
      {
        scale: () => gsap.utils.random(0.8, 1.6),
        opacity: 0,
        x: () => gsap.utils.random(-500, 500),
        y: () => gsap.utils.random(-600, -1000),
        rotation: () => gsap.utils.random(-360, 360),
        duration: 3.5,
        ease: "power4.out",
        stagger: {
          each: 0.04,
          from: "center",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[10002] flex items-center justify-center"
    >
      {Array.from({ length: 90 }).map((_, i) => (
        <span
          key={i}
          className="absolute text-3xl md:text-4xl"
        > 
          {i % 3 === 0 ? "💖" : i % 3 === 1 ? "💖" : "✨"}
        </span>
      ))}
    </div>
  );
}

function ScreenGlow() {
  return (
    <div className="fixed inset-0 z-[10001] pointer-events-none animate-glowFlash" />
  );
}
