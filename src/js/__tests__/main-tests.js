import MathCharacter from '../MathChar';

test('return stoned decrease attack', () => {
  const merlin = new MathCharacter('Merlin', 100, true, 2);
  expect(merlin.attack).toBe(86);
});

test('return usual decrease attack', () => {
  const baltazar = new MathCharacter('Baltazar', 100, false, 3);
  expect(baltazar.attack).toBe(80);
});