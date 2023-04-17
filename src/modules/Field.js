import Tile from './Tile';
import Cell from './Cell';
import Random from './Random';
import TileScaleAnimation from './TileScaleAnimation';

export default class Field {
  constructor({ ctx, assets, state, sceneManager, levelsKey, levelIndex, levelId, levelController }) {
    this._ctx = ctx;
    this._assets = assets;
    this._state = state;
    this._sceneManager = sceneManager;
    this._levelsKey = levelsKey;
    this._levelIndex = levelIndex;
    this._levelId = levelId;
    this._levelController = levelController;

    this._columnWidth = 0;
    this._rowHeight = 0;
    this._maxOutOfBoundsX = 0;
    this._maxOutOfBoundsY = 0;
    this._setMetrics();

    this._map = [];
    this._setMap();
    this._setTiles();

    this._animations = [];

    this._startDraggingPosition = null;
    this._startDraggingCoords = null;
    this._prevDraggingPosition = null;
    this._draggingAxis = null;
    this._detachedTiles = [];
    this._levelComplete = false;

    this._movesCounter = 0;
  }

  update(time) {
    this._animations.forEach(animation => animation.update(time));

    this._animations = this._animations.filter(animation => !animation.isFinished());
  }

  render() {
    this._map.forEach(row => {
      row.forEach(cell => cell.render());
    });

    this._detachedTiles.forEach(tile => tile.render());
  }

  handleStartDragging({ position }) {
    if (this._levelComplete || !this._isFieldIncludesPosition(position)) return;

    this._startDraggingPosition = position;
    this._startDraggingCoords = this.getCoordsByPosition(position);

    this._prevDraggingPosition = position;
  }

  handleDragging({ position }) {
    if (!this._startDraggingPosition || !this._startDraggingCoords) return;

    if (!this._draggingAxis) this._setDraggingAxis(position);

    if (!this._detachedTiles.length) this._detachTiles();

    if (this._draggingAxis === 'x') this._moveRow(position);
    else this._moveColumn(position);

    this._prevDraggingPosition = position;
  }

  _setDraggingAxis(draggingPosition) {
    const xOffset = this._startDraggingPosition.x - draggingPosition.x;
    const yOffset = this._startDraggingPosition.y - draggingPosition.y;

    this._draggingAxis = Math.abs(xOffset) > Math.abs(yOffset) ? 'x' : 'y';
  }

  handleEndDragging(event) {
    if (!this._detachedTiles.length) return;

    const axis = this._draggingAxis;
    this._detachedTiles.sort((a, b) => a.getPosition()[axis] - b.getPosition()[axis]);

    let tilesWasUpdated = false;

    if (axis === 'x') {
      this._map[this._startDraggingCoords.y].forEach(cell => {
        const tileWasUpdated = this._attachFirstDetachedTileToCell(cell);
        tilesWasUpdated = tilesWasUpdated || tileWasUpdated;
      });
    } else {
      this._map.forEach(row => {
        const cell = row[this._startDraggingCoords.x];
        const tileWasUpdated = this._attachFirstDetachedTileToCell(cell);
        tilesWasUpdated = tilesWasUpdated || tileWasUpdated;
      });
    }

    if (tilesWasUpdated) this._movesCounter += 1;

    this._startDraggingPosition = null;
    this._startDraggingCoords = null;
    this._prevDraggingPosition = null;
    this._draggingAxis = null;

    this._handleDraggingResult();
  }

  _attachFirstDetachedTileToCell(cell) {
    const coords = cell.getCoords();
    const tile = this._detachedTiles.shift();

    const position = this.getPositionByCoords(coords);
    tile.setPosition(position);
    tile.setOpacity(1);

    return cell.setTile(tile);
  }

  async _handleDraggingResult() {
    this._levelComplete = this._levelController.isMatch(this._map);
    if (!this._levelComplete) return;

    this._startLevelCompliteAnimation();

    const levelResult = this._levelController.getLevelResult(this._movesCounter);
    await this._state.setLevelResult(this._levelId, levelResult);

    setTimeout(() => {
      this._sceneManager.showResultScene(this._movesCounter, levelResult, this._levelsKey, this._levelIndex);
    }, 1500)
  }

  _startLevelCompliteAnimation() {
    this._map.forEach(row => {
      row.forEach(cell => {
        const tile = cell.getTile();
        const animation = new TileScaleAnimation({ tile });
        this._animations.push(animation);
      })
    })
  }

  _detachTiles() {
    this._detachedTiles = this._draggingAxis === 'x' ?
      this._map[this._startDraggingCoords.y].map(cell => cell.detachTile()) :
      this._map.map(row => row[this._startDraggingCoords.x].detachTile());
  }

  _moveRow(position) {
    const offset = position.x - this._prevDraggingPosition.x;

    this._detachedTiles.forEach(tile => {
      const currentPosition = tile.getPosition();

      const newPosition = {
        x: currentPosition.x + offset,
        y: currentPosition.y,
      }

      if (offset < 0 && newPosition.x < Field.positionX - this._maxOutOfBoundsX) {
        newPosition.x += this._detachedTiles.length * (this._columnWidth + Field.gap);
      } else if (offset > 0 && newPosition.x + this._columnWidth > Field.positionX + Field.width + this._maxOutOfBoundsX) {
        newPosition.x -= this._detachedTiles.length * (this._columnWidth + Field.gap);
      }

      let opacity = 1;

      if (newPosition.x < Field.positionX) {
        opacity = 1 - (Field.positionX - newPosition.x) / this._maxOutOfBoundsX;
      } else if (newPosition.x + this._columnWidth > Field.positionX + Field.width) {
        opacity = 1 - (newPosition.x + this._columnWidth - (Field.positionX + Field.width)) / this._maxOutOfBoundsX;
      }

      tile.setOpacity(opacity);
      tile.setPosition(newPosition);
    })
  }

  _moveColumn(position) {
    const offset = position.y - this._prevDraggingPosition.y;

    this._detachedTiles.forEach(tile => {
      const currentPosition = tile.getPosition();

      const newPosition = {
        x: currentPosition.x,
        y: currentPosition.y + offset,
      }

      if (offset < 0 && newPosition.y < Field.positionY - this._maxOutOfBoundsY) {
        newPosition.y += this._detachedTiles.length * (this._rowHeight + Field.gap);
      } else if (offset > 0 && newPosition.y + this._rowHeight > Field.positionY + Field.height + this._maxOutOfBoundsY) {
        newPosition.y -= this._detachedTiles.length * (this._rowHeight + Field.gap);
      }

      let opacity = 1;

      if (newPosition.y < Field.positionY) {
        opacity = 1 - (Field.positionY - newPosition.y) / this._maxOutOfBoundsY;
      } else if (newPosition.y + this._rowHeight > Field.positionY + Field.height) {
        opacity = 1 - (newPosition.y + this._rowHeight - (Field.positionY + Field.height)) / this._maxOutOfBoundsY;
      }

      tile.setOpacity(opacity);
      tile.setPosition(newPosition);
    })
  }

  getCoordsByPosition(position) {
    return {
      x: Math.floor((position.x - Field.positionX) / (Field.gap + this._columnWidth)),
      y: Math.floor((position.y - Field.positionY) / (Field.gap + this._rowHeight)),
    }
  }

  getPositionByCoords(coords) {
    return {
      x: Field.positionX + coords.x * (Field.gap + this._columnWidth),
      y: Field.positionY + coords.y * (Field.gap + this._rowHeight),
    }
  }

  _getCellByCoords(coords) {
    return this._map[coords.y][coords.x]
  }

  _isFieldIncludesPosition(position) {
    return (
      position.x > Field.positionX && position.x < Field.positionX + Field.width &&
      position.y > Field.positionY && position.y < Field.positionY + Field.height
    );
  }

  _setMetrics() {
    const { x: xLength, y: yLength } = this._levelController.getMapLengths();

    this._columnWidth = (Field.width - Field.gap * (xLength - 1)) / xLength;
    this._rowHeight = (Field.height - Field.gap * (yLength - 1)) / yLength;

    this._maxOutOfBoundsX = (Field.gap + this._columnWidth) / 2;
    this._maxOutOfBoundsY = (Field.gap + this._rowHeight) / 2;
  }

  _setMap() {
    const { x: xLength, y: yLength } = this._levelController.getMapLengths();

    for (let y = 0; y < yLength; y++) {

      const row = [];
      for (let x = 0; x < xLength; x++) {
        const cell = new Cell({ coords: { x, y }});
        row.push(cell);
      }

      this._map.push(row);
    }
  }

  _setTiles() {
    let colors = this._levelController.getLevelColors();

    this._map.forEach(row => {
      row.forEach(cell => {
        const coords = cell.getCoords();
        const color = colors.shift();

        const tile = this._createTile(coords, color);
        cell.setTile(tile);
      })
    })
  }

  _createTile(coords, color) {
    const position = this.getPositionByCoords(coords);
    const size = {
      width: this._columnWidth,
      height: this._rowHeight,
    }
    return new Tile({ ctx: this._ctx, color, size, position });
  }
  
  static width = 662;
  static height = 662;
  static positionX = 19;
  static positionY = 292;
  static gap = 10;
}