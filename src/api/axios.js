import axios from "axios";

export const api = axios.create({
    baseURL: "https://amazon-express.vitaoks1.repl.co"
});