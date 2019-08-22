const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

module.exports = app => {
  app
    .use(cors())
    .use(morgan('dev'))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json());
};
