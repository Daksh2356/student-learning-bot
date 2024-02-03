import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
import GetStarted from "../components/Get-started/GetStarted";

const config = {
  botName: "Student Help Bot",
  initialMessages: [createChatBotMessage('Welcome to the student info system',
    {
      widget: "get-started"
    }),
  ],
  customMessages: [
    "hello, hi wasup !"
  ],
  widgets: [
    {
      widgetName: "get-started",
      widgetFunc: (props) => <GetStarted {...props}/>
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      }
    },
    {
      widgetName: "mernQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is the significance of each component in the MERN stack?",
            answer: "The MERN stack consists of MongoDB, Express.js, React.js, and Node.js. MongoDB is the database, Express.js is the backend web application framework, React.js is the frontend library, and Node.js is the runtime environment.",
            id: 1,
          },
          {
            question: "Explain the role of JSX in React.js.",
            answer: "JSX, or JavaScript XML, is a syntax extension for JavaScript that looks similar to XML/HTML. It allows you to write HTML-like code in your JavaScript files. React uses JSX to describe what the UI should look like.",
            id: 2,
          },
        ],
      }
    },
    {
      widgetName: "pythonQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is the difference between a list and a tuple in Python?",
            answer: "In Python, a list is mutable, meaning you can modify its elements after creation. A tuple, on the other hand, is immutable, meaning its elements cannot be changed after creation.",
            id: 1,
          },
          {
            question: "What is a decorator in Python and how is it used?",
            answer: "A decorator in Python is a design pattern that allows you to extend or modify the behavior of callable objects (functions or methods) without modifying the underlying code. It is indicated by the @ symbol followed by the decorator function name above the function to be decorated.",
            id: 2,
          },
        ],
      }
    }
  ]
}

export default config;