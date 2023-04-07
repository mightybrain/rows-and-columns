import Draw from './Draw';
import Tile from './Tile';

export default class LevelPreview {
  constructor({ ctx, map }) {
    this._ctx = ctx;
    this._map = map;

    this._columnWidth = 0;
    this._rowHeight = 0;
    this._setMetrics();
  }

  render() {
    this._map.forEach((row, y) => {
      row.forEach((colorId, x) => {
        const tilePositionX = LevelPreview.positionX + (this._columnWidth + LevelPreview.gap) * x;
        const tilePositionY = LevelPreview.positionY + (this._rowHeight + LevelPreview.gap) * y;

        const tileColor = Tile.colors.find(color => color.id === colorId);

        Draw.roundedRect(this._ctx, tilePositionX, tilePositionY, this._columnWidth, this._rowHeight, LevelPreview.tileRadius, tileColor.key);
      });
    });
  }

  _setMetrics() {
    const xLength = this._map[0].length;
    const yLength = this._map.length;

    this._columnWidth = (LevelPreview.width - LevelPreview.gap * (xLength - 1)) / xLength;
    this._rowHeight = (LevelPreview.height - LevelPreview.gap * (yLength - 1)) / yLength;
  }

  static width = 194;
  static height = 194;
  static positionX = 253;
  static positionY = 40;
  static gap = 2;
  static tileRadius = 10;
}