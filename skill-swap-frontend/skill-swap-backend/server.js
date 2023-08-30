const express = require('express');
const app = express();

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const adRoutes = require('./routes/ad.routes');

// Middlewares y configuraciones

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/ads', adRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
