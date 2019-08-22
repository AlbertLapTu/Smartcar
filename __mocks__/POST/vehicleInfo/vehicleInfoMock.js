const sedan = require('./vehicle1234-sedan-info.response.json');
const coupe = require('./vehicle1235-coupe-info.response.json');

module.exports = {
  getVehicleInfo1234: jest.fn(() =>
    Promise.resolve({
      data: sedan
    })
  ),
  getVehicleInfo1235: jest.fn(() =>
    Promise.resolve({
      data: coupe
    })
  )
};
