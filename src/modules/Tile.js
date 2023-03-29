import Draw from './Draw';
import Color from './Color';

export default class Tile {
  constructor({ color, position }) {
    this._color = color;
    this._position = position;
    this._opacity = 1;
  }

  render(ctx) {
    Draw.roundedRect(ctx, this._position.x, this._position.y, Tile.width, Tile.height, Tile.radius, this._color.key, this._opacity);
  }

  getPosition() {
    return this._position;
  }

  setPosition(position) {
    this._position = position;
  }

  getColor() {
    return this._color;
  }

  getOpacity() {
    return this._opacity;
  }

  setOpacity(opacity) {
    this._opacity = opacity;
  }

  static width = 95;
  static height = 95;
  static radius = 30;
  static colors = [
    Color.blueNight,
    Color.blue,
    Color.green,
    Color.sea,
    Color.red,
    Color.purple,
    Color.orange,
    Color.yellow,
  ];

  static getRandomBrickColor() {
    const index = Random.getRandomFromRange(0, Tile.colors.length - 1);
    return Tile.colors[index];
  }
}