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

//.model() applies that schema to a particular model which we then use to interact with a 
//collection (in your DB) of that same name but pluralized i.e if model = todo then, collection = todos
const ToDo = mongoose.model('ToDo' , todoSchema);

module.exports = ToDo;
