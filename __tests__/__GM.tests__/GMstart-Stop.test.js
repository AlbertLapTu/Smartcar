const postMock = require('../../__mocks__/POST/start-Stop/start-Stop.mocks');
const invalidMock = require('../../__mocks__/utils/globalMocks');

describe('POST request to Lock/Unlock GM vehicle', () => {
  let startCarResponse = null;
  let stopCarResponse = null;
  let invalidVehicle = null;

  beforeAll(() => {
    postMock
      .startCar()
      .then(res => {
        startCarResponse = res;
      })
      .catch(err => {
        throw new Error('Unable to start car');
      });

    postMock
      .stopCar()
      .then(res => {
        stopCarResponse = res;
      })
      .catch(err => {
        throw new Error('Unable to stop car');
      });

    invalidMock
      .getInvalidVehicle(1555)
      .then(res => {
        invalidVehicle = res;
      })
      .catch(err => {
        throw new Error('Unabel to receive invalid vehicle data');
      });
  });

  test('Car should be in a stopped state when turning on, then off', () => {
    const mockStartCar = jest.fn();
  });
});
