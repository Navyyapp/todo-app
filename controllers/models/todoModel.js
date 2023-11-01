import mongoose from "mongoose";

const todoschema = new mongoose.Schema({
    todo:{
        type:String,
        required:true

    }
})


export default mongoose.model("todo",todoschema)