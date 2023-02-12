import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>ChatRooms</h1>
        <input className={styles.input} placeholder="Username..." />

        <select className={styles.input}>
          <option>-- Select Room --</option>
          <option value="javascript">Family</option>
          <option value="node">SportsrTeam</option>
          <option value="express">Work</option>
          <option value="react">Pandilla</option>
        </select>

        <button className="btn btn-secondary" style={{ width: "100%" }}>
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
