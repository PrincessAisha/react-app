import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Service from "./pages/service/Service";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/sign-in/SignIn";
import BlogDetails from "./pages/blog/BlogDetails";
import Contact from "./pages/contacts/Contacts";

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
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
