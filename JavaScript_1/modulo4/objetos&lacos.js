const estoque = [
    {titulo: 'Quincas Borba', autor: 'Machado de Assis', quantidade: 10},
    {titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', quantidade: 20},
    {titulo: 'A Cartomante', autor: 'Machado de Assis', quantidade: 15},
    {titulo: 'Papéis Avulsos', autor: 'Machado de Assis', quantidade: 5}
];

const adicionarLivro = (titulo, autor, quantidade) => {
    estoque.push({
        titulo,
        autor,
        quantidade
    })
};

const removerLivro = (tituloDoLivro) => {
    const existeTitulo = !!estoque.find(livro => livro.titulo == tituloDoLivro)
    if(existeTitulo) {
        for(let indice = 0; indice < estoque.length; indice++)
            if (estoque[indice].titulo == tituloDoLivro) {
                console.log(`O livro de titulo ${tituloDoLivro} foi removido!`)
                estoque.splice(indice, 1);
                break;
            }
        }
    else
    console.log(`O livro de id ${tituloDoLivro} não foi encontrado.`);
};

const atualizarQuantidade = (tituloDoLivro, novaQuantidade) => {
    if (existeTitulo){
        for (let livro of estoque) {
            if(livro.titulo == titulo) {
                livro.quantidade = novaQuantidade;
                console.log(`A quantidade do livro ${estoque.titulo} foi atualizada para ${novaQuantidade}`)
                break;
            }
        }
    } else {
        console.log(`O titulo ${tituloDoLivro} não foi localizado no estoque.`)
    };
};

const listarLivros = () => {
    if (estoque.length === 0) {
        console.log( 'O estoque está vazio.')
    } else {
        console.log(`O estoque possui ${estoque.length} títulos.`)
        for (let livro of estoque) {
            console.log (`
            Livro: ${livro.titulo}
            Autor: ${livro.autor}
            Quantidade: ${livro.quantidade}
            `)
        }
    };
};
