import { useState} from 'react'
import './ChatInput.css'
import { Chatbot } from 'supersimpledev';

export function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState('');

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        async function sendMessage() {
          if (!inputText.trim()) return;

          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID()
            }
          ];

        setChatMessages([
          ...newChatMessages,
          // This creates a temporary Loading... message.
          // Because we don't save this message in newChatMessages,
           // it will be remove later, when we add the response.
           {
             message: 'This bitch is thinking...',
             sender: 'robot',
             id: crypto.randomUUID()
           }
        ]);

          const response = await(Chatbot.getResponseAsync(inputText));
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);

          setInputText('');
        }
        function handleDownKey(event) {
        if (event.key === 'Enter') {
          sendMessage();
          setInputText('');
        } else if (event.key === 'Escape') {
          setInputText('');
        }
      }

        return (
          <div className="chat-input">
            <input
              placeholder="Type your message..."
              size="30"
              onChange={saveInputText}
              value={inputText}
              onKeyPress={handleDownKey}
              className="chat-input-text"
              
            />
            <button
              onClick={sendMessage}
              className="send-button"
              title="Send message"
            >➤</button>
          </div>
        );
      }
      