import Chatbot from "react-chatbot-kit";
import MessageParser from "./parser/MessageParser";
import ActionProvider from "./provider/ActionProvider";
import { config } from "./config/config";
import "./chatbot-style.scss";
import { useEffect, useRef, useState } from "react";

export const ChatBox = () => {
  const [showBot, setShowBot] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleShow = () => {
    setShowBot(!showBot);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowBot(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="" ref={ref}>
      <div
        style={
          showBot
            ? {
                position: "fixed",
                //bottom: 5,
                top: 51,
                right: 15,
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
              }
            : {
                position: "fixed",
                bottom: 20,
                right: 15,
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
              }
        }
      >
        <div
          className={`${
            showBot ? "hidden" : ""
          } bg-gray-200 text-sm flex justify-center text-gray-600 px-2 py-2 mr-2 rounded-full`}
        >
          <p>
            Duvidas? acesse nosso{"  "}
            <span className={`font-semibold`}> bot</span>
          </p>
        </div>
        <div
          style={
            showBot
              ? {
                  width: "57px",
                  height: "57px",

                  borderRadius: "30px",
                }
              : {
                  width: "57px",
                  height: "57px",

                  borderRadius: "30px",
                }
          }
          onClick={handleShow}
          className="bg-white"
        >
          <img src="/img/favicon.svg" style={{ width: "95%" }} />
        </div>
      </div>
      <div
        className={`${showBot ? "" : "hidden"}`}
        style={{
          width: "450px",
          position: "fixed",
          right: 15,
          bottom: 25,
          zIndex: 3,
        }}
      >
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          placeholderText="Escreva sua mensagem"
        />
      </div>
    </div>
  );
};
