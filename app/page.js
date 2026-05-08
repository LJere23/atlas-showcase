"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="hero">

      <div className="glow glow1" />
      <div className="glow glow2" />

      <div className="content">

        <p className="mini">
          ATLAS SHOWCASE
        </p>

        <h1>
          Your memories deserve
          <span> cinematic storytelling.</span>
        </h1>

        <p className="text">
          Personalized digital atlases crafted for relationships,
          anniversaries, memories and moments worth preserving.
        </p>

        <Link href="/experience">
          <button>
            Explore The Experience
          </button>
        </Link>

      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: #050507;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          padding: 24px;
        }

        .content {
          position: relative;
          z-index: 2;
          max-width: 950px;
        }

        .mini {
          letter-spacing: 6px;
          opacity: 0.5;
          margin-bottom: 20px;
          font-size: 0.85rem;
        }

        h1 {
          font-size: clamp(3.5rem, 8vw, 7rem);
          line-height: 0.95;
          margin-bottom: 28px;
        }

        h1 span {
          color: #d4af37;
          text-shadow: 0 0 30px rgba(212,175,55,0.35);
        }

        .text {
          max-width: 700px;
          margin: auto;
          opacity: 0.75;
          line-height: 1.9;
          font-size: 1.1rem;
        }

        button {
          margin-top: 40px;
          background: #d4af37;
          color: black;
          border: none;
          padding: 16px 34px;
          border-radius: 999px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        button:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 40px rgba(212,175,55,0.35);
        }

        .glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
        }

        .glow1 {
          width: 500px;
          height: 500px;
          background: rgba(212,175,55,0.15);
          top: -100px;
          left: -100px;
        }

        .glow2 {
          width: 400px;
          height: 400px;
          background: rgba(255,255,255,0.05);
          bottom: -100px;
          right: -100px;
        }

        @media (max-width: 768px) {
          .text {
            font-size: 1rem;
          }

          button {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>

    </main>
  );
}