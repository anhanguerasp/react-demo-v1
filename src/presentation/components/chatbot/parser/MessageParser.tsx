import React from "react";
import { contatoInput, unidadesInput } from "../../../constants/bot/inputList";
import { handleInputBot } from "../../../hooks/bot/handleInputBot";

const MessageParser = ({ children, actions }: any) => {
  const parse = (message: any) => {
    if (message.includes("got")) {
      actions.handleGotIt();
    }
    if (message.includes("teste")) {
      actions.handleTeste();
    }

    if (handleInputBot(unidadesInput, message)) {
      actions.handleUnidades();
    }

    if (handleInputBot(contatoInput, message)) {
      actions.handleContatos();
    }

    // TESTE WIDGET
    if (message.includes("dog")) {
      actions.handleDog();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
