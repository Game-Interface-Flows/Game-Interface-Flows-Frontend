import React from "react";

import { IComment } from "../models/comment";

interface CommentProps {
	comment: IComment;
}

export function Comment({ comment }: CommentProps) {
	return (
		<div className="card comment mb-4">
			<div className="card-body">
				<p>{comment.text}</p>
				<p className="small mb-0 ms-2">{comment.author.username}</p>
			</div>
		</div>
	);
}
