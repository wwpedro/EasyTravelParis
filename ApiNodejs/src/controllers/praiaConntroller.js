const praiaService = require("../services/praiaService");

module.exports ={
    buscarTodas: async(req, res)=>{
        let json = {error:"", result:[]};

        let praias = await praiaService.buscarTodos();

        for(let i in praias){
            json.result.push({
                id_praia: praias[i].nome_praia,
                descricao: praias[i].endereco_praia
            })
        }
        res.json(json);
    },

    buscarUma: async(req, res)=>{
        let json = {error:"", result:{}}

        let id_praia = req.params.id_praia;
        let praia = await praiaService.buscarUm(id_praia);

        if(praia){
            json.result=praia;
        }
        res.json(json)
    },

    inserir: async (req, res) =>{
        let json = {error:"", result:{}}

        let nome_praia = req.body.nome_praia;
        let endereco_praia = req.body.endereco_praia;

        if(nome_praia && endereco_praia){
            let id_praia = await praiaService.inserir(nome_praia,endereco_praia);

            json.result={
                id_praia: id_praia,
                nome_praia, 
                endereco_praia
            }
        }else{
            json.error = "Campo não enviado"
        }
        res.json(json)
    },

    alterar: async(req, res)=>{
        let json = {error:"", result:{}}

        let id_praia = req.params.id_praia;
        let nome_praia = req.body.nome_praia;
        let endereco_praia = req.body.endereco_praia;

        if(nome_praia && endereco_praia && id_praia){
            await carroService.alterar(nome_praia , endereco_praia , id_praia)

            json.result={
                id_praia,
                nome_praia,
                endereco_praia
            }
        }else{
            json.error = "Campo não enviado"
        }
        res.json(json)
    },

    deletar: async(req, res)=>{
        let json = {error:"", result:{}}

        let id_praia = req.params.id_praia;

        await praiaService.deletar(id_praia);

        res.json(json);
    }
}