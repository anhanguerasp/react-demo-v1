import { createChatBotMessage } from "react-chatbot-kit";

export const handleUnidades = ({ setState }: any) => {
  const botMessage = createChatBotMessage(
    "O Grupo AnhangueraSP psosui diversas unidades espalhadas em São Paulo. Para mais informações acesse https://anhanguerasp.com.br/institucional/unidades e entre em contato com a unidade que desejar.",
    {}
  );

  setState((prev: any) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));
};
