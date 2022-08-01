import axios from "axios";

const baseUrl = "https://masak-apa.tomorisakura.vercel.app";

const masakan = axios.create({
  baseURL: baseUrl,
});

export default masakan;
