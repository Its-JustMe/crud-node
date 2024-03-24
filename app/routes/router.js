const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const { validationResult } = require("express-validator");

router.get("/",  function (req, res) {
  controller.listarFuncionarios(req, res);
});

router.get("/incluir", function (req, res) {
  res.render("pages/form", { funcao: 'Novo funcionário', acao: 'create', dados: {id_funcionario: '', nome_funcionario: '', funcao_funcionario: '', salario_funcionario: ''}, listaErros: null });
});

router.get("/editar", function (req, res) {
  controller.exibirFuncionario(req, res, 'form');
});

router.get("/excluir", function (req, res) {
  controller.exibirFuncionario(req, res, 'confirm-delete')
});

router.post("/create", controller.regrasValidacao, function (req, res) {
  controller.adicionarFuncionario(req, res);
});

router.post("/update", controller.regrasValidacao, function (req, res) {
  controller.atualizarDadosFuncionario(req, res);
});

router.post("/delete", function (req, res) {
  controller.removerFuncionario(req, res);
});

module.exports = router;

