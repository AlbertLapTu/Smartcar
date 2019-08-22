const postMock = require('../../__mocks__/POST/fuel-Battery/fuelBatteryMocks');
const invalidMock = require('../../__mocks__/utils/globalMocks');

//TODO: PROMISES ARE THROWING ERRORS FOR SOME REASON
//TRY REQUIRING THE FILE INTO A VARIABLE
describe('POST Request to GM for vehical battery and fuel information', () => {
  let sedan = null;
  let twoDoorCoupe = null;
  let invalidVehicle1111 = null;
  let invalidVehicle1555 = null;
  let sedanTankLevel = null;
  let sedanBatteryLevel = null;
  let twoDoorCoupeBatteryLevel = null;
  let twoDoorCoupeTankLevel = null;

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
});
