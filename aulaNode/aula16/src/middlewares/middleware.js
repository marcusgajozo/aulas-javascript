exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Um teste de variável local';
    next();
}

exports.outroMiddleware = (req, res, next) => {
    next();
}