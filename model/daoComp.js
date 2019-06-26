var compradores = [];

// compradores.push( { 
//     nome: 'Teste',
//     cpf: 000000000,
//     produto: 'Teste',
//     valor: 000
// } );

var size = function ()
{
     return compradores.length + 1;
}

var add = function ( comprador ){
    if( comprador.nome !== null && comprador.cpf !== null && comprador.produto !== null && comprador.valor !== null)
        compradores.push( comprador );
};

var get = function ( id )
{
    if( compradores.length -1 < id )
        return null;
    else
        return compradores[id];
};

var getAll = function(){
    return compradores;
};

var update = function(id, comprador){
    // compradores[id] = comprador;
    compradores[id].id = id;
    compradores[id].nome = comprador.nome;
    compradores[id].cpf = comprador.cpf;
    compradores[id].produto = comprador.produto;
    compradores[id].valor = comprador.valor;
};

var remove = function(id){
    compradores.splice(id -1, 1);
};

module.exports = {remove, update, add, get, getAll, size};
