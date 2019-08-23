const postMock = require('../../__mocks__/POST/fuel-Battery/fuelBatteryMocks');
const invalidMock = require('../../__mocks__/utils/globalMocks');

describe('POST Request to GM for vehicle battery and fuel information', () => {
  let sedan = null;
  let twoDoorCoupe = null;
  let invalidVehicle1111 = null;
  let invalidVehicle1555 = null;

  beforeAll(() => {
    postMock
      .getCoupeInfo()
      .then(res => {
        twoDoorCoupe = res;
        twoDoorCoupeTankLevel = parseInt(res.data.data.tankLevel.value);
        twoDoorCoupeBatteryLevel = parseInt(res.data.data.batteryLevel.value);
      })
      .catch(err => {
        throw new Error('Unable to get Coupe battery info');
      });

    postMock
      .getSedanInfo()
      .then(res => {
        sedan = res;
        sedanTankLevel = parseInt(res.data.tankLevel.value);
        sedanBatteryLevel = parseInt(res.data.batteryLevel.value);
      })
      .catch(err => {
        throw new Error('Unable to get Sedan battery info');
      });

    invalidMock
      .getInvalidVehicle(1111)
      .then(res => {
        invalidVehicle1111 = res;
      })
      .catch(err => {
        throw new Error('Unable to get invalid vehicle information for vehicle id 1111');
      });

    invalidMock
      .getInvalidVehicle(1555)
      .then(res => {
        invalidVehicle1555 = res;
      })
      .catch(err => {
        throw new Error('Unable to get invalid vehicle information for vehicle id 0000');
      });
  });

  test('Should return a status code 200 on success', () => {
    expect(sedan.status).toBe('200');
    expect(twoDoorCoupe.status).toBe('200');
  });
  test('Should contain a battery data key', () => {
    expect(sedan.hasOwnProperty('batteryData')).toBeTruthy();
    expect(twoDoorCoupe.hasOwnProperty('batteryData')).toBeTruthy();
  });
  test('Should contain a fuelData property', () => {
    expect(sedan.hasOwnProperty('fuelData')).toBeTruthy();
    expect(twoDoorCoupe.hasOwnProperty('fuelData')).toBeTruthy();
  });

  test('Battery value type should be a Number', () => {
    expect(twoDoorCoupe.batteryData.type).toEqual('Number');
  });

  test('Should return a 404 if vehicle does not exist', () => {
    expect(invalidVehicle1111.data.status).toEqual('404');
    expect(invalidVehicle1555.data.status).toEqual('404');
  });
  test('Should have a reason within the error response message', () => {
    expect(invalidVehicle1111.data.hasOwnProperty('reason')).toBeTruthy();
    expect(invalidVehicle1555.data.hasOwnProperty('reason')).toBeTruthy();
  });
});
