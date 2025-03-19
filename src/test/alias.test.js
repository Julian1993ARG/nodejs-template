// filepath: c:\Users\Usuario\Desktop\Proyectos\nodejs-template\src\test\alias.test.js

const aliasRegex = /^[a-zA-Z0-9.]{6,20}$/;

describe('Alias Regex Tests', () => {
  const validAliases = [
    'abcdef',
    'abc123',
    'abc.123',
    'A1b2C3',
    'user.name',
    'username123',
    'user.name123',
    'USER123',
    'user.name.123'
  ];

  validAliases.forEach(alias => {
    test(`Valid alias - ${alias}`, () => {
      expect(aliasRegex.test(alias)).toBe(true);
    });
  });
  test('Valid alias - only letters', () => {
    expect(aliasRegex.test('abcdef')).toBe(true);
  });

  test('Valid alias - letters and numbers', () => {
    expect(aliasRegex.test('abc123')).toBe(true);
  });

  test('Valid alias - letters, numbers, and dots', () => {
    expect(aliasRegex.test('abc.123')).toBe(true);
  });

  test('Invalid alias - less than 6 characters', () => {
    expect(aliasRegex.test('abc12')).toBe(false);
  });

  test('Invalid alias - more than 20 characters', () => {
    expect(aliasRegex.test('abcdefghijklmnopqrstuv')).toBe(false);
  });

  test('Invalid alias - contains special characters', () => {
    expect(aliasRegex.test('abc@123')).toBe(false);
  });

  test('Invalid alias - contains spaces', () => {
    expect(aliasRegex.test('abc 123')).toBe(false);
  });
});
