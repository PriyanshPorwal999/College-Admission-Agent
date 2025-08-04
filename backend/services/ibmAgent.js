const axios = require("axios");
const qs = require("qs");

const getIAMToken = async () => {
  const data = qs.stringify({
    grant_type: "urn:ibm:params:oauth:grant-type:apikey",
    apikey: process.env.IBM_API_KEY,
  });

  const config = {
    method: "post",
    url: "https://iam.cloud.ibm.com/identity/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    data: data,
  };

  const response = await axios(config);
  return response.data.access_token;
};

const askWatsonAgent = async (question) => {
  const token = await getIAMToken();

  const payload = {
    messages: [
      {
        content: question,
        role: "user",
      },
    ],
  };

  const response = await axios.post(process.env.IBM_AGENT_URL, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const output = response.data.generated_responses?.[0] || "No response received.";
  return output;
};

module.exports = {
  askWatsonAgent,
};
