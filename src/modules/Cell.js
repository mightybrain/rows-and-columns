export default class Cell {
  constructor({ coords }) {
    this._coords = coords;
    this._brick = null;
    this._detachedBrick = null;
  }

  render(ctx) {
    if (this._brick) this._brick.render(ctx);
  }

  setBrick(brick) {
    this._brick = brick;
    const detachedBrick = this._detachedBrick;
    this._detachedBrick = null;
    return this._brick !== detachedBrick;
  }

  getBrick() {
    return this._brick;
  }

  detachBrick() {
    const brick = this._brick;
    this._detachedBrick = brick;
    this._brick = null;
    return brick;
  }

  getCoords() {
    return this._coords;
  }
}