import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTgzNjcwNjQ5ZmMxNzA3ODQ3OWQyNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzMxNzEzNzgsImV4cCI6MTYzMzQzMDU3OH0.-cDmhLiKVb1RSTUzKYZ8JHnHEtcpHq25uhhtg02s4yw"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});