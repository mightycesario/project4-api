const db = require('../models');


// console.log(db.User.)

const index = (req, res) => {
    db.Player.find({}, (err, foundPlayers) => {
        console.log("foundUsers", foundPlayers)
        if (err) console.log('Error in games#index:', err);
        // if no users are found send a message
        if(!foundPlayers) return res.json({ message: "No players found in DB"})
        // send json data
        
        res.json({ user: foundPlayers })

        // res.send("Incomplete games#index controller function");
    });
};

const show = (req, res) => {
    db.Player.findById(req.params.id, (err, foundPlayer) => {
        if (err) console.log('Error in games#show:', err);
        // handle the case where a Player is no found
        if(!foundPlayer) return res.json({ mesage: "Player with that ID was not found"})
        // send json data 
        res.json({ player: foundPlayer })
        // res.send("Incomplete games#show controller function");
    });
};

const create = (req, res) => {
    db.Player.create(req.body, (err, savedPlayer) => {
        if (err) console.log('Error in games#create:', err);
        
        // return an updated list of Players, do this:
        // res.redirect("/api/v1/games")

        // res.send("Incomplete games#create controller function");
        res.json({ player: savedPlayer })
    });
};

const update = (req, res) => {
    db.Player.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPlayer) => {
        if (err) console.log('Error in games#update:', err);
        
        if(!updatedPlayer) return res.json({ message: "Cant find that user to update"})
        res.json({ player: updatedPlayer })
        // console.log("updatedUser object", updatedUser)
        // res.send("Incomplete games#update controller function");
    });
};

const destroy = (req, res) => {
    db.Player.findByIdAndDelete(req.params.id, (err, deletedPlayer) => {
        if (err) console.log('Error in games#destroy:', err);

        if(!deletedPlayer) return res.json({ message: "Cant find that Player to delete"})

        res.json({ message: "Player was deleted from DB" })
        console.log("deletedPlayer object:", deletedPlayer)
        // res.send("Incomplete games#destroy controller function");
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
