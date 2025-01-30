import React, { useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const element = typewriterRef.current;
    if (element) {
      element.classList.remove("typewriter");
      void element.offsetWidth;
      element.classList.add("typewriter");
    }
  }, []);

  return (
    <div className="header">
      <div className="header-contents">
        <div className="typewriter" ref={typewriterRef}>
          <h6>
            <span>Engineering Creativity.</span>
          </h6>
        </div>
        <h1>Robotics and Circuits</h1>
        <h4>Manipal Institute of Technology, Manipal</h4>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
