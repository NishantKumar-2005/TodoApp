import mongoose from "mongoose";

export const connectDB=mongoose.connect(process.env.MONGO_URI, {
    dbName: "API"
}).then(() => {
    console.log(`database connected ${mongoose.connection.host}`)
}).catch((e) => {
    console.log(e)
});
