const {MongoClient} = require('mongodb');

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);
async function main(){
    client.connect();
    console.log('connected successfully to server..');
    const db = client.db('ecommerce');
    const collectionName = 'user';
    db.collection(collectionName);
    return db.collection(collectionName);
}

module.exports = main;