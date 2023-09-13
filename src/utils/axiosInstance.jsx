import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-trivia-api.com/v2",
});

export default instance;
