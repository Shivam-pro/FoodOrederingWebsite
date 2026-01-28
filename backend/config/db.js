import mongoose from "mongoose";

export const connectToDB = async() =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/FoodOrdering-Project").then(()=>{
            console.log("DB coneected Successfully")
        })
    } catch (error) {
        console.log("Error in connection: ", error);
    }
} 