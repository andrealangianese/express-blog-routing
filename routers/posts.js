//creo  rotte crud

// index
app.get('/posts', function (req, res) {
    res.send('Lista dei post');
});

// show
app.get('/posts/:id', function (req, res) {
    res.send('Dettagli dei posts ' + req.params.id);
});

// store
app.post('/posts', function (req, res) {
    res.send('Creazione nuovi posts');
});

// update
app.put('/posts/:id', function (req, res) {
    res.send('Modifica integrale dei posts ' + req.params.id);
});

// modify
app.patch('/posts/:id', function (req, res) {
    res.send('Modifica parziale dei posts ' + req.params.id);
});

// destroy
app.delete('/posts/:id', (req, res) => {
    res.send('Eliminazione dei posts ' + req.params.id);
});