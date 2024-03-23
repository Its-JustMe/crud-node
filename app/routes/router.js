const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const { validationResult } = require("express-validator");

router.get("/",  function (req, res) {
  controller.listarFuncionarios(req, res);
});

router.get("/incluir", function (req, res) {
  res.render("pages/form", { funcao: 'Novo funcionário', acao: 'create', dados: {nome_funcionario: '', funcao_funcionario: '', salario_funcionario: ''}, listaErros: null });
});

router.get("/editar", function (req, res) {
  res.render("pages/form", { funcao: 'Editar dados do funcionário', acao: 'update', dados: {nome_funcionario: '', funcao_funcionario: '', salario_funcionario: ''}, listaErros: null });
});

router.get("/excluir", function (req, res) {
  
});

router.get("/finalizar", function (req, res) {
  
});

router.post("/create", controller.regrasValidacao, function (req, res) {
  controller.adicionarFuncionario(req, res);
});


module.exports = router;

