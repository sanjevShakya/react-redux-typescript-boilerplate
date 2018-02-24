import axios from "axios";

export function fetchAll() {
  return axios.get("/tags");
}
