import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={'/'} element={<LoginPage/>}/>
          <Route path={'/signup'} element={<SignupPage/>}/>
          <Route path={'/home'} element={<Home/>}/>
          <Route/>
        </Routes>
      </Router>
    </>
  );
}

export default App;