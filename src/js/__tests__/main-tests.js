import MathCharacter from '../MathChar';
import ArrayBufferConverter from '../ArrayBuf';

test('return stoned decrease attack', () => {
  const merlin = new MathCharacter('Merlin', 100, true, 2);
  expect(merlin.attack).toBe(86);
});

test('return usual decrease attack', () => {
  const baltazar = new MathCharacter('Baltazar', 100, false, 3);
  expect(baltazar.attack).toBe(80);
});

test('return object', () => {
  const buffer = new ArrayBufferConverter();
  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  buffer.load(result);

  expect(buffer.toStr()).toEqual(result);
});