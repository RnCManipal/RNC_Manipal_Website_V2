import React, { useEffect, useRef } from "react";
import "./Header.css";

const Header2 = ({ title, subtitle }) => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const element = typewriterRef.current;
    if (element) {
      element.classList.remove("typewriter");
      void element.offsetWidth;
      element.classList.add("typewriter");
    }
  }, [subtitle]);

  return (
    <div className="header header2">
      <div className="header-contents">
        {subtitle && (
          <div className="typewriter" ref={typewriterRef}>
            <h4>
              <span>{subtitle}</span>
            </h4>
          </div>
        )}
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Header2;
