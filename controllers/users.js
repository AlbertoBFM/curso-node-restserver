const { request, response } = require('express');

const usersGet = ( req = request, res = response ) => {
    
    const { q, name = 'no n@me', apikey, page = "1", limit } = req.query;

    res.json({
        msg: 'get API - controllador. OHHH ME VENGOO',
        q,
        name,
        apikey,
        page,
        limit
    });
};

const usersPost = ( req, res = response ) => {
    
    const { nombre, edad } = req.body; // esto viene de la petición post que mandamos con el body

    res.json({
        msg: 'post API - controllador. OHHH ME VENGOO',
        nombre,
        edad
    });
};

const usersPut = ( req, res = response ) => {
    
    const { id } = req.params;
    
    res.json({
        msg: 'put API - controllador. OHHH ME VENGOO',
        id
    });
};

const usersDelete = ( req, res = response ) => {
    res.json({
        msg: 'delete API - controllador. OHHH ME VENGOO'
    });
};

const usersPatch = ( req, res = response ) => {
    res.json({
        msg: 'patch API - controllador. OHHH ME VENGOO'
    });
};


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}