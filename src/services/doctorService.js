import http from "./httpService";

export function getDoctors() {
  return http.get("http://localhost:8000/api/v1/doctors");
}
