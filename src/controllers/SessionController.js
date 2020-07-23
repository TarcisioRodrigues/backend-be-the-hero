const connection= require('../database/connection');

module.exports={
  async create(response,request){
    const{id}=request.body;

    const ong=await connection('ongs')
    .where('id',id)
    .select('name')
    .fisrt();

    if(!ong){
      return response.status(400).json({error:'No ong found with this ID'});
    }

    return response.json(ong);

  }
}