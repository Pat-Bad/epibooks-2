import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  };

  //come seleziono un libro? devo cambiare lo STATE. Fuori dal render sennò impazzisce

  selectABook = (book) => {
    this.setState({ selectedBook: book });
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="g-2 mt-3">
          <Col xs={6} md={4}>
            <Row>
              {
                //qui devo fare due colonne: una per i libri e una per la comment area
                this.props.books
                  .filter((b) =>
                    b.title.toLowerCase().includes(this.state.searchQuery)
                  )
                  .map((b) => (
                    <Col xs={6} md={4} key={b.asin}>
                      <SingleBook
                        book={b}
                        //qui l'onClick
                        onClick={() => this.selectABook(b)}
                      />
                    </Col>
                  ))
              }
            </Row>
          </Col>
          <Col xs={6} md={4}>
            {/*operatore ternario per mostrare o meno la comment area*/}
            {this.state.selectedBook ? (
              <CommentArea book={this.state.selectedBook} />
            ) : (
              <div></div>
            )}
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
