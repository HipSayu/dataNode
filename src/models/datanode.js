import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const datanode = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
});

module.exports = mongoose.model('datanode', datanode);
