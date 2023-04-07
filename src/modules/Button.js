import Text from './Text';
import Draw from './Draw';
import Color from './Color';

export default class Button {
  constructor({ ctx, position, size, label }) {
    this._ctx = ctx;
    this._position = position;
    this._size = size;
    this._label = label;
  }

  render() {
    Draw.roundedRect(this._ctx, this._position.x, this._position.y, this._size.width, this._size.height, Button.radius, Color.blueNight.key);

    const { textWidth } = Text.calcTextMetrics(this._ctx, this._label, Button.fontSize);

    const labelPositionX = this._position.x + this._size.width / 2 - textWidth / 2;
    const labelPositionY = this._position.y + this._size.height / 2 + Button.fontSize / 3;

    Draw.text(this._ctx, labelPositionX, labelPositionY, this._label, Button.fontSize, Color.white.key);
  }

  isPressed(clickPosition) {
    return (
      clickPosition.x > this._position.x && clickPosition.x < this._position.x + this._size.width &&
      clickPosition.y > this._position.y && clickPosition.y < this._position.y + this._size.height
    );
  }

  static fontSize = 32;
  static radius = 37;
  static horizontalPadding = 40;
}