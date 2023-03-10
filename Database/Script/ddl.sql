DROP DATABASE IF EXISTS livraria;
CREATE DATABASE livraria;
USE livraria;
CREATE TABLE emprestimo(
    id INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(20) NOT NULL,
    data_emprestimo DATE NOT NULL,
    data_prevista DATE,
    data_devolucao DATE,
    valor DECIMAL(10, 2) NOT NULL,
    img TEXT NOT NULL,
    PRIMARY KEY (id)
);
