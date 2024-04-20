'use client'
import { useState, useEffect } from 'react';
import type { Skill } from './utils/interfaces';
import { getSkills, postSkill, trackSkill } from './utils/api_functions';

export default function Page() {
	const [skills, setSkills] = useState<Skill[]>([]);
	const [display, setDisplay] = useState<string>('none');

	useEffect(() => {
		(async () => {
			const fetchedSkills = await getSkills();
			setSkills(fetchedSkills);
		})();
	}, []);

	const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const name = formData.get('name') as string;
		const description = formData.get('description') as string;

		if (name && description) {
			const skill = await postSkill({ name, description });
			setSkills(prevSkills => [...prevSkills, skill]);
			setDisplay('none');
		}
	};

	return (
		<div className="container">
			<dialog className="container" style={{ display: `${display}` }}>
				<form onSubmit={onFormSubmit}>
					<label>Name: </label>
					<input type="text" name="name" required />
					<label>Description: </label>
					<input type="text" name="description" required />
					<button type="submit">Submit</button>
					<button type="button" onClick={() => setDisplay('none')}>Cancel</button>
				</form>
			</dialog>
			<h2>List of Skills:</h2>
			<div className="container">
				{skills.map((skill, i) => (
					<div key={skill._id}>
						<h3>
							{skill.name} - <button onClick={async () => {
								await trackSkill(skill._id);
								const fetchedSkills = await getSkills();
								setSkills(fetchedSkills);
							}}>Tracking: {skill.tracking ? 'Yes' : 'No'}</button>
						</h3>
					</div>
				))}
			</div>
			<button onClick={() => setDisplay('block')}>Add Skill</button>
		</div>
	);
}
