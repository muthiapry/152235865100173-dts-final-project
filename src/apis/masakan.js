import axios from "axios";

// const baseUrl = "https://masak-apa.tomorisakura.vercel.app";
const baseUrl =
  "https://cors-anyware.herokuapp.com/https://masak-apa.tomorisakura.vercel.app";

const masakan = axios.create({
  baseURL: baseUrl,
});

export default masakan;
