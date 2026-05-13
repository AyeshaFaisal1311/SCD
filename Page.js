import React from "react";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Page() {
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#0a0a1f",
      color: "white",
      fontFamily: "Arial",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px",
      alignItems: "center",
    },
    cvButton: {
      backgroundColor: "#4da6ff",
      border: "none",
      padding: "8px 20px",
      color: "white",
      borderRadius: "5px",
    },
    main: {
      textAlign: "center",
      padding: "20px",
    },
    title: {
      color: "#4da6ff",
      marginBottom: "8px",
    },
    social: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "30px",
    },
    imageWrapper: {
      width: "170px",
      height: "170px",
      borderRadius: "50%",
      overflow: "hidden",
      margin: "0 auto",
      backgroundColor: "white",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>NEXT JS</h1>
        <button style={styles.cvButton}>CV</button>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>John Wick</h1>
        <h2>Actor and Artist</h2>
        <p>John Wick is a 2014 American act film.</p>

        <div style={styles.social}>
          <a href="#" style={{ color: "white" }}><FaFacebookF /></a>
          <a href="#" style={{ color: "white" }}><FaYoutube /></a>
          <a href="#" style={{ color: "white" }}><FaLinkedinIn /></a>
        </div>

        <div style={styles.imageWrapper}>
          <img src="t2.jpg" alt="John Wick" style={styles.image} />
        </div>
      </main>
    </div>
  );
}
