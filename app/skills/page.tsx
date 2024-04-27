import { getUser } from '../../utils/api_functions';
import { auth } from '../../auth';
import { redirect } from 'next/navigation';
import Form from './Form';

export default async function Page() {
    const session = await auth();
    if (!session) return redirect('/login');
    const { user } = await getUser(session.user.id);



    return (
        <div className="container">
            <Form user={user}/>
        </div>
    );
}
