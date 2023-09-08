const { NODE_ENV } = process.env;
module.exports = require(`./bundle/webpack.${NODE_ENV}.js`);