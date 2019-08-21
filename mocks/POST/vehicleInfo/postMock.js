const vehicle1234 = require('./vehicle1234.response.json');
const vehicle1235 = require('./vehicle1235.response.json');

module.exports = {
  getVehicleInfo1234: jest.fn(() =>
    Promise.resolve({
      data: vehicle1234
    })
  ),
  getVehicleInfo1235: jest.fn(() =>
    Promise.resolve({
      data: vehicle1235
    })
  ),
  getInvalidVehicle: jest.fn(id =>
    Promise.resolve({
      data: {
        status: '404',
        reason: `Vehicle id: ${id} not found.`
      }
    })
  )
};
