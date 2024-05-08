
// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient;
// const ObjectId=require('mongodb')

const mongoose=require('mongoose')



async function getDatabase(){
    // const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
    // let database = client.db('library');

    // if (!database) {
    //         console.log('Database not connected');
    // }

    // return database;

    mongoose.connect("mongodb://127.0.0.1:27017/library").then(()=>{
        console.log("Database connected")
    }).catch(()=>{console.log("Database not connected")})
}

module.exports = {
    getDatabase,
   // ObjectId
}