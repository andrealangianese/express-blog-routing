//richiamo express per usarlo

const express= require("express");

//creo una var in cui salvare le rotte di express

const router = express.Router();

//creo  rotte crud

// index
router.get('/', function (req, res) {
    res.send('Lista dei post');
});

// show
router.get('/:id', function (req, res) {
    res.send('Dettagli dei posts ' + req.params.id);
});

// store
router.post('/', function (req, res) {
    res.send('Creazione nuovi posts');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale dei posts ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale dei posts ' + req.params.id);
});

// destroy
router.delete('/:id', (req, res) => {
    res.send('Eliminazione dei posts ' + req.params.id);
});

//rendo importabili da altri componenti queste rotte 

module.exports = router