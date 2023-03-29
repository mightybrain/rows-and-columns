import Text from './Text';
import Draw from './Draw';
import Color from './Color';

export default class Button {
  constructor({ position, size, label }) {
    this._position = position;
    this._size = size;
    this._label = label;
  }

  render(ctx) {
    Draw.roundedRect(ctx, this._position.x, this._position.y, this._size.width, this._size.height, Button.radius, Color.softGrass.key);

    const { textWidth } = Text.calcTextMetrics(ctx, this._label, Button.fontSize);

    const labelPositionX = this._position.x + this._size.width / 2 - textWidth / 2;
    const labelPositionY = this._position.y + this._size.height / 2 + Button.fontSize / 3;

    Draw.text(ctx, labelPositionX, labelPositionY, this._label, Button.fontSize, Color.white.key);
  }

  isPressed(clickPosition) {
    return (
      clickPosition.x > this._position.x && clickPosition.x < this._position.x + this._size.width &&
      clickPosition.y > this._position.y && clickPosition.y < this._position.y + this._size.height
    );
  }

  static fontSize = 32;
  static radius = 37;
}