import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// Component Imports
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import PatientSignup from './components/pages/auth/PatientSignup';
import Login from './components/pages/auth/Login';
import PatientDashboard from './components/pages/patientDashboard/pages/PatientDashboard';
import NotFound from './components/pages/NotFound';
import ResetPassword from './components/pages/auth/ResetPassword';
import DoctorDashboard from './components/pages/doctorDashboard/pages/DoctorDashboard';
import Overview from './components/pages/adminDashboard/pages/Overview';
import PatientOverview from "./components/pages/adminDashboard/pages/patients/PatientOverview";
import DoctorOverview from './components/pages/adminDashboard/pages/doctors/DoctorOverview';
// Services
import http from "./services/httpService";
// CSS
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";

class App extends Component {

  state = {}

  getPatientId = async () => {
    const result = await http.get("http://localhost:8000/api/v1/patients")
    console.log(result.data.data.patients)
  }

  componentDidMount() {
    // const jwt = localStorage.getItem("token")
    // const currentPatient = jwtDecode(jwt)
    // console.log(currentPatient.id)
    this.getPatientId()
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ToastContainer />
          <Switch>
            {/* Administrator Dashboard */}
            <Route path="/super-admin/patients" component={PatientOverview} />
            <Route path="/super-admin/doctors" component={DoctorOverview} />
            <Route path="/super-admin" component={Overview} />
            
            {/* Patient Dashboard Components */}
            <Route path="/patient/dashboard" component={PatientDashboard} />

            {/* Doctor Dashboard Components */}
            <Route path="/doctor/dashboard" component={DoctorDashboard} />

            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={PatientSignup} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
