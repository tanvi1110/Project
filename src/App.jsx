// App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import GroupSection from "./components/GroupSection";
import Footer from "./components/Footer";
import PostsSection from "./components/PostsSection";

function App() {
  return (
    <div className="App">
      <Header />
      <PostsSection/>
     
      <Footer />
    </div>
  );
}

export default App;