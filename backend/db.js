const mongooes = require('mongoose');
const mongURI = "mongodb://localhost:27017/newsapp";

const connectToMongo = () => { //with callback function can alse=o be used with async and await

    mongooes.connect(mongURI, () => {
        console.log("connected to mongo sucessful");
    })
}

module.exports = connectToMongo;