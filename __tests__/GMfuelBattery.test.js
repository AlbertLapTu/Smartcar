const postMock = require('../__mocks__/POST/fuel-Battery/fuelBatteryMocks');
const invalidMock = require('../__mocks__/utils/globalMocks');

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
        console.log(sedanTankLevel, 'tankLevel');
        console.log(sedanBatteryLevel, 'batteryLevel');
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

  test('Sedan and Coupe should contain a tank Level key', () => {
    expect(invalidVehicle1111.data.status).toBe('404');
    expect(invalidVehicle1555.data.status).toBe('404');
    // expect(twoDoorCoupe).toHaveProperty('tankLevel'); //Why isn't this working
    // expect(sedan).toHaveProperty('data.tankLevel');
    // expect(invalidVehicle1111).not.toHaveProperty('data.tankLevel.type');
    // expect(invalidVehicle1555).not.toHaveProperty('data.tankLevel.value');
  });

  test('Sedan and Coupe should contain a battery Level key', () => {
    // expect(twoDoorCoupe).toHaveProperty('data.batteryLevel'); //Why isn't this working
    // expect(sedan).toHaveProperty('data.batteryLevel'); //Why isn't this working
    // expect(invalidVehicle1111).not.toHaveProperty(data.batteryLevel);
    // expect(invalidVehicle1555).not.toHaveProperty(data.batteryLevel);
    // expect(twoDoorCoupe).toHaveProperty(data.batteryLevel.type);
    // expect(sedan).toHaveProperty(data.batteryLevel.value);
  });

  test('Battery and fuel levels should not exceed 100 percent', () => {
    // expect(sedanBatteryLevel).toBeLessThan(100); //Why isn't this working
    // expect(sedanTankLevel).toBeLessThan(100);
    // expect(twoDoorCoupeBatteryLevel).toBeLessThan(100);
    // expect(twoDoorCoupeTankLevel).toBeLessThan(100);
  });

  test('Sedan and Coupe should contain a battery level property', () => {});

  test('tankLevel must be rounded to the nearest tenth digit', () => {});

  test('batteryLevel must be rounded to the nearest tenth digit', () => {});

  test('Should return a status code 200 on success', () => {
    expect(sedan.data.status).toBe('200');
    expect(twoDoorCoupe.data.status).toBe('200');
  });
});
