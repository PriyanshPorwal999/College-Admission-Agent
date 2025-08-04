const axios = require("axios");
const qs = require("qs");
require("dotenv").config(); // Load variables from .env file

const API_KEY = process.env.IBM_API_KEY;
const AGENT_URL = process.env.IBM_AGENT_URL;

async function testIBMConnection() {
  console.log("--- Starting IBM Connection Test ---");

  if (!API_KEY || !AGENT_URL) {
    console.error("❌ ERROR: IBM_API_KEY or IBM_AGENT_URL is missing from your .env file.");
    return;
  }

  console.log("1. Attempting to get IAM token...");
  let token;
  try {
    const tokenResponse = await axios({
      method: "post",
      url: "https://iam.cloud.ibm.com/identity/token",
      data: qs.stringify({
        grant_type: "urn:ibm:params:oauth:grant-type:apikey",
        apikey: API_KEY,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    token = tokenResponse.data.access_token;
    console.log("✅ SUCCESS: IAM Token received.");
  } catch (error) {
    console.error("❌ FAILED to get IAM Token.");
    console.error("Error Status:", error.response?.status);
    console.error("Error Data:", error.response?.data);
    console.log("--- Test Failed ---");
    return;
  }

  console.log("\n2. Attempting to call the AI Agent...");
  try {
    const payload = { messages: [{ content: "Hello", role: "user" }] };
    const agentResponse = await axios.post(AGENT_URL, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("✅ SUCCESS: Agent responded.");
    console.log("Agent Response Data:", agentResponse.data);
  } catch (error) {
    console.error("❌ FAILED to call the AI Agent.");
    console.error("Error Status:", error.response?.status);
    console.error("Error Data:", error.response?.data);
  }

  console.log("--- Test Complete ---");
}

testIBMConnection();