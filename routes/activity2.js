var express = require("express");
const { route } = require(".");
var router = express.Router();

let data = [
    { id: 1, title: 'Create a project',  order: 1, completed: true, author: 'Diego Laura' },
    { id: 2, title: 'Take a cofféé',     order: 2, completed: true, author: 'Laong-Laan' },
    { id: 3, title: 'Write new article', order: 3, completed: true, author: 'Agap-ito Bagumbayan' },
    { id: 4, title: 'Walk toward home', order: 4, completed: false, author: 'Taga-Ilog' },
    { id: 5, title: 'Have some dinner', order: 5, completed: false, author: 'Dimas-Ilaw' },
];

router.get("/", (req, res) => {
    res.send(data);
});

// Filter id
router.get('/:id', (req, res) => {
        const { id } = req.params;

        const result = data.find((item)=>{
            return item.id === Number(id);
        });
        res.status(200).send(result ? result : "Record not found!");
    }
);

// Add new entry
router.post('/add', (req, res) => {
    let newEntry = {
        id: req.body.id,
        title: req.body.title,
        order: req.body.order,
        author: req.body.author,
    }
    data.push(newEntry);
    res.status(200).send( newEntry );
});


router.put('/update/:id', (req, res) => {
    const { id } = req.params;
    let person = data.find((item) => {
        return item.id == id;
    });
    person.id = req.body.id;
    person.title = req.body.title;
    person.order = req.body.order;
    person.completed = req.body.completed;
    person.author = req.body.author;

    res.status(200).send("Data is now updated");
    res.status(404).send("Data is not existing");
});

router.delete("/delete/:id",(req, res)=>{
    const { id } = req.params;
    data = data.filter((item) => item.id != Number(id));
    res.status(200).send("Record " + id + " has been deleted.");

  });
module.exports = router;