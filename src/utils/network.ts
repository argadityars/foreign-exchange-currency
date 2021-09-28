import axios from "axios";
import { API_SECRET, API_URL } from "../constants/api";

export const network = axios.create({
  baseURL: API_URL,
  params: {
    access_key: API_SECRET,
  },
});
