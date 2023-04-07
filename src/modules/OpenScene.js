import Draw from './Draw';
import Text from './Text';
import Button from './Button';
import Color from './Color';

export default class OpenScene {
  constructor({ canvas, ctx, assets, state, sceneManager }) {
    this._canvas = canvas;
    this._ctx = ctx;
		this._assets = assets;
		this._state = state;
    this._sceneManager = sceneManager;
    this._levelCounter = this._state.getLevel();

    this._startButton = null;
    this._aboutButton = null;
    this._initButton();
  }

  update(time) {
    
  }

  render() {
    Draw.rect(this._ctx, 0, 0, this._canvas.width, this._canvas.height, Color.blueDeep.key);

    this._renderTitle();
    this._renderLevelCounter();
    this._startButton.render();
    this._aboutButton.render();
  }

  _renderTitle() {
    OpenScene.title.split(' ').forEach((string, index) => {
      const { textWidth } = Text.calcTextMetrics(this._ctx, string, OpenScene.titleFontSize);

      const stringPositionX = this._canvas.width / 2 - textWidth / 2;
      const stringPositionY = OpenScene.titlePositionY + (index * OpenScene.titleLineHeight) + OpenScene.titleFontSize;

      Draw.text(this._ctx, stringPositionX, stringPositionY, string, OpenScene.titleFontSize, Color.white.key);
    })
  }

  _renderLevelCounter() {
    const { textWidth: levelCounterHintWidth } = Text.calcTextMetrics(this._ctx, OpenScene.levelCounterHint, OpenScene.levelCounterHintFontSize);
    const levelCounterHintPositionX = this._canvas.width / 2 - levelCounterHintWidth / 2;
    const levelCounterHintPositionY = OpenScene.levelCounterHintPositionY + OpenScene.levelCounterHintFontSize;
    Draw.text(this._ctx, levelCounterHintPositionX, levelCounterHintPositionY, OpenScene.levelCounterHint, OpenScene.levelCounterHintFontSize, Color.yellow.key);

    const levelCounter = this._levelCounter + 1;
    const { textWidth: levelCounterWidth } = Text.calcTextMetrics(this._ctx, levelCounter, OpenScene.levelCounterFontSize);
    const levelCounterPositionX = this._canvas.width / 2 - levelCounterWidth / 2;
    const levelCounterPositionY = OpenScene.levelCounterPositionY + OpenScene.levelCounterFontSize;
    Draw.text(this._ctx, levelCounterPositionX, levelCounterPositionY, levelCounter, OpenScene.levelCounterFontSize, Color.yellow.key);
  }

  handleClick({ position }) {
    if (this._startButton.isPressed(position)) this._sceneManager.showCoreScene();
    else if (this._aboutButton.isPressed(position)) this._sceneManager.showAboutScene();
  }

  handleStartDragging() {

  }

  handleDragging() {

  }

  handleEndDragging() {

  }

  _initButton() {
    this._startButton = new Button({
      ctx: this._ctx,
      position: {
        x: this._canvas.width / 2 - OpenScene.startButtonWidth / 2,
        y: OpenScene.startButtonPositionY,
      },
      size: {
        width: OpenScene.startButtonWidth,
        height: OpenScene.buttonsHeight,
      },
      label: 'Играть',
    })
    this._aboutButton = new Button({
      ctx: this._ctx,
      position: {
        x: this._canvas.width / 2 - OpenScene.aboutButtonWidth / 2,
        y: OpenScene.aboutButtonPositionY,
      },
      size: {
        width: OpenScene.aboutButtonWidth,
        height: OpenScene.buttonsHeight,
      },
      label: 'Об игре',
    })
  }

  static title = 'Colored Tiles';
  static titleFontSize = 96;
  static titleLineHeight = 100;
  static titlePositionY = 277;

  static levelCounterHint = 'Уровень:';
  static levelCounterHintFontSize = 48;
  static levelCounterHintPositionY = 557;
  static levelCounterFontSize = 96;
  static levelCounterPositionY = 615;

  static startButtonPositionY = 791;
  static startButtonWidth = 194;
  static aboutButtonPositionY = 895;
  static aboutButtonWidth = 210;
  static buttonsHeight = 74;
}