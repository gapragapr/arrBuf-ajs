import MathCharacter from './MathChar';

export default class Magician extends MathCharacter {
  constructor(name, attack = 30, stoned = false, range) {
    super(name, attack, stoned, range);
  }
}