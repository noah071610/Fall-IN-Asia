import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3060",
});

export default request;
