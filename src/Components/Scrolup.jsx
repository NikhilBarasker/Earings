import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Scrolup=()=> {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="content-container">
      <div className="scroll-to-top">
        {isVisible && (
          <button onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}
      </div>
    </div>
  );
}

export default Scrolup;
