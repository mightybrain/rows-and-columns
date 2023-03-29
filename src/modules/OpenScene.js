import Draw from './Draw';
import Text from './Text';
import Button from './Button';
import Color from './Color';

export default class OpenScene {
  constructor({ canvas, assets, state, sceneManager }) {
    this._canvas = canvas;
		this._assets = assets;
		this._state = state;
    this._sceneManager = sceneManager;

    this._startButton = null;
    this._randomLevelButton = null;
    this._initButtons();
  }

  update(time) {
    
  }

  render(ctx) {
    Draw.rect(ctx, 0, 0, this._canvas.width, this._canvas.height, Color.grass.key);

    OpenScene.label.split(' ').forEach((string, index) => {
      const { textWidth } = Text.calcTextMetrics(ctx, string, OpenScene.fontSize);

      const stringPositionX = this._canvas.width / 2 - textWidth / 2;
      const stringPositionY = OpenScene.labelPositionY + (index * OpenScene.lineHeight) + OpenScene.fontSize;

      Draw.text(ctx, stringPositionX, stringPositionY, string, OpenScene.fontSize, Color.white.key);
    })

    if (this._startButton) this._startButton.render(ctx);
    if (this._randomLevelButton) this._randomLevelButton.render(ctx);
  }

  handleClick({ position }) {
    if (this._startButton.isPressed(position)) {
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
    this._startButton = new Button({
      position: {
        x: this._canvas.width / 2 - OpenScene.startButtonWidth / 2,
        y: OpenScene.startButtonPositionY,
      },
      size: {
        width: OpenScene.startButtonWidth,
        height: OpenScene.buttonsHeight,
      },
      label: 'От простого к сложному',
    })

    this._randomLevelButton = new Button({
      position: {
        x: this._canvas.width / 2 - OpenScene.randomLevelButtonWidth / 2,
        y: OpenScene.randomLevelButtonPositionY,
      },
      size: {
        width: OpenScene.randomLevelButtonWidth,
        height: OpenScene.buttonsHeight,
      },
      label: 'Случайный уровень',
    })
  }

  static label = 'Colored Tiles';
  static fontSize = 96;
  static lineHeight = 100;
  static labelPositionY = 401;
  static startButtonPositionY = 681;
  static startButtonWidth = 482;
  static randomLevelButtonPositionY = 769;
  static randomLevelButtonWidth = 409;
  static buttonsHeight = 74;
}