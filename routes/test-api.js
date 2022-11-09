var express = require("express");
var router = express.Router();
// let image = [
//                 {image: "../public/images/cute-man.jpg",name: "Sasuke",},                 {image: "../public/images/cute-man.jpg",name: "Sasuke",}
//             ];


router.get('/', function(req, res, next){
    res.send(city);
});

module.exports = router;