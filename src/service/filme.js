import Filme from '../model/filme.js'

class ServiceFilme {

    Buscar() {
        return Filme.Buscar();
    }

    BuscarUm(id) {
        if (!id || isNaN(id)) {
            throw new Error("Favor informar apenas números");
        }
        return Filme.BuscarUm(id);
    }

    Criar(titulo, classificacao, descricao, lancado) {
        if (!titulo || !classificacao || !descricao ) {
            throw new Error("Dados de filme incorretos, verifique-os");
        }
        Filme.Criar(titulo, classificacao, descricao, lancado);
    }

    Alterar(id, titulo, classificacao, descricao) {
        if (!id || isNaN(id) || !titulo || !classificacao || !descricao) {
            throw new Error("O id ou os dados informados não estão corretos para alteração");
        }
        Filme.Alterar(id, titulo, classificacao, descricao);
    }

    AlterarLancado(id, lancado) {
        if (!id || isNaN(id)) {
            throw new Error("Favor informar apenas números");
        }
        Filme.AlterarLancado(id, lancado);
    }

    Deletar(id) {
        if (!id || isNaN(id)) {
            throw new Error("Favor informar apenas números");
        }
        Filme.Deletar(id);
    }

    BuscarClassificacao(classificacao) {
        if (!classificacao) {
            throw new Error("Informe o dado corretamente");
            
        }
        Filme.BuscarClassificacao(classificacao);
    }
}

export default new ServiceFilme();