import Tile from './Tile';

export default class LevelController {
  constructor({ targetMap, initialMap, targetMoves }) {
    this._targetMap = targetMap;
    this._initialMap = initialMap;
    this._targetMoves = targetMoves;
  }

  isMatch(currentFieldMap) {
    return currentFieldMap.every((row, y) => {
      return row.every((cell, x) => cell.getTile().getColor().id === this._targetMap[y][x]);
    })
  }

  getMapLengths() {
    return {
      x: this._targetMap[0].length,
      y: this._targetMap.length,
    }
  }

  getLevelResult(moves) {
    return moves <= this._targetMoves ? LevelController.maxResult : moves <= this._targetMoves * 2 ? LevelController.maxResult - 1 : LevelController.minResult;
  }

  getLevelColors() {
    return this._initialMap
      .flat()
      .map(id => Tile.colors.find(color => color.id === id));
  }

  static maxResult = 3;
  static minResult = 1;
}