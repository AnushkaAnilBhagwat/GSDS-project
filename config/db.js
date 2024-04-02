import mongoose from "mongoose";

const connectDB = async() => {
    try{
        const con = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`Connected to database ${con.connection.host}`);
    } catch(error){
        console.log(`Error in MongoDB ${error}`);
    }
}