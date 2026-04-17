"use client";

import { useEffect } from "react";

export default function TiltCardsEffect() {
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt");

    const cleanups = [];
    cards.forEach((card) => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const tiltX = (0.5 - y) * 10;
        const tiltY = (x - 0.5) * 12;
        card.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      };

      const onLeave = () => {
        card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
