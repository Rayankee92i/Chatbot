import { useState} from 'react'
import './App.css'
import  RobotProfileImage  from './assets/bot.png';
import  UserProfileImage  from './assets/user.png';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import { Squares } from './components/Squares';

      
function App() {
        const [chatMessages, setChatMessages] = useState([]);
        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];

        return (
          <>
            {/* background animation component */}
            <Squares
              speed={0.5}
              squareSize={40}
              direction="diagonal"
              borderColor="#000000"
              hoverFillColor="#f00000"
            />

            <div className="App-container">
              <div className="chat-header">
                <h1>Bluesy Bot</h1>
                <p>First React Doodle</p>
              </div>

              <ChatMessages chatMessages={chatMessages} />
              <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
              />
            </div>
          </>
        );
      }

export default App
