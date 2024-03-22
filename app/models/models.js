const pool = require("../../config/pool_conexoes");

const models = {
    findAll: async () => {
        try {
            const [linhas] = await pool.query('SELECT * FROM usuarios');
            return linhas;
        } catch (error) {
            return error;
        }
    },

    findId: async (id) => {
        try {
            const [linhas,campos] = await pool.query('SELECT * FROM usuarios WHERE id_tarefa = ?',[id]);
            return linhas;
        } catch (error) {
            return error;
        }
    },

    create: async (dadosForm) => {
        try {
            const [linhas, campos] = await pool.query('INSERT INTO usuarios SET ?', [dadosForm]);
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
            const [linhas] = await pool.query('UPDATE usuarios SET ? WHERE id_usuario = ?', [dadosForm, id]);
            return linhas;
        } catch (error) {
            return error;
        }  
    },

    delete: async (id) => {
        try {
            const [linhas] = await pool.query('UPDATE usuarios WHERE id_usuario = ?', [id]);
            return linhas;
        } catch (error) {
            return error;
        }  
    }
  
};
    
module.exports = models