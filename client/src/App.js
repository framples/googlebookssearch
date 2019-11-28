import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="appWrapper">
        <div className="notFooter">
          <Navbar />

          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Wrapper>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
