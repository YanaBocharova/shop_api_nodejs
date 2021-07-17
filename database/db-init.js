const sequelize = require('./db-connection');

const User = require('./models/users.model')(sequelize);
const Token = require('./models/token.model')(sequelize);
const Product = require('./models/products.model')(sequelize);

sequelize.sync().then((result) => {

}).catch(err => {
    // console.log(err);
})
