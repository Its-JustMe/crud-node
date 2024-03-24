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
      res.render("pages/index", 
        { 
          lista_funcionarios: results, 
          pagina: 'tabela', 
          dados: null, 
          listaErros: null 
        }
      );
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
          dados: {
            id_funcionario: '',
            nome_funcionario: req.body.nome_funcionario,
            funcao_funcionario: req.body.funcao_funcionario,
            salario_funcionario: req.body.salario_funcionario
          }, 
          listaErros: erros 
        }
      );
    }

    const dados_form = {
      nome_funcionario: req.body.nome_funcionario,
      funcao_funcionario: req.body.funcao_funcionario,
      salario_funcionario: req.body.salario_funcionario
    }

    try {
      const results = await models.create(dados_form);
    } catch (e) {
      res.json({'Erro': 'Não foi possível acessar os dados.'})
    }

    res.redirect("/");
  },
  
  atualizarDadosFuncionario: async (req, res) => {
    const erros = validationResult(req);

    if (!erros.isEmpty()) {
      return res.render("pages/form", 
        { 
          funcao: 'Editar dados do funcionário', 
          acao: 'update', 
          dados: {
            id_funcionario: req.body.id_funcionario,
            nome_funcionario: req.body.nome_funcionario,
            funcao_funcionario: req.body.funcao_funcionario,
            salario_funcionario: req.body.salario_funcionario
          }, 
          listaErros: erros 
        }
      );
    }

    const dados_form = {
      nome_funcionario: req.body.nome_funcionario,
      funcao_funcionario: req.body.funcao_funcionario,
      salario_funcionario: req.body.salario_funcionario
    }

    try {
      const results = await models.update(dados_form, req.body.id_funcionario);
    } catch (e) {
      res.json({
        erro: 'Falha ao acessar os dados.'
      });
    }

    res.redirect("/");
  },

  exibirFuncionario: async (req, res, pagina) => {
    const { id } = req.query;
    try {
      const funcionario = await models.findId(id);

      if (pagina === 'form') {
        res.render("pages/form", {
          funcao: 'Editar dados do funcionário', 
          acao: 'update',
          dados: {
            id_funcionario: id,
            nome_funcionario: funcionario[0].nome_funcionario,
            funcao_funcionario: funcionario[0].funcao_funcionario,
            salario_funcionario: funcionario[0].salario_funcionario,
          },
          listaErros: null,
        });
      } else {
        res.render("pages/confirm-delete", {
          dados: {
            id_funcionario: id,
            nome_funcionario: funcionario[0].nome_funcionario,
            funcao_funcionario: funcionario[0].funcao_funcionario,
            salario_funcionario: funcionario[0].salario_funcionario,
          }
        });
      }
    } catch (e) {
      console.log(e);
      res.json({ erro: "Falha ao acessar dados" });
    }
  },

  removerFuncionario: async (req, res) => {
    try {
      const results = await models.delete(req.body.id_funcionario);
      return res.json({id: req.body.id_funcionario, msg: results});
    } catch (e) {
      res.json({
        erro: 'Falha ao acessar os dados.'
      });
    }
    res.redirect("/");
  }
};

module.exports = controller;