class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);

    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello") || lowercase.includes("hi")) {
      this.actionProvider.greet();
    }

    if (lowercase.includes("name") || lowercase.includes("am")) {
      this.actionProvider.handleName(message);
    }

    if (lowercase.includes("you")) {
      this.actionProvider.handleQuestions();
    }

    if (
      lowercase.includes("what") ||
      lowercase.includes("learn") ||
      lowercase.includes("topics")
    ) {
      this.actionProvider.work();
    }

    if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.handleJavascriptQuiz();
    }

    if (lowercase.includes("mern") || lowercase.includes("mern stack")) {
      this.actionProvider.handleMernQuiz();
    }

    if (lowercase.includes("python") || lowercase.includes("py")) {
      this.actionProvider.handlePythonQuiz();
    }

    if (lowercase.includes("bye")) {
      this.actionProvider.handleBye();
    }
  }
}

export default MessageParser;
