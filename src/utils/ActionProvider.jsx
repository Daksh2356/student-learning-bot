class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  handleName = (message) => {
    let index = message.lastIndexOf(" ");
    let name = message.substring(index + 1);
    const botMessage = this.createChatBotMessage(
      `Hey ${
        name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
      }, nice to chat with you !!, I am a chatbot made using react-chatbot-kit 🤖 `
    );

    this.addMessageToState(botMessage);
  };

  handleQuestions = () => {
    const botMessage = this.createChatBotMessage(
      " I am a chatbot made using react-chatbot-kit 🤖 "
    );

    this.addMessageToState(botMessage);
  };

  work = () => {
    const message = this.createChatBotMessage(
      "What do you want to learn today ? ",
      {
        widget: "options",
      }
    );
    this.addMessageToState(message);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Here's your Javascript quiz, All the best for it!",
      {
        widget: "javascriptQuiz",
      }
    );

    this.addMessageToState(message);
  };

  handleMernQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic!! Get on with the MERN Stack quiz, Wishes ✨",
      {
        widget: "mernQuiz",
      }
    );

    this.addMessageToState(message);
  };

  handlePythonQuiz = () => {
    const message = this.createChatBotMessage(
      "Good choice made, let's go you started with a Python Quiz 🐍",
      {
        widget: "pythonQuiz",
      }
    );

    this.addMessageToState(message);
  };

  handleBye = () => {
    const botMessage = this.createChatBotMessage(
      "Bye there, nice to meet you 😊!! "
    );

    this.addMessageToState(botMessage);
  };

  addMessageToState = (message) => {
    this.setState((prevstate) => ({
      ...prevstate,
      messages: [...prevstate.messages, message],
    }));
  };
}

export default ActionProvider;
