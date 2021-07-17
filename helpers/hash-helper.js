
const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashHelper = {
   generate :(value)=>{
      const salt = bcrypt.genSaltSync(saltRounds);
      console.log(salt);
      const hash = bcrypt.hashSync(value,salt);
      return hash;
   },
   compare:null
};

module.exports = hashHelper;