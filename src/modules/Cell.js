export default class Cell {
  constructor({ coords }) {
    this._coords = coords;
    this._tile = null;
    this._detachedTile = null;
  }

  render() {
    if (this._tile) this._tile.render();
  }

  setTile(tile) {
    this._tile = tile;
    const detachedTile = this._detachedTile;
    this._detachedTile = null;
    return this._tile !== detachedTile;
  }

  getTile() {
    return this._tile;
  }

  detachTile() {
    const tile = this._tile;
    this._detachedTile = tile;
    this._tile = null;
    return tile;
  }

  getCoords() {
    return this._coords;
  }
}