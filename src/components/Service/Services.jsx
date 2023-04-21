import React from 'react'
import styled from "styled-components";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineCode } from "react-icons/ai";
import { RiFilePptLine } from "react-icons/ri";
import Card from './Card';
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Section>
    <Container id='service'>
    <Slide direction="down">
       <h4>My <span>services</span></h4>
       <h1>What I Do</h1>
         </Slide>
       <Cards>
       <Slide direction="left">
        <Card 
        Icon={CgWebsite}
        title = {"ui/ux designer"}
        disc = {`fieifewoifoifow odwoofewofwoeofw ofewofoefoweofew ofeofkrkfe`}
        />
        </Slide>
        <Slide direction="right">
        <Card 
        Icon={AiOutlineCode}
        title = {"ui/ux designer"}
        disc = {`fieifewoifoifow odwoofewofwoeofw ofewofoefoweofew ofeofkrkfe`}
        />
        </Slide>
        <Slide direction="left">
        <Card 
        Icon={RiFilePptLine}
        title = {"ui/ux designer"}
        disc = {`fieifewoifoifow odwoofewofwoeofw ofewofoefoweofew ofeofkrkfe`}
        />
        </Slide>
       </Cards>
    </Container>
    </Section>
  )
}

export default Services

const Section = styled.div`
  height: 100vh;
  @media (max-width: 640px) {
      height: 120vh;
   }
`;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    padding-top: 0.5;
  }
  h4{
    color: #01be96;
    font-weight: 500;
    margin-top: 3rem;
    @media (max-width: 640px) {
    margin-top: -1rem;
  }
  }
  @media (max-width: 640px) {
    width: 80%;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
  @media (max-width: 640px) {
    margin-top: 2rem;
  }
`;

