export const getAIResponse = async (message) => {
  try {
    console.log('Sending request to backend with message:', message);

    const response = await fetch('http://localhost:3001/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', data);

    if (!response.ok) {
      console.error('API Error:', data);
      return data.error || `Error: ${response.status}`;
    }

    return data.reply || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error('AI Service Error:', error);
    return `Error: ${error.message}`;
  }
};
