import "./App.css";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from "./utils/config";
import MessageParser from "./utils/MessageParser";
import ActionProvider from "./utils/ActionProvider";

function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: "300px" }}>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider} />
      </div>
    </div>
  );
}

export default App;
