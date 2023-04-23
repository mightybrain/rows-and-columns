export default class Levels {
  constructor({ levels }) {
    this._levels = levels;
  }

  getLevelsList() {
		return Object.keys(levels).reduce((total, key) => total.concat(this._levels[key]), []);
  }

  getLevelById(id) {
    id = +id;
    for (let key in this._levels) {
      const level = this._levels[key].find(item => item.id === id);
      if (level) return level;
    }
  }

  getLevelByKeyAndIndex(key, index) {
    return this._levels[key][index];
  }

  getLevelsByKey(key) {
    return this._levels[key];
  }

  getLevelScore(moves, levelId) {
    const level = this.getLevelById(levelId);
    return moves <= level.moves ? Levels.maxScore : moves <= level.moves * 2 ? Levels.maxScore - 1 : Levels.minScore;
  }

  static maxScore = 3;
  static minScore = 1;
}