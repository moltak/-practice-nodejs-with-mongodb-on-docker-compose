var mongoose = require('mongoose');

const USERNAME=process.env.MONGO_USERNAME
const PASSWORD=process.env.MONGO_PASSWORD

const mongodb = `mongodb://${USERNAME}:${PASSWORD}@mongo:27017/test?authSource=admin`
console.log(mongodb)

mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var kittySchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Kitten', kittySchema);
