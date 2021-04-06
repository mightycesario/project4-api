const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: String,
    team: String,
    age: Number,
    stats: [{ 
        name: String,
        value: String,
     }] 
});

const Player = mongoose.model('Player',PlayerSchema);

module.exports = Player;


// const UserSchema = new Schema({
//     name: String,
//     team: String,
//     age: Number,
//     stats: [{ 
//         name: String,
//         value: String,
//      }] 
// });

// const User = mongoose.model('User',UserSchema);

// module.exports = User;
