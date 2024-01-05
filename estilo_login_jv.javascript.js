function salvarDados(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var apelido = document.getElementById('apelido').value;
    var idade = document.getElementById('idade').value;
    var musica = document.getElementById('musica').value;
    var cor = document.getElementById('cor').value;
    var comida = document.getElementById('comida').value;
    var filme = document.getElementById('filme').value;
    var amigo = document.getElementById('amigo').value;
    var lugar = document.getElementById('lugar').value;
    var alguem = document.getElementById('alguem').value;
    var gostaria = document.getElementById('gostaria').value;
    var profissao = document.getElementById('profissao').value;
    var trabalhar = document.getElementById('trabalhar').value;
    var poder = document.getElementById('poder').value;
    var suporta = document.getElementById('suporta').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('apelido', apelido);
    localStorage.setItem('idade', idade);
    localStorage.setItem('musica', musica);
    localStorage.setItem('cor', cor);
    localStorage.setItem('comida', comida); 
    localStorage.setItem('filme', filme);
    localStorage.setItem('amigo', amigo);
    localStorage.setItem('lugar', lugar);
    localStorage.setItem('alguem', alguem);
    localStorage.setItem('gostaria', gostaria);
    localStorage.setItem('profissao', profissao);
    localStorage.setItem('trabalhar', trabalhar);
    localStorage.setItem('poder', poder);
    localStorage.setItem('suporta', suporta);

    alert('Cadastro salvo com sucesso!');

    window.location.href = 'pag_historia.html?nome=' + encodeURIComponent(nome) + 
    '&apelido=' + encodeURIComponent(apelido) + '&idade=' + encodeURIComponent(idade) +
    '&musica=' + encodeURIComponent(musica) + '&cor=' + encodeURIComponent(cor) +
    '&comida=' + encodeURIComponent(comida) +'&filme=' + encodeURIComponent(filme) +
    '&amigo=' + encodeURIComponent(amigo) +'&lugar=' + encodeURIComponent(lugar)
    +'&alguem=' + encodeURIComponent(alguem) +'&gostaria=' + encodeURIComponent(gostaria)
    +'&profissao=' + encodeURIComponent(profissao) +'&trabalhar=' + encodeURIComponent(trabalhar)
    +'&poder=' + encodeURIComponent(poder) +'&suporta=' + encodeURIComponent(suporta);
}

function persistencia() {

    var nome = localStorage.getItem('nome');
    var apelido = localStorage.getItem('apelido');
    var idade = localStorage.getItem('idade');
    var musica = localStorage.getItem('musica');
    var cor = localStorage.getItem('cor');
    var comida = localStorage.getItem('comida');
    var filme = localStorage.getItem('filme');
    var amigo = localStorage.getItem('amigo');
    var lugar = localStorage.getItem('lugar');
    var alguem = localStorage.getItem('alguem');
    var gostaria = localStorage.getItem('gostaria');
    var profissao = localStorage.getItem('profissao');
    var trabalhar = localStorage.getItem('trabalhar');
    var poder = localStorage.getItem('poder');
    var suporta = localStorage.getItem('suporta');

    if (nome) {
        document.getElementById('nome').value = nome;
    }
    if (apelido) {
        document.getElementById('apelido').value = apelido;
    }
    if (idade) {
        document.getElementById('idade').value = idade;
    }
    if (musica) {
        document.getElementById('musica').value = musica;
    }
    if (cor) {
        document.getElementById('cor').value = cor;
    }
    if (comida) {
        document.getElementById('comida').value = comida;
    }
    if (filme) {
        document.getElementById('filme').value = filme;
    }
    if (amigo) {
        document.getElementById('amigo').value = amigo;
    }
    if (lugar) {
        document.getElementById('lugar').value = lugar;
    }
    if (alguem) {
        document.getElementById('alguem').value = alguem;
    }
    if (gostaria) {
        document.getElementById('gostaria').value = gostaria;
    }
    if (profissao) {
        document.getElementById('profissao').value = profissao;
    }
    if (trabalhar) {
        document.getElementById('trabalhar').value = trabalhar;
    }
    if (poder) {
        document.getElementById('poder').value = poder;
    }
    if (suporta) {
        document.getElementById('suporta').value = suporta;
    }
    
}

window.onload = persistencia;

function resetForm() {

    document.getElementById('nome').value = '';
    document.getElementById('apelido').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('musica').value = '';
    document.getElementById('cor').value = '';
    document.getElementById('comida').value = '';
    document.getElementById('filme').value = '';
    document.getElementById('amigo').value = '';
    document.getElementById('lugar').value = '';
    document.getElementById('alguem').value = '';
    document.getElementById('gostaria').value = '';
    document.getElementById('profissao').value = '';
    document.getElementById('trabalhar').value = '';
    document.getElementById('poder').value = '';
    document.getElementById('suporta').value = '';

    alert('Dados removidos com sucesso!');
}