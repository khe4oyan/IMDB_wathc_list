// libs
import axios from "axios";

const axs = axios.create({
  baseURL: "https://www.omdbapi.com",
});

export default axs;