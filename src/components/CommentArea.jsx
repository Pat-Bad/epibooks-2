import { Component } from "react";

import { Card } from "react-bootstrap";


//devo creare lo spazio in cui scrivere le recensioni da POSTARE nell'API
//devo fare la post dei commenti

class CommentArea extends Component {
	state = { CommentArea: [] };

	getComments = () => {
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
					throw new Error();
				}
			})

			.then((arrayOfComments) => {
				this.setState({
					CommentArea: arrayOfComments,
				});
			})
			.catch((err) => {
				console.log("errore", err);
			});
	};

	componentDidUpdate(prevProps){
		if(this.props.comment !== prevProps.comment) 
		{
			this.getComments()
		}

	}

	componentDidMount() {
		this.getComments();
	};

	render() {
		return (
			<>
				{this.state.CommentArea.map((comm) => {
					return (
						<Card.Text>
								{this.state.comm.comment}
								<br />
								{this.state.comm.rate}!
                                </Card.Text>
					);
				})}
			</>
		);
	}
}



export default CommentArea;
