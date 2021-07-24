import React from "react";

var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'react_test',
    password : 'poggo201103',
    database : 'react_test'
});

module.exports = db;