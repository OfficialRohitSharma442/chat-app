import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const authObject = {
      "Project-ID": 'b141dc3f-526b-46b2-a2db-1587552240d9',
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
      setError("Ooops, incorrect credentials ");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
              className="input"
              placeholder="UserName"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="input"
              placeholder="Password"
              required
            />
            <div align="center">
              <button type="submit" className="button">
                <span>Start Chatting</span>
              </button>
            </div>
            <h2 className="error">{error}</h2>
          </form>
        </h1>
      </div>
    </div>
  );
};
export default LoginForm;
