import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/home";
import Service from "./pages/service/Service";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //open a router and put the header & footer in it
  //then, in between the header & footer, open routes and have the pages (Home, About, Service, blog) in it. 
  // Then each pages will be in a route path

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
