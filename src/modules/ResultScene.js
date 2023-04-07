import Draw from './Draw';
import Text from './Text';
import Button from './Button';
import Color from './Color';

export default class ResultScene {
  constructor({ canvas, ctx, assets, state, sceneManager, movesCounter }) {
    this._canvas = canvas;
    this._ctx = ctx;
		this._assets = assets;
		this._state = state;
    this._sceneManager = sceneManager;
    this._movesCounter = movesCounter;

    this._continueButton = null;
    this._initButton();
  }

  update(time) {
    
  }

  render() {
    Draw.rect(this._ctx, 0, 0, this._canvas.width, this._canvas.height, Color.blueDeep.key);

    this._renderTitle();
    this._renderMovesCounter();
    this._continueButton.render();
  }

  _renderTitle() {
    ResultScene.title.split(' ').forEach((string, index) => {
      const { textWidth } = Text.calcTextMetrics(this._ctx, string, ResultScene.titleFontSize);

      const stringPositionX = this._canvas.width / 2 - textWidth / 2;
      const stringPositionY = ResultScene.titlePositionY + (index * ResultScene.titleLineHeight) + ResultScene.titleFontSize;

      Draw.text(this._ctx, stringPositionX, stringPositionY, string, ResultScene.titleFontSize, Color.white.key);
    })
  }

  _renderMovesCounter() {
    const { textWidth: movesCounterHintWidth } = Text.calcTextMetrics(this._ctx, ResultScene.movesCounterHint, ResultScene.movesCounterHintFontSize);
    const movesCounterHintPositionX = this._canvas.width / 2 - movesCounterHintWidth / 2;
    const movesCounterHintPositionY = ResultScene.movesCounterHintPositionY + ResultScene.movesCounterHintFontSize;
    Draw.text(this._ctx, movesCounterHintPositionX, movesCounterHintPositionY, ResultScene.movesCounterHint, ResultScene.movesCounterHintFontSize, Color.yellow.key);

    const { textWidth: movesCounterWidth } = Text.calcTextMetrics(this._ctx, this._movesCounter, ResultScene.movesCounterFontSize);
    const movesCounterPositionX = this._canvas.width / 2 - movesCounterWidth / 2;
    const movesCounterPositionY = ResultScene.movesCounterPositionY + ResultScene.movesCounterFontSize;
    Draw.text(this._ctx, movesCounterPositionX, movesCounterPositionY, this._movesCounter, ResultScene.movesCounterFontSize, Color.yellow.key);
  }

  handleClick({ position }) {
    if (this._continueButton.isPressed(position)) {
      this._state.increaseLevel();
      this._sceneManager.showCoreScene();
    }
  }

  handleStartDragging() {

  }

  handleDragging() {

  }

  handleEndDragging() {

  }

  _initButton() {
    this._continueButton = new Button({
      ctx: this._ctx,
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
  }

  static title = 'Уровень пройден!';
  static titleFontSize = 72;
  static titleLineHeight = 76;
  static titlePositionY = 318;

  static movesCounterHint = 'Ходов:';
  static movesCounterHintFontSize = 48;
  static movesCounterHintPositionY = 530;
  static movesCounterFontSize = 96;
  static movesCounterPositionY = 584;

  static continueButtonPositionY = 765;
  static continueButtonWidth = 420;
  static buttonsHeight = 74;
}