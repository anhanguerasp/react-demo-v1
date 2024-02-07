import { createChatBotMessage } from "react-chatbot-kit";
import { BotAvatar } from "../layout/botAvatar/BotAvatar";
import DogPicture from "../layout/widgets/dogWidget";
import LearningOptions from "../layout/widgets/learningOptions";
import GotIt from "../layout/widgets/GotIt";
import IWidget from "react-chatbot-kit/build/src/interfaces/IWidget";
import { MostSearched } from "../layout/widgets/MostSearched";

const botName = "AnhangueraSP bot";
const config = {
  customComponents: {
    //# cabeçalho do bot
    header: () => (
      <div
        style={{
          backgroundColor: "rgb(249 115 22)",
          padding: "8px",
          borderRadius: "3px",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Converse com o bot
      </div>
    ),

    botAvatar: () => <BotAvatar />,
  },

  //# mensagem inicial
  initialMessages: [
    createChatBotMessage("Olá, no que eu poderia te ajudar?", {
      widget: "mostSearched",
    }),
  ],
  //# nome
  botName: botName,

  customStyles: {
    botMessageBox: {
      backgroundColor: "rgb(249 115 22)",
    },
    chatButton: {
      backgroundColor: "teal",
    },
  },

  widgets: [
    {
      widgetName: "gotIt",
      widgetFunc: (props) => <GotIt {...props} />,
    },
    {
      widgetName: "mostSearched",
      widgetFunc: (props) => <MostSearched {...props} />,
    },
  ] as IWidget[],
};

export default config;
