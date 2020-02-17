const mysql = require("mysql2");
 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb2",
  password: "1111"
});
 
connection.query("CREATE DATABASE usersdb2",
  function(err, results) {
    if(err) console.log(err);
    else console.log("База данных создана");
});

const sql = `create table if not exists users(
    id int primary key auto_increment,
    name varchar(255) not null,
    age int not null
  )`;
   
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    else console.log("Таблица создана");
});

const sql = `INSERT INTO users(name, age) VALUES('Sam', 31)`;
 
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});

const users = [
    ["Bob", 22],
    ["Alice", 25],
    ["Kate", 28]
  ];
  const sql = `INSERT INTO users(name, age) VALUES ?`;
   
connection.query(sql, [users], function(err, results) {
    if(err) console.log(err);
    console.log(results);
});

const sql = `SELECT * FROM users`;
 
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});

const sql = "SELECT * FROM users";
connection.query(sql,  function(err, results) {
    if(err) console.log(err);
    const users = results;
    for(let i=0; i < users.length; i++){
      console.log(users[i].name);
    }
});

const sql = `SELECT * FROM users WHERE name=? AND age=?`;
const filter = ["Tom", 29];
connection.query(sql, filter, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
 
connection.end();