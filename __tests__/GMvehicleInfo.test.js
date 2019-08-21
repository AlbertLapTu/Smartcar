const postMock = require('../mocks/POST/vehicleInfo/postMock');

describe('POST Request to GM endpoint', () => {
  let vehicle1234 = null;
  let vehicle1235 = null;

  beforeAll(() => {
    postMock.getVehicleInfo1234().then(res => {
      vehicle1234 = res;
    });
    postMock.getVehicleInfo1235().then(res => {
      vehicle1235 = res;
    });
  });

  test('Should return a status code 200 on success for vehicle 1234', () => {
    expect(vehicle1234.data.status).toBe('200');
  });

  test('Should return a status code 200 on success for vehicle 1235', async () => {
    expect(vehicle1235.data.status).toBe('200');
  });

  test('GM response should contain the correct key type for vehicle 1234', () => {});

  test('GM response should contain the correct key type for vehicle 1235', () => {});

  test('GM response should contain the correct value type', () => {});
});
