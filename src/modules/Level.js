import Tile from './Tile';

export default class Level {
  constructor({ key, index, id, targetMap, initialMap, moves }) {
    this._key = key;
    this._index = index;
    this._id = id;
    this._targetMap = targetMap;
    this._initialMap = initialMap;
    this._moves = moves;
  }

  match(currentFieldMap) {
    return currentFieldMap.every((row, y) => {
      return row.every((cell, x) => cell.getTile().getColor().id === this._targetMap[y][x]);
    })
  }

  getKey() {
    return this._key;
  }

  getIndex() {
    return this._index;
  }

  getId() {
    return this._id;
  }

  getTargetMap() {
    return this._targetMap;
  }

  getMapLengths() {
    return {
      x: this._targetMap[0].length,
      y: this._targetMap.length,
    }
  }

  getColors() {
    return this._initialMap
      .flat()
      .map(id => Tile.colors.find(color => color.id === id));
  }
}