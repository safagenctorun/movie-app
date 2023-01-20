import axios from "axios";

const headers = {
  "Content-Type": "application/json;charset=utf-8",
  Authorization: "Bearer " + localStorage.getItem("session_id"),
};
const AxiosSender = axios.create({
  headers: headers,
});
export { AxiosSender };
