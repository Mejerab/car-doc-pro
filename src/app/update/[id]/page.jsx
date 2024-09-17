'use client'

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Update = ({params}) => {
    const { data } = useSession();
    const [info, setInfo] = useState([]);
    const loadData = async() =>{
        const res = await fetch(`https://car-doctor-pro-three.vercel.app/my-bookings/api/booking/${params.id}`)
        const resp = await res.json();
        console.log('response', resp);
        
        setInfo(resp);
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const update = {
            message: e.target.message.value
        };
        const res = await fetch(`https://car-doctor-pro-three.vercel.app/my-bookings/api/booking/${params.id}`, {
            method: "PATCH",
            body: JSON.stringify(update),
            headers: {
                'content-type': 'application/json'
            }           
        })
        console.log(res);
        
    }
    useEffect(()=>{
        loadData();
    }, [params])
    
    return (
        <div>
            <div className="w-full bg-black">
                <p className="text-white text-3xl font-semibold p-24">Services details</p>
            </div>
            <div className="bg-base-300 p-7 my-6 rounded-2xl">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-7">
                        <input defaultValue={data?.user?.name} name="name" type="text" className="input border-gray-300 input-bordered w-full" placeholder="Name" disabled />
                        <input defaultValue={data?.user?.email} name="email" type="text" className="input border-gray-300 input-bordered w-full" placeholder="Email" disabled />
                    </div>
                    <textarea defaultValue={info?.response?.message} name="message" rows={4} className="textarea textarea-bordered border-gray-300 w-full my-4" placeholder="Message"></textarea>
                    <button className="btn bg-primary text-white w-full">Confirm Order</button>
                </form>
            </div>
        </div>
    );
};

export default Update;