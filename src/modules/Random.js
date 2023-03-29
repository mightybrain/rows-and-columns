export default class Random {
  static getRandomFromRange(from, to) {
    return from === to ? from : from + Math.round(Math.random() * (to - from));
  }
}