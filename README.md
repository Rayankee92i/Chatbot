# Bluesy Bot — React + Vite Chat UI with Groq AI backend

Bluesy Bot is a small, modular chat UI built with React and Vite that connects to a lightweight Express backend. The backend proxies requests to a Groq/OpenAI-compatible API (llama-3.1-8b-instant by default). The app is intended as a starting point for experimenting with generative-chat UIs and model integration.

Key highlights:
- Clean, responsive UI with animated message bubbles
- Simple backend that forwards messages to a Groq/OpenAI-compatible API
- Easy to extend: swap models, add persistence, or integrate authentication

## Quick Start

Prerequisites:
- Node.js (v16+ recommended)
- npm (or yarn)

1) Install dependencies

```bash
npm install
```

2) Create a `.env` file in the project root with your Groq API key (required):

```env
GROQ_API_KEY=your_groq_api_key_here
# Optional: PORT for the proxy server (default: 3001)
PORT=3001
```

3) Start both backend and frontend (single command)

```bash
npm run dev
```

If you prefer separate processes:

```bash
npm run dev:server   # starts Express backend on PORT
npm run dev:client   # starts Vite dev server
```

Visit the client at http://localhost:5173

## Backend API

The Express backend exposes two useful endpoints:

- `GET /health` — simple health check returning provider/model info
- `POST /api/chat` — accepts JSON `{ message: string }` and responds with `{ reply: string }`

Example request (curl):

```bash
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello, bot"}'
```

The backend expects `GROQ_API_KEY` in `.env` and forwards requests to the Groq-compatible API using the `llama-3.1-8b-instant` model by default.

## Client Usage

The client sends messages to the local backend at `http://localhost:3001/api/chat` (see `src/services/aiService.js`). You can customize the UI in the `src/components/` folder:

- `src/components/ChatInput.jsx` — input and send controls
- `src/components/ChatMessage.jsx` — message bubble rendering
- `src/components/ChatMessages.jsx` — messages container

To change initial sample messages, edit `src/App.jsx`.

## Project Structure (short)

```
.
├── server.js            # Express proxy that calls Groq/OpenAI-compatible API
├── index.html           # Vite HTML template
├── package.json         # Scripts & dependencies
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── assets/
    └── components/      # UI components (ChatInput, ChatMessage, ChatMessages)
```

## Environment & Configuration

- `GROQ_API_KEY` (required) — API key for Groq/OpenAI-compatible service
- `PORT` (optional) — backend port, default 3001

## Development Tips

- Use `npm run dev` to run both server and client concurrently (Windows: the script uses `node server.js & vite`).
- If you see CORS or proxy issues, ensure the backend is reachable at the port configured in `src/services/aiService.js`.

## Extending the Project

- Add persistence (file or DB) to save chat history across sessions
- Implement authentication and user accounts
- Add message timestamps, typing indicators, and richer message types (images, attachments)

## License

MIT

---

If you'd like, I can also:
- add a minimal `.env.example` file
- update `src/services/aiService.js` to read the backend URL from an environment variable
- add a short CONTRIBUTING section

Tell me which you'd like next.
