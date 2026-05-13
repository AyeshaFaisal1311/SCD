import { FaWrench, FaMedkit, FaCog } from "react-icons/fa";

export default function Services({ styles }) {
  const data = [
    { icon: <FaWrench />, text: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { icon: <FaMedkit />, text: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { icon: <FaCog />, text: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
  ];

  return (
    <section style={styles.section}>
      <h2>Services I Offer</h2>
      <p style={styles.desc}>
        Legendary assassin John Wick retired from his violent career after marrying the love of his life...
      </p>
      
      <div style={styles.cardWrap}>
        {data.map((item, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.icon}>{item.icon}</div>
            <h3>Dummy Text</h3>
            <p>{item.text}</p>
            <small>Dummy text</small>
          </div>
        ))}
      </div>
    </section>
  );
}