const db = require("../db")

module.exports={
    buscarTodos: ()=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('select * from praias', (error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            })
        })
    },

    buscarUm: (id_praia)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('select * from praias where id_praia=?',[id_praia], (error,results)=>{
                if(error){rejeitado(error); return;}
                
                if(results.length > 0){
                    aceito(results[0])
                }else{
                    aceito(false)
                }
            })
        })
    },

    inserir: (nome_praia , endereco_praia) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('insert into praias(nome_praia,endereco_praia) values(?,?)',[nome_praia,endereco_praia],(error,results)=>{
                if(error){rejeitado(error); return;}
                aceito(results.insertId);
            })
        })
    },

    alterar: (nome_praia , endereco_praia , id_praia) => {
        return new Promise((aceito , rejeitado)=>{
            db.query('update praias set nome_praia=?, endereco_praia=? where id_praia=?',[nome_praia , endereco_praia , id_praia],(error,results)=>{
                if(error){rejeitado(error); return;}
                aceito(results)
            })
        })
    },

    deletar:(id_praia)=>{
        return new Promise((aceito,rejeitado)=>{
            db.query('delete from praias where id_praia=?',[id_praia],(error,results)=>{
                if(error){rejeitado(error); return;}
                aceito(results)
            })
        })
    }


}