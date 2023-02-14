import axios from "axios";
//21042262/json/
const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default api;
