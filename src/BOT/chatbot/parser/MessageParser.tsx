import React from "react";
import {
  contatoInput,
  cursoInput,
  parceriaInput,
  unidadesInput,
  universalList,
} from "../../constants/bot/inputList";
import { handleInputBot } from "../../hooks/bot/handleInputBot";

const MessageParser = ({ children, actions }: any) => {
  const parse = (message: any) => {
    if (message.includes("got")) {
      actions.handleGotIt();
    }
    if (message.includes("teste")) {
      actions.handleTeste();
    }

    if (message.includes(""))
      if (handleInputBot(cursoInput, message)) {
        actions.handleModalidades();
      }

    if (handleInputBot(unidadesInput, message)) {
      actions.handleUnidades();
    }

    if (handleInputBot(contatoInput, message)) {
      actions.handleContatos();
    }

    if (handleInputBot(parceriaInput, message)) {
      actions.handlePartners();
    }

    // TESTE WIDGET
    if (message.includes("dog")) {
      actions.handleDog();
    }

    //# Sem Resposta
    if (!handleInputBot(universalList, message)) {
      actions.handleAlertError();
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
