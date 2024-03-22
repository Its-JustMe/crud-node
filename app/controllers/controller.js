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

  listarFuncionarios: () => {
    try {
      results = await models.findAll();
      res.render("pages/index", { funcionarios: results });
    } catch (e) {
      console.log(e); // exibir os erros no console do vs code
      res.json({ erro: "Falha ao acessar dados" });
    }
  },

  incluirFuncionario: (dadosForm) => {
    
  }
  
};

module.exports = tarefasController;
