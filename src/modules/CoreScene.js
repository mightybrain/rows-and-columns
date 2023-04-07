import LevelPreview from './LevelPreview';
import LevelController from './LevelController';
import Field from './Field';
import Draw from './Draw';
import Color from './Color';

import levels from '../assets/json/levels.json';

export default class CoreScene {
	constructor({ canvas, ctx, assets, state, sceneManager }) {
		this._canvas = canvas;
		this._ctx = ctx;
		this._assets = assets;
		this._state = state;
		this._sceneManager = sceneManager;

    this._level = levels.levels[state.getLevel()];

    this._levelPreview = new LevelPreview({
			ctx: this._ctx,
      map: this._level.map,
    });

    this._levelController = new LevelController({
      map: this._level.map,
    })

		this._field = new Field({
			canvas: this._canvas,
			ctx: this._ctx,
			assets: this._assets,
			state: this._state,
			sceneManager: this._sceneManager,
      levelController: this._levelController,
		});
	}

	update(time) {
		this._field.update(time);
	}

	render() {
    Draw.rect(this._ctx, 0, 0, this._canvas.width, this._canvas.height, Color.blueDeep.key);

    this._levelPreview.render();
		this._field.render();
	}

	handleClick({ position }) {

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
}