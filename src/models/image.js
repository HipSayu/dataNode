import mongoose from "mongoose";
var imageSchema = new mongoose.Schema({
	index : Number,
	name: String,
	desc: String,
	File: Buffer,	
});

module.exports = mongoose.model('Image', imageSchema);
