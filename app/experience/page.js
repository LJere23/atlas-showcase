"use client";

const memories = [
  {
    image: "/images/m1.jpg",
    title: "The Beginning",
    text:
      "Every story begins before it is understood. This is the foundation of a memory you didn’t realize you were already building — captured as a cinematic moment, preserved as a digital atlas."
  },
  {
    image: "/images/m2.jpg",
    title: "A Different Feeling",
    text:
      "Not every shift is loud. Some are quiet rewrites of emotion — where ordinary moments begin to feel unforgettable through visual storytelling."
  },
  {
    image: "/images/m3.jpg",
    title: "Moments",
    text:
      "Turn simple conversations into curated memory galleries. Every interaction becomes part of a larger visual narrative designed to be relived, not just remembered."
  },
  {
    image: "/images/m4.jpg",
    title: "Ordinary Days",
    text:
      "Even the smallest days deserve cinematic preservation. We transform ordinary experiences into structured visual archives that feel timeless."
  },
  {
    image: "/images/m5.jpg",
    title: "Laughter",
    text:
      "Every laugh becomes a frame. Every moment becomes part of a curated emotional timeline designed to be revisited like a story."
  },
  {
    image: "/images/m6.jpg",
    title: "Connection",
    text:
      "A moment of connection transformed into a cinematic memory sequence — crafted to preserve emotion, tone, and atmosphere."
  },
  {
    image: "/images/m7.jpg",
    title: "Comfort",
    text:
      "Milestones deserve more than memory — they deserve presentation. We turn meaningful introductions into structured visual storytelling experiences."
  },
  {
    image: "/images/m8.jpg",
    title: "Presence",
    text:
      "Home is not a place — it’s a sequence of moments. This is what belonging looks like when translated into visual storytelling."
  },
  {
    image: "/images/m9.jpg",
    title: "Growth",
    text:
      "Identity evolves through connection. This chapter captures transformation through curated emotional documentation."
  },
  {
    image: "/images/m10.jpg",
    title: "Atlas",
    text:
      "With our Atlas eventually the memory becomes something preserved forever."
  }
];

export default function Experience() {
  return (
    <main className="main">

      {/* BACKGROUND LIGHTS */}
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />

      {/* HERO */}
      <section className="hero">

        <p className="mini">
          CINEMATIC MEMORY EXPERIENCE
        </p>

        <h1>
          Memories deserve
          more than a gallery.
        </h1>

        <p className="sub">
          Atlas transforms relationships, anniversaries and memories
          into immersive cinematic digital experiences.
        </p>

      </section>

      {/* STORY */}
      {memories.map((m, i) => (
        <section
          key={i}
          className={`scene ${i % 2 !== 0 ? "reverse" : ""}`}
        >

          {/* IMAGE */}
          <div className="imageWrap">

            <div className="imageGlow" />

            <img src={m.image} alt={m.title} />

          </div>

          {/* TEXT */}
          <div className="textCard">

            <p className="chapter">
              CHAPTER {(i + 1).toString().padStart(2, "0")}
            </p>

            <h2>{m.title}</h2>

            <p className="story">
              {m.text}
            </p>

          </div>

        </section>
      ))}

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background: #050505;
          color: white;
          font-family: Arial, sans-serif;
        }

        .main {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top, rgba(255,255,255,0.05), transparent 30%),
            linear-gradient(to bottom, #080808, #020202);
        }

        /* ORBS */

        .orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.18;
          z-index: 0;
          animation: float 14s ease-in-out infinite;
        }

        .orb1 {
          width: 500px;
          height: 500px;
          background: #5c6cff;
          top: -150px;
          left: -120px;
        }

        .orb2 {
          width: 400px;
          height: 400px;
          background: #ff4fd8;
          right: -100px;
          top: 500px;
        }

        .orb3 {
          width: 450px;
          height: 450px;
          background: #6effc4;
          bottom: -150px;
          left: 30%;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(40px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        /* HERO */

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 40px 24px;
          position: relative;
          z-index: 2;
        }

        .mini {
          letter-spacing: 7px;
          font-size: 0.8rem;
          opacity: 0.65;
          margin-bottom: 24px;
        }

        h1 {
          font-size: clamp(4rem, 9vw, 8rem);
          line-height: 0.9;
          max-width: 1000px;
          margin-bottom: 30px;
          font-weight: 700;
        }

        .sub {
          max-width: 760px;
          font-size: 1.15rem;
          line-height: 1.9;
          opacity: 0.82;
        }

        /* SCENES */

        .scene {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 80px;
          padding: 120px 8%;
          position: relative;
          z-index: 2;
        }

        .reverse {
          flex-direction: row-reverse;
        }

        .imageWrap {
          flex: 1;
          min-width: 300px;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .imageGlow {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          filter: blur(80px);
        }

        .imageWrap img {
          width: 100%;
          max-width: 340px;
          border-radius: 28px;
          position: relative;
          z-index: 2;
          box-shadow:
            0 30px 90px rgba(0,0,0,0.65),
            0 0 40px rgba(255,255,255,0.06);

          transition: transform 0.5s ease;
        }

        .imageWrap img:hover {
          transform: scale(1.04);
        }

        /* TEXT CARD */

        .textCard {
          flex: 1;
          min-width: 300px;
          max-width: 560px;

          background: rgba(255,255,255,0.05);

          border: 1px solid rgba(255,255,255,0.08);

          backdrop-filter: blur(16px);

          border-radius: 28px;

          padding: 50px;
        }

        .chapter {
          letter-spacing: 4px;
          font-size: 0.75rem;
          opacity: 0.5;
          margin-bottom: 16px;
        }

        h2 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1;
          margin-bottom: 24px;
        }

        .story {
          line-height: 2;
          opacity: 0.85;
          font-size: 1.02rem;
        }

        /* MOBILE */

        @media (max-width: 900px) {

          .scene,
          .reverse {
            flex-direction: column !important;
            gap: 40px;
            padding: 100px 24px;
            text-align: center;
          }

          .textCard {
            padding: 34px 28px;
          }

          .imageWrap img {
            max-width: 270px;
          }

          h1 {
            line-height: 1;
          }

          h2 {
            font-size: 2.2rem;
          }

          .story {
            font-size: 0.95rem;
            line-height: 1.85;
          }
        }
      `}</style>

    </main>
  );
}