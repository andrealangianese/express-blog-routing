//richiamo express per usarlo

const express= require("express");

//creo una var in cui salvare le rotte di express

const router = express.Router();

//creo  rotte crud

// index
router.get('/posts', function (req, res) {
    res.send('Lista dei post');
});

// show
router.get('/posts/:id', function (req, res) {
    res.send('Dettagli dei posts ' + req.params.id);
});

// store
router.post('/posts', function (req, res) {
    res.send('Creazione nuovi posts');
});

// update
router.put('/posts/:id', function (req, res) {
    res.send('Modifica integrale dei posts ' + req.params.id);
});

// modify
router.patch('/posts/:id', function (req, res) {
    res.send('Modifica parziale dei posts ' + req.params.id);
});

// destroy
router.delete('/posts/:id', (req, res) => {
    res.send('Eliminazione dei posts ' + req.params.id);
});

//rendo importabili da altri componenti queste rotte 

module.exports = router