import React from "react";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Page() {
  return (
    <div style={styles.container}>
  
      <header style={styles.header}>
        <h1 style={styles.logo}>NEXT JS</h1>
        <button style={styles.cvButton}>CV</button>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>John Wick</h1>
        <h2 style={styles.subtitle}>Actor and Artist</h2>
        
        <p style={styles.description}>
          John Wick is a 2014 American act film.
        </p>

        <div style={styles.social}>
          <a href="#" style={styles.icon}><FaFacebookF size={22} /></a>
          <a href="#" style={styles.icon}><FaYoutube size={24} /></a>
          <a href="#" style={styles.icon}><FaLinkedinIn size={22} /></a>
        </div>


        <div style={styles.imageWrapper}>
          <img 
            src="t2.jpg" 
            alt="John Wick" 
            style={styles.image}
          />
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0a0a1f",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
  },
  logo: {
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "2px",
  },
  cvButton: {
    backgroundColor: "#4da6ff",
    padding: "8px 24px",
    borderRadius: "6px",
    border: "none",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#4da6ff",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "16px",
  },
  description: {
    maxWidth: "600px",
    fontSize: "14px",
    color: "#d1d5db",
    lineHeight: "1.6",
    marginBottom: "32px",
  },
  social: {
    display: "flex",
    gap: "24px",
    marginBottom: "40px",
  },
  icon: {
    color: "white",
    textDecoration: "none",
  },
  imageWrapper: {
    width: "176px",
    height: "176px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};