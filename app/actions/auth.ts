import { signIn } from '../../auth'
import { signInSchema } from '../../lib/zod';
import { registerUser } from '../../utils/api_functions';
import { saltAndHashPassword } from '../../utils/password';


export async function register(formData: FormData) {
    "use server"
    const email = formData.get('email');
    const password = formData.get('password');
    const pwHash = saltAndHashPassword(password.toString());
    const lastName = formData.get('lastName');
    const firstName = formData.get('firstName');
    const birthday = formData.get('birthday');
    const username = formData.get('username');
    const body = { email, password: pwHash, lastName, firstName, birthday, username }
    const user = await registerUser(body);
    await signIn("credentials", formData)
}

export async function login(formData: FormData) {
    "use server"
    // Validate form fields
    const validatedFields = signInSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { email, password } = validatedFields.data
    await signIn("credentials", validatedFields.data, {callBackUrl: "/"})
}