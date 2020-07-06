const express = require('express');
const MedicamentoController=require('./controllers/MedicamentoController');
const routes = express.Router();


routes.get('/',(req,res)=>{
    return res.json({hello:"Word"});
})
routes.post('/medicamento',MedicamentoController.store);
routes.get('/medicamento', MedicamentoController.index);
routes.get('/medicamento/:id',MedicamentoController.show);
routes.put('/medicamento/:id', MedicamentoController.update);
routes.delete('/medicamento/:id', MedicamentoController.destroy);

module.exports=routes;