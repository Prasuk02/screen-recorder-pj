import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import LoginPage from "./auth/LoginPage";
import SignupPage from "./auth/SignupPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageNotFound from "./Pages/PageNotFound";
import AuthRoute from "./auth/AuthRoute";

function App() {
  const [isAuthUser, setIsAuthUser] = useState({
    status: false,
    username: "",
  });
  console.log(isAuthUser)
  return (
    <>
      <Router>
        <Navbar username={isAuthUser.username} />
        <Routes>
          <Route
            exact
            path={"/"}
            element={<LoginPage setIsAuthUser={setIsAuthUser} />}
          />
          <Route path={"/signup"} element={<SignupPage setIsAuthUser={setIsAuthUser}/>} />
          <Route
            path={"/home"}
            element={
              <AuthRoute isAuthUser={isAuthUser} Component={Home} />
            }
          />
          <Route path="*" element={<PageNotFound />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
