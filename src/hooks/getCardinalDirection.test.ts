import { getCardinalDirection } from './getCardinalDirection'; 

describe('getCardinalDirection', () => {
  it('should return N for degrees between 337.5 and 360', () => {
    expect(getCardinalDirection(360)).toBe('N');
    expect(getCardinalDirection(0)).toBe('N');
    expect(getCardinalDirection(15)).toBe('N');
  });

  it('should return NE for degrees between 22.5 and 67.5', () => {
    expect(getCardinalDirection(22.5)).toBe('NE');
    expect(getCardinalDirection(45)).toBe('NE');
    expect(getCardinalDirection(67.4)).toBe('NE');
  });

  it('should return E for degrees between 67.5 and 112.5', () => {
    expect(getCardinalDirection(67.5)).toBe('E');
    expect(getCardinalDirection(90)).toBe('E');
    expect(getCardinalDirection(112.4)).toBe('E');
  });

  it('should return SE for degrees between 112.5 and 157.5', () => {
    expect(getCardinalDirection(112.5)).toBe('SE');
    expect(getCardinalDirection(135)).toBe('SE');
    expect(getCardinalDirection(157.4)).toBe('SE');
  });

  it('should return S for degrees between 157.5 and 202.5', () => {
    expect(getCardinalDirection(157.5)).toBe('S');
    expect(getCardinalDirection(180)).toBe('S');
    expect(getCardinalDirection(202.4)).toBe('S');
  });

  it('should return SW for degrees between 202.5 and 247.5', () => {
    expect(getCardinalDirection(202.5)).toBe('SW');
    expect(getCardinalDirection(225)).toBe('SW');
    expect(getCardinalDirection(247.4)).toBe('SW');
  });

  it('should return W for degrees between 247.5 and 292.5', () => {
    expect(getCardinalDirection(247.5)).toBe('W');
    expect(getCardinalDirection(270)).toBe('W');
    expect(getCardinalDirection(292.4)).toBe('W');
  });

  it('should return NW for degrees between 292.5 and 337.5', () => {
    expect(getCardinalDirection(292.5)).toBe('NW');
    expect(getCardinalDirection(315)).toBe('NW');
    expect(getCardinalDirection(337.4)).toBe('NW');
  });

  it('should throw an error for degrees less than 0 or greater than 360', () => {
    expect(() => getCardinalDirection(-1)).toThrow('Число должно быть в диапазоне от 0 до 360');
    expect(() => getCardinalDirection(361)).toThrow('Число должно быть в диапазоне от 0 до 360');
  });
});
