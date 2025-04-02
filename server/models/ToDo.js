//mongoose is what allows us to create models & schemas for our data in db. MONGO db alone is schema-less
const mongoose = require('mogoose')
const Schema = mongoose.Schema;

//Make a schema for your app
const todoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

//.model() creates a new model which we then use to interact with a MongoDB collection.
//Syntax - mongoose.model(modelName, schema, collectionName, modelOptions), last 2 are optional arguments
const ToDo = mongoose.model('ToDo' , todoSchema);

module.exports = ToDo; //exporting 'ToDo' model for use in different files
