import mongoose from 'mongoose';

async function mongooseBD() {
    try {
        await mongoose
            .connect(`mongodb://localhost:27017/DataNode1`)
            .then(() => {
                console.log('Connected!');
            });
    } catch (error) {
        console.log('Connect fail');
    }
}
module.exports = {
    mongooseBD,
};
