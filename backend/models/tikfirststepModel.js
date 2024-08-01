 import mongoose from 'mongoose';

const firststepSchema = new mongoose.Schema({ 
    project_name: { type: String, required: true },
    director: { type: String, required: true },
    producer: { type: String, required: true },
    photographer: { type: String, required: true },
    editor: { type: String, required: true },
    premis: { type: String, required: true }
})


const FirstStep = mongoose.model('tik1', firststepSchema)
module.exports = FirstStep
