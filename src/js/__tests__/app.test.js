import Validator from '../app';

describe('Validator', () => {
  let validator;
  beforeEach(() => {
    validator = new Validator();
  });

  test('правильное имя', () => {
    expect(validator.validateUsername('username')).toBe(true);
    expect(validator.validateUsername('user-name')).toBe(true);
    expect(validator.validateUsername('user1name')).toBe(true);
    expect(validator.validateUsername('user_name')).toBe(true);
    expect(validator.validateUsername('userName')).toBe(true);
    expect(validator.validateUsername('Username')).toBe(true);
  });

  test('неправильное имя', () => {
    expect(validator.validateUsername('1username')).toBe(false);
    expect(validator.validateUsername('username1')).toBe(false);
    expect(validator.validateUsername('-username')).toBe(false);
    expect(validator.validateUsername('username-')).toBe(false);
    expect(validator.validateUsername('_username')).toBe(false);
    expect(validator.validateUsername('user%name_')).toBe(false);
    expect(validator.validateUsername('user&name')).toBe(false);
    expect(validator.validateUsername('usern4210ame')).toBe(false);
  });

});
