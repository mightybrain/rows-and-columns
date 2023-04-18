export default class Levels {
  constructor({ levels }) {
    this._levels = levels;
  }

  getLevelsList() {
		return Object.keys(levels).reduce((total, key) => total.concat(this._levels[key]), []);
  }

  getLevelById(id) {
    for (let key in levels) {
      const level = levels[key].find(item => item.id === id);
      if (level) return level;
    }
  }

  getLevelByKeyAndIndex(key, index) {
    return this._levels[key][index];
  }

  getLevelsByKey(key) {
    return this._levels[key];
  }
}