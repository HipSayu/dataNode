import datanode from '../models/datanode';

// DataNode
const ReadDatanode = () => {
    let datanode;
    datanode
        .find({})
        .then((result) => (datanode = result))
        .catch((error) => next(error));
    console.log(datanode);
};

const WriteDatanode = (dataFake) => {
    datanode
        .insertMany(dataFake)
        .then(res.json('Write Succesfully'))
        .catch((error) => next(error));
};

module.exports = {
    ReadDatanode,
    WriteDatanode,
};
