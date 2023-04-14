// Express é micro framework para web
const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

// http://facebook.com/profiles/12345?campanha=googleads -> query string

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT    DELETE


app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button type="submit">Olá mundo</button>
    </form>
    `);
});

app.get('/teste/:idUsuarios?/:parametro?', (req, res) => {
    // /profiles/3
    console.log(req.params);
    // profile/?chave1=valor1&chave2=valor2&....
    console.log(req.query)
    res.send(req.params);
});

app.post('/', (req, res) => {
    //
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome}`)
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});