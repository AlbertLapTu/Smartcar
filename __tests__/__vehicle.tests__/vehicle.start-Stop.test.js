const postMock = require('../../__mocks__/POST/start-Stop/start-Stop.mocks');
const invalidMock = require('../../__mocks__/utils/globalMocks');

const stopRequest = {
  id: '1234',
  command: 'STOP_VEHICLE',
  responseType: 'JSON'
};

const startRequest = {
  id: '1234',
  command: 'START_VEHICLE',
  responseType: 'JSON'
};

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
        console.error(err);
      });

    postMock
      .stopCar()
      .then(res => {
        stopCarResponse = res;
      })
      .catch(err => {
        console.error(err);
      });

    invalidMock
      .getInvalidVehicle(1555)
      .then(res => {
        invalidVehicle = res;
      })
      .catch(err => {
        console.error(err);
      });
  });

  test('Car should be in a stopped state when turning on, then off', () => {
    const mockStartCar = jest.fn().mockReturnValueOnce('EXECUTED');
    const mockStopCar = jest.fn().mockReturnValueOnce('FAILED');
    expect(mockStartCar()).toBe(startCarResponse.actionResult.status);
    expect(mockStopCar()).toBe(stopCarResponse.actionResult.status);
  });
});
