import Draw from './Draw';
import Color from './Color';
import OpenScene from './OpenScene';
import AboutScene from './AboutScene';
import CoreScene from './CoreScene';
import ResultScene from './ResultScene';

export default class SceneManager {
	constructor({ canvas, ctx, assets, state }) {
		this._canvas = canvas;
		this._ctx = ctx;
		this._assets = assets;
		this._state = state;

		this._currentScene = null;
		this._futureScene = null;

		this._transitionOverlayOffsetX = 1;
	}

	update(time) {
		if (this._currentScene) this._currentScene.update(time);

		if (this._futureScene) this._updateSceneOut(time);
		else if (this._transitionOverlayOffsetX <= 0) this._updateSceneIn(time);
	}

	_updateSceneOut({ prevFrameDuration }) {
		if (!this._currentScene || this._transitionOverlayOffsetX === 0) {
			this._currentScene = this._futureScene;
			this._futureScene = null;
		} else  {
			this._transitionOverlayOffsetX = Math.max(this._transitionOverlayOffsetX - prevFrameDuration / SceneManager.transitionDuration, 0);
		}
	}

	_updateSceneIn({ prevFrameDuration }) {
		this._transitionOverlayOffsetX = Math.max(this._transitionOverlayOffsetX - prevFrameDuration / SceneManager.transitionDuration, -1);

		if (this._transitionOverlayOffsetX === -1) this._transitionOverlayOffsetX = 1;
	}

	render() {
		if (this._currentScene) this._currentScene.render();
		if (this._transitionOverlayOffsetX !== 1) this._renderTransitionOverlay();
	}

	_renderTransitionOverlay() {
		const overlayPositionX = this._canvas.width * this._transitionOverlayOffsetX;
		Draw.rect(this._ctx, overlayPositionX, 0, this._canvas.width, this._canvas.height, Color.blueDeep.key)
	}

	_getScenesCommonProps() {
		return {
			canvas: this._canvas,
			ctx: this._ctx,
			assets: this._assets,
			state: this._state,
			sceneManager: this,
		}
	}

	_isInTransition() {
		return this._futureScene || this._transitionOverlayOffsetX !== 1;
	}

	handleClick(event) {
		if (this._isInTransition()) return;

		if (this._currentScene) this._currentScene.handleClick(event);
	}

	handleStartDragging(event) {
		if (this._isInTransition()) return;

		if (this._currentScene) this._currentScene.handleStartDragging(event);
	}

	handleDragging(event) {
		if (this._isInTransition()) return;

		if (this._currentScene) this._currentScene.handleDragging(event);
	}

	handleEndDragging(event) {
		if (this._isInTransition()) return;

		if (this._currentScene) this._currentScene.handleEndDragging(event);
	}

	showOpenScene() {
		this._futureScene = new OpenScene(this._getScenesCommonProps());
	}

	showAboutScene() {
		this._futureScene = new AboutScene(this._getScenesCommonProps());
	}

	showCoreScene() {
		this._futureScene = new CoreScene(this._getScenesCommonProps());
	}

	showResultScene(movesCounter) {
		this._futureScene = new ResultScene({ ...this._getScenesCommonProps(), movesCounter });
	}

	static transitionDuration = 300;
}