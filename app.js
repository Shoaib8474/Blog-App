const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const path = require('path');
const sequelize = require('./config/database');
const guestRoutes = require('./routes/guestRoutes');
const adminRoutes = require('./routes/adminRoutes');
const {authenticateToken} = require('./middlewares/authMiddleware');
require('dotenv').config();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Parsing Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/guest', guestRoutes);
app.use('/admin', adminRoutes);

// app.get('/dashboard', authenticateToken, (req, res) => {
  //   res.render('signup/dashboard', { user: req.user });
  // });
  
app.use('/auth', authRoutes);
app.get('/', (req, res) => {
  res.redirect('/auth/register');
});




// Database sync and server start
const PORT = process.env.PORT || 3000;
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });