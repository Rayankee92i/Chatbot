import { useState} from 'react'
import './App.css'
import  RobotProfileImage  from './assets/bot.png';
import  UserProfileImage  from './assets/user.png';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';

      
function App() {
        const [chatMessages, setChatMessages] = useState([{
          message: 'hello chatbot',
          sender: 'user',
          id: 'id1'
        }, {
          message: 'Hello! How can I help you?',
          sender: 'robot',
          id: 'id2'
        }, {
          message: 'can you get me todays date?',
          sender: 'user',
          id: 'id3'
        }, {
          message: 'Today is September 27',
          sender: 'robot',
          id: 'id4'
        }]);
        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];

        return (
          <div className="App-container">
            <div className="chat-header">
              <h1>Bluesy Bot</h1>
              <p>First React Doodle</p>
            </div>
            <ChatMessages
              chatMessages={chatMessages}
            />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
