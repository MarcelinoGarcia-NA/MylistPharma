const {Model,DataTypes}=require('sequelize');

class Medicamento extends Model{
    static init(sequelize){
        super.init({ nome:DataTypes.STRING,info:DataTypes.STRING,img:DataTypes.STRING,} 
            ,{sequelize})
            
    }
    
}
module.exports=Medicamento;