import mongoose from 'mongoose';

const statementSchema = new mongoose.Schema({ 
    director_state: { type: String, required: true },
    producer_state: { type: String, required: true },
    photo_state: { type: String, required: true },
    editor_state: { type: String, required: true }
 })


 export const Statement = mongoose.model('tik3', scriptSchema);
