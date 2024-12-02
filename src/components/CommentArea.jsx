import { Component } from "react";
import { Card } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [], // Stato per i commenti
  };

  

  getComments = () => {
    const { asin } = this.props;

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQzZDQzNmI0MDZiZTAwMTRiN2I3NmMiLCJpYXQiOjE3MzMxNTQwMTUsImV4cCI6MTczNDM2MzYxNX0.OIn3Z7VUA4HhPpkLH_yZ0BWcClcx5Lj_gKNJoWQRo44",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei commenti");
        }
      })
      .then((comments) => {
        this.setState({ comments });
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  };

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps) {
	if (this.props.book && this.props.book.asin !== prevProps.book?.asin) {
	  this.getComments();
  }
  
  }

  render() {
    return (
      <div>
        {this.state.comments.length === 0 ? (
          <div>Nessun commento trovato per questo libro.</div>
        ) : (
          this.state.comments.map((comment) => (
            <Card.Text>
              <strong>{comment.comment}</strong>
              <br />
              Rating: {comment.rate}!
            </Card.Text>
          ))
        )}
      </div>
    );
  }
}

export default CommentArea;
