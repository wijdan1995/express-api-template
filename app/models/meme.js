// const mongoose = require('mongoose')

// const memesSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     imageUrl: {
//         type: String,
//         required: true
//     },
//     owner: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     }
// }, {
//         timestamps: true
//     })

// module.exports = mongoose.model('Memes', memesSchema)



// *Add Memes to Express*
// 3. Memes with a title and an imageUrl.  User has many Memes.
// - Create meme schema/model with title, imageUrl, and owner
// - Create meme CRUD routes
// - Import meme routes to app.js and use them

//sami's
const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
        timestamps: true
    })


const Meme = mongoose.model("Meme", memeSchema);

module.exports = Meme
