import Color from './Color';
import Draw from './Draw';
import LevelController from './LevelController';

export default class LevelButton {
  constructor({ ctx, assets, position, levelIndex, prevResult }) {
    this._ctx = ctx;
    this._assets = assets;
    this._position = position;

    this._levelIndex = levelIndex;
    this._levelIndexPosition = {
      x: 0,
      y: 0,
    };
    this._setLevelIndexPosition();

    this._prevResult = prevResult;
    this._prevResultMarkup = [];
    this._setPrevResultMarkup();

    this._color = this._prevResult ? Color.green : Color.blueNight;
  }

  render() {
    Draw.roundedRect(this._ctx, this._position.x, this._position.y, LevelButton.width, LevelButton.height, LevelButton.radius, this._color.key);
    Draw.text(this._ctx, this._levelIndexPosition.x, this._levelIndexPosition.y, this._levelIndex, LevelButton.fontSize, Color.white.key);

    this._prevResultMarkup.forEach(({ icon, position }) => {
      Draw.image(this._ctx, position.x, position.y, LevelButton.iconWidth, LevelButton.iconHeight, icon);
    })
  }

  isPressed(clickPosition) {
    return (
      clickPosition.x > this._position.x && clickPosition.x < this._position.x + LevelButton.width &&
      clickPosition.y > this._position.y && clickPosition.y < this._position.y + LevelButton.height
    );
  }

  _setPrevResultMarkup() {
    if (!this._prevResult) return;

    const prevResultMarkup = [];

    for (let i = 0; i < LevelController.maxResult; i++) {
      prevResultMarkup.push({
        icon: i < this._prevResult ? this._assets.get('star-yellow.png') : this._assets.get('star-green.png'),
        position: {
          x: this._position.x + LevelButton.padding + i * (LevelButton.iconWidth + LevelButton.iconGap),
          y: this._position.y + LevelButton.height - LevelButton.padding - LevelButton.iconHeight,
        },
      });
    }

    this._prevResultMarkup = prevResultMarkup;
  }

  _setLevelIndexPosition() {
    this._levelIndexPosition.x = this._position.x + LevelButton.padding;
    this._levelIndexPosition.y = this._position.y + LevelButton.lineHeight + LevelButton.lineHeight / 3;
  }

  getLevelIndex() {
    return this._levelIndex;
  }

  static width = 158;
  static height = 158;
  static radius = 46;
  static padding = 24;
  static fontSize = 48;
  static lineHeight = 52;
  static iconWidth = 30;
  static iconHeight = 29;
  static iconGap = 10;
}