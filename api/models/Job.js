import mongoose from 'mongoose';
const { Schema } = mongoose;

const JobSchema = new mongoose.Schema({
    jobCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobCategory",
    },
    name:{
        type: String,
        required: true,
        trim: true 
    },
    location:{
        type: String,
        trim: true 
    },
    number:{
        type: String,
    },
    dateend:{
        type: String,
    },
    desc:{
        type: String,
        trim: true 
    },
    gender:{
        type: String,
    },
    age:{
        type: String,
    },
    level:{
        type: String,
    },
    experience:{
        type: String,
    },
    request:{
        type: String,
    },
    income:{
        type: String,
    },
    regime : {
        type: String,
    },
    status: {
        type: String,
    }

}, {timestamps:true});

export default mongoose.model("Job", JobSchema)

