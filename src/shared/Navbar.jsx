'use client'
import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const session = useSession();
    console.log(session);
    
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Service',
            path: '/services'
        },
        {
            title: 'My Bookings',
            path: '/my-bookings'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
    ]
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost hover:bg-white text-xl"><Image src='/assets/Group 2.svg' height={70} width={70} alt="logo" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links.map(link=>
                            <li className="font-semibold" key={link.title}><Link href={link.path}>{link.title}</Link></li>
                        )
                    }
                </ul>
            </div>
            <div className="navbar-end">
            <MdOutlineShoppingBag className="text-gray-600 text-xl mx-1"/>
                   <IoSearchSharp className="text-gray-600 text-xl mx-1 mr-5"/>
                <a className="btn btn-primary text-white">Appointment</a>
                {
                    session.status === 'authenticated' ? <button onClick={()=>signOut()} className="text-primary bg-white px-8 btn ml-3">Logout</button> : <Link href='/login'><button className="text-primary bg-white px-8 btn ml-3">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;