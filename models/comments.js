const mongoose = require('mongoose');
var url = "mongodb+srv://lehuukien2002:i6DMZ0UVGFziuxb4@cluster0.jztuunn.mongodb.net/MessageApp?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connect Successful");
    })
    .catch((err) => {
        throw err;
    });


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CommentsSchema = new Schema({
    noiDung: { type: String },
    ngGui: { type: String },
    ngNhan: { type: String },
    date: { type: String },
    time: { type: String }

}, { collection: 'Comments' });

module.exports = mongoose.model('Comments', CommentsSchema);