module.exports = {
  getInvalidVehicle: jest.fn(id =>
    Promise.resolve({
      data: {
        status: '404',
        reason: `Vehicle id: ${id} not found.`
      }
    })
  )
};
