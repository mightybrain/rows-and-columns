import LevelPreview from './LevelPreview';
import LevelController from './LevelController';
import Field from './Field';
import Draw from './Draw';
import Button from './Button';
import Color from './Color';

import levels from '../assets/json/levels.json';

export default class CoreScene {
	constructor({ canvas, assets, state, sceneManager }) {
		this._canvas = canvas;
		this._assets = assets;
		this._state = state;
		this._sceneManager = sceneManager;

    this._level = levels[state.getLevel()];

    this._levelPreview = new LevelPreview({
      map: this._level.map,
    });

    this._passLevelButton = null;
    this._randomLevelButton = null;
    this._initButtons();

    this._levelController = new LevelController({
      map: this._level.map,
    })

		this._field = new Field({
			canvas: this._canvas,
			assets: this._assets,
			state: this._state,
			sceneManager: this._sceneManager,
      levelController: this._levelController,
		});
	}

	update(time) {

	}

	render(ctx) {
    Draw.rect(ctx, 0, 0, this._canvas.width, this._canvas.height, Color.grass.key);

    this._levelPreview.render(ctx);

    if (this._passLevelButton) this._passLevelButton.render(ctx);
    if (this._randomLevelButton) this._randomLevelButton.render(ctx);

		this._field.render(ctx);
	}

	handleClick({ position }) {
    if (this._passLevelButton.isPressed(position)) {
      this._state.increaseLevel();
      this._sceneManager.showCoreScene();
    } else if (this._randomLevelButton.isPressed(position)) {
      this._state.setRandomLevel();
      this._sceneManager.showCoreScene();
    }
	}

	handleStartDragging(event) {
		this._field.handleStartDragging(event);
	}

	handleMoveDragging(event) {
		this._field.handleMoveDragging(event);
	}

	handleEndDragging(event) {
		this._field.handleEndDragging(event);
	}

  _initButtons() {
    this._passLevelButton = new Button({
      position: {
        x: this._canvas.width - CoreScene.passLevelButtonWidth - 21,
        y: CoreScene.passLevelButtonPositionY,
      },
      size: {
        width: CoreScene.passLevelButtonWidth,
        height: CoreScene.buttonsHeight,
      },
      label: 'Пропустить уровень',
    })

    this._randomLevelButton = new Button({
      position: {
        x: this._canvas.width - CoreScene.randomLevelButtonWidth - 21,
        y: CoreScene.randomLevelButtonPositionY,
      },
      size: {
        width: CoreScene.randomLevelButtonWidth,
        height: CoreScene.buttonsHeight,
      },
      label: 'Случайный уровень',
    })
  }

  static passLevelButtonPositionY = 21;
  static passLevelButtonWidth = 414;
  static randomLevelButtonPositionY = 109;
  static randomLevelButtonWidth = 409;
  static buttonsHeight = 74;
}