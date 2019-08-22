const postMock = require('../../__mocks__/POST/vehicleInfo/vehicleInfoMock');
const invalidMock = require('../../__mocks__/utils/globalMocks');

describe('POST Request to GM for general Vehicle information', () => {
  let sedan = null;
  let twoDoorCoupe = null;
  let invalidVehicle1236 = null;
  let invalidVehicle1999 = null;

  //TODO: Check if throwing an error returns out
  beforeAll(() => {
    postMock
      .getVehicleInfo1234()
      .then(res => {
        sedan = res;
      })
      .catch(err => {
        throw new Error('Unable to receive Vehicle info 1234 in Promise');
      });
    postMock
      .getVehicleInfo1235()
      .then(res => {
        twoDoorCoupe = res;
      })
      .catch(err => {
        throw new Error('Unable to receive Vehicle info 1235 in Promise');
      });

    invalidMock
      .getInvalidVehicle(1236)
      .then(res => {
        invalidVehicle1236 = res;
      })
      .catch(err => {
        throw new Error('Unable to receive Invalid car JSON in Promise');
      });
    invalidMock
      .getInvalidVehicle(1999)
      .then(res => {
        invalidVehicle1999 = res;
      })
      .catch(err => {
        throw new Error('Unable to receive Invalid vehicle JSON in Promise');
      });
  });

  test('Should only call the mock function once per available vehicle', () => {
    expect(postMock.getVehicleInfo1234.mock.calls.length).toBe(1);
    expect(postMock.getVehicleInfo1235.mock.calls.length).toBe(1);
    expect(invalidMock.getInvalidVehicle.mock.calls.length).toBe(2);
  });

  test('Should return a 404 error if a vehicle ID does not exist', () => {
    expect(invalidVehicle1236.data.status).toBe('404');
    expect(invalidVehicle1999.data.status).toBe('404');
  });

  test('Should return a status code 200 on success for vehicle 1234', () => {
    expect(sedan.data.status).toBe('200');
  });

  test('Should return a status code 200 on success for vehicle 1235', async () => {
    expect(twoDoorCoupe.data.status).toBe('200');
  });

  test('GM response should contain a service, status, and data key for vehicle 1234', () => {
    let objectKeys = new Set(Object.keys(sedan.data)); //[service, status, data];
    expect(objectKeys.size).toBe(3);
    expect(objectKeys.has('service')).toBe(true);
    expect(objectKeys.has('status')).toBe(true);
    expect(objectKeys.has('data')).toBe(true);
  });

  test('GM response should contain a service, status, and data key for vehicle 1235', () => {
    let objectKeys = new Set(Object.keys(twoDoorCoupe.data)); //[service, status, data];
    expect(objectKeys.size).toBe(3);
    expect(objectKeys.has('service')).toBe(true);
    expect(objectKeys.has('status')).toBe(true);
    expect(objectKeys.has('data')).toBe(true);
  });

  test('GM response data should have a vin, color, fourDoorSedan and twoDoorCoupe keys for vehicle 1234', () => {
    let objectKeys = new Set(Object.keys(sedan.data.data));
    expect(objectKeys.size).toBe(5);
    expect(objectKeys.has('vin')).toBe(true);
    expect(objectKeys.has('color')).toBe(true);
    expect(objectKeys.has('fourDoorSedan')).toBe(true);
    expect(objectKeys.has('twoDoorCoupe')).toBe(true);
    expect(objectKeys.has('driveTrain')).toBe(true);
  });

  test('GM response data should have a vin, color, fourDoorSedan and twoDoorCoupe keys for vehicle 1235', () => {
    let objectKeys = new Set(Object.keys(twoDoorCoupe.data.data));
    expect(objectKeys.size).toBe(5);
    expect(objectKeys.has('vin')).toBe(true);
    expect(objectKeys.has('color')).toBe(true);
    expect(objectKeys.has('fourDoorSedan')).toBe(true);
    expect(objectKeys.has('twoDoorCoupe')).toBe(true);
    expect(objectKeys.has('driveTrain')).toBe(true);
  });

  test('Vehicle data must have a String type for Vin', () => {
    expect(sedan.data.data.vin.type).toEqual('String');
    expect(twoDoorCoupe.data.data.vin.type).toEqual('String');
  });

  test('Vehicle data must have a String type for color', () => {
    expect(sedan.data.data.color.type).toEqual('String');
    expect(twoDoorCoupe.data.data.color.type).toEqual('String');
  });

  test('Vehicle data must have a String type for driveTrain', () => {
    expect(sedan.data.data.driveTrain.type).toEqual('String');
    expect(twoDoorCoupe.data.data.driveTrain.type).toEqual('String');
  });

  test('Vehicle data must have a Boolean type for fourDoorSedan and twoDoorCoupe', () => {
    expect(sedan.data.data.fourDoorSedan.type).toEqual('Boolean');
    expect(sedan.data.data.twoDoorCoupe.type).toEqual('Boolean');
    expect(twoDoorCoupe.data.data.fourDoorSedan.type).toEqual('Boolean');
    expect(twoDoorCoupe.data.data.twoDoorCoupe.type).toEqual('Boolean');
  });
});
