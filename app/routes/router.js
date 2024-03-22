const express = require("express");
const router = express.Router();
const moment = require("moment");
const controller = require("../controllers/controller");
const { validationResult } = require("express-validator");

router.get("/",  function (req, res) {
  res.render("pages/index", { paginas: ['tabela'],dados: null, listaErros: null });
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
  res.locals.moment = moment;
  res.render("pages/index", { paginas: ['create', 'tabela'], dados: null, listaErros: null });
});

router.post("/create", controller.regrasValidacao, function (req, res) {
  const erros = validationResult(req);

  if (!erros.isEmpty()) {
    res.locals.moment = moment;
    controller.adicionarFuncionario(req.body);
    return res.render("pages/index", { paginas: ['create', 'tabela'], dados: req.body, listaErros: erros });
  }
  console.log(req.body);
  return res.render("pages/index", { paginas: ['create', 'tabela'], dados: req.body, listaErros: null });
});


module.exports = router;

