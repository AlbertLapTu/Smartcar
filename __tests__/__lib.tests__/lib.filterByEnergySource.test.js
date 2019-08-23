const { filterByEnergySource } = require('../../server/lib/payloadFormattingHelpers');

const sedanData = require('../../__mocks__/POST/fuel-Battery/vehicle1234.sedan-battery.fuel.response.json');
const coupeData = require('../../__mocks__/POST/fuel-Battery/vehicle1235.coupe-battery.fuel.response.json');

const coupe = {
  data: coupeData
};
const sedan = {
  data: sedanData
};

const coupeBatteryResponse = filterByEnergySource(coupe, 'batteryLevel');
const sedanBatteryResponse = filterByEnergySource(sedan, 'batteryLevel');
const coupeTankLevelResponse = filterByEnergySource(coupe, 'tankLevel');
const sedanTankLevelResponse = filterByEnergySource(sedan, 'tankLevel');

describe('Filter by battery level function', () => {
  test('batteryLevel value should be rounded to the nearest tenth after formatting', () => {
    const mockCoupeBattery = Math.round(2 * 10) / 10;
    const mockSedanBattery = Math.round(66.2 * 10) / 10;
    expect(mockCoupeBattery).toEqual(coupeBatteryResponse.percent);
    expect(mockSedanBattery).toEqual(sedanBatteryResponse.percent);
  });
  test('batteryLevel value should not have more than one digit after the decimal', () => {
    let decimalDigits = sedanBatteryResponse.percent
      .toString()
      .split('.')
      .slice(1);
    expect(Number(decimalDigits)).toBeLessThanOrEqual(9);
  });
  test('batteryLevel value to be of type string', () => {
    expect(typeof coupe.data.data.batteryLevel.value).toBe('string');
  });
  test('There should only be a percent key in response', () => {
    const key = { percent: true };
    for (let coupeKey in coupeBatteryResponse) {
      expect(key.hasOwnProperty(coupeKey));
      expect(sedanBatteryResponse.hasOwnProperty(coupeKey));
    }
  });
});

describe('Filter by tank level function', () => {
  test('tankLevel value should be rounded to the nearest tenth after formatting', () => {
    const mockCoupeTankLevel = Math.round(10.2 * 10) / 10;
    const mockSedanTankLevel = Math.round(24.68 * 10) / 10;
    expect(mockCoupeTankLevel).toEqual(coupeTankLevelResponse.percent);
    expect(mockCoupeTankLevel).toEqual(sedanTankLevelResponse.percent);
  });
  test('tankLevel value should not have one than digit after the decimal', () => {
    let sedanDecimalDigits = sedanTankLevelResponse.percent
      .toString()
      .split('.')
      .slice(1);
    let coupeDecimalDigits = coupeTankLevelResponse.percent
      .toString()
      .split('.')
      .splice(1);
    expect(Number(sedanDecimalDigits)).toBeLessThanOrEqual(9);
    expect(Number(coupeDecimalDigits)).toBeLessThanOrEqual(9);
  });
  test('tankLevel value should be of type string', () => {
    expect(typeof sedan.data.data.tankLevel).toBe('string');
    expect(typeof coupe.data.data.tankLevel).toBe('string');
  });
  test('There should only be a percent key within tank level response', () => {
    let sedanKeys = Object.keys(sedanTankLevelResponse);
    let coupeKeys = Object.keys(coupeTankLevelResponse);
    expect(sedanKeys.length).toBe(1);
    expect(coupeKeys.length).toBe(1);
  });
});
