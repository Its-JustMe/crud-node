const models = require("../models/models");
const moment = require("moment");
const { body, validationResult } = require("express-validator");

const tarefasController = {
  regrasValidacao: [
    body(
      'nome'
      ).isAlpha().withMessage('Por favor, insira um nome válido.'),
    body(
      'funcao'
      ).isAlpha().withMessage('Por favor, insira uma função válida.'),
    body(
      'salario'
    ).isNumeric().withMessage('Insira um valor de salário válido')
  ],

  
};

module.exports = tarefasController;
