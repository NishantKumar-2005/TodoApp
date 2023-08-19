import mongoose from "mongoose";

export const connectDB=mongoose.connect(process.env.MONGO_URI, {
    dbName: "API"
}).then(() => {
    console.log(`database connected ${c.connections.host}`)
}).catch((e) => {
    console.log(e)
});
