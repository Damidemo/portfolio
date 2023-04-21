import React from "react";
import styled from "styled-components";
import { IoIosQuote } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

const ClientSlider = (props) => {
  const { name, position, img_url, stars, disc } = props.item;

  return (
    <Constainer>
      <Header>
        <span className="quote">
          <IoIosQuote />
        </span>
        <div>
        {Array(stars).fill().map((_, i) => (
            <span className="star" key={i}>
              <AiOutlineStar />
            </span>
          ))}
          </div>
      </Header>
      <Body>{disc}</Body>
      <Footer>
        <img src={img_url} alt={name} />
        <div className="details">
          <h1>{name}</h1>
          <p>{position}</p>
        </div>
      </Footer>
    </Constainer>
  );
};

export default ClientSlider;

const Constainer = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1.5rem 1rem;
  margin: 0 1rem;
  border-radius: 15px;
  -webkit-box-shadow: 13px 0px 12px -5px rgba(0,0,0,1);
-moz-box-shadow: 13px 0px 12px -5px rgba(0,0,0,1);
box-shadow: 13px 0px 12px -5px rgba(0,0,0,1);
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .quote{
        font-size: 3rem;
        color: #01be96;
        opacity: 0.7;
    }
    .star{
        color: #ffcd3c;
        font-size: 1.3rem;
    }
`;

const Body = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 5rem;
    border-radius: 50px;
  }
  h1 {
    font-size: 1.2rem;
    font-weight: 700;
    @media (max-width: 580px) {
        font-size: 1rem;
    }
    @media (max-width: 540px) {
        font-size: 0.9rem;
    }
  }
  p {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    @media (max-width: 540px) {
        font-size: 0.6rem;
    }
  }
`;
