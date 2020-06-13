//DEPENDENCIES
var path = require("path");

//ROUTING
module.exports = function(app){
    //index.html GET ROUTE
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //note.html GET ROUTE
    app.get("/notes", function(req,res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });


};

