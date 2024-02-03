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
  handlePythonScript = () => {
    const message = this.createChatBotMessage(
      "Here's your Python quiz, All the best for it!",
      {
        widget: "pythonQuiz",
      }
    );

    this.addMessageToState(message);
  };
  handleMernQuiz = () => {
    const message = this.createChatBotMessage(
      "Here's your MERN quiz, All the best for it!",
      {
        widget: "mernQuiz",
      }
    );

    this.addMessageToState(message);
  };

  provideResponse = () => {
    const message = this.createClientMessage(
      "Got it"
    )
    this.addMessageToState(message);
  }

  handleOptions = () => {
    const message = this.createChatBotMessage(
      "Here's are your options...",
      {
        widget : "options",
      }
    );

    this.addMessageToState(message);
  }


  handleStart = () => {
    const message = this.createChatBotMessage(
      "Let's get you started again",
      {
        widget : "get-started",
      }
    );

    this.addMessageToState(message);
  }


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
