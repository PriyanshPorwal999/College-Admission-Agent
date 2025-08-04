# EnrollMate – AI-Powered College-Admission-Agent (RAG Based)

## 📌 Problem Statement
Many students and parents struggle with:
- Lack of clarity about admission criteria.
- Navigating through complex college websites.
- Long waiting times for responses from college admission departments.

**EnrollMate** solves this by providing a real-time, AI-powered admission assistant that is available 24/7.

## 📌 Core Functionality
1. Retrieve real-time and official data (policies, FAQs, deadlines).
2. Summarize and present info in user-friendly responses.
3. Interact in natural language (chatbot format).
4. Assist with course selection, application process, fees, eligibility, and deadlines.

## 🛠️ Technologies Used

| Layer        | Technologies                          |
|--------------|----------------------------------------|
| Frontend     | React.js, Tailwind CSS                 |
| Backend      | Node.js, Express.js                    |
| AI Integration | IBM watsonx.ai (Deployed Agent)      |
| Auth         | IBM IAM (Bearer Token-based Auth)      |
| IBM Cloud Services Used | IBM watsonx.aiStudio, IBM watsonx.aiRuntime, IBM IAM, IBM CLoud Lite |

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


## ⚡ Features / WOW Factors

- ✅ Retrieval-Augmented Generation (RAG) for smarter, grounded answers.
- ✅ Handles multi-turn conversations around admission processes.
- ✅ Uses secure Bearer Token Auth (IAM) for production-ready deployments.
- ✅ Easily embeddable in any college or education portal.
- ✅ Built with modern tech stack – React + Node + IBM AI.



