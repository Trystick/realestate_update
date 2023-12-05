import mongoose from 'mongoose';
const { Schema } = mongoose;

const FavoriteSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
},
  landsaleId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LandSale' 
},
  landleaseId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'LandLease' 
},
  projectId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Project' 
},
},{timestamps:true});

export default mongoose.model("Favorite", FavoriteSchema)

