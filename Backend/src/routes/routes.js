const express = require('express')
const router = express.Router()

const Emprestimo = require('../controllers/emprestimo');

router.get('/', Emprestimo.teste);
router.post('/emprestimo/criar', Emprestimo.criar);
router.get('/emprestimo/listar', Emprestimo.listar);
router.get('/emprestimo/listar/:id', Emprestimo.listar);
router.put('/emprestimo/alterar', Emprestimo.alterar);
router.delete('/emprestimo/excluir/:id', Emprestimo.excluir);


module.exports = router

