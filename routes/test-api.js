var express = require("express");
var router = express.Router();
let image = [
                {image: "http://localhost:3000/images/cute-man.jpg",name: "Sasuke",},
            ];

            

router.get('/', function(req, res, next){
    res.send(image);
});

module.exports = router;