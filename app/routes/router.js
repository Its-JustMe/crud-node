const express = require("express");
const router = express.Router();
const moment = require("moment");
const controller = require("../controllers/controller");

router.get("/",  function (req, res) {
   controller.listarTarefasPaginadas(req, res);
});

router.get("/editar", function (req, res) {
  controller.exibirTarefaId(req, res);
});

router.get("/excluir", function (req, res) {
  controller.excluirTarefa(req, res);
});

router.get("/finalizar", function (req, res) {
  controller.finalizarTarefa(req, res);
});

router.get("/iniciar", function (req, res) {
  controller.iniciarTarefa(req, res);
});

router.get("/adicionar", function (req, res) {
  res.locals.moment = moment;
  res.render("pages/adicionar", { dados: null, listaErros: null });
});

router.post("/adicionar", controller.regrasValidacao, function (req, res) {
    controller.adicionarTarefa(req, res);
  }
);


module.exports = router;

