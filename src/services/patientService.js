import http from "./httpService";
import { apiEndPoint } from "./../config.json";

export function getPatients() {
  return http.get(`${apiEndPoint}/patients`);
}

// Creating a Patients Account
export function registerPatient(patient) {
  return http.post(`${apiEndPoint}/patients/signup`, {
    first_name: patient.first_name,
    last_name: patient.last_name,
    email: patient.email,
    password: patient.password,
  });
}

export function loginPatient(email, password) {
  return http.post(`${apiEndPoint}/patients/login`, { email, password });
}
