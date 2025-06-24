import mongoose from 'mongoose'

const connectDB = async () =>{
    mongoose.connection.on('connected',()=>{
        console.log('Connected with DB!');
    })
    mongoose.connection.on('error',(err)=>{
        console.error('Mongodb connection error',err);
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/aiblog`);
}

export default connectDB;
