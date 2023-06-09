import React from 'react'
import styled from 'styled-components'
import SliderComp from './Slider'
import { Zoom } from "react-awesome-reveal";

const Projects = () => {
  return (
    <Section>
    <Container id='project'>
    <Zoom>
      <h1>My <span>Projects</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum corrupti accusantium natus libero alias, laboriosam aliquam iusto culpa reprehenderit totam.</p>
    </Zoom>
      <Slide>
        <SliderComp/>
      </Slide>   
   </Container>
    </Section>
  )
}

export default Projects

const Section = styled.div`
   height: 100vh;
  @media (max-width: 640px) {
    height: 70vh;
   }
`;

const Container = styled.div`
   width: 80%;
   max-width: 1280px;
   margin: 0 auto;
   padding: 3rem 0;
   text-align: center;
   @media (max-width: 840) {
      width: 90%;
   }
   h1{
    margin-top: 5rem;
    font-size: 1.9rem;
    @media (max-width: 640px) {
      margin-top: 0;
   }
   }
   span{
    color: #01be96;
   }
   p{
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0%.9rem;
    @media (max-width: 500px) {
      width: 90%;
    }
   }
`;

const Slide = styled.div`
    
`;