import { redirect } from "next/navigation";
import { auth } from "../auth";
import StatusCard from "../components/StatusCard";
import { getUser } from "../utils/api_functions";
import { type User } from "../utils/interfaces";

export default async function Page() {
	const session = await auth();
	if (!session) return redirect('/login');
	const {user} = await getUser(session.user.id);
	const {firstName, _id, password, lastName, birthday, username, skills, level, experience} = user;
	const status:User = {firstName, _id, password, lastName, birthday, username, skills, level, experience};
	return (
		<div>
			<StatusCard status={status}/>
		</div>
	);
}