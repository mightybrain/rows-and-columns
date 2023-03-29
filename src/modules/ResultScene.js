import Draw from './Draw';
import Text from './Text';
import Button from './Button';
import Color from './Color';

export default class ResultScene {
  constructor({ canvas, assets, state, sceneManager, movesCounter }) {
    this._canvas = canvas;
		this._assets = assets;
		this._state = state;
    this._sceneManager = sceneManager;
    this._movesCounter = movesCounter;

    this._continueButton = null;
    this._randomLevelButton = null;
    this._initButtons();
  }

  update(time) {
    
  }

  render(ctx) {
    Draw.rect(ctx, 0, 0, this._canvas.width, this._canvas.height, Color.grass.key);

    this._renderLabel(ctx);

    this._renderMovesCounter(ctx);

    if (this._continueButton) this._continueButton.render(ctx);
    if (this._randomLevelButton) this._randomLevelButton.render(ctx);
  }

  _renderLabel(ctx) {
    ResultScene.label.split(' ').forEach((string, index) => {
      const { textWidth } = Text.calcTextMetrics(ctx, string, ResultScene.fontSize);

      const stringPositionX = this._canvas.width / 2 - textWidth / 2;
      const stringPositionY = ResultScene.labelPositionY + (index * ResultScene.lineHeight) + ResultScene.fontSize;

      Draw.text(ctx, stringPositionX, stringPositionY, string, ResultScene.fontSize, Color.white.key);
    })
  }

  _renderMovesCounter(ctx) {
    const { textWidth: movesCounterHintWidth } = Text.calcTextMetrics(ctx, ResultScene.movesCounterHint, ResultScene.movesCounterHintFontSize);
    const movesCounterHintPositionX = this._canvas.width / 2 - movesCounterHintWidth / 2;
    const movesCounterHintPositionY = ResultScene.movesCounterHintPositionY + ResultScene.movesCounterHintFontSize;
    Draw.text(ctx, movesCounterHintPositionX, movesCounterHintPositionY, ResultScene.movesCounterHint, ResultScene.movesCounterHintFontSize, Color.yellow.key);

    const { textWidth: movesCounterWidth } = Text.calcTextMetrics(ctx, this._movesCounter, ResultScene.movesCounterFontSize);
    const movesCounterPositionX = this._canvas.width / 2 - movesCounterWidth / 2;
    const movesCounterPositionY = ResultScene.movesCounterPositionY + ResultScene.movesCounterFontSize;
    Draw.text(ctx, movesCounterPositionX, movesCounterPositionY, this._movesCounter, ResultScene.movesCounterFontSize, Color.yellow.key);
  }

  handleClick({ position }) {
    if (this._continueButton.isPressed(position)) {
      this._state.increaseLevel();
      this._sceneManager.showCoreScene();
    } else if (this._randomLevelButton.isPressed(position)) {
      this._state.setRandomLevel();
      this._sceneManager.showCoreScene();
    }
  }

  handleStartDragging() {

  }

  handleMoveDragging() {

  }

  handleEndDragging() {

  }

  _initButtons() {
    this._continueButton = new Button({
      position: {
        x: this._canvas.width / 2 - ResultScene.continueButtonWidth / 2,
        y: ResultScene.continueButtonPositionY,
      },
      size: {
        width: ResultScene.continueButtonWidth,
        height: ResultScene.buttonsHeight,
      },
      label: 'Следующий уровень',
    })

    this._randomLevelButton = new Button({
      position: {
        x: this._canvas.width / 2 - ResultScene.randomLevelButtonWidth / 2,
        y: ResultScene.randomLevelButtonPositionY,
      },
      size: {
        width: ResultScene.randomLevelButtonWidth,
        height: ResultScene.buttonsHeight,
      },
      label: 'Случайный уровень',
    })
  }

  static label = 'Уровень пройден!';
  static fontSize = 72;
  static lineHeight = 76;
  static labelPositionY = 318;
  static movesCounterHint = 'Ходов:';
  static movesCounterHintFontSize = 48;
  static movesCounterHintPositionY = 530;
  static movesCounterFontSize = 96;
  static movesCounterPositionY = 584;
  static continueButtonPositionY = 765;
  static continueButtonWidth = 420;
  static randomLevelButtonPositionY = 853;
  static randomLevelButtonWidth = 409;
  static buttonsHeight = 74;
}