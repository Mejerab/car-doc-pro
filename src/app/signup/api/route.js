import connectDB from "@/lib/connectDB";
import bcrypt from 'bcrypt';

export async function POST(req) {
    const newUser = await req.json();
    try {
        const db = await connectDB()
        const userCollection = db.collection('users');
        const exist = await userCollection.findOne({email: newUser.email});
        if (exist) return Response.json({
            message: 'User already Exists',
            status: 304
        })
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);
        const res = await userCollection.insertOne({...newUser, password: hashedPassword});
        console.log(res);
        
        return Response.json({
            messsage: 'User created',
            status: 200
        })
    } catch (error) {
        return Response.json({
            message: 'Something went wrong',
            error,
            status: 500
        })        
    }
}