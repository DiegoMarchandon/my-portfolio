"use client";

import { motion } from "framer-motion";
import "../../styles/reactStyles/LavaLampBackground.css";

const blobs = [
  {
    id: 1,
    color: "#2fffd6",
    top: "10%",
    left: "20%",
    size: 280,
    duration: 18,
  },
  {
    id: 2,
    color: "#1de9b6",
    top: "60%",
    left: "50%",
    size: 320,
    duration: 22,
  },
  {
    id: 3,
    color: "#00ffc3",
    top: "30%",
    left: "70%",
    size: 260,
    duration: 20,
  },
  {
    id: 4,
    color: "#33ffd9",
    top: "75%",
    left: "25%",
    size: 300,
    duration: 24,
  },
];

export default function LavaLampBackground() {
  return (
    <div className="lava-container">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="blob"
          style={{
            background: blob.color,
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: blob.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}