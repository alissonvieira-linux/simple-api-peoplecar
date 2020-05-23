const express = require("express");
const app = express();

const data = require("./data");
app.use(express.json());

app.get('/carros', (req, res) => {
    
    res.json(data.carros);
});

app.get('/pessoas', (req, res) => {
    res.json(data.pessoas);
});

app.get('/pessoa-carro/:id', (req, res) => {
    const { id }= req.params;

    let pessoa_obj = null;
    let carro_obj = null;

    data.pessoas.map(pessoa => {
        if (pessoa.id == id) {
            pessoa_obj = pessoa;
        }
    });

    data.carros.map(carro => {
        if(carro.id == id) {
            carro_obj = carro;
        }
    });



    res.json({pessoa_obj, carro_obj});
});

app.listen(3333);