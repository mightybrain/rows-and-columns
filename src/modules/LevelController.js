import Tile from './Tile';

export default class LevelController {
  constructor({ map }) {
    this._map = map;
  }

  isMatch(currentFieldMap) {
    return currentFieldMap.every((row, y) => {
      return row.every((cell, x) => cell.getBrick().getColor().id === this._map[y][x]);
    })
  }

  getMapLengths() {
    return {
      x: this._map[0].length,
      y: this._map.length,
    }
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
}