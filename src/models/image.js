import mongoose from "mongoose";
var imageSchema = new mongoose.Schema({
	indexFile : Number,
	nameFile: String,
	desc: String,
	FileUrl :String,
	File: String,	
});

module.exports = mongoose.model('Image', imageSchema);
