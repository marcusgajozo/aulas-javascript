exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Titulo da página',
        numero: [0,1,2,3,4,5,6,7,8,9,10]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body.cliente);
};