import Assets from './Assets';
import Levels from './Levels';
import State from './State';
import SceneManager from './SceneManager';

import levels from '../assets/json/levels.json';

export default class Game {
	constructor(canvas) {
		this._canvas = canvas;
		this._ctx = canvas.getContext('2d');
		this._setRenderSize();

		this._assets = new Assets();
		this._levels = new Levels({
			levels,
		})
		this._state = new State({
			levels: this._levels,
		});

		this._sceneManager = new SceneManager({
			canvas: this._canvas,
			ctx: this._ctx,
			assets: this._assets,
			levels: this._levels,
			state: this._state,
		});

		this._prevTimestamp = null;
		this._draggingStarted = false;

		this._addEventHandlers();
		this._startGame();
	}

	async _startGame() {
		await document.fonts.load('1px Nunito')
		await this._assets.load();
		//await this._state.loadPlayerStats();

		this._sceneManager.showOpenScene();

		requestAnimationFrame(timestamp => {
			this._gameLoop(timestamp);
		});
	}
	
	_gameLoop(timestamp) {
		requestAnimationFrame(nextTimestamp => {
			this._gameLoop(nextTimestamp);
		});

		const prevTimestamp = this._prevTimestamp || timestamp;
		const prevFrameDuration = timestamp - prevTimestamp;
		const delta = prevFrameDuration / 1000;
		this._sceneManager.update({ delta, prevFrameDuration, timestamp });
		this._prevTimestamp = timestamp;

		this._render();
	}

	_render() {
		this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
		this._sceneManager.render();
	}

	_addEventHandlers() {
		this._canvas.addEventListener('click', event => this._handleClick(event))
		this._canvas.addEventListener('mousedown', event => this._handleStartDragging(event))
		window.addEventListener('mousemove', event => this._handleDragging(event))
		window.addEventListener('mouseup', event => this._handleEndDragging(event))
		this._canvas.addEventListener('touchstart', event => this._handleStartDragging(event));
		window.addEventListener('touchmove', event => this._handleDragging(event));
		window.addEventListener('touchend', event => this._handleEndDragging(event));
		window.addEventListener('resize', () => this._setRenderSize());
	}

	_handleClick(event) {
		const { clientX: x, clientY: y } = event;
		const position = this._transformClickPosition({ x, y });
		this._sceneManager.handleClick({ position });
	}

	_handleStartDragging(event) {
		this._draggingStarted = true;
		const { clientX: x, clientY: y } = event.touches?.[0] || event;
		const position = this._transformClickPosition({ x, y });
		this._sceneManager.handleStartDragging({ position });
	}

	_handleEndDragging(event) {
		this._draggingStarted = false;
		const { clientX: x, clientY: y } = event.touches?.[0] || event;
		const position = this._transformClickPosition({ x, y });
		this._sceneManager.handleEndDragging({ position });
	}

	_handleDragging(event) {
		if (!this._draggingStarted) return;
		const { clientX: x, clientY: y } = event.touches?.[0] || event;
		const position = this._transformClickPosition({ x, y });
		this._sceneManager.handleDragging({ position });
	}

	_transformClickPosition({ x, y }) {
		x = x - this._canvas.getBoundingClientRect().left;
		x = x * (this._canvas.width / parseFloat(this._canvas.style.width));
		y = y - this._canvas.getBoundingClientRect().top;
		y = y * (this._canvas.height / parseFloat(this._canvas.style.height));
		return { x, y };
	}

	_setRenderSize() {
		const screenWidth = document.documentElement.clientWidth;
		const screenHeight = document.documentElement.clientHeight;
		
		let aspectRatio = this._canvas.width / this._canvas.height;

		let renderHeight = screenHeight;
		let renderWidth = renderHeight * aspectRatio;

		if (renderWidth > screenWidth) {
			aspectRatio = this._canvas.height / this._canvas.width;

			renderWidth = screenWidth;
			renderHeight = renderWidth * aspectRatio;
		}

		this._canvas.style.width = renderWidth + 'px';
		this._canvas.style.height = renderHeight + 'px';
	}
}
