import styled from "styled-components";
import Hearder from "./components/Banner/Hearder";
import ProfComponent from "./components/Banner/ProfComponent";
import Services from "./components/Service/Services";
import Projects from "./components/Projects/Projects";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Container>
      <Banner>
        <Hearder/>
        <ProfComponent/>
      </Banner>

      <UpMiddel>
      <Services/>
      </UpMiddel>
      
      <Middel>
      <Light>
        <Projects/>
      </Light>
      </Middel>
      
      <UnderMiddel>
      <Clients/>
      </UnderMiddel>
      
      <Light>
       <Footer/>
      </Light>

    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #1f242d;
  scroll-behavior: smooth;
  overflow-y: auto;
`;

const Banner = styled.div`
  //background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 1rem;
  }
`;

const UpMiddel = styled.div`
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 1rem;
  }
`;

const Middel = styled.div`
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 1rem;
  }
`;

const UnderMiddel = styled.div`
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 1rem;
  }
`;

const Light = styled.div`
  //background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 1rem;
  }
`;
