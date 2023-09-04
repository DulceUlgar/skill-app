// auth.middleware.js

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // Obtener el token de autenticación del encabezado de la solicitud
    const token = req.headers.authorization.split(' ')[1];
    // Verificar el token utilizando la clave secreta (debe coincidir con la clave utilizada para firmar el token)
    const decodedToken = jwt.verify(token, 'tu_clave_secreta');
    // Agregar la información del usuario decodificado al objeto de solicitud
    req.userData = { userId: decodedToken.userId, email: decodedToken.email };
    // Llamar a next() para continuar con la ejecución de la ruta protegida
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Autenticación fallida' });
  }
};
