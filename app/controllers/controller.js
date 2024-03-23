const models = require("../models/models");
const { body, validationResult } = require("express-validator");

const controller = {
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

  listarFuncionarios: async (req, res) => {
    try {
      const results = await models.findAll();
      res.render("pages/index", { lista_funcionarios: results, paginas: ['tabela'],dados: null, listaErros: null });
    } catch (e) {
      console.log(e);
      res.json({ erro: "Falha ao acessar dados" });
    }
  },

  adicionarFuncionario: (dados) => models.create(dados),
};

module.exports = controller;