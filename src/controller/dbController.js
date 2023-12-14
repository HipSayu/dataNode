import datanode from '../models/datanode';
import Image from '../models/image'
import axios from 'axios';
import fs from 'fs'
import path from 'path';


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
    let nameFile = '/'
    nameFile = nameFile +checkClient.nameFile
    let randomSuffix = Math.floor(Math.random() * 10000);
    nameFile = nameFile + randomSuffix 
    const directory =path.join(__dirname ,'StoreData')
    console.log('>>Check path',directory)
    console.log(checkClient)
        if(checkClient.request=='write'){
           
            fs.writeFileSync(directory + nameFile ,checkClient.File);
            let DatanodeReplication1 = checkClient.DatanodeReplication1
            let DatanodeReplication2 = checkClient.DatanodeReplication2
            const fileReplication = {
                indexFile : checkClient.indexFile,
                nameFile :checkClient.nameFile,
                desc : checkClient.desc,
                File :checkClient.File,
                DatanodeReplication1:'',
                DatanodeReplication2:'',
                request:'write'
            }
            const file = {
                indexFile : checkClient.indexFile,
                nameFile :checkClient.nameFile,
                desc : checkClient.desc,
                FileUrl : directory + nameFile,
                File :'',
                request:'write'
            }
            await Image
                .create(file)
                .then(()=>{
                    if(DatanodeReplication1 !='' && DatanodeReplication2 !=''){
                        Promise.all([
                            axios.post(DatanodeReplication1, fileReplication),
                            axios.post(DatanodeReplication1, fileReplication),
                        ])
                        .then(res=>{console.log(res)  })
                        .catch((err) => console.log('>>Check ERROR'))
                    }
                    else {
                        console.log("Save Oke")
                    }
                })
            res.send('Save oke')
        }
        else {
            const nameFile =checkClient.nameFile
            const indexFile = checkClient.indexFile
            await Image
            .find({nameFile :nameFile, indexFile:indexFile})
            .then(async (data, err)=>{
                // res.send(data[0])
                // console.log('>>checK DATA',data[0])
                try {
                    const File = fs.readFileSync(data[0].FileUrl, "utf8");
                    let dataFile = {
                        indexFile : data[0].indexFile,
                        nameFile :  data[0].nameFile,
                        desc:  data[0].desc,
                        File:  File
                    }
                    res.send(dataFile)
                } catch (err) {
                    console.error(`Lỗi khi đọc tệp: ${err.message}`);
                }
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
