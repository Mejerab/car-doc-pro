import connectDB from "@/lib/connectDB";

export const GET = async(req, {params})=>{
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        const booking = await bookingCollection.find({email: params.email}).toArray();
        return Response.json({booking})
    } catch (error) {
        console.log(error);
    }
}