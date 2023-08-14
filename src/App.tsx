import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inbox from './views/inbox/inbox';
import Contacts from './views/contacts/contacts';
import Broadcast from './views/broadcast/broadcast';
import Template from './views/template/template';
import Login from './views/login';
import { OtpVerification } from './views/otpVerification';
import Signup from './views/signup/signup';
import { API_URL } from "../src/config/config";
import axios from "axios";
import PrivateRoute from "./routes/privateRoute";

function App() {
  const checkUser = async () => {
    let localData: any = localStorage.getItem("userData");

    const API_ENDPOINT = API_URL + "api/v1";
    let header = {
      headers: {
        Authorization: JSON.parse(localData)?.token,
      },
    };

    await axios
      .get(`${API_ENDPOINT}/user/profile`, header)
      .then((response) => {
        if (response.status === 401) {
          window.location.replace("/");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    checkUser();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otp-verify" element={<OtpVerification />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/inbox"
            element={
              <PrivateRoute>
                <Inbox />
              </PrivateRoute>
            }
          />
          <Route path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="/broadcast"
            element={
              <PrivateRoute>
                <Broadcast />
              </PrivateRoute>
            }
          />
          <Route path="/template"
            element={
              <PrivateRoute>
                <Template />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
