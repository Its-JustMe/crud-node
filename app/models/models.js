const pool = require("../../config/pool_conexoes");

const models = {
    findAll: async () => {
        try {
            const [linhas] = await pool.query('SELECT * FROM funcionarios');
            return linhas;
        } catch (error) {
            return error;
        }
    },

    findId: async (id) => {
        try {
            const [linhas,campos] = await pool.query('SELECT * FROM funcionarios WHERE id_funcionario = ?',[id]);
            return linhas;
        } catch (error) {
            return error;
        }
    },

    create: async (dadosForm) => {
        try {
            console.log(dadosForm)
            const [linhas, campos] = await pool.query('INSERT INTO funcionarios SET ?', [dadosForm]);
            console.log(linhas);
            console.log(campos);
            return linhas;
        } catch (error) {
            console.log(error);
            return null;
        }  
    },

    update: async (dadosForm, id) => {
        try {
            const [linhas, campos] = await pool.query('UPDATE funcionarios SET ? WHERE id_funcionario = ?', [dadosForm, id]);
            return linhas;
        } catch (error) {
            return error;
        }  
    },

    delete: async (id) => {
        try {
            const [linhas] = await pool.query('DELETE funcionarios WHERE id_funcionario = ?', [id]);
            return linhas;
        } catch (error) {
            return error;
        }  
    }
};
    
module.exports = models;