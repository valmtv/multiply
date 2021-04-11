import { randomNumber } from './service';

describe('randomNumber(min, max) retuns', () => {
  it('random undefined, if user input is wrong', () => {
    expect(randomNumber('durak', 2)).toBeUndefined();
    expect(randomNumber(null, { max: 1 })).toBeUndefined();
    expect(randomNumber({ min: 0 }, { max: 1 })).toBeUndefined();
    expect(randomNumber(3, 2)).toBeUndefined();
    expect(randomNumber(2, 2)).toBeUndefined();
  });
  it('random number in greater or equal than min', () => {
    expect(randomNumber(1, 10)).toBeGreaterThanOrEqual(1);
    expect(randomNumber(0, 1000)).toBeGreaterThanOrEqual(1);
    expect(randomNumber(-11, 11)).toBeGreaterThanOrEqual(-11);
  });
  it('random number in less or equal than max', () => {
    expect(randomNumber(1, 10)).toBeLessThanOrEqual(10);
    expect(randomNumber(0, 1000)).toBeLessThanOrEqual(1000);
    expect(randomNumber(-11, 11)).toBeLessThanOrEqual(11);
  });
});
