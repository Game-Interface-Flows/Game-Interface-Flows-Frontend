import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/storeContext";

export const GenreFilter: React.FC = observer(() => {
	const { genresStore } = useStore();

	useEffect(() => {
		genresStore.loadGenres();
	}, [genresStore]);

	function handleCheckboxChange(id: number) {
		genresStore.toggleGenreSelection(id);
	}

	return (
		<div>
			<div className="list-group">
				{genresStore.genres.map(genre => (
					<div key={genre.id} className="list-group-item">
						<label className="form-check-label">
							<input
								className="form-check-input"
								type="checkbox"
								checked={genresStore.selectedGenres.includes(genre.id)}
								onChange={() => handleCheckboxChange(genre.id)}
							/>
							{genre.name}
						</label>
					</div>
				))}
			</div>
		</div>
	);
});