import './ChatMessage.css'
import { Chatbot } from 'supersimpledev';
import  RobotProfileImage  from '../assets/bot.png';
import  UserProfileImage  from '../assets/user.png';

export function ChatMessage({ message, sender }) {
        // const message = props.message;
        // const sender = props.sender;
        // const { message, sender } = props;

        /*
        if (sender === 'robot') {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}
            </div>
          );
        }
        */

        return (
          <div
            className={
              sender === 'robot'
              ? 'chat-message-robot'
              : 'chat-message-user'
            }
          >
            {sender === 'robot' && (
              <img src={RobotProfileImage} width="50" />
              )
            }
            {message}
            {sender === 'user' && (
              <img src={UserProfileImage} width="50" />
            )}
          </div>
        );
      }

      