import datanode from '../models/datanode';
import Image from '../models/image'


const handleReadDataNode = async (req, res, next) => {
    await datanode
        .find({})
        .then((result) => res.json(result))
        .catch((error) => next(error));
};

const HandleWritedataNode = async (req, res, next) => {
    const dataFake = [
        {
            name: 'Data Node 1',
            description: 'This is Data about user of Data Node 1',
        },
        {
            name: 'Data Node 1',
            description: 'This is Data about account of Data Node 1',
        },
        {
            name: 'Data Node 1',
            description: 'This is Data about files of Data Node 1',
        },
    ];
    await datanode
        .insertMany(dataFake)
        .then(res.json('Write Succesfully'))
        .catch((error) => next(error));
};
const checkClient = async (req, res) =>{
    const checkClient = req.body
    console.log(checkClient)
        if(checkClient.request=='write'){
            const file = {
                index : checkClient.index,
                name :checkClient.name,
                desc : checkClient.desc,
                File :checkClient.file
            }
            await Image
                .create(file)
                .then(console.log("save in to database oke"))
            res.send('Save Complete DataNode 1')
        }
        else {
            const name =checkClient.name
            await Image
            .find({name :name })
            .then(async (data, err)=>{
                res.send(data)
                console.log(data)
            })
        }
}



const handleReadImage = async (req, res, next) => {
    await Image
        .find({})
        .then((result) => res.json(result))
        .catch((error) => next(error));
};



module.exports = {
    handleReadDataNode,
    HandleWritedataNode,
    handleReadImage,
    checkClient
   
};
