import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
