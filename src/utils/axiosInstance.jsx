import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-trivia-api.com/v2/questions",
});

export default instance;
