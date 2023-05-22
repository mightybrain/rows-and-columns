import Draw from './Draw';
import Text from './Text';
import Button from './Button';
import Color from './Color';
import RatingPreview from './RatingPreview';
import Level from './Level';
import Levels from './Levels';

export default class ResultScene {
  constructor({ canvas, ctx, assets, state, levels, sceneManager, moves, score, level }) {
    this._canvas = canvas;
    this._ctx = ctx;
		this._assets = assets;
		this._state = state;
    this._levels = levels;
    this._sceneManager = sceneManager;
    this._moves = moves;
    this._score = score;
    this._level = level;

    this._ratingPreview = new RatingPreview({
      ctx: this._ctx,
      state: this._state,
      assets: this._assets,
    });

    this._titleMarkup = [];
    this._setTitleMarkup();

    this._movesHintPosition = {
      x: 0,
      y: 0
    };
    this._setMovesHintPosition();

    this._movesPosition = {
      x: 0,
      y: 0,
    };
    this._setMovesPosition();

    this._scoreMarkup = [];
    this._setLevelScoreMarkup();

    this._continueButton = null;
    this._repeatButton = null;
    this._initButtons();

  }

  update(time) {
    
  }

  render() {
    Draw.rect(this._ctx, 0, 0, this._canvas.width, this._canvas.height, Color.blueDeep.key);

    this._ratingPreview.render();

    this._titleMarkup.forEach(({ string, position }) => {
      Draw.text(this._ctx, position.x, position.y, string, ResultScene.titleFontSize, Color.white.key);
    })

    Draw.text(this._ctx, this._movesHintPosition.x, this._movesHintPosition.y, ResultScene.movesHintLabel, ResultScene.movesHintFontSize, Color.yellow.key);

    Draw.text(this._ctx, this._movesPosition.x, this._movesPosition.y, this._moves, ResultScene.movesFontSize, Color.yellow.key);

    this._scoreMarkup.forEach(({ icon, position }) => {
      Draw.image(this._ctx, position.x, position.y, ResultScene.iconWidth, ResultScene.iconHeight, icon);
    })

    this._continueButton.render();
    this._repeatButton.render();
  }

  _showNextLevelOrLevelsMenu() {
    const key = this._level.getKey();
    const index = this._level.getIndex() + 1;
    const nextLevel = this._levels.getLevelByKeyAndIndex(key, index);

    if (nextLevel) {
      const { id, targetMap, initialMap, moves } = nextLevel;
      this._sceneManager.showCoreScene(new Level({ key, index, id, targetMap, initialMap, moves }));
    }
    else this._sceneManager.showLevelsScene(key);
  }

  handleClick({ position }) {
    if (this._continueButton.isPressed(position)) this._showNextLevelOrLevelsMenu();
    else if (this._repeatButton.isPressed(position)) this._sceneManager.showCoreScene(this._level);
  }

  handleStartDragging() {

  }

  handleDragging() {

  }

  handleEndDragging() {

  }

  _setMovesHintPosition() {
    this._movesHintPosition.x = ResultScene.movesHintPositionX;
    this._movesHintPosition.y = ResultScene.movesHintPositionY + ResultScene.movesHintFontSize;
  }

  _setMovesPosition() {
    const { textWidth } = Text.calcTextMetrics(this._ctx, this._moves, ResultScene.movesFontSize);
    this._movesPosition.x = this._canvas.width / 2 - textWidth / 2;
    this._movesPosition.y = ResultScene.movesPositionY + ResultScene.movesFontSize;
  }

  _setTitleMarkup() {
    const title = [ResultScene.title.split('<br>')];
    const titleMetrics = Text.calcMultistringTextMetrics(this._ctx, title, ResultScene.titleFontSize, ResultScene.titleLineHeight);

    this._titleMarkup = titleMetrics.map(item => {
      const { string, positionY, width } = item;

      return {
        string,
        position: {
          x: this._canvas.width / 2 - width / 2,
          y: ResultScene.titlePositionY + positionY,
        }
      }
    })
  }

  _setLevelScoreMarkup() {
    const scoreMarkup = [];

    for (let i = 0; i < Levels.maxScore; i++) {
      scoreMarkup.push({
        icon: i < this._score ? this._assets.get('star-yellow.png') : this._assets.get('star-blue.png'),
        position: {
          x: ResultScene.ratingPositionX + i * (ResultScene.iconWidth + ResultScene.iconGap),
          y: ResultScene.ratingPositionY,
        },
      });
    }

    this._scoreMarkup = scoreMarkup;
  }

  _initButtons() {
    this._continueButton = new Button({
      ctx: this._ctx,
      position: {
        x: ResultScene.continueButtonPositionX,
        y: ResultScene.continueButtonPositionY,
      },
      size: {
        width: ResultScene.continueButtonWidth,
        height: ResultScene.buttonsHeight,
      },
      label: ResultScene.continueButtonLabel,
    })
    
    this._repeatButton = new Button({
      ctx: this._ctx,
      position: {
        x: ResultScene.repeatButtonPositionX,
        y: ResultScene.repeatButtonPositionY,
      },
      size: {
        width: ResultScene.repeatButtonWidth,
        height: ResultScene.buttonsHeight,
      },
      label: ResultScene.repeatButtonLabel,
    })
  }

  static title = 'Уровень<br>пройден!';
  static titleFontSize = 72;
  static titleLineHeight = 76;
  static titlePositionY = 152;

  static movesHintLabel = 'Ходов:';
  static movesHintFontSize = 48;
  static movesHintPositionX = 267;
  static movesHintPositionY = 374;

  static movesFontSize = 96;
  static movesPositionY = 432;

  static ratingPositionX = 221;
  static ratingPositionY = 558;

  static iconWidth = 73;
  static iconHeight = 70;
  static iconGap = 20;

  static continueButtonLabel = 'Продолжить';
  static continueButtonPositionX = 206;
  static continueButtonPositionY = 698;
  static continueButtonWidth = 289;

  static repeatButtonLabel = 'Повторить уровень';
  static repeatButtonPositionX = 151;
  static repeatButtonPositionY = 802;
  static repeatButtonWidth = 399;

  static buttonsHeight = 74;
}