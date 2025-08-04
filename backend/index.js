const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const agentRoutes = require("./routes/agent");
app.use("/", agentRoutes);

app.get("/", (req, res) => {
  res.send("✅ EnrollMate backend is running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});




// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');

// // Load env vars
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.get('/', (req, res) => {
//   res.send('✅ EnrollMate backend is running!');
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });


// // Add /ask route (processes admission queries)
// app.post('/ask', async (req, res) => {
//   try {
//     const { question } = req.body;

//     if (!question) {
//       return res.status(400).json({ error: 'Question is required' });
//     }

//     // TODO: Replace with actual IBM watsonx/LLM integration
//     const answer = `This is a placeholder answer for: "${question}"`;

//     res.json({ answer });
//   } catch (error) {
//     console.error('❌ Error in /ask route:', error.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });



// //  Add /store-query route (store queries in DB or log for now)
// app.post('/store-query', async (req, res) => {
//   try {
//     const { question, answer } = req.body;

//     if (!question || !answer) {
//       return res.status(400).json({ error: 'Question and answer are required' });
//     }

//     // For now, just log to console. Later, store to Firestore or SQLite.
//     console.log('📥 Storing Query:', { question, answer });

//     res.json({ message: 'Query stored successfully' });
//   } catch (error) {
//     console.error('❌ Error in /store-query:', error.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


// app.post('/test', (req, res) => {
//   res.send('✅ Test POST route works');
// });