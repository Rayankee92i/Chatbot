import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import process from "node:process";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

if (!GROQ_API_KEY) {
  console.error("❌ GROQ_API_KEY is missing in .env");
  process.exit(1);
}

// Create Groq client (OpenAI-compatible)
const groq = new OpenAI({
  apiKey: GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

// -----------------------------
// Health Check Endpoint
// -----------------------------
// Root route to avoid 404 when visiting backend root
app.get("/", (req, res) => {
  res.send("Chatbot backend running. Use /health or /api/chat");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    provider: "Groq",
    model: "llama-3.1-8b-instant",
  });
});

// -----------------------------
// Chat Endpoint
// -----------------------------
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log(`[User]: ${message}`);

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant", // working free model
      messages: [
        { role: "system", content: "You are a helpful AI assistant for a React doodle app." },
        { role: "user", content: message },
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    const reply = completion.choices[0].message.content.trim();

    console.log(`[Bot]: ${reply}`);

    res.json({ reply });

  } catch (error) {
    console.error("[AI Error]:", error);

    // Send detailed error for debugging
    res.status(500).json({
      error: "AI request failed",
      details: error.message,
    });
  }
});

// -----------------------------
// Start Server
// -----------------------------
app.listen(PORT, () => {
  console.log("\n===============================");
  console.log(`✓ Server running on port ${PORT}`);
  console.log(`✓ Using Groq model: llama-3.1-8b-instant`);
  console.log("===============================\n");
});