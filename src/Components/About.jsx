import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../App.css'
import Avatar from 'react-avatar';

export default function About() {
  return (
    <div>
      <div className="ApoutPage">
        <h1 style={{
          color:'#fff'
        }}>About Us</h1>
        <p><Link to={'/'} >Home</Link></p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
      >
    <Container1>
        <div
          className="container1 mt-2"
          style={{background: 'linear-gradient(90deg, rgb(255 255 255) 0%, rgb(168 126 111 / 39%) 35%, rgb(255 255 255 / 5%) 100%)'}}
          id="history"
          // style={{alignItems: "left" }}
        >
          <h3 style={{fontSize:'30px',margin:'0 0 0 20px'}} >History</h3>
          <br />

          <p className='Info1 text-justify' style={{margin:'0 0 0 20px'}}>
            &nbsp; &nbsp;Established in 1978 by a group of passionate cricket
            enthusiasts, Sahas Cricket Club was born out of a shared vision to
            create a nurturing environment where cricketing talent could
            flourish. Named after the Sanskrit word "Sahas," meaning courage and
            determination, the club set out on a journey to become a beacon of
            excellence in the world of cricket. <br />
            <br />
            &nbsp; &nbsp;In its early years, Sahas Cricket Club started
            modestly, with makeshift facilities and limited resources. However,
            fueled by the dedication and commitment of its founders, the club
            quickly gained recognition for its emphasis on skill development and
            sportsmanship. Throughout the 1980s and 1990s, Sahas Cricket Club
            emerged as a dominant force in local cricketing circles,
            consistently producing talented players who showcased their prowess
            on the field. The club's focus on youth development became its
            hallmark, with a strong emphasis on providing opportunities for
            young cricketers to hone their skills and realize their potential.{" "}
            <br />
            <br />
            &nbsp; &nbsp;As Sahas Cricket Club continued to grow in stature, it
            expanded its reach beyond just training and coaching. The club
            became deeply involved in community initiatives, organizing
            cricketing events and tournaments to promote the sport at the
            grassroots level. Additionally, Sahas Cricket Club was at the
            forefront of advocating for gender inclusivity in cricket, actively
            supporting the growth of women's cricket and providing equal
            opportunities for female players. <br />
            <br />
            &nbsp; &nbsp;In the new millennium, Sahas Cricket Club entered a
            phase of modernization, investing in state-of-the-art facilities and
            technology to further enhance its training programs. Under the
            guidance of experienced coaches and mentors, the club adopted
            innovative training methodologies aimed at nurturing well-rounded
            cricketers equipped with both technical skills and a strong sense of
            sportsmanship. <br />
            <br />
            &nbsp; &nbsp;Today, Sahas Cricket Club stands as a symbol of
            excellence and inclusivity in the cricketing world. With a rich
            legacy spanning over four decades, the club continues to inspire
            generations of cricketers to pursue their dreams with courage and
            determination, embodying the spirit of Sahas both on and off the
            cricket pitch.
          </p>
        </div>
    </Container1>
    <div className="flex mx-20 my-6 ">
      <div className="w-[35%] ">
      <Avatar src='https://th.bing.com/th/id/OIP.Yj2jc7gOT84nZ3DQwckQFAHaFf?rs=1&pid=ImgDetMain' size={400} round={true} />
      </div>
      <div className="w-[60%] bg-gradient-to-r from-brown-100 to-gray-400 px-9">
        <p className='text-3xl mt-20 leading-9 font-serif'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione blanditiis esse sunt laborum eos illo suscipit id voluptatibus? Quaerat consectetur, illo aliquid ipsum molestias incidunt blanditiis unde laudantium quas laboriosam.</p>
      </div>
    </div>
                
      </div>
    </div>
  );
}



const Container1 = styled.div `
width: 90vw;
height: auto;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
/* border: 2px solid red; */
`;
