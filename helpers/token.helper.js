const bcrypt = require('bcrypt');
const tokenRounds = 10;

module.exports = {
  generateToken: () => bcrypt.genSaltSync(tokenRounds)
};
