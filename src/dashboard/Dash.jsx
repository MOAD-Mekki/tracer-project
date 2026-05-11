import "./Dash.css";
import Card from "./UserCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dash({ setData }) {
  const [dialogs, setDialogs] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    async function getDialogs() {
      const res = await fetch(API_LIST_DIALOGS);

      const data = await res.json();

      setDialogs(data);
    }

    getDialogs();
  }, []);

  console.log(dialogs);

  const dialogsCard = dialogs.map((dialog, index) => {
    return (
      <div key={index}>
        <Card id={dialog.id} username={dialog.title} />
      </div>
    );
  });

  const navigate = useNavigate();

  async function submitId() {
    const res = await fetch("http://localhost:3000/selectUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    });

    const data = await res.json();

    if (data.success) {
      navigate("/select");
    }

    setData(data);
  }
  return (
    <div className="dash-page">
      <div className="dash-title">
        <h1>Your Users Information :</h1>
      </div>
      <div className="dash-input">
        <input
          type="text"
          placeholder="Enter the user's ID"
          className="id-input"
          required
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button className="trace-btn" onClick={submitId}>
          Trace !
        </button>
      </div>
      <div className="cards-cont">{dialogsCard}</div>
    </div>
  );
}
