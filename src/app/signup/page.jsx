'use client'

import Image from "next/image";
import Link from "next/link";
import SocialLogin from "@/components/SocialLogin";
import { Suspense } from "react";

const Signup = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/signup/api`, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json'
            }
        })
        console.log(res);
    }
    return (
        <div className="h-full my-3 grid grid-cols-2 mx-2">
            <Image src={'/assets/Access_control_system_2_.png'} height={500} width={500} alt="'image" />
            <div className="flex flex-col justify-center border rounded-2xl">
                <form>
                    <h3 className="text-3xl text-center font-semibold">Sign Up</h3>
                    <div className="w-3/4 mx-auto text-center mt-4">
                        <p className="font-medium text-left">Name: </p>
                        <input id="name" type="text" placeholder="Type here" className="input input-bordered w-full" required />
                    </div>
                    <div className="w-3/4 mx-auto text-center mt-4">
                        <p className="font-medium text-left">Email: </p>
                        <input id="email" type="text" placeholder="Type here" className="input input-bordered w-full" required />
                    </div>
                    <div className="w-3/4 mx-auto text-center mt-4">
                        <p className="font-medium text-left">Password: </p>
                        <input id="password" type="text" placeholder="Type here" className="input input-bordered w-full" required />
                    </div>
                    <div className="w-3/4 mx-auto text-center mt-4">
                        <button onClick={handleSubmit} className="btn bg-primary text-white w-full">Sign Up</button>
                    </div>
                </form>
                <p className="text-center my-4">Or Sign in with</p>
                <SocialLogin />
                <p className="text-center text-gray-500 my-2 font-medium">Have an account? <Link href='/login' className="text-primary font-medium">Login</Link></p>
            </div>
        </div>
    );
};
const page = () => {
    <Suspense>
        <Signup />
    </Suspense>
}
export default page;