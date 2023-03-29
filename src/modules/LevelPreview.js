import Draw from './Draw';
import Color from './Color';
import Tile from './Tile';

export default class LevelPreview {
  constructor({ map }) {
    this._map = map;
  }

  render(ctx) {
    const width = LevelPreview.padding * 2 + this._map[0].length * LevelPreview.brickWidth + LevelPreview.gap * (this._map[0].length - 1);
    const height = LevelPreview.padding * 2 + this._map.length * LevelPreview.brickHeight + LevelPreview.gap * (this._map.length - 1);

    Draw.roundedRect(ctx, LevelPreview.positionX, LevelPreview.positionY, width, height, LevelPreview.radius, Color.blueDeep.key);

    this._map.forEach((row, y) => {
      row.forEach((colorId, x) => {
        const brickPositionX = LevelPreview.positionX + LevelPreview.padding + (LevelPreview.brickWidth + LevelPreview.gap) * x;
        const brickPositionY = LevelPreview.positionY + LevelPreview.padding + (LevelPreview.brickHeight + LevelPreview.gap) * y;

        const brickColor = Tile.colors.find(color => color.id === colorId);

        Draw.roundedRect(ctx, brickPositionX, brickPositionY, LevelPreview.brickWidth, LevelPreview.brickHeight, LevelPreview.brickRadius, brickColor.key);
      });
    });
  }

  static positionX = 21;
  static positionY = 21;
  static padding = 6;
  static gap = 2;
  static radius = 16;
  static brickWidth = 26;
  static brickHeight = 26;
  static brickRadius = 10;
}