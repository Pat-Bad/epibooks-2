//CommentArea è l'array di recensioni da prendere come prop
import SingleComment from "./SingleComment";

const CommentsList = function (CommentArea) {
	CommentArea.map((recensione) => {
		return <SingleComment recensione={CommentArea.comment} />;
	});
};

export default CommentsList;
