# College-Admission-Agent (RAG Based)

## 📌 Core Functionality
1. Retrieve real-time and official data (policies, FAQs, deadlines).
2. Summarize and present info in user-friendly responses.
3. Interact in natural language (chatbot format).
4. Assist with course selection, application process, fees, eligibility, and deadlines.

## 🎯 End-User
High school students
Parents/guardians
Admission counselors

## ⚙️ Architecture:
User Inputs Query via frontend
Backend API receives query
Retriever searches IBM Discovery indexes (brochures, policies, etc.)
Generator (IBM Granite) uses retrieved text + query to generate natural language answer
Response Sent back to frontend


## 📅 Example Use Cases
| User Query                                            | Agent Response                                      |
| ----------------------------------------------------- | --------------------------------------------------- |
| *“What is the eligibility for B.Tech in CSE?”*        | Summarized response from university data with links |
| *“When is the last date for application submission?”* | Real-time deadline fetched and returned             |
| *“What are the hostel fees for girls?”*               | Specific fee structure info with details            |



