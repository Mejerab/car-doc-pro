'use client'
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

const MyBooking = () => {
    const { data } = useSession();
    const [bookings, setBookings] = useState([]);
    const loadData = () => {
        fetch(`https://car-doctor-pro-three.vercel.app/my-bookings/api/${data?.user?.email}`)
            .then(res => res.json())
            .then(datas => setBookings(datas.booking))
    }
    const handleDelete = async(id) =>{
        const deleted = await fetch(`https://car-doctor-pro-three.vercel.app/my-bookings/api/booking/${id}`, {
            method: 'DELETE'
        })
        const res = await deleted.json();
        if (res?.response?.deletedCount > 0) {
            loadData();
        }
    }
    useEffect(() => {
        loadData();
    }, [data])

    return (
        <table className="table">
            {/* head */}
            <thead className="border-b-0">
                <tr className="border-b-0 text-center">
                    <th>Service Name</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="">
                {
                    bookings.length > 0 && bookings?.map(book =>
                        <tr key={book._id} className="border-gray-300 border-y text-center">
                            <td>{book.title}</td>
                            <td className="text-primary text-lg">${book.price}</td>
                            <td>Purple</td>
                            <td>
                                <Link href={`/update/${book._id}`}><button className="btn bg-primary border-none text-white mr-4">Edit</button></Link>
                                <button onClick={()=>handleDelete(book._id)} className="btn text-white btn-error">Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default MyBooking;