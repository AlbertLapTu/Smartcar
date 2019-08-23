const { getVehiclePayloadFormat } = require('../../server/lib/payloadFormattingHelpers');
const sedanData = require('../../__mocks__/POST/vehicleInfo/vehicle1234-sedan-info.response.json');
const coupeData = require('../../__mocks__/POST/vehicleInfo/vehicle1235-coupe-info.response.json');

//Mimic the response format
const coupe = {
  data: coupeData
};

const sedan = {
  data: sedanData
};

const expectedKeys = {
  vin: '1234',
  color: 'Green',
  doorCount: '2',
  driveTrain: 'Filler'
};

const coupePayload = getVehiclePayloadFormat(coupe);
const sedanPayload = getVehiclePayloadFormat(sedan);

describe('getVehicleFormat function', () => {
  test('Formatted payload should have 4 keys', () => {
    expect(Object.keys(coupePayload).length).toBe(4);
    expect(Object.keys(sedanPayload).length).toBe(4);
  });

  test('Payload should contain the keys vin, color, doorcount and driveTrain', () => {
    for (let key in coupePayload) {
      expect(expectedKeys.hasOwnProperty(key)).toBe(true);
    }

    for (let key in sedanPayload) {
      expect(expectedKeys.hasOwnProperty(key)).toBe(true);
    }
  });

  test('Sedan should have a door count of 4', () => {
    expect(sedanPayload.doorCount).toBe(4);
    expect(sedanPayload.doorCount).not.toBe(2);
  });

  test('Coupes should have a door count of 2', () => {
    expect(coupePayload.doorCount).toBe(2);
    expect(coupePayload.doorCount).not.toBe(4);
  });
});
