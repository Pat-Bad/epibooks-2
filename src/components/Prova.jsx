import { Component } from "react";
import CommentsList from "./CommentsList";

class ListaCommenti extends Component {
  state = { comment: null };

  getCommentData() {
    fetch("https://striveschool-api.herokuapp.com/api/comments/0786966246", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQzZDQzNmI0MDZiZTAwMTRiN2I3NmMiLCJpYXQiOjE3MzI4MDM2ODksImV4cCI6MTczNDAxMzI4OX0.X4pcqft6TnYz8rwNwlObvbskmjwu9S9gsW0N32HWMQY",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        this.setState({
          comment: data,
        });
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

  render() {
    return (
      <>
        {this.state.comment && (
          <>
            <h5>{this.state.comment.rate}</h5>
            <p>{this.state.comment.comment}</p>
          </>
        )}
      </>
    );
  }
}

export default ListaCommenti;
