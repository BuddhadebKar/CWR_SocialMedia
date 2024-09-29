import { Button, Card, CardFooter, CardHeader, Input } from '@nextui-org/react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../lib/firebase'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'


interface logInFormInterface {
    email: string,
    password: string
}




function Login() {

    const provider = new GoogleAuthProvider()
    const { register, handleSubmit } = useForm<logInFormInterface>()
    const navigate = useNavigate()

    async function onSubmit(values: logInFormInterface) {
        await signInWithEmailAndPassword(auth, values.email, values.password).then(() => {
            navigate('/')
        }
        )
        console.log(values)
    }

    //on click function of s""sign with google"
    async function signInWithGoogle() {
        signInWithPopup(auth, provider).then(() => {
            navigate('/')
        })
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <Card className='w-96 p-8 flex flex-col gap-4'>
                <CardHeader>
                    <h1 className='text-2xl text-violet-600 font-bold'>LogIn Here</h1>
                </CardHeader>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
                    <Input
                        isRequired
                        type="email"
                        label="Email"
                        defaultValue=""
                        className="max-w-xs"
                        {...register("email")}
                    />
                    <Input
                        isRequired
                        type="password"
                        label="Password"
                        defaultValue=""
                        className="max-w-xs"
                        {...register("password")}
                    />
                    <Button type='submit' color="secondary">Log in</Button>
                    <Button color="primary" onClick={signInWithGoogle}>SignIn with Google</Button>
                </form>
                <CardFooter className='justify-center items-center'>
                    <Link to='/Register' className='underline text-purple-600'>Don't have account? Register now</Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login