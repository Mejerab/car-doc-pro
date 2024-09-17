import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async(req, {params})=>{
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        const booking = await bookingCollection.find({email: params.email}).toArray();
        return NextResponse.json({booking})
    } catch (error) {
        console.log(error);
    }
}