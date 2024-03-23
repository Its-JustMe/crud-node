const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const { validationResult } = require("express-validator");

router.get("/",  function (req, res) {
  controller.listarFuncionarios(req, res);
});

router.get("/incluir", function (req, res) {
  res.render("pages/create", { funcao: 'Novo funcionário', acao: 'Incluir', dados: null, listaErros: null });
});

router.get("/editar", function (req, res) {
  
});

router.get("/excluir", function (req, res) {
  
});

router.get("/finalizar", function (req, res) {
  
});

router.post("/create", controller.regrasValidacao, function (req, res) {
  const erros = validationResult(req);

  if (!erros.isEmpty()) {
    return res.render("pages/index", { pagina: 'tabela', dados: req.body, listaErros: erros });
  }
  console.log(req.body);
  return controller.listarFuncionarios(req, res);
});


module.exports = router;

