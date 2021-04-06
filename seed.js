require("dotenv").config()
const db = require('./models');
const data = require('./playerData.json');
// const data = require('./userData.json');

db.Player.deleteMany({}, (err, deletedPlayers) => {
    db.Player.create(data.players, (err, seededPlayers) => {
        if (err) console.log(err);
        
        console.log(data.players.length, 'users created successfully');
        
        process.exit();
    });
});

// db.User.deleteMany({}, (err, deletedGames) => {
//     db.User.create(data.users, (err, seededGames) => {
//         if (err) console.log(err);
        
//         console.log(data.users.length, 'users created successfully');
        
//         process.exit();
//     });
// });
