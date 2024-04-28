import React,{useState} from 'react'
import { IoChatbubbleSharp } from "react-icons/io5";
// import ChatBox from './ChatBox';
import styled from "styled-components";

export default function ChatBoxLogo() {

 const [showChatBox, setShowChatBox] = useState(false);

 const toggleChatBox = () => {
   setShowChatBox(true); // Show the chat box when clicked
 };
  return (
    <Container onClick={toggleChatBox}>
      <div className="content-container">
        <div className="scroll-to-top">
          <button>
            <IoChatbubbleSharp />
          </button>
        </div>
      </div>
      {/* {showChatBox && <ChatBox />} */}
    </Container>
  ); 
}


const Container = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 70px;
  right: 10px;
  z-index:1000;
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
  
