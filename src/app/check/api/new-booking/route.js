import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async(req)=>{
    const data = await req.json();
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        await bookingCollection.insertOne(data)
        return NextResponse.json({message: 'Service booked'})
    } catch (error) {
        console.log(error);
    }
}