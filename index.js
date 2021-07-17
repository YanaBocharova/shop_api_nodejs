require('./database/db-init');
const express = require('express');
const app = express();
const expressHbs = require('express-handlebars');
const hbs = require('hbs');
const usersRouter = require('./routes/users.route');
const authRouter = require('./routes/authentication.route');
const prodRouter = require('./routes/products.route');
const {APP_PORT, APP_HOST} = require('./config');
const cors = require('cors');
const sequelize = require('./database/db-connection');
const User = require('./database/models/users.model')(sequelize);
const Product = require('./database/models/products.model')(sequelize);
const { Op, json } = require('sequelize');
const { response } = require('express');

app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.send('ok');
});

app.use(express.json());
app.use(cors());

app.use('/api/users', usersRouter);
app.use('/api/authentication', authRouter);
app.use('/api/products', prodRouter);

app.listen(APP_PORT, APP_HOST, () => {
    console.log('Success start!')
});

// User.create({
//     email: 'vasya@gmail.com',
//     password: '12345'
// }).then(res => {
//     console.log('Success');
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// Product.create({
//     nameproduct: 'laptopNew',
//     price: '900.00'
// }).then(res => {
//     console.log('Success');
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// Product.create({
//     nameproduct: 'laptopCool',
//     price: '10600.00'
// }).then(res => {
//     console.log('Success');
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// Product.create({
//     nameproduct: 'tv2',
//     price: '8900.00'
// }).then(res => {
//     console.log('Success');
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// CREATE
// User.create({
//     email: 'vasya@gmail.com',
//     password: '12345678'
// }).then(res => {
//     console.log('Success');
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// Get
// User.findAll({ raw: true }).then(users => {
//     console.log(users);
// });
// User.findOne({
//     where: {
//         email: 'vasya@gmail.com'
//     },
//     raw: true
// }).then(user => {
//     console.log(user);
// });

// Update
// User.update({
//     password: '87654321'
// }, {
//     where: {
//         email: {
//             [Op.eq]: 'vasya@gmail.com'
//         }
//     }
// }).then(res => {
//     console.log(res);
// })

// User.destroy({
//     where: {
//         email: 'vasya@gmail.com'
//     }
// }).then(res => {
//     console.log(res);
// })
