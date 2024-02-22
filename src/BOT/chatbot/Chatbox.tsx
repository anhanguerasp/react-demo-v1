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
                zIndex: "10",
              }
            : {
                position: "fixed",
                bottom: 20,
                right: 15,
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                zIndex: "10",
              }
        }
      >
        <div
          className={`${
            showBot ? "hidden" : ""
          } bg-gray-200 text-sm flex justify-center text-gray-600 px-2 py-2 mr-2 rounded-full`}
        >
          <p>
            Dúvidas? acesse nosso{"  "}
            <span className={`font-semibold`}> bot.</span>
          </p>
        </div>
        <div
          style={
            showBot
              ? {
                  width: "57px",
                  height: "57px",

                  borderRadius: "30px",
                  display: "none",
                  zIndex: "10",
                }
              : {
                  width: "57px",
                  height: "57px",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  borderRadius: "30px",
                  zIndex: "10",
                }
          }
          onClick={handleShow}
          className="bg-white"
        >
          <span className="absolute flex h-12 w-12">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
          </span>
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
          zIndex: "10",
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
