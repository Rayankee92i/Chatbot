import {useEffect, useRef} from 'react'
import '../App.css'
import { Chatbot } from 'supersimpledev';
import { ChatMessage } from './ChatMessage';
export function ChatMessages({ chatMessages }) {
        const messagesEndRef = useRef(null);

        useEffect(() => {
          messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, [chatMessages]);

        return (
          <div className="chat-messages">
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        );
      }