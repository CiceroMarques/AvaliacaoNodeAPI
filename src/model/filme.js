
const filmes = new Array(
    {titulo: "Sr dos Aneis", classificacao: "14", descricao:"Filme Renomado do Universo de Tolkien", lancado: true},
    {titulo: "Avengers: Doomsday", classificacao: "14", descricao:"Continuação de Avengers", lancado: false}
)
class Filme {

    Buscar() {
        return filmes;
    }

    BuscarUm(id) {
        return filmes[id];
    }

    Criar(titulo, classificacao, descricao, lancado) {
        filmes.push(
            { titulo, classificacao, descricao, lancado }
        );
    }

    Alterar(id, titulo, classificacao, descricao) {
        filmes[id].titulo = titulo;
        filmes[id].classificacao = classificacao;
        filmes[id].descricao = descricao;
    }

    AlterarLancado(id, lancado) {
        if (filmes[id].lancado == false) {
            filmes[id].lancado = true;
        } else {
            filmes[id].lancado = false;
        }    
    }

    Deletar(id) {
        filmes.splice(id, 1);
    }

    BuscarClassificacao(classificacao) {
        if (filmes.classificacao == classificacao) {
            return filmes;
        }
    }




}
export default new Filme();