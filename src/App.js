import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/componet/navbar/navbar";
import Home1 from "../src/componet/Home1/home1";
import Support from "../src/componet/Support/support";
import About from "../src/componet/about/about";
import Tour from "../src/componet/tour/tour";
import Service from "../src/componet/service/service";
import Blog from "../src/componet/blog/blog";
import Testimony from "../src/componet/testimony/testimony";
import Question from "../src/componet/Questions/question";
import Login from "../src/componet/login/login";
import Footer from "../src/componet/footer/footer";
import Movie from "./componet/movies/movies";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimony" element={<Testimony />} />
          <Route path="/question" element={<Question />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<Movie />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
