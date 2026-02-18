# 💬 Bluesy Bot - React Chatbot

A modern, responsive React chatbot application with stunning UI/UX design, smooth animations, and an intuitive user interface.

## 🎨 Features

### Design & UI
- **Modern Gradient Design**: Beautiful blue-to-cyan gradient theme throughout
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Glass-morphism Effect**: Frosted glass styling on header and input area
- **Smooth Animations**: Engaging entry animations, transitions, and hover effects
- **Custom Scrollbar**: Styled scrollbar matching the color scheme

### Functionality
- **Real-time Chat**: Send and receive messages in real-time
- **AI Responses**: Integrated with Chatbot API (supersimpledev model) for intelligent responses
- **Message History**: Persistent chat history during the session
- **Message Bubbles**: Distinct styling for user (blue gradient) and bot (white) messages
- **Profile Images**: Custom avatar images for both user and bot
- **Keyboard Support**: Press Enter to send, Escape to clear input

### Animations
- **Header**: Slide-down and shimmer effects with glow animation
- **Messages**: Slide-in animations from left (bot) and right (user) with bounce
- **Button**: Pop-in animation with pulse effect on hover
- **Input**: Smooth slide-up animation and focus glow effects
- **Transitions**: Smooth hover effects that lift messages and scale buttons

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd chatbot-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
chatbot-project/
├── src/
│   ├── components/
│   │   ├── ChatMessage.jsx       # Individual message component
│   │   ├── ChatMessage.css       # Message styling
│   │   ├── ChatMessages.jsx      # Messages container
│   │   ├── ChatInput.jsx         # Input area component
│   │   └── ChatInput.css         # Input styling
│   ├── assets/
│   │   ├── bot.png              # Bot avatar
│   │   └── user.png             # User avatar
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # App styling and animations
│   ├── main.jsx                 # Entry point
│   ├── index.css                # Global styles
│   └── vite.config.js           # Vite configuration
├── index.html                   # HTML template
├── package.json                 # Dependencies
└── README.md                    # This file
```

## 🎯 Usage

### Sending Messages
1. Type your message in the input field
2. Click the send button (arrow icon) or press **Enter**
3. Wait for the bot's response

### Keyboard Shortcuts
- **Enter**: Send message
- **Escape**: Clear input field

### Customization

#### Colors
Edit the color variables in CSS files:
- Primary Blue: `#3b82f6`
- Secondary Cyan: `#06b6d4`

#### Animations
Modify animation duration and timing in:
- `src/App.css` - Header animations
- `src/components/ChatMessage.css` - Message animations
- `src/components/ChatInput.css` - Input animations

#### Messages
Edit sample messages in `src/App.jsx`:
```jsx
const [chatMessages, setChatMessages] = useState([
  {
    message: 'Your message here',
    sender: 'user', // or 'robot'
    id: 'unique-id'
  },
  // ... more messages
]);
```

## 📱 Responsive Design

The application is fully responsive with breakpoints at:

- **Desktop** (> 768px): Full design with all features
- **Tablet** (≤ 768px): Optimized layout with adjusted sizing
- **Mobile** (≤ 480px): Compact design with touch-friendly buttons

All animations and effects remain smooth across all screen sizes.

## 🛠️ Technologies Used

- **React 19**: UI library
- **Vite**: Build tool and dev server
- **CSS3**: Styling with animations and gradients
- **supersimpledev**: Chatbot API
- **ESLint**: Code linting

## 📦 Dependencies

- `react@^19.2.0` - React library
- `react-dom@^19.2.0` - React DOM
- `supersimpledev@^8.6.4` - Chatbot API

## 🎨 Design Highlights

### Color Palette
- **Primary**: #3b82f6 (Blue)
- **Secondary**: #06b6d4 (Cyan)
- **Background**: Gradient blend of primary and secondary
- **Text**: Dark gray (#333) on light backgrounds, white on gradients

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Header: 28px bold, 20px on mobile
- Body: 14px regular, 12px on mobile

### Spacing
- Header padding: 20px desktop, 12px mobile
- Message padding: 10px 14px desktop, 8px 10px mobile
- Input padding: 16px 20px desktop, 10px 12px mobile

## 🚀 Performance

- Optimized animations using CSS transforms
- Smooth scrolling behavior in message area
- Efficient component rendering with React
- Minimal bundle size with Vite

## 🐛 Known Issues

- Profile images should be replaced with actual image files in the `src/assets/` directory
- Loading indicator shows fixed text during bot responses

## 📝 Future Enhancements

- [ ] Typing indicator animation
- [ ] Message timestamps
- [ ] User authentication
- [ ] Chat history persistence
- [ ] Emoji support
- [ ] Dark mode toggle
- [ ] Message search functionality
- [ ] Export chat history

## 👨‍💻 Development

### Running in Development Mode
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Linting
```bash
npm run lint
```

### Building for Production
```bash
npm run build
```

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Built with React and Vite
- Chatbot API from supersimpledev
- Modern UI/UX design principles

---

**Made with ❤️ - Enjoy chatting with Bluesy Bot! 🤖**
