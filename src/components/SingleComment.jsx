const SingleComment = function (recensione) {
	return (
		<>
			<h5>{recensione.rate}</h5>
			<p>{recensione.comment}</p>
		</>
	);
};

export default SingleComment;
