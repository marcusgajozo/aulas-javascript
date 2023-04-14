exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome">
            <button type="submit">Olá mundo</button>
        </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send(`Eu recebi isso aqui: ${req.body.nome}`)
};