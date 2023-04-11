
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const response = await 

    fetch(href)
        .then(response => response.text())
        .then(html => carregaResultado(html))
        .catch(e => console.log(e))
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}



fetch('pagina1.html')
    .then(resp => {
        console.log(resp.status);
        return resp.text();
    })
    .then(resp => console.log(resp))
    .catch(e => console.log(e));