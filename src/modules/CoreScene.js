import LevelPreview from './LevelPreview';
import Field from './Field';
import Draw from './Draw';
import Color from './Color';
import Button from './Button';

export default class CoreScene {
	constructor({ canvas, ctx, assets, state, levels, sceneManager, level }) {
		this._canvas = canvas;
		this._ctx = ctx;
		this._assets = assets;
		this._state = state;
		this._levels = levels;
		this._sceneManager = sceneManager;

    this._backButton = null;
    this._initButton();

    this._level = level;

    this._levelPreview = new LevelPreview({
			ctx: this._ctx,
      map: this._level.getTargetMap(),
    });

		this._field = new Field({
			ctx: this._ctx,
			assets: this._assets,
			state: this._state,
			levels: this._levels,
			sceneManager: this._sceneManager,
			level: this._level,
		});
	}

	update(time) {
		this._field.update(time);
	}

	render() {
    Draw.rect(this._ctx, 0, 0, this._canvas.width, this._canvas.height, Color.blueDeep.key);

		this._backButton.render();
    this._levelPreview.render();
		this._field.render();
	}

	handleClick({ position }) {
		if (this._backButton.isPressed(position)) this._sceneManager.showLevelsScene(this._level.getKey());
	}

	handleStartDragging(event) {
		this._field.handleStartDragging(event);
	}

	handleDragging(event) {
		this._field.handleDragging(event);
	}

	handleEndDragging(event) {
		this._field.handleEndDragging(event);
	}

  _initButton() {
    this._backButton = new Button({
      ctx: this._ctx,
      position: {
        x: CoreScene.backButtonPositionX,
        y: CoreScene.backButtonPositionY,
      },
      size: {
        width: CoreScene.backButtonWidth,
        height: Button.height,
      },
      label: CoreScene.backButtonLabel,
    })
  }

	static backButtonLabel = 'Назад';
	static backButtonWidth = 181;
	static backButtonPositionX = 19;
	static backButtonPositionY = 19;
}