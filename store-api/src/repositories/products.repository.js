import { pool } from '../db/index.js';

export async function getProducts() {
    // check out a single client
    const client = await pool.connect();

    var {rows} = await pool.query('SELECT * FROM "Products"');

    return rows;
}