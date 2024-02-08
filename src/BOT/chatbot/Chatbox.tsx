import Chatbot from "react-chatbot-kit";
import MessageParser from "./parser/MessageParser";
import ActionProvider from "./provider/ActionProvider";
import config from "./config/config";
import "./chatbot-style.scss";

export const ChatBox = () => {
  return (
    <div
      style={{
        width: "450px",
        position: "fixed",
        right: 15,
        bottom: 25,
      }}
    >
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        placeholderText="Escreva sua mensagem"
      />
    </div>
  );
};
