import Box from "./components/Box.tsx";
import SubBox from "./components/SubBox.tsx";
import Container from "./components/Container.tsx";
import Intro from "./components/Intro.tsx";
import ProtocolChoose from "./components/protocolChoose.tsx";
import Form from "./components/Form.tsx";
import Grafico from "./components/Grafico.tsx";
import Description from "./components/Description.tsx";
function App() {
  return (
    <div className="App">
      <Container>
        <Intro HeroText="Controle PID com esp32" />
        <Box>
          <SubBox>
           <Description/> 
          </SubBox>
          <SubBox>
            <Form />
          </SubBox>
        </Box>
        <Box>
          <Grafico />
        </Box>
      </Container>
    </div>
  );
}

export default App;
