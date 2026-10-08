import ServiceFilme from "../service/filme.js";

class ControllerFilme {
    Buscar(req, res) {
        try {
            const filme = ServiceFilme.Buscar();
            res.send({filme})
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    BuscarUm (req, res) {
        try {
            const id = req.params.id
            const filme = ServiceFilme.BuscarUm(id)

            res.send({ filme })
        } catch (error) {
            res.send ({message: error.message })
        }
    }

    Criar(req, res) {
        try {
            const titulo = req.body.titulo
            const classificacao = req.body.classificacao
            const descricao = req.body.descricao
            const lancado = req.body.lancado

            ServiceFilme.Criar(titulo, classificacao, descricao, lancado)
            res.send ({message: "Criado filme com Sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const titulo = req.body.titulo
            const classificacao = req.body.classificacao
            const descricao = req.body.descricao

            ServiceFilme.Alterar(id, titulo, classificacao, descricao)
            res.send ({ message: "Alterado com sucesso" })
        } catch (error) {
            res.send ({message: error.message})
        }
    }

    Deletar (req, res) {
        try {
            const id = req.params.id
            ServiceFilme.Deletar(id)

            res.send({ message:"Deletado com Sucesso"})
        } catch (error) {
            res.send ({ message: error.message })
        }
    }

    AlterarLancado (req, res) {
        try {
            const id = req.params.id

            ServiceFilme.AlterarLancado(id)
            res.send({ message: "Alterado o status do filme"})
            
        } catch (error) {
            res.send ({message: error.message})            
        }
    }

     BuscarClassificacao(req, res) {
        try {
            const classificacao = req.params.classificacao
            const filme = ServiceFilme.BuscarClassificacao(classificacao);
            res.send({filme})
        } catch (error) {
            res.send({ message: error.message })
        }
    }

}

export default new ControllerFilme()