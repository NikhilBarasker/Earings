import React, { useState, useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa";

export default function Scrollup3() {
const [isVisible, setIsVisible] = useState(false);
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const listenToScroll = () => {
  let heightToHidden = 250;
  const windowScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
};

useEffect(() => {
  window.addEventListener("scroll", listenToScroll);
});

  return (
    <div>
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          {/* <i class="bi bi-arrow-up"></i> */}
          <FaArrowUp style={{color:'red'}} />
        </div>
      )}
    </div>
  );
}
