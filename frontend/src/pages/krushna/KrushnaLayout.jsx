import { Outlet } from "react-router-dom";
import { useRef } from "react";
import song from "../../assets/krushna/song.mp3";

export default function KrushnaLayout() {
  const audioRef = useRef(null);

  return (
    <>
      <audio ref={audioRef} src={song} loop />
      <Outlet context={{ audioRef }} />
    </>
  );
}
