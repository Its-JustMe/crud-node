const express = require("express");
const router = express.Router();
const moment = require("moment");
const controller = require("../controllers/controller");

router.get("/",  function (req, res) {
  res.render("pages/index", { dados: null, listaErros: null });
});

router.get("/editar", function (req, res) {
  
});

router.get("/excluir", function (req, res) {
  
});

router.get("/finalizar", function (req, res) {
  
});

router.get("/iniciar", function (req, res) {
  
});

router.get("/adicionar", function (req, res) {
  res.locals.moment = moment;
  res.render("pages/adicionar", { dados: null, listaErros: null });
});

router.post("/adicionar", controller.regrasValidacao, function (req, res) {
    
  }
);


module.exports = router;

