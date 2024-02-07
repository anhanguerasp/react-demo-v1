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
  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "learningOptions",
      }
    );

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
            handleDog,
            handleGotIt,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
