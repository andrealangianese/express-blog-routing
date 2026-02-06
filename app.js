//richiamo express e la porta 

const express = require("express");
const app = express();
const port = 3000


// attivazione della cartella public per uso file statici
app.use(express.static('public'));

//chiamata

app.get("/", (req, res) => {
    res.send("dubug")
})


app.listen(port, () => {
    console.log(`sono la porta in ascolto numero ${port}`);

})