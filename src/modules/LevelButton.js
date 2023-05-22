import Color from './Color';
import Draw from './Draw';
import Levels from './Levels';

export default class LevelButton {
  constructor({ ctx, assets, position, level, prevScore, prevMoves }) {
    this._ctx = ctx;
    this._assets = assets;
    this._position = position;
    this._level = level;

    this._levelLabel = this._level.getIndex() + 1;
    this._levelLabelPosition = {
      x: 0,
      y: 0,
    };
    this._setLevelLabelPosition();

    this._prevMoves = prevMoves;
    this._prevMovesPosition = {
      x: 0,
      y: 0,
    };
    this._setPrevMovesPosition();

    this._prevScore = prevScore;
    this._prevScoreMarkup = [];
    this._setPrevScoreMarkup();

    this._color = this._prevScore ? Color.green : Color.blueNight;
  }

  render() {
    Draw.roundedRect(this._ctx, this._position.x, this._position.y, LevelButton.width, LevelButton.height, LevelButton.radius, this._color.key);
    
    Draw.text(this._ctx, this._levelLabelPosition.x, this._levelLabelPosition.y, this._levelLabel, LevelButton.levelLabelFontSize, Color.white.key);

    if (this._prevMoves !== 0) {
      Draw.text(this._ctx, this._prevMovesPosition.x, this._prevMovesPosition.y, this._prevMoves, LevelButton.prevMovesFontSize, Color.white.key);
    }

    if (this._prevScore !== 0) {
      this._prevScoreMarkup.forEach(({ icon, position }) => {
        Draw.image(this._ctx, position.x, position.y, LevelButton.iconWidth, LevelButton.iconHeight, icon);
      })
    } 
  }

  isPressed(clickPosition) {
    return (
      clickPosition.x > this._position.x && clickPosition.x < this._position.x + LevelButton.width &&
      clickPosition.y > this._position.y && clickPosition.y < this._position.y + LevelButton.height
    );
  }

  _setPrevScoreMarkup() {
    const prevScoreMarkup = [];

    for (let i = 0; i < Levels.maxScore; i++) {
      prevScoreMarkup.push({
        icon: i < this._prevScore ? this._assets.get('star-yellow.png') : this._assets.get('star-green.png'),
        position: {
          x: this._position.x + LevelButton.padding + i * (LevelButton.iconWidth + LevelButton.iconGap),
          y: this._position.y + LevelButton.height - LevelButton.padding - LevelButton.iconHeight,
        },
      });
    }

    this._prevScoreMarkup = prevScoreMarkup;
  }

  _setPrevMovesPosition() {
    this._prevMovesPosition.x = this._position.x + LevelButton.padding;
    this._prevMovesPosition.y = this._position.y + LevelButton.height - LevelButton.padding - LevelButton.iconHeight - LevelButton.prevMovesMarginBottom - LevelButton.prevMovesLineHeight + LevelButton.prevMovesFontSize;
  }

  _setLevelLabelPosition() {
    this._levelLabelPosition.x = this._position.x + LevelButton.padding;
    this._levelLabelPosition.y = this._position.y + LevelButton.padding + LevelButton.levelLabelFontSize - LevelButton.levelLabelLineHeight / 4;
  }

  getLevel() {
    return this._level;
  }

  static width = 150;
  static height = 150;
  static radius = 30;
  static padding = 19;

  static levelLabelFontSize = 48;
  static levelLabelLineHeight = 52;

  static prevMovesFontSize = 28;
  static prevMovesLineHeight = 32;
  static prevMovesMarginBottom = 4;

  static iconWidth = 30;
  static iconHeight = 29;
  static iconGap = 6;
}