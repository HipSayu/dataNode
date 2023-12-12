import mongoose from "mongoose";
var imageSchema = new mongoose.Schema({
	indexFile : Number,
	nameFile: String,
	desc: String,
	File: Buffer,	
});

module.exports = mongoose.model('Image', imageSchema);
