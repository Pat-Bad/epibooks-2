import { Component } from "react";
import { Col, Row, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedAsin: null,  // Stato per il codice asin del libro selezionato
  };

  // Funzione per selezionare un libro
  selectBook = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <>
        {/* Ricerca libro */}
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
          {/* Colonna a sinistra: Griglia di libri */}
          <Col xs={6} md={4}>
            <Row>
              {this.props.books
                .filter((book) =>
                  book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
                )
                .map((book) => (
                  <Col xs={6} md={4} key={book.asin}>
                    <SingleBook
                      book={book}
                      onClick={() => this.selectBook(book.asin)}  // Passiamo il codice asin al click
                    />
                  </Col>
                ))}
            </Row>
          </Col>

          {/* Colonna a destra: CommentArea */}
          <Col xs={6} md={4}>
            {this.state.selectedAsin ? (
              <CommentArea asin={this.state.selectedAsin} />
            ) : (
              <div>Seleziona un libro per vedere i commenti!</div>
            )}
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
