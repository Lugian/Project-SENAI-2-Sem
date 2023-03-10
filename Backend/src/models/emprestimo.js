class Emprestimo {

    constructor(i) {
        this.id = i.id
        this.titulo = i.titulo
        this.autor = i.autor
        this.data_emprestimo = i.data_emprestimo
        this.data_prevista = i.data_prevista
        this.data_devolucao = i.data_devolucao
        this.valor = i.valor
        this.img = i.img
    }

    create() {
        return `INSERT INTO emprestimo VALUE(default,'${this.titulo}','${this.autor}','${this.data_emprestimo}', '${this.data_prevista}', '${this.data_devolucao}', ${this.valor}, '${this.img}')`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM emprestimo`
        else
            return `SELECT * FROM emprestimo WHERE id = '${this.id}'`
    }

    update() {
        return `UPDATE emprestimo SET titulo = '${this.nome}', autor = '${this.autor}', data_emprestimo = '${this.data_emprestimo}', data_prevista = '${this.data_prevista}', data_devolucao = '${this.data_devolucao}', valor = ${this.valor}, img = '${this.img}' WHERE id = '${this.id}'`
    }

    delete() {
        return `DELETE FROM emprestimo WHERE id = '${this.id}'`
    }
}

module.exports = Emprestimo 