const sedan = require('./vehicle1234-sedan-security.response.json');
const coupe = require('./vehicle1235-coupe-security.response.json');

module.exports = {
  getCoupeSecurityInfo: jest.fn(() =>
    Promise.resolve({
      data: coupe
    })
  ),
  getSedanSecurityInfo: jest.fn(() =>
    Promise.resolve({
      data: sedan
    })
  )
};
