import React from "react";
import { ListaContatos } from "../layout/contato/listaContatos/listaContatos";
import { UnidadesLink } from "../layout/unidades/unidadesLink";
import { IMessageOptions } from "react-chatbot-kit/build/src/interfaces/IMessages";

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
}: {
  createChatBotMessage: (
    message: any,
    options: IMessageOptions
  ) => {
    loading: boolean;
    widget?: string;
    delay?: number;
    payload?: any;
    message: string;
    type: string;
    id: number;
  };
  setState: any;
  children: any;
}) => {
  const handlePM = () => {
    const botMessage = createChatBotMessage("Sua dose diária de motivação...", {
      widget: "pm",
    });
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDog = () => {
    const botMessage = createChatBotMessage("Cachorro...", {
      widget: "dog",
    });
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleAlertError = () => {
    const botMessage = createChatBotMessage("Algo deu errado...", {
      widget: "alertError",
    });
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleSocial = () => {
    const botMessage = createChatBotMessage("Confira nossas redes sociais", {
      widget: "social",
    });
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlePos = () => {
    const botMessage = createChatBotMessage(
      "Confira nossa lista de Cursos Pós Graduação",
      {
        widget: "posCursos",
      }
    );
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTecnicoCursos = () => {
    const botMessage = createChatBotMessage(
      "Confira nossa lista de Cursos Técnicos : ",
      {
        widget: "tecnicoCursos",
      }
    );

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleGraduacaoCursos = () => {
    const botMessage = createChatBotMessage(
      "Confira nossa lista de Cursos de Gradução : ",
      {
        widget: "graduacaoCursos",
      }
    );

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTipoCurso = () => {
    const botMessage = createChatBotMessage(
      "Agora selecione o tipo de curso desejado.",
      {
        widget: "tipoCurso",
      }
    );

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleModalidades = () => {
    const botMessage = createChatBotMessage(
      "Aparentemente você tem interesse em saber mais sobre os cursos disponibilizados pelo Grupo AnhangueraSP...",
      {}
    );

    const secBotMessage = createChatBotMessage(
      "Mas primeiro escolha uma modalidade de curso.",
      {
        widget: "modalidades",
      }
    );
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage, secBotMessage],
    }));
  };

  const handlePartners = () => {
    const botMessage = createChatBotMessage(
      "Ótimo!! agradeço o seu interesse em saber mais sobre nossos parceiros. ",
      {
        widget: "partners",
      }
    );

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleContatos = () => {
    const botMessage = createChatBotMessage(<ListaContatos />, {});

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleUnidades = () => {
    const botMessage = createChatBotMessage(<UnidadesLink />, {});

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleGotIt = () => {
    const botMessage = createChatBotMessage("Enter your Name", {
      widget: "gotIt",
    });

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTeste = () => {
    const botMessage = createChatBotMessage("Olá, isso é um teste.", {});

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleTeste,
            handleUnidades,
            handleContatos,
            handleGotIt,
            handlePartners,
            handleModalidades,
            handleTipoCurso,
            handleGraduacaoCursos,
            handleTecnicoCursos,
            handleSocial,
            handleAlertError,
            handlePos,

            //# zueira
            handleDog,
            handlePM,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
