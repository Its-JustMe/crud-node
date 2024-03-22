const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const { validationResult } = require("express-validator");

router.get("/",  function (req, res) {
  controller.adicionarFuncionario({nome_funcionario: 'Arthur', funcao_funcionario: 'Programador', salario_funcionario: 1412});
  controller.listarFuncionarios(req, res);
});

router.get("/editar", function (req, res) {
  
});

router.get("/excluir", function (req, res) {
  
});

router.get("/finalizar", function (req, res) {
  
});

router.get("/iniciar", function (req, res) {
  
});

router.get("/create", function (req, res) {
  res.render("pages/index", { paginas: ['create', 'tabela'], dados: null, listaErros: null });
});

router.post("/create", controller.regrasValidacao, function (req, res) {
  const erros = validationResult(req);

  if (!erros.isEmpty()) {
    return res.render("pages/index", { paginas: ['create', 'tabela'], dados: req.body, listaErros: erros });
  }
  console.log(req.body);
  return res.render("pages/index", { paginas: ['create', 'tabela'], dados: req.body, listaErros: null });
});


module.exports = router;

