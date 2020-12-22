var express = require("express");
var app = express();
var cors = require('cors');

app.use(cors());

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

const facts = [
    {
        "id": 1,
        "title": "a hell",
        "body": "Global warming is real"
    },
    {
        "id": 2,
        "title": "a hell",
        "body": "2021 will be cooler but still in top six warmest"
    },
    {
        "id": 3,
        "title": "a hell",
        "body": "Forests in Brazil emitting more carbon than they absorb due to climate change"
    },
    {
        "id": 4,
        "title": "a hell",
        "body": "Deadly skin disease found in dolphins linked to climate change"
    },
    {
        "id": 5,
        "title": "a hell",
        "body": "Greenland’s vast ice sheet could melt faster than previously thought over the 21st century, according to a new study"
    },
    {
        "id": 6,
        "title": "a hell",
        "body": "Worldwide, most glaciers are shrinking or disappearing altogether"
    }
]

app.get("/facts", (req, res, next) => {
    const random = Math.floor(Math.random() * facts.length);
    const fact = facts[random]
    res.json(fact);
   });