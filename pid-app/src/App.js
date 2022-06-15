import Box from "./components/Box.tsx";
import Container from "./components/Container.tsx";
import Intro from "./components/Intro.tsx";
import ProtocolChoose from "./components/protocolChoose.tsx";
import Form from "./components/Form.tsx";
import Grafico from "./components/Grafico.tsx";
function App() {
  return (
    <div className="App">
      <Container>
        <Intro />
        <Box>
          <ProtocolChoose />
          <Form />
        </Box>
        <Box>
          <Grafico />
        </Box>
      </Container>
    </div>
  );
}

export default App;
