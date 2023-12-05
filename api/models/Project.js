import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProjectSchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    name:{
        type: String,
        required: true,
        trim: true 
    },
    location:{
        type: String,
    },
    descLocation:{
        type:String,
    },
    investor:{
        type: String,
        required: true
    },
    construction :{
        type: String,
    },
    land_area: {
        type: String,
    },
    scale:{
        type: String,
    },
    utiliti: {
        type: String,
    },
    descUtilitiIn: {
        type: String,
    },
    descUtilitiInSe: {
        type: String,
    },
    descUtilitiInTh: {
        type: String,
    },
    descUtilitiInFo: {
        type: String,
    },
    descUtilitiInFi: {
        type: String,
    },
    descUtilitiOut: {
        type: String,
    },
    descUtilitiOutSe: {
        type: String,
    },
    descUtilitiOutTh: {
        type: String,
    },
    descUtilitiOutFo: {
        type: String,
    },
    descUtilitiOutFi: {
        type: String,
    },
    ground: {
        type: String,
    },
    groundSe: {
        type: String,
    },
    groundTh: {
        type: String,
    },
    categoryDesc: {
        type: String,
    },
    juridical:{
        type: String,
    },
    price:{
        type: String,
    },
    time_start: {
        type: String,
    },
    photos:{
        type: [String],
    },
    status: {
        type: String,
    },
}, {timestamps:true});

export default mongoose.model("Project", ProjectSchema)