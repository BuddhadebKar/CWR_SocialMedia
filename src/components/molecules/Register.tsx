import { Button, Card, CardFooter, CardHeader, Input } from '@nextui-org/react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../lib/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'



interface RegisterFormInterface {
    email: string,
    password: string,
    ConfirmPassword: string,
}




const Register = () => {


    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<RegisterFormInterface>()

    async function onSubmit(values: RegisterFormInterface) {
        if (values.password === values.ConfirmPassword) {
            createUserWithEmailAndPassword(auth, values.email, values.password).then(() => {
                navigate('/login')
            })
        }
        else {
            alert('Your password and confirm password did not match')
        }
        console.log(values)
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <Card className='w-96 p-8 flex flex-col gap-4'>
                <CardHeader>
                    <h1 className='text-2xl text-violet-600 font-bold'>Register Here</h1>
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
                    <Input
                        isRequired
                        type="password"
                        label="Confirm Password"
                        defaultValue=""
                        className="max-w-xs"
                        {...register("ConfirmPassword")}
                    />
                    <Button type='submit' color="secondary">Register Now</Button>
                </form>
                <CardFooter className='justify-center items-center'>
                    <Link to='/login' className='underline text-purple-600'>Already register? Login here</Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Register