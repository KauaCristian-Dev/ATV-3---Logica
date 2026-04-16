const pool = require("./connection");

async function listSenas(){
    const sql = "SELECT * FROM senas ORDER BY id_sena DESC";

    const response = await pool.query(sql);
    return response;
};

async function createSena(nros){
    const sql = `INSERT INTO senas (nros)
                VALUES ($1)
                RETURNING *`;

    const array = [nros];
    const response = await pool.query(sql,array); 
    return response;
};

module.exports = {listSenas, createSena};

// Toda vez que você não usar uma função que não for sua (tipo a query()), use await e async.