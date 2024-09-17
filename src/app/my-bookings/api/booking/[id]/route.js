import connectDB from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        const res = await bookingCollection.deleteOne({ _id: new ObjectId(params.id) })
        return NextResponse.json({ message: 'Booking deleted', response: res })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Something went wrong' })
    }
}

export const PATCH = async (req, { params }) => {
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    const updatedDoc = await req.json();
    try {
        const res = await bookingCollection.updateOne(
            { _id: new ObjectId(params.id) },
            {
                $set: {
                    ...updatedDoc
                }
            },
            { upsert: true }
        )
        return NextResponse.json({ message: 'Booking deleted',response: res })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Something went wrong' })
    }
}

export const GET = async (req, { params }) => {
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        const res = await bookingCollection.findOne({ _id: new ObjectId(params.id) })
        return NextResponse.json({ message: 'Booking found',response: res })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Something went wrong' })
    }
}