import Draw from './Draw';
import Color from './Color';

export default class Tile {
  constructor({ ctx, color, size, position }) {
    this._ctx = ctx;
    this._color = color;
    this._size = size;
    this._position = position;
    this._opacity = 1;
    this._scaleFactor = 1;
  }

  render() {
    const width = this._size.width * this._scaleFactor;
    const height = this._size.height * this._scaleFactor;
    const positionX = this._position.x - (width - this._size.width) / 2;
    const positionY = this._position.y - (height - this._size.height) / 2;
    const radius = Tile.radius * this._scaleFactor;
    
    Draw.roundedRect(this._ctx, positionX, positionY, width, height, radius, this._color.key, this._opacity);
  }

  getScaleFactor() {
    return this._scaleFactor;
  }

  setScaleFactor(scaleFactor) {
    this._scaleFactor = scaleFactor;
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
}