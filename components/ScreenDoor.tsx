"use client";

import { useState, useRef, useCallback, useEffect } from "react";

const hubbleImages = [
  "/hubble/hudf-1024px.jpg",
  "/hubble/hudf-2014.webp",
  "/hubble/hxdf-extreme.webp",
  "/hubble/hdf-central-portion.webp",
  "/hubble/abell370-frontier.png",
];

export default function ScreenDoor() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentImage, setCurrentImage] = useState(hubbleImages[0]);
  const creakAudioRef = useRef<HTMLAudioElement | null>(null);
  const slamAudioRef = useRef<HTMLAudioElement | null>(null);

  // Preload audio files
  useEffect(() => {
    creakAudioRef.current = new Audio("/door-creak.mp3");
    slamAudioRef.current = new Audio("/door-slam.mp3");

    creakAudioRef.current.load();
    slamAudioRef.current.load();
  }, []);

  const playCreak = useCallback(() => {
    if (creakAudioRef.current) {
      creakAudioRef.current.currentTime = 0;
      creakAudioRef.current.play();
    }
  }, []);

  const playSlam = useCallback(() => {
    if (slamAudioRef.current) {
      slamAudioRef.current.currentTime = 0;
      slamAudioRef.current.play();
    }
  }, []);

  const handleClick = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (!isOpen) {
      // Opening - play creaky sound and pick random image
      playCreak();
      const randomImage = hubbleImages[Math.floor(Math.random() * hubbleImages.length)];
      setCurrentImage(randomImage);
    }

    if (isOpen) {
      // Closing - play slam at end of animation
      setTimeout(() => {
        playSlam();
      }, 450);
    }

    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, [isAnimating, isOpen, playCreak, playSlam]);


  return (
    <div
      className="screen-door-container relative"
      style={{ perspective: "1000px" }}
    >
      <div
        className={`screen-door ${isOpen ? "open" : "closed"}`}
        onClick={handleClick}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "left center",
          transform: isOpen ? "rotateY(-70deg)" : "rotateY(0deg)",
          transition: isOpen
            ? "transform 0.8s cubic-bezier(0.2, 0, 0.4, 1)" // Slow creaky open
            : "transform 0.45s cubic-bezier(0.6, 0, 0.9, 0.6)", // Quick slam shut
          cursor: "pointer",
        }}
      >
        <svg
          width="200"
          height="400"
          viewBox="0 0 100 200"
          className="drop-shadow-2xl"
          style={{
            filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.5))",
          }}
        >
          {/* Door frame - outer */}
          <rect
            x="5"
            y="5"
            width="90"
            height="190"
            fill="none"
            stroke="#6B7280"
            strokeWidth="8"
            rx="2"
          />

          {/* Door frame - inner bevel */}
          <rect
            x="12"
            y="12"
            width="76"
            height="176"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
          />

          {/* Screen mesh background */}
          <rect
            x="14"
            y="14"
            width="72"
            height="172"
            fill="#1a1a2e"
          />

          {/* Diamond mesh pattern */}
          <defs>
            <pattern
              id="screenMesh"
              patternUnits="userSpaceOnUse"
              width="8"
              height="8"
              patternTransform="rotate(0)"
            >
              <path
                d="M 0,4 L 4,0 L 8,4 L 4,8 Z"
                fill="none"
                stroke="#3BB4E5"
                strokeWidth="0.8"
                opacity="0.9"
              />
            </pattern>
          </defs>

          <rect
            x="14"
            y="14"
            width="72"
            height="172"
            fill="url(#screenMesh)"
          />

          {/* Horizontal crossbar */}
          <rect
            x="5"
            y="95"
            width="90"
            height="10"
            fill="#6B7280"
          />
          <rect
            x="8"
            y="97"
            width="84"
            height="2"
            fill="#9CA3AF"
            opacity="0.5"
          />

          {/* Door handle */}
          <ellipse
            cx="82"
            cy="100"
            rx="4"
            ry="6"
            fill="#4B5563"
            stroke="#6B7280"
            strokeWidth="1"
          />

          {/* Hinges */}
          <rect x="5" y="30" width="6" height="15" fill="#4B5563" rx="1" />
          <rect x="5" y="155" width="6" height="15" fill="#4B5563" rx="1" />

          {/* Subtle reflection */}
          <rect
            x="14"
            y="14"
            width="72"
            height="172"
            fill="url(#reflection)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="reflection" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="50%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hubble image behind door */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: -2 }}
      >
        <div
          className="absolute"
          style={{
            top: "4px",
            left: "4px",
            width: "192px",
            height: "392px",
            overflow: "hidden",
            borderRadius: "2px",
          }}
        >
          <img
            src={currentImage}
            alt="Hubble Deep Field"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: isOpen ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        </div>
      </div>

      {/* Door frame (stays in place) */}
      <div
        className="door-frame absolute inset-0 pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <svg
          width="200"
          height="400"
          viewBox="0 0 100 200"
        >
          {/* Static frame showing where door closes into */}
          <rect
            x="2"
            y="2"
            width="96"
            height="196"
            fill="none"
            stroke="#374151"
            strokeWidth="3"
            rx="2"
          />
        </svg>
      </div>

    </div>
  );
}
