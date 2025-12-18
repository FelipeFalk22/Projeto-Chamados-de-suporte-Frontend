import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/cookies/status", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        if (!data.accepted) setShow(true);
      });
  }, []);

  function acceptCookies() {
    fetch("http://localhost:3000/cookies/accept", {
      method: "POST",
      credentials: "include"
    }).then(() => setShow(false));
  }

  function closeBanner() {
    setShow(false);
  }

  if (!show) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.banner}>
        <button style={styles.close} onClick={closeBanner}>×</button>

        <p style={styles.text}>
          Este site usa cookies para melhorar sua experiência.
        </p>

        <button style={styles.accept} onClick={acceptCookies}>
          Aceitar
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    bottom: 20,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: 9999
  },
  banner: {
    background: "#1e1e1e",
    color: "#fff",
    padding: "20px 25px",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    position: "relative",
    maxWidth: "600px",
    width: "90%",
    boxShadow: "0 8px 25px rgba(0,0,0,0.4)"
  },
  text: {
    flex: 1,
    fontSize: "14px"
  },
  accept: {
    background: "#ffffff",
    color: "#000",
    border: "none",
    borderRadius: "20px",
    padding: "8px 18px",
    cursor: "pointer",
    fontWeight: "600"
  },
  close: {
    position: "absolute",
    top: 8,
    right: 12,
    background: "transparent",
    color: "#fff",
    border: "none",
    fontSize: "20px",
    cursor: "pointer"
  }
};
