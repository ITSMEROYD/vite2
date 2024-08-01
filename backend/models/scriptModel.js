import mongoose from 'mongoose';

const scriptSchema = new mongoose.Schema({ 
    synopsis: { type: String, required: true },
    locations: { type: String, required: true },
    full_script: { type: String, required: true }
 })


 export const Script = mongoose.model('tik2', scriptSchema);
