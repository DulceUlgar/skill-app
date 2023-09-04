const connection = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'skill_swap'
  });
  
  module.exports = connection;
