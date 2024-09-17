import connectDB from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const DELETE = async (req, { params }) => {
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        const res = await bookingCollection.deleteOne({ _id: new ObjectId(params.id) })
        return Response.json({ message: 'Booking deleted', response: res })
    } catch (error) {
        console.log(error);
        return Response.json({ message: 'Something went wrong' })
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
        return Response.json({ message: 'Booking deleted', response: res })
    } catch (error) {
        console.log(error);
        return Response.json({ message: 'Something went wrong' })
    }
}

export const GET = async (req, { params }) => {
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        const res = await bookingCollection.findOne({ _id: new ObjectId(params.id) })
        return Response.json({ message: 'Booking found', response: res })
    } catch (error) {
        console.log(error);
        return Response.json({ message: 'Something went wrong' })
    }
}