export default class LevelsScene {
  constructor({ canvas, ctx, assets, state, sceneManager }) {
    this._canvas = canvas;
    this._ctx = ctx;
    this._assets = assets;
    this._state = state;
    this._sceneManager = sceneManager;
  }

  update(time) {

  }

  render() {

  }

  handleClick({ position }) {

  }

  handleStartDragging() {

  }

  handleDragging() {

  }

  handleEndDragging() {

  }

  static title = 'Выберите уровень';
  static titleFontSize = 72;
  static titleLineHeight = 76;
  static titlePositionY = 162;

  static gridWidth = 574;
  static gridGap = 50;
  static gridPositionX = 63;
  static gridPositionY = 394;
}