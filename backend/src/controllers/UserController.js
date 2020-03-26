const connection=require('../database/connection');
const crypto=require('crypto');


module.exports={

    async index(request,response){
        const user=await connection('user').select('*');
        return response.json(user);
    },


    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        //console.log(data);
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('user').insert({
            id,name, email, whatsapp, city, uf
        });
        return response.json({id});
    }
};