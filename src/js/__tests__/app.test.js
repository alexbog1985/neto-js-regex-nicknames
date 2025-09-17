import Validator from '../app';

describe('Validator', () => {
  let validator;
  beforeEach(() => {
    validator = new Validator();
  });

  test('правильное имя', () => {
    expect(validator.validateUsername('username')).toBe(true);
  });
});
