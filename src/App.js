import React from "react";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import { ChatEngine } from "react-chat-engine";

export function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      projectID="b141dc3f-526b-46b2-a2db-1587552240d9"
      renderChatFeed={(chatAppProps) => {
        return <ChatFeed {...chatAppProps} />;
      }}
    />
  );
}
export default App;
