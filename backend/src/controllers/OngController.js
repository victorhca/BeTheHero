const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },

    async create(req, res){
    const {name, email, whatsapp, city, uf} = req.body;

    const id = crypto.randomBytes(4).toString('HEX'); //Gerar 4 bytes de caracteres Hexadecimais

    //Colocando como async e o await irá forçar que seja aguardado o fim da operação para retornar
    await connection('ongs').insert({
        id, 
        name, 
        email,
        whatsapp,
        city,
        uf,
    })

    return res.json({id});
    }
};