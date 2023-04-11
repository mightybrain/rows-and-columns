import Text from './Text';
import Draw from './Draw';
import Color from './Color';

export default class LockedButton {
  constructor({ ctx, assets, position, size, unlockRating, label }) {
    this._ctx = ctx;
    this._assets = assets;
    this._position = position;
    this._size = size;

    this._label = label;
    this._labelPosition = {
      x: 0,
      y: 0,
    };
    this._setLabelPosition();

    this._icon = this._assets.get('star-yellow.png');
    this._iconPosition = {
      x: 0,
      y: 0,
    };
    this._setIconPosition();

    this._unlockRatingLabel = unlockRating;
    this._unlockRatingLabelPosition = {
      x: 0,
      y: 0,
    };
    this._setUnlockRatingLabelPosition();
  }

  render() {
    Draw.roundedRect(this._ctx, this._position.x, this._position.y, this._size.width, this._size.height, LockedButton.radius, Color.blueNight.key, LockedButton.opacity);
    Draw.text(this._ctx, this._labelPosition.x, this._labelPosition.y, this._label, LockedButton.fontSize, Color.white.key, LockedButton.opacity);
    Draw.image(this._ctx, this._iconPosition.x, this._iconPosition.y, LockedButton.iconWidth, LockedButton.iconHeight, this._icon, LockedButton.opacity);
    Draw.text(this._ctx, this._unlockRatingLabelPosition.x, this._unlockRatingLabelPosition.y, this._unlockRatingLabel, LockedButton.fontSize, Color.white.key, LockedButton.opacity);
  }

  isPressed() {
    
  }

  _setLabelPosition() {
    this._labelPosition.x = this._position.x + LockedButton.paddingHorizontal;
    this._labelPosition.y = this._position.y + this._size.height / 2 + LockedButton.fontSize / 3;
  }

  _setIconPosition() {
    const { textWidth } = Text.calcTextMetrics(this._ctx, this._label, LockedButton.fontSize);

    this._iconPosition.x = this._labelPosition.x + textWidth + LockedButton.iconHorizontalMargin;
    this._iconPosition.y = this._position.y + this._size.height / 2 - LockedButton.iconHeight / 2;
  }

  _setUnlockRatingLabelPosition() {
    this._unlockRatingLabelPosition.x = this._iconPosition.x + LockedButton.iconWidth + LockedButton.iconHorizontalMargin;
    this._unlockRatingLabelPosition.y = this._position.y + this._size.height / 2 + LockedButton.fontSize / 3;
  }

  static height = 74;
  static paddingHorizontal = 40;
  static fontSize = 32;
  static radius = 37;
  static opacity = .25;

  static iconWidth = 30;
  static iconHeight = 29;
  static iconHorizontalMargin = 15;
}