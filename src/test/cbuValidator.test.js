const CBUValidator = require('../Modules/cbuValidator');

test('validarCBU should return false for invalid CBU', () => {
  const validator = new CBUValidator();
  expect(validator.validarCBU('2850590940090418135202')).toBe(false);
});

test('validarCBU should return false for invalid CBU', () => {
  const validator = new CBUValidator();
  expect(validator.validarCBU('28505909400904181352')).toBe(false);
});

test('validarCBU should return false for invalid CBU', () => {
  const validator = new CBUValidator();
  expect(validator.validarCBU('1234567890123456789012')).toBe(false);
});

test('validarCBU should return false for invalid CBU', () => {
  const validator = new CBUValidator();
  expect(validator.validarCBU('28505909400904181352AB')).toBe(false);
});

test('validarCBU should return true for valid CBU', () => {
  const validator = new CBUValidator();
  expect(validator.validarCBU('0070115630004037879889')).toBe(true);
});

test('validarCBU should return true for valid CBU', () => {
  const validator = new CBUValidator();
  expect(validator.validarCBU('2850590940090418135201')).toBe(true);
});

test('validarCBU should return true for valid CBU', () => {
  const validator = new CBUValidator();
  expect(validator.validarCBU('0720216488000001583890')).toBe(true);
});

test('validarCBU should return true for valid CBU', () => {
  const validator = new CBUValidator();
  expect(validator.validarCBU('4530000800016640604942')).toBe(true);
});

test('validarCBU should return true for valid CBU', () => {
  const validator = new CBUValidator();
  expect(validator.validarCBU('0000003100062870255445')).toBe(true);
});

test('validarCBU should return true for valid CBU', () => {
  const validator = new CBUValidator();
  expect(validator.validarCBU('0000007900202346617294')).toBe(true);
});



