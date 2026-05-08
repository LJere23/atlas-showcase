"use client";

const memories = [
  {
    image: "/images/m1.jpg",
    title: "The Beginning",
    text:
      "Every story begins before it is understood. This is the foundation of a memory you didn’t realize you were already building — captured as a cinematic moment and preserved as a digital atlas."
  },
  {
    image: "/images/m2.jpg",
    title: "A Different Feeling",
    text:
      "Turn meaningful emotions into elegant visual narratives designed to feel timeless, immersive and unforgettable."
  },
  {
    image: "/images/m3.jpg",
    title: "Moments",
    text:
      "Transform conversations into curated memory galleries where every interaction becomes part of a larger cinematic story."
  },
  {
    image: "/images/m4.jpg",
    title: "Ordinary Days",
    text:
      "Even the smallest days deserve cinematic preservation. We transform ordinary moments into timeless visual experiences."
  },
  {
    image: "/images/m5.jpg",
    title: "Laughter",
    text:
      "Every laugh becomes a frame. Every memory becomes part of a carefully crafted emotional timeline designed to be relived."
  },
  {
    image: "/images/m6.jpg",
    title: "Connection",
    text:
      "Milestones deserve more than memory — they deserve presentation. We turn moments into premium visual storytelling experiences."
  },
  {
    image: "/images/m7.jpg",
    title: "Comfort",
    text:
      "Beautiful memories deserve more than storage. Atmosphere, emotion and connection are transformed into cinematic preservation."
  },
  {
    image: "/images/m8.jpg",
    title: "Presence",
    text:
      "Home is not a place — it is a sequence of moments. Every atlas is uniquely designed to reflect emotion, tone and belonging."
  },
  {
    image: "/images/m9.jpg",
    title: "Growth",
    text:
      "From first meetings to anniversaries, document your evolution through immersive digital storytelling."
  },
  {
    image: "/images/m10.jpg",
    title: "Your Atlas",
    text:
      "Eventually experiences become worth preserving forever. Atlas blends design, emotion and storytelling into unforgettable digital memories."
  }
];

export default function Experience() {
  return (
    <main className="main">

      {/* BACKGROUND ORBS */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      {/* HERO */}
      <section className="intro">

        <div className="heroGlow"></div>

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

        <div className="scroll">
          SCROLL TO EXPERIENCE
        </div>

      </section>

      {/* STORY */}
      {memories.map((m, i) => (
        <section
          key={i}
          className={`scene ${i % 2 === 0 ? "" : "reverse"}`}
        >

          <div className="imageWrap">
            <img src={m.image} alt={m.title} />
          </div>

          <div className="textWrap">

            <p className="chapter">
              CHAPTER {String(i + 1).padStart(2, "0")}
            </p>

            <h2>
              {m.title}
            </h2>

            <div className="line"></div>

            <p className="storyText">
              {m.text}
            </p>

          </div>

        </section>
      ))}

      <style jsx>{`
        .main {
          background:
            radial-gradient(circle at top left, #11162b 0%, #050507 45%),
            radial-gradient(circle at bottom right, #180a22 0%, #050507 50%),
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
          background: rgba(110, 90, 255, 0.45);
          top: -140px;
          left: -120px;
          filter: blur(110px);
        }

        .orb2 {
          width: 420px;
          height: 420px;
          background: rgba(0, 210, 255, 0.32);
          right: -120px;
          top: 35%;
          filter: blur(100px);
          animation-delay: 3s;
        }

        .orb3 {
          width: 360px;
          height: 360px;
          background: rgba(255, 70, 180, 0.25);
          bottom: -120px;
          left: 25%;
          filter: blur(100px);
          animation-delay: 6s;
        }

        /* HERO */

        .intro {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 24px;
          position: relative;
          z-index: 2;
        }

        .heroGlow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: rgba(120,120,255,0.08);
          filter: blur(120px);
          border-radius: 50%;
          z-index: -1;
        }

        .mini {
          letter-spacing: 8px;
          opacity: 0.65;
          margin-bottom: 24px;
          font-size: 0.9rem;
        }

        h1 {
          font-size: clamp(4rem, 9vw, 7.5rem);
          line-height: 0.92;
          max-width: 980px;
          margin-bottom: 32px;
          font-weight: 700;
          letter-spacing: -3px;
        }

        .heroText {
          max-width: 820px;
          font-size: 1.35rem;
          line-height: 2;
          opacity: 0.84;
        }

        .scroll {
          margin-top: 60px;
          opacity: 0.45;
          letter-spacing: 4px;
          font-size: 0.8rem;
          animation: pulse 2s ease-in-out infinite;
        }

        /* SCENES */

        .scene {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 100px;
          padding: 120px 8%;
          position: relative;
          z-index: 2;
        }

        .reverse {
          flex-direction: row-reverse;
        }

        .imageWrap {
          flex: 1;
          max-width: 460px;
          position: relative;
        }

        .imageWrap img {
          width: 100%;
          border-radius: 30px;
          object-fit: cover;

          box-shadow:
            0 30px 90px rgba(0,0,0,0.75),
            0 0 60px rgba(255,255,255,0.05);

          transition: all 0.5s ease;
        }

        .imageWrap img:hover {
          transform: scale(1.03) translateY(-6px);
        }

        .textWrap {
          flex: 1;
          max-width: 620px;
        }

        .chapter {
          letter-spacing: 5px;
          font-size: 0.85rem;
          opacity: 0.5;
          margin-bottom: 18px;
        }

        h2 {
          font-size: clamp(2.5rem, 5vw, 4.4rem);
          line-height: 1;
          margin-bottom: 20px;
          font-weight: 700;
          color: white;
        }

        .line {
          width: 90px;
          height: 2px;
          background: linear-gradient(
            to right,
            rgba(255,255,255,0.8),
            rgba(255,255,255,0)
          );
          margin-bottom: 28px;
        }

        .storyText {
          font-size: 1.28rem;
          line-height: 2;
          opacity: 0.9;
          color: rgba(255,255,255,0.86);
        }

        /* ANIMATIONS */

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

        @keyframes pulse {
          0% {
            opacity: 0.3;
          }

          50% {
            opacity: 0.7;
          }

          100% {
            opacity: 0.3;
          }
        }

        /* MOBILE */

        @media (max-width: 900px) {

          .scene,
          .reverse {
            flex-direction: column !important;
            text-align: center;
            gap: 50px;
            padding: 90px 24px;
          }

          .imageWrap {
            width: 100%;
            max-width: 350px;
          }

          .storyText {
            font-size: 1.08rem;
            line-height: 1.95;
          }

          h1 {
            font-size: 4rem;
            letter-spacing: -2px;
          }

          h2 {
            font-size: 3rem;
          }

          .line {
            margin: 0 auto 28px auto;
          }

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