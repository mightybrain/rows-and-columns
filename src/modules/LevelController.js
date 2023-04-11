import Tile from './Tile';

export default class LevelController {
  constructor({ map, targetMoves }) {
    this._map = map;
    this._targetMoves = targetMoves;
  }

  isMatch(currentFieldMap) {
    return currentFieldMap.every((row, y) => {
      return row.every((cell, x) => cell.getTile().getColor().id === this._map[y][x]);
    })
  }

  getMapLengths() {
    return {
      x: this._map[0].length,
      y: this._map.length,
    }
  }

  getLevelResult(moves) {
    const result = moves <= this._targetMoves ? LevelController.maxResult : moves <= this._targetMoves * 2 ? LevelController.maxResult - 1 : LevelController.minResult;
    return Math.min(result, LevelController.maxResult);
  }

  getColorsCounters() {
    const colorsId = this._map.flat();
    const uniqueColorsId = Array.from(new Set(colorsId));
    return uniqueColorsId.map(id => {
      return {
        color: Tile.colors.find(color => color.id === id),
        counter: colorsId.filter(colorId => colorId === id).length,
      }
    })
  }

  static maxResult = 3;
  static minResult = 1;
}