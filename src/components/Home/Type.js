import React from "react";
import Typewriter from "typewriter-effect";

/* 🤖 Robot image import */
import robotImg from "../../Assets/Purple_and_Blue_Illustrated_Robot_Assistant_Instagram_Post__1_-removebg-preview.png";

function Type() {
  return (
    <div
      className="type-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "14px",
      }}
    >
      <span style={{ textShadow: "0 0 15px rgba(255,255,255,0.8)" }}>
        <Typewriter
          options={{
            strings: ["Welcome to My Digital Portfolio "],
            autoStart: true,
            loop: false,
            delay: 120,
            deleteSpeed: Infinity,
            cursor: "",        // ✅ removes cursor
            pauseFor: 1000000, // keeps text visible
          }}
        />
      </span>

      {/* 🤖 Robot image at the end */}
      <img
        src={robotImg}
        alt="Robot Assistant"
        className="shake-image"
        style={{
          height: "70px",   // 🔥 adjust size here
          width: "auto",
        }}
      />
    </div>
  );
}

export default Type;

