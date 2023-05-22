import Draw from './Draw';
import Text from './Text';
import Button from './Button';
import Color from './Color';
import LevelButton from './LevelButton';
import Level from './Level';

export default class LevelsScene {
  constructor({ canvas, ctx, assets, state, sceneManager, levels, levelsKey }) {
    this._canvas = canvas;
    this._ctx = ctx;
    this._assets = assets;
    this._state = state;
    this._sceneManager = sceneManager;
    this._levels = levels;
    this._levelsKey = levelsKey;

    this._backButton = null;
    this._initButton();

    this._titlePosition = [];
    this._setTitlePosition();

    this._levelsButtons = [];
    this._setLevelsButtons();
  }

  update(time) {

  }

  render() {
    Draw.rect(this._ctx, 0, 0, this._canvas.width, this._canvas.height, Color.blueDeep.key);

    this._backButton.render();

    Draw.text(this._ctx, this._titlePosition.x, this._titlePosition.y, LevelsScene.title, LevelsScene.titleFontSize, Color.white.key);

    this._levelsButtons.forEach(button => {
      button.render();
    })
  }

  handleClick({ position }) {
    if (this._backButton.isPressed(position)) this._sceneManager.showOpenScene();

    this._levelsButtons.forEach(levelButton => {
      const isPressed = levelButton.isPressed(position);
      if (isPressed) {
        const level = levelButton.getLevel();
        this._sceneManager.showCoreScene(level);
        return;
      }
    })
  }

  handleStartDragging() {

  }

  handleDragging() {

  }

  handleEndDragging() {

  }

  _setTitlePosition() {
    const { textWidth } = Text.calcTextMetrics(this._ctx, LevelsScene.title, LevelsScene.titleFontSize);

    this._titlePosition.x = this._canvas.width / 2 - textWidth / 2;
    this._titlePosition.y = LevelsScene.titlePositionY + LevelsScene.titleFontSize;
  }

  _setLevelsButtons() {
    const levels = this._levels.getLevelsByKey(this._levelsKey);

    levels.forEach(({ id, targetMap, initialMap, moves }, index) => {
      const col = index % 3;
      const row = Math.floor(index / 3);

      const levelButton = new LevelButton({
        ctx: this._ctx,
        assets: this._assets,
        position: {
          x: LevelsScene.gridPositionX + col * (LevelButton.width + LevelsScene.gridGap),
          y: LevelsScene.gridPositionY + row * (LevelButton.height + LevelsScene.gridGap),
        },
        level: new Level({ key: this._levelsKey, index, id, targetMap, initialMap, moves }),
        prevScore: this._state.getLevelPrevScore(id) || 0,
        prevMoves: this._state.getLevelPrevMoves(id) || 0,
      })

      this._levelsButtons.push(levelButton);
    })
  }

  _initButton() {
    this._backButton = new Button({
      ctx: this._ctx,
      position: {
        x: LevelsScene.backButtonPositionX,
        y: LevelsScene.backButtonPositionY,
      },
      size: {
        width: LevelsScene.backButtonWidth,
        height: Button.height,
      },
      label: LevelsScene.backButtonLabel,
    })
  }

  static title = 'Уровни';
  static titlePositionY = 144;
  static titleFontSize = 72;
  static titleLineHeight = 76;

  static gridWidth = 502;
  static gridGap = 26;
  static gridPositionX = 99;
  static gridPositionY = 290;

  static backButtonLabel = 'Назад';
  static backButtonPositionY = 19;
  static backButtonPositionX = 19;
  static backButtonWidth = 181;
}