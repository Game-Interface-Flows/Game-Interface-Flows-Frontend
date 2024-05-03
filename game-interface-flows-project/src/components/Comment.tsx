import React from "react";

import { IComment } from "../models/comment";

interface CommentProps {
    comment: IComment
} 

export function Comment({comment}: CommentProps) {
	return (
		<div className="card mb-4">
			<div className="card-body">
				<p>{comment.text}</p>
				<div className="d-flex justify-content-between">
					<div className="d-flex flex-row align-items-center">
						<img src={comment.author.profile_photo_url} alt="avatar" width="25"
							height="25" />
						<p className="small mb-0 ms-2">{comment.author.username}</p>
					</div>
				</div>
			</div>
		</div>
	);
}