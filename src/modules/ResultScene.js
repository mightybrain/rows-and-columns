import Draw from './Draw';
import Text from './Text';
import Button from './Button';
import Color from './Color';
import RatingPreview from './RatingPreview';
import Level from './Level';

export default class ResultScene {
  constructor({ canvas, ctx, assets, state, levels, sceneManager, movesCounter, levelResult, level }) {
    this._canvas = canvas;
    this._ctx = ctx;
		this._assets = assets;
		this._state = state;
    this._levels = levels;
    this._sceneManager = sceneManager;
    this._movesCounter = movesCounter;
    this._levelResult = levelResult;
    this._level = level;

    this._ratingPreview = new RatingPreview({
      ctx: this._ctx,
      state: this._state,
      assets: this._assets,
    });

    this._titleMarkup = [];
    this._setTitleMarkup();

    this._movesCounterHintPosition = {
      x: 0,
      y: 0
    };
    this._setMovesCounterHintPosition();

    this._movesCounterPosition = {
      x: 0,
      y: 0,
    };
    this._setMovesCounterPosition();

    this._levelResultMarkup = [];
    this._setLevelResultMarkup();

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

    Draw.text(this._ctx, this._movesCounterHintPosition.x, this._movesCounterHintPosition.y, ResultScene.movesCounterHintLabel, ResultScene.movesCounterHintFontSize, Color.yellow.key);

    Draw.text(this._ctx, this._movesCounterPosition.x, this._movesCounterPosition.y, this._movesCounter, ResultScene.movesCounterFontSize, Color.yellow.key);

    this._levelResultMarkup.forEach(({ icon, position }) => {
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

  _setMovesCounterHintPosition() {
    this._movesCounterHintPosition.x = ResultScene.movesCounterHintPositionX;
    this._movesCounterHintPosition.y = ResultScene.movesCounterHintPositionY + ResultScene.movesCounterHintFontSize;
  }

  _setMovesCounterPosition() {
    const { textWidth } = Text.calcTextMetrics(this._ctx, this._movesCounter, ResultScene.movesCounterFontSize);
    this._movesCounterPosition.x = this._canvas.width / 2 - textWidth / 2;
    this._movesCounterPosition.y = ResultScene.movesCounterPositionY + ResultScene.movesCounterFontSize;
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

  _setLevelResultMarkup() {
    const levelResultMarkup = [];

    for (let i = 0; i < Level.maxResult; i++) {
      levelResultMarkup.push({
        icon: i < this._levelResult ? this._assets.get('star-yellow.png') : this._assets.get('star-blue.png'),
        position: {
          x: ResultScene.ratingPositionX + i * (ResultScene.iconWidth + ResultScene.iconGap),
          y: ResultScene.ratingPositionY,
        },
      });
    }

    this._levelResultMarkup = levelResultMarkup;
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
  static titlePositionY = 251;

  static movesCounterHintLabel = 'Ходов:';
  static movesCounterHintFontSize = 48;
  static movesCounterHintPositionX = 267;
  static movesCounterHintPositionY = 483;

  static movesCounterFontSize = 96;
  static movesCounterPositionY = 541;

  static ratingPositionX = 221;
  static ratingPositionY = 667;

  static iconWidth = 73;
  static iconHeight = 70;
  static iconGap = 20;

  static continueButtonLabel = 'Продолжить';
  static continueButtonPositionX = 206;
  static continueButtonPositionY = 817;
  static continueButtonWidth = 289;

  static repeatButtonLabel = 'Повторить уровень';
  static repeatButtonPositionX = 151;
  static repeatButtonPositionY = 921;
  static repeatButtonWidth = 399;

  static buttonsHeight = 74;
}