import "./App.css";
import React from "react";
import Header from "./shared/components/layout/header";
import Footer from "./shared/components/layout/footer";
import Page from "./app/home/page";

const App = () => (
  <div className="App">
    <Header />
    <Page />
    <Footer />
  </div>
);

export default App;
