import { createChatBotMessage } from "react-chatbot-kit";
import { BotAvatar } from "../layout/botAvatar/BotAvatar";
import GotIt from "../layout/widgets/GotIt";
import IWidget from "react-chatbot-kit/build/src/interfaces/IWidget";
import { MostSearched } from "../layout/widgets/MostSearched";
import { ParceriasLista } from "../layout/widgets/parceriasOptions";
import { ModalidadeWidget } from "../layout/widgets/institucional/modalidadesWidget";
import { TipoCurosdeWidget } from "../layout/widgets/institucional/tipoDeCursoWidget";
import {
  GraduaçãoCursosWidget,
  TecnicoCursosWidget,
} from "../layout/widgets/institucional/cursosWidget";
import { SocialWidget } from "../layout/widgets/institucional/socialWidget";
import { ErrorAlert } from "../layout/widgets/alerts/errorAlert";
import { PosWidget } from "../layout/widgets/institucional/posWidget";
import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";
import DogPicture from "../layout/widgets/dogWidget";
import { IPM } from "../layout/widgets/institucional/pm";

const botName = "AnhangueraSP bot";

export const config = {
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
          position: "relative",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        Converse com o bot{" "}
      </div>
    ),

    botAvatar: () => <BotAvatar />,
  },

  //# mensagem inicial
  initialMessages: [
    createChatBotMessage("Seja bem vindo ao bot AnhangueraSP!!!", {}),
    createChatBotMessage("No que eu poderia te ajudar?", {
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
      widgetName: "dog",
      widgetFunc: () => <DogPicture />,
    },
    {
      widgetName: "pm",
      widgetFunc: () => <IPM />,
    },
    {
      widgetName: "gotIt",
      widgetFunc: (props) => <GotIt {...props} />,
    },
    {
      widgetName: "mostSearched",
      widgetFunc: (props) => <MostSearched {...props} />,
    },
    {
      widgetName: "partners",
      widgetFunc: (props) => <ParceriasLista {...props} />,
    },

    {
      widgetName: "modalidades",
      widgetFunc: (props) => <ModalidadeWidget {...props} />,
    },

    {
      widgetName: "tipoCurso",
      widgetFunc: (props) => <TipoCurosdeWidget {...props} />,
    },
    {
      widgetName: "graduacaoCursos",
      widgetFunc: () => <GraduaçãoCursosWidget />,
    },

    {
      widgetName: "tecnicoCursos",
      widgetFunc: () => <TecnicoCursosWidget />,
    },
    {
      widgetName: "posCursos",
      widgetFunc: () => <PosWidget />,
    },

    {
      widgetName: "social",
      widgetFunc: () => <SocialWidget />,
    },

    //# alerts widget
    {
      widgetName: "alertError",
      widgetFunc: () => <ErrorAlert />,
    },
  ] as IWidget[],
};

export const configFunc = (): IConfig => {
  return config;
};
