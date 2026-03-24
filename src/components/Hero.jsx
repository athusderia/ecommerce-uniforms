export const Hero = () => {
  const RADIUS = 32;
  const CONCAVE = 36;

  return (
    <section className="w-full flex justify-center px-4 mt-8">

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          borderRadius: "40px",
          overflow: "hidden",
          background: "#1A1F2E",
        }}
      >
        <img
          src="/img1.jpg"
          alt="Uniformes industriales"
          style={{
            width: "100%",
            height: "580px",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* ── CÁPSULA CENTRAL ── */}
<div
  style={{
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "42%",
    height: "40px",        // ← altura fija
    background: "#0f0e17",
    borderRadius: `0 0 ${RADIUS}px ${RADIUS}px`,
    padding: "0 36px",     // ← quita el padding vertical cuando usas height fija
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  }}
>
          {/* Esquina cóncava izquierda */}
          <div style={{
            position: "absolute",
            top: 0,
            left: -(CONCAVE-4),
            width: CONCAVE+3,
            height: CONCAVE,
            background: "transparent",
            boxShadow: `${CONCAVE / 2}px -${CONCAVE / 2}px 0 0 #0f0e17`,
            borderRadius: `0 ${RADIUS}px 0 0`,
          }} />

          {/* Esquina cóncava derecha */}
          <div style={{
            position: "absolute",
            top: 0,
            right: -(CONCAVE-4),
            width: CONCAVE,
            height: CONCAVE,
            background: "transparent",
            boxShadow: `-${CONCAVE / 2}px -${CONCAVE / 2}px 0 0 #0f0e17`,
            borderRadius: `${RADIUS}px 0 0 0`,
          }} />

          <h1
            style={{
              color: "#FACC15",
              fontSize: "clamp(1rem, 1.8vw, 1.8rem)",
              fontWeight: 700,
              margin: 0,
              whiteSpace: "nowrap",
              letterSpacing: "0.01em",
            }}
          >
            Uniformes San Luis
          </h1>
        </div>

        {/* Logo circular */}
        {/* <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "112px",
            height: "112px",
            borderRadius: "50%",
            background: "#D9D9D9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: 600,
            color: "#C0392B",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            zIndex: 3,
          }}
        >
          LOGO
        </div> */}

        {/* Botón CTA */}
        <button
          style={{
            position: "absolute",
            bottom: "32px",
            right: "40px",
            background: "#F97316",
            color: "white",
            border: "none",
            borderRadius: "999px",
            padding: "14px 32px",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(249,115,22,0.4)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            zIndex: 3,
          }}
        >
          Buy Now <span>→</span>
        </button>
      </div>

    </section>
  );
};