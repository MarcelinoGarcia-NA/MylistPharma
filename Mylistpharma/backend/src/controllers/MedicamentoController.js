const Medicamento=require('../models/Medicamento');

module.exports={
async store(req,res){
   const {nome,info,img}=req.body;
   
   const m=await Medicamento.create({nome,info,img});
   return res.json(m);

},
async show(req, res) {
   try {
     const m = await Medicamento.findByPk(req.params.id);

     return res.json(m);
   } catch (err) {
     return res.status(400).json({ error: err.message });
   }
 },

async index(req,res){
   const m=await Medicamento.findAll();
   return res.json(m);

},
async update(req, res) {
   try {
     const m = await Medicamento.findByPk(req.params.id);

     await m.update(req.body);

     return res.json({ m });
   } catch (err) {
     return res.status(400).json({ error: err.message });
   }
 },

 async destroy(req, res) {
   try {
     const m = await Medicamento.findByPk(req.params.id);

     await m.destroy();

     return res.json();
   } catch (err) {
     return res.status(400).json({ error: err.message });
   }
 }
};