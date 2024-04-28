import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../App.css";
import styled from "styled-components";

const Scrolup = () => {
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
    <>
      {isVisible && (
        <Container onClick={scrollToTop}>
          <div className="content-container">
            <div className="scroll-to-top">
              <button>
                <FaArrowUp />
              </button>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Scrolup;

const Container = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 9999;
  cursor: pointer;

  .content-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .scroll-to-top {
    background-color: black;
    color: white;
    font-size: 20px;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 36px -1px rgba(0, 0, 0, 0.5);
  }
`;
