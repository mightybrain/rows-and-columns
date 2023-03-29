export default class Renderer {
	constructor({ ctx, canvas, sceneManager }) {
		this._canvas = canvas;
		this._ctx = ctx;
		this._sceneManager = sceneManager;
	}

	render() {
		this._clear();
		this._renderScene();
	}

	_clear() {
		this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
	}

	_renderScene() {
		this._sceneManager.render(this._ctx);
	}
}