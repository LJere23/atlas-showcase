"use client";

const memories = [
  {
    image: "/images/m1.jpg",
    text:
      "Every story begins before it is understood. This is the foundation of a memory transformed into cinematic storytelling."
  },
  {
    image: "/images/m2.jpg",
    text:
      "Turn meaningful emotions into elegant visual narratives designed to feel timeless."
  },
  {
    image: "/images/m3.jpg",
    text:
      "Curated layouts, cinematic pacing, and emotional storytelling combined into one immersive experience."
  },
  {
    image: "/images/m4.jpg",
    text:
      "Preserve ordinary moments in extraordinary ways through premium digital atlas design."
  },
  {
    image: "/images/m5.jpg",
    text:
      "Every memory becomes part of a structured emotional journey crafted for modern storytelling."
  },
  {
    image: "/images/m6.jpg",
    text:
      "Milestones deserve elegant presentation. We transform moments into visual experiences worth revisiting."
  },
  {
    image: "/images/m7.jpg",
    text:
      "Beautiful memories deserve more than storage — they deserve cinematic preservation."
  },
  {
    image: "/images/m8.jpg",
    text:
      "Every atlas is uniquely designed to reflect emotion, atmosphere, and connection."
  },
  {
    image: "/images/m9.jpg",
    text:
      "From relationships to anniversaries, your story becomes a premium interactive experience."
  },
  {
    image: "/images/m10.jpg",
    text:
      "Atlas Showcase blends design, emotion, and storytelling into unforgettable digital memories."
  }
];

export default function Experience() {
  return (
    <main className="main">

      {/* BACKGROUND LIGHTS */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      {/* HERO */}
      <section className="intro">
        <p className="mini">
          ATLAS SHOWCASE
        </p>

        <h1>
          Memories deserve
          cinematic storytelling.
        </h1>

        <p className="heroText">
          Personalized digital atlases crafted for relationships,
          anniversaries, milestones and unforgettable moments.
        </p>
      </section>

      {/* STORY */}
      {memories.map((m, i) => (
        <section
          key={i}
          className={`scene ${i % 2 === 0 ? "" : "reverse"}`}
        >
          <div className="imageWrap">
            <img src={m.image} alt="" />
          </div>

          <div className="textWrap">
            <p>{m.text}</p>
          </div>
        </section>
      ))}

      <style jsx>{`
        .main {
          background:
            radial-gradient(circle at top left, #101325 0%, #050507 45%),
            radial-gradient(circle at bottom right, #14091f 0%, #050507 50%),
            #050507;
          color: white;
          overflow-x: hidden;
          position: relative;
          isolation: isolate;
        }

        /* ORBS */

        .orb {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          animation: float 18s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        .orb1 {
          width: 520px;
          height: 520px;
          background: rgba(100, 90, 255, 0.45);
          top: -140px;
          left: -120px;
          filter: blur(110px);
        }

        .orb2 {
          width: 420px;
          height: 420px;
          background: rgba(0, 200, 255, 0.3);
          right: -120px;
          top: 35%;
          filter: blur(100px);
          animation-delay: 3s;
        }

        .orb3 {
          width: 360px;
          height: 360px;
          background: rgba(255, 70, 170, 0.25);
          bottom: -120px;
          left: 25%;
          filter: blur(100px);
          animation-delay: 6s;
        }

        .intro {
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 24px;
          position: relative;
          z-index: 2;
        }

        .mini {
          letter-spacing: 6px;
          opacity: 0.65;
          margin-bottom: 24px;
          font-size: 0.9rem;
        }

        h1 {
          font-size: clamp(3rem, 8vw, 6.5rem);
          line-height: 0.95;
          max-width: 900px;
          margin-bottom: 28px;
          font-weight: 700;
        }

        .heroText {
          max-width: 760px;
          font-size: 1.15rem;
          line-height: 2;
          opacity: 0.82;
        }

        .scene {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 90px;
          padding: 120px 8%;
          position: relative;
          z-index: 2;
        }

        .reverse {
          flex-direction: row-reverse;
        }

        .imageWrap {
          flex: 1;
          max-width: 440px;
        }

        .imageWrap img {
          width: 100%;
          border-radius: 28px;
          object-fit: cover;
          box-shadow:
            0 30px 80px rgba(0,0,0,0.75),
            0 0 60px rgba(255,255,255,0.05);
          transition: all 0.5s ease;
        }

        .imageWrap img:hover {
          transform: scale(1.03);
        }

        .textWrap {
          flex: 1;
          max-width: 560px;
        }

        .textWrap p {
          font-size: 1.12rem;
          line-height: 2;
          opacity: 0.9;
          color: rgba(255,255,255,0.86);
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(35px);
          }

          100% {
            transform: translateY(0px);
          }
        }

        @media (max-width: 900px) {
          .scene,
          .reverse {
            flex-direction: column !important;
            text-align: center;
            gap: 45px;
            padding: 90px 24px;
          }

          .imageWrap {
            width: 100%;
            max-width: 340px;
          }

          .textWrap p {
            font-size: 1rem;
            line-height: 1.9;
          }

          h1 {
            font-size: 3.2rem;
          }

          /* STRONGER MOBILE GLOW */

          .orb1 {
            width: 260px;
            height: 260px;
            filter: blur(70px);
            opacity: 1;
          }

          .orb2 {
            width: 220px;
            height: 220px;
            filter: blur(60px);
            opacity: 0.9;
          }

          .orb3 {
            width: 200px;
            height: 200px;
            filter: blur(60px);
            opacity: 0.9;
          }
        }
      `}</style>

    </main>
  );
}