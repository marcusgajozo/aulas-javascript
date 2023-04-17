exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(`Eu recebi isso aqui: ${req.body.nome}`)
};