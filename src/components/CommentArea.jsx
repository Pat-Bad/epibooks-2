import { Component } from "react";
import { Form } from "react-bootstrap/lib/Navbar";

//devo creare lo spazio in cui scrivere le recensioni da POSTARE nell'API

class CommentArea extends Component {
    render(){
    return (
        <Form.Group className="mb-3">
        <Form.Label>COMMENT</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    )
}
}