import datanode from '../models/datanode';
import Image from '../models/image'
import axios from 'axios';


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
            let DatanodeReplication1 = checkClient.DatanodeReplication1
            let DatanodeReplication2 = checkClient.DatanodeReplication2
            const file = {
                indexFile : checkClient.indexFile,
                nameFile :checkClient.nameFile,
                desc : checkClient.desc,
                File :checkClient.File,
                DatanodeReplication1:'',
                DatanodeReplication2:'',
                request:'write'
            }
            await Image
                .create(file)
                .then(()=>{
                    if(DatanodeReplication1 !='' && DatanodeReplication2 !=''){
                        Promise.all([
                            axios.post(DatanodeReplication1, file),
                            axios.post(DatanodeReplication1, file),
    
                        ])
                        .then(res=>{console.log(res)  })
                        .catch((err) => console.log(err))
                    }
                    else {
                        console.log("Save Oke")
                    }
                })
            res.send('Save oke')
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
