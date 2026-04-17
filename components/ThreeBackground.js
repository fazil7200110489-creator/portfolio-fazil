"use client";

import { useEffect, useState } from "react";

export default function ThreeBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    let animationFrameId;
    
    // Using animation frame makes the cursor follow extremely smooth and performant
    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transition: "left 0.1s ease-out, top 0.1s ease-out",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}
