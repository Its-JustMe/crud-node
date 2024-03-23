const models = require("../models/models");
const { body, validationResult } = require("express-validator");

const controller = {
  regrasValidacao: [
    body(
      'nome_funcionario'
      ).isAlpha('pt-BR', {ignore: ' '}).withMessage('Por favor, insira um nome válido.'),
    body(
      'funcao_funcionario'
      ).isAlpha('pt-BR', {ignore: ' '}).withMessage('Por favor, insira uma função válida.'),
    body(
      'salario_funcionario'
    ).isNumeric().withMessage('Insira um valor de salário válido')
  ],

  listarFuncionarios: async (req, res) => {
    try {
      const results = await models.findAll();
      res.render("pages/index", { lista_funcionarios: results, pagina: 'tabela', dados: null, listaErros: null });
    } catch (e) {
      console.log(e);
      res.json({ erro: "Falha ao acessar dados" });
    }
  },

  adicionarFuncionario: async (req, res) => {
    const erros = validationResult(req);

    if (!erros.isEmpty()) {
      return res.render("pages/form", 
        { 
          funcao: 'Novo funcionário', 
          acao: 'create', 
          dados: req.body, 
          listaErros: erros 
        }
      );
    }

    try {
      const results = await models.create(req.body);
    } catch (e) {
      res.json({'Erro': 'Não foi possível acessar os dados.'})
    }

    res.redirect("/");
  },
};

module.exports = controller;