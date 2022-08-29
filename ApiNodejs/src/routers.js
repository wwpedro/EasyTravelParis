const esxpress = require("express");
const router = esxpress.Router();

const praiaController = require('./controllers/praiaConntroller')

router.get('/praias', praiaController.buscarTodas)
router.get('/praia/:id_praia', praiaController.buscarUma)
router.post('/praia', praiaController.inserir)
router.put('/praia/:id_praia', praiaController.alterar)
router.delete('/praia/:id_praia', praiaController.deletar);


module.exports = router;