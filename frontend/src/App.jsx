import React, { useState } from "react";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      // const res = await axios.post("http://localhost:5000/ask", { question });
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/ask`, { question });

      setAnswer(res.data.answer);
    } catch (err) {
      setAnswer("❌ Error connecting to the agent.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full space-y-4 text-gray-900">
        <h1 className="text-2xl font-bold text-gray-800">🎓 Ask EnrollMate</h1>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about admission process, eligibility, etc."
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
        />
        <button
          onClick={handleAsk}
          disabled={loading}
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Asking..." : "Ask Agent"}
        </button>
        {answer && (
          <div className="bg-gray-100 p-4 rounded-xl text-gray-800 whitespace-pre-wrap">
            <strong>Answer:</strong> {answer}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;



