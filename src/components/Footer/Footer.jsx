import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { Slide } from "react-awesome-reveal";


const Footer = () => {

  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m6y2c2m",
        "template_eqi9yq5",
        ref.current,
        "UBtOZjOuGBXlAgKqd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };
  

  
  return (


    <Section>      
    <Container id='footer'>
        <Profile>
            <h1>Portfolio</h1>
            <div className='address'>
                <h1>Address:</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>  
            </div>
            <div className='links'>
                <h1>Contact me directly:</h1>
                <div>
                    <span><FiPhoneCall/></span>
                    <a href="tel:+541168900053">+54 11-6890-0053</a>
                </div>
                <div>
                    <span><HiOutlineMailOpen/></span>
                    <a href="mailto:damianaitor90@gmail.com">damianaitor90@gmail.com</a>
                </div>
            </div>
            <div className="profiles">
                <h1>Check my profile</h1>
                <div className='icons'>
                    <span><a href="#"></a><AiFillGithub/></span>
                    <span><a href="#"></a><AiFillLinkedin/></span>
                    <span><a href="#"></a><BsFacebook/></span>
                    <span><a href="#"></a><BsSlack/></span>
                </div>
            </div>
            <ArrowUp onClick={scrollUp}><AiOutlineArrowUp/></ArrowUp>
        </Profile>
        <Form >
        <Slide direction='right'>

            <form ref={ref} onSubmit={handleSubmit}>
                <div className="namae">
                    <span><CgProfile/></span>
                    <input type="text" placeholder="Name" name="name"/>
                </div>
                <div className="email">
                    <span><MdAlternateEmail/></span>
                    <input type="email" placeholder="Example@google.com" name="email"/>
                </div>
                <div className="message">
                    <span><FiMail/></span>
                    <textarea type="message" cols="30" rows="10" placeholder="Write your message"
              name="message"></textarea>
                </div>
                <button type="submit">Submit</button>
                {success &&
              " Your message has been sent, We'll get back to you soon"}
            </form>
        </Slide>
        </Form>
    </Container>
    </Section>
  );
};

export default Footer

const Section = styled.div`
   scroll-snap-align: center;
   @media (max-width: 640px) {
      height: 130vh;
   }
`;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Profile = styled.div`
  flex: 1;
  margin-top: 2rem;
  @media (max-width: 650px) {
    margin-top: 0;
  }
  .address {
    padding: 1rem 0;
    margin-top: 3rem;
    h1 {
      font-size: 1.2rem;
    }
    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }
  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }
  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }
    .icons {
      display: flex;
      align-items: center;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;
        :hover {
          background-color: orange;
        }
        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  } 
`;

const Form = styled.div`
flex: 1;
  margin-top: 5rem;
  @media (max-width: 650px) {
    margin-top: 0;
  }
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }
  form {
    //background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .namae,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      border-radius: 10px;
      background-color: #191923;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }
    button {  
      margin-top: 0.5rem;
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      font-weight: 700;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      :hover {
        background-color: #018b6e;
      }
    }
  } 
`;

const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  //color: #01be96;
  background-color: #01be96;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }

  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;

