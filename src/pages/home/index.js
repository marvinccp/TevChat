import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();
  const joinRoom = () => {
    if (room !== "" && username !== "") {
      socket.emit("join_room", { username, room });
    }
    navigate("/chat", { replace: true });
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>ChatRooms</h1>
        <input
          className={styles.input}
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value="javascript">Family</option>
          <option value="node">SportsrTeam</option>
          <option value="express">Work</option>
          <option value="react">Pandilla</option>
        </select>

        <button
          onClick={joinRoom}
          className="btn btn-secondary"
          style={{ width: "100%" }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
