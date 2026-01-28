import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experince/Experience";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import { Navigate } from "react-router-dom";

function App() {
  // This array of objects is used for the Navigation Panel
  const linksArr = [
    {
      link: "Home",
      icon: "home",
      url: "/Home",
    },
    {
      link: "About",
      icon: "support_agent",
      url: "/About",
    },
    {
      link: "Services",
      icon: "work",
      url: "/Services",
    },
    {
      link: "Experience",
      icon: "school",
      url: "/Experience",
    },
    {
      link: "Works",
      icon: "stacks",
      url: "/Works",
    },
    {
      link: "Testimonial",
      icon: "people",
      url: "/Testimonial",
    },
    {
      link: "Blog",
      icon: "edit_note",
      url: "/Blogs",
    },
    {
      link: "Contact",
      icon: "forum",
      url: "/Contact",
    },
  ];

  // This array of objects is used for the Social Madia links
  const socialLinks = [
    {
      url: "https://www.facebook.com/debpriya.ghosh.98",
      network: "facebook",
    },
    {
      url: "https://www.instagram.com/deb_priya75/",
      network: "instagram",
    },
    {
      url: "https://www.linkedin.com/in/debpriya-ghosh-3207732a1/",
      network: "linkedin",
    },
    {
      url: "https://github.com/Debpriya75",
      network: "github",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Router>
        <Sidebar links={linksArr} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner icons={socialLinks} />
                <About />
                <Services />
                <Experience />
                <Testimonial />
                <Blog />
                <Contact />
              </>
            }
          />
          <Route path="/Home" element={<Navigate to="/" />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Blogs" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="h-screen w-screen md:w-4/5 md:float-right grid place-content-center place-items-center">
                <h1 className="text-center text-black">404 - Page Not Found</h1>
                <h3 className="text-orange-500">Work In Progress...</h3>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
