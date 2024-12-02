import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Container, Row, Col } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";


function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <Row>
          <Col>
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
        </Col>
        
        </Row>
      </Container>
    
      <MyFooter />
    </>
  );
}

export default App;
