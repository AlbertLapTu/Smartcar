const postMock = require('../mocks/POST/vehicleInfo/postMock');

describe('POST Request to GM endpoint', () => {
  let vehicle1234 = null;
  let vehicle1235 = null;
  let invalidVehicle1236 = null;
  let invalidVehicle1999 = null;

  beforeAll(() => {
    postMock.getVehicleInfo1234().then(res => {
      vehicle1234 = res;
    });
    postMock.getVehicleInfo1235().then(res => {
      vehicle1235 = res;
    });
    postMock.getInvalidVehicle(1236).then(res => {
      invalidVehicle1236 = res;
    });
    postMock.getInvalidVehicle(1999).then(res => {
      invalidVehicle1999 = res;
    });
  });

  test('Should only call the mock function once per available vehicle', () => {
    expect(postMock.getVehicleInfo1234.mock.calls.length).toBe(1);
    expect(postMock.getVehicleInfo1235.mock.calls.length).toBe(1);
    expect(postMock.getInvalidVehicle.mock.calls.length).toBe(2);
  });

  test('Should return a 404 error if a vehicle ID does not exist', () => {
    expect(invalidVehicle1236.data.status).toBe('404');
    expect(invalidVehicle1999.data.status).toBe('404');
  });

  test('Should return a status code 200 on success for vehicle 1234', () => {
    expect(vehicle1234.data.status).toBe('200');
  });

  test('Should return a status code 200 on success for vehicle 1235', async () => {
    expect(vehicle1235.data.status).toBe('200');
  });

  test('GM response should contain a service, status, and data key for vehicle 1234', () => {
    let objectKeys = new Set(Object.keys(vehicle1234.data)); //[service, status, data];
    expect(objectKeys.size).toBe(3);
    expect(objectKeys.has('service')).toBe(true);
    expect(objectKeys.has('status')).toBe(true);
    expect(objectKeys.has('data')).toBe(true);
  });

  test('GM response should contain a service, status, and data key for vehicle 1235', () => {
    let objectKeys = new Set(Object.keys(vehicle1235.data)); //[service, status, data];
    expect(objectKeys.size).toBe(3);
    expect(objectKeys.has('service')).toBe(true);
    expect(objectKeys.has('status')).toBe(true);
    expect(objectKeys.has('data')).toBe(true);
  });

  //Should have vin, color, fourDoorSedan, twoDoorCoupe
  test('GM response data should have a vin, color, fourDoorSedan and twoDoorCoupe keys for vehicle 1234', () => {
    let objectKeys = new Set(Object.keys(vehicle1234.data.data));
    expect(objectKeys.size).toBe(5);
    expect(objectKeys.has('vin')).toBe(true);
    expect(objectKeys.has('color')).toBe(true);
    expect(objectKeys.has('fourDoorSedan')).toBe(true);
    expect(objectKeys.has('twoDoorCoupe')).toBe(true);
    expect(objectKeys.has('driveTrain')).toBe(true);
  });

  test('GM response data should have a vin, color, fourDoorSedan and twoDoorCoupe keys for vehicle 1235', () => {
    let objectKeys = new Set(Object.keys(vehicle1235.data.data));
    expect(objectKeys.size).toBe(5);
    expect(objectKeys.has('vin')).toBe(true);
    expect(objectKeys.has('color')).toBe(true);
    expect(objectKeys.has('fourDoorSedan')).toBe(true);
    expect(objectKeys.has('twoDoorCoupe')).toBe(true);
    expect(objectKeys.has('driveTrain')).toBe(true);
  });

  test('Vehicle data must have a String type for Vin', () => {
    expect(vehicle1234.data.data.vin.type).toEqual('String');
  });

  test('Vehicle data must have a String type for color', () => {
    expect(vehicle1234.data.data.color.type).toEqual('String');
  });

  test('Vehicle data must have a String type for driveTrain', () => {
    expect(vehicle1234.data.data.driveTrain.type).toEqual('String');
  });

  test('Vehicle data must have a Boolean type for fourDoorSedan and twoDoorCoupe', () => {
    expect(vehicle1234.data.data.fourDoorSedan.type).toEqual('Boolean');
    expect(vehicle1234.data.data.twoDoorCoupe.type).toEqual('Boolean');
  });
});
