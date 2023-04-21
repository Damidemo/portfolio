import React from "react";
import styled, { keyframes } from "styled-components";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const ProfComponent = () => {


  return (
    <Section>

    <Container id="home">
      <Left>
      <Text>
        <h2>
          Hello <span>I'am</span>
        </h2>
        <h1>Damian Vazquez</h1>
        <h3>Front-end development</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          voluptas dolore ullam illo consequatur at ipsa dignissimos, distinctio
          praesentium optio?
        </p>
        <button><a href="#footer">Let's talk</a></button>
        <Social>
          <p>Check out my</p>
          <div className="social-icons">
            <span>
              <a href="https://www.instagram.com/damovazquez/?igshid=YmMyMTA2M2Y%3D">
                <BsInstagram />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/aitor-vazquezd">
                <BsLinkedin />
              </a>
            </span>
            <span>
              <a href="https://www.youtube.com/channel/UCqU15IuTZRLiiZix2Leq4dg">
                <BsYoutube />
              </a>
            </span>
          </div>
        </Social>
      </Text>
      </Left>
      <Rigth>
      <Profile>
        <img src="./image/gintoki.png" alt="" />
      </Profile>
      </Rigth>
    </Container>
    </Section>
  );
};

export default ProfComponent;

const Section = styled.div`
   height: 100vh;
   scroll-snap-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   @media (max-width: 640px) {
      height: 130vh;
   }
`;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  scroll-snap-align: center;
  height: 100vh;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media (max-width: 640px) {
      flex: 1;
      align-items: center;
      margin-top: 8rem;
      height: 2rem;
   }
`;

const Rigth = styled.div`
    flex: 1; 
    position: relative;
    top: 20%;
    height: 50%;
    @media (max-width: 640px) {
      flex: 1;
      height: 2rem;
   }
`;


const Text = styled.div`

  @media (max-width: 690px) {
    padding: 2px;
  }
  h2 {
    font-weight: 500;
    animation: slideBottom 1s ease forwards;
    animation-delay: .4s;

  }
  h1 {
    animation: slideRight 1s ease forwards;
    animation-delay: .4s;
    font-size: 3rem;
    letter-spacing: 2px;
    color: #01be96;
    font-weight: 700;
    @media (max-width: 690px) {
        font-size: 3rem;
        }
  }
  span {
    color: #01be96;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
    animation: slideTop 1s ease forwards;
    animation-delay: .4s;
  }
  p {
    font-weight: 300;
    animation: slideTop 1s ease forwards;
    animation-delay: .4s;
    @media (max-width: 690px) {
      font-size: 15px;
        }
  }
  button {
    padding: 0.7rem 0rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border-radius: 10px;
    border: none;
    animation: slideRight 1s ease forwards;
    animation-delay: .4s;
    a{
            color: #fff;
            text-decoration: none;
            font-weight: 700;
            //background-color: #fff;
            margin: 5px;
            letter-spacing: 1px;
            padding: 1rem;
        }
    :hover {
      background-color: #018b6e;
    }
    @media (max-width: 690px) {
        margin-top: 2rem;
        }
        
  }
`;

const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 690px) {
      margin-top: 2rem;
        }
  
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
        font-size: 0.7rem;
        }
  }
  .social-icons {
    animation: slideTop 1s ease forwards;
    animation-delay: .4s;
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      -webkit-clip-path: polygon(
        50% 0%,
        83% 12%,
        100% 43%,
        94% 78%,
        68% 100%,
        32% 100%,
        6% 78%,
        0% 43%,
        17% 12%
      );
      clip-path: polygon(
        50% 0%,
        83% 12%,
        100% 43%,
        94% 78%,
        68% 100%,
        32% 100%,
        6% 78%,
        0% 43%,
        17% 12%
      );
      :hover{
        transform: rotate(360deg);
      }
    }
    a{
        color: #fff;
        cursor: pointer;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%,-50%);
        
    }
  }
`;

const Profile = styled.div`
    animation: slideLeft 1s ease forwards;
    animation-delay: .4s;
    img{
        width: 25rem;
        filter: drop-shadow(0px 10px 10px #01be9570);
        transition: transform 400ms ease-in-out;
        @media (max-width: 790px) {
            width: 20rem;
        }
        @media (max-width: 660px) {
            width: 18rem;
        }
        @media (max-width: 640px) {
            width: 100%;
            height: 15rem;
            //margin-top: 2rem;
        }
    }
    :hover{
        transform: translateY(-10px);
    }
`;
