'use client'
import Image from "next/image";
import { signIn } from 'next-auth/react'
import Link from "next/link";
import SocialLogin from "@/components/SocialLogin";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Login = () => {
    const searchParams = useSearchParams();
    const path = searchParams.get('redirect')
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const res = await signIn('credentials', {
            email,
            password,
            redirect: true,
            callbackUrl: path ? path : '/'
        });
        if (res.status == 200) {
            window.location.replace('/')
        }

    };
    return (
        <div className="h-full my-3 grid grid-cols-2 mx-2">
            <Image src={'/assets/Access_control_system_2_.png'} height={500} width={500} alt="'image" />
            <div className="flex flex-col justify-center border rounded-2xl">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-3xl text-center font-semibold">Login</h3>
                    <div className="w-3/4 mx-auto text-center mt-4">
                        <p className="font-medium text-left">Email: </p>
                        <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="w-3/4 mx-auto text-center mt-4">
                        <p className="font-medium text-left">Password: </p>
                        <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="w-3/4 mx-auto text-center mt-4">
                        <button className="btn bg-primary text-white w-full">Login</button>
                    </div>
                </form>
                <p className="text-center my-4">Or Sign in with</p>
                <SocialLogin />
                <p className="text-center text-gray-500 my-2 font-medium">Don&lsquo;t Have an account? <Link href='/signup' className="text-primary font-medium">sign up</Link></p>
            </div>
        </div>
    );
};
const page = () => {
    <Suspense>
        <Login />
    </Suspense>
}
export default page;