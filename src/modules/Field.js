import Draw from './Draw';
import Tile from './Tile';
import Cell from './Cell';
import Random from './Random';
import Color from './Color';

export default class Field {
  constructor({ canvas, assets, state, sceneManager, levelController }) {
    this._canvas = canvas;
    this._assets = assets;
    this._state = state;
    this._sceneManager = sceneManager;
    this._levelController = levelController;

    this._position = {
      x: 0,
      y: 0,
    };
    this._size = {
      width: 0,
      height: 0,
    };
    //this._rowHeight = 0;
    //this._columnWidth = 0;
    this._maxOutOfBoundsX = 0;
    this._maxOutOfBoundsY = 0;
    this._setMetrics();

    this._map = [];
    this._setMap();
    this._setBricks();

    this._startDraggingPosition = null;
    this._startDraggingCoords = null;
    this._prevDraggingMovePosition = null;
    this._draggingAxis = null;
    this._detachedBricks = [];
    this._levelComplete = false;

    this._movesCounter = 0;
  }

  render(ctx) {
    Draw.roundedRect(ctx, this._position.x, this._position.y, this._size.width, this._size.height, Field.radius, Color.blueDeep.key);

    this._map.forEach(row => {
      row.forEach(cell => cell.render(ctx));
    });

    this._detachedBricks.forEach(brick => brick.render(ctx));
  }

  handleStartDragging({ position }) {
    if (this._levelComplete || !this._isFieldIncludesPosition(position)) return;

    this._startDraggingPosition = position;
    this._startDraggingCoords = this.getCoordsByPosition(position);

    this._prevDraggingMovePosition = position;
  }

  handleMoveDragging({ position }) {
    if (!this._startDraggingPosition || !this._startDraggingCoords) return;

    if (!this._draggingAxis) this._setDraggingAxis(position);

    if (!this._detachedBricks.length) this._detachBricks();

    if (this._draggingAxis === 'x') this._moveRow(position);
    else this._moveColumn(position);

    this._prevDraggingMovePosition = position;
  }

  _setDraggingAxis(draggingPosition) {
    const xOffset = this._startDraggingPosition.x - draggingPosition.x;
    const yOffset = this._startDraggingPosition.y - draggingPosition.y;

    this._draggingAxis = Math.abs(xOffset) > Math.abs(yOffset) ? 'x' : 'y';
  }

  handleEndDragging(event) {
    if (!this._detachedBricks.length) return;

    const axis = this._draggingAxis;
    this._detachedBricks.sort((a, b) => a.getPosition()[axis] - b.getPosition()[axis]);

    let bricksWasUpdated = false;

    if (axis === 'x') {
      this._map[this._startDraggingCoords.y].forEach(cell => {
        const brickWasUpdated = this._attachFirstDetachedBrickToCell(cell);
        bricksWasUpdated = bricksWasUpdated || brickWasUpdated;
      });
    } else {
      this._map.forEach(row => {
        const cell = row[this._startDraggingCoords.x];
        const brickWasUpdated = this._attachFirstDetachedBrickToCell(cell);
        bricksWasUpdated = bricksWasUpdated || brickWasUpdated;
      });
    }

    if (bricksWasUpdated) this._movesCounter += 1;

    this._startDraggingPosition = null;
    this._startDraggingCoords = null;
    this._prevDraggingMovePosition = null;
    this._draggingAxis = null;

    this._handleDraggingResult();
  }

  _attachFirstDetachedBrickToCell(cell) {
    const coords = cell.getCoords();
    const brick = this._detachedBricks.shift();

    const position = this.getPositionByCoords(coords);
    brick.setPosition(position);
    brick.setOpacity(1);

    return cell.setBrick(brick);
  }

  _handleDraggingResult() {
    this._levelComplete = this._levelController.isMatch(this._map);
    if (this._levelComplete) {
      setTimeout(() => {
        this._sceneManager.showResultScene(this._movesCounter);
      }, 1500)
    }
  }

  _detachBricks() {
    this._detachedBricks = this._draggingAxis === 'x' ?
      this._map[this._startDraggingCoords.y].map(cell => cell.detachBrick()) :
      this._map.map(row => row[this._startDraggingCoords.x].detachBrick());
  }

  _moveRow(position) {
    const offset = position.x - this._prevDraggingMovePosition.x;

    this._detachedBricks.forEach(brick => {
      const currentPosition = brick.getPosition();

      const newPosition = {
        x: currentPosition.x + offset,
        y: currentPosition.y,
      }

      if (offset < 0 && newPosition.x < this._position.x + Field.padding - this._maxOutOfBoundsX) {
        newPosition.x += this._detachedBricks.length * (Tile.width + Field.gap);
      } else if (offset > 0 && newPosition.x + Tile.width > this._position.x + this._size.width - Field.padding + this._maxOutOfBoundsX) {
        newPosition.x -= this._detachedBricks.length * (Tile.width + Field.gap);
      }

      let opacity = 1;

      if (newPosition.x < this._position.x + Field.padding) {
        opacity = 1 - (this._position.x + Field.padding - newPosition.x) / this._maxOutOfBoundsX;
      } else if (newPosition.x + Tile.width > this._position.x + this._size.width - Field.padding) {
        opacity = 1 - (newPosition.x + Tile.width - (this._position.x + this._size.width - Field.padding)) / this._maxOutOfBoundsX;
      }

      brick.setOpacity(opacity);
      brick.setPosition(newPosition);
    })
  }

  _moveColumn(position) {
    const offset = position.y - this._prevDraggingMovePosition.y;

    this._detachedBricks.forEach(brick => {
      const currentPosition = brick.getPosition();

      const newPosition = {
        x: currentPosition.x,
        y: currentPosition.y + offset,
      }

      if (offset < 0 && newPosition.y < this._position.y + Field.padding - this._maxOutOfBoundsY) {
        newPosition.y += this._detachedBricks.length * (Tile.height + Field.gap);
      } else if (offset > 0 && newPosition.y + Tile.height > this._position.y + this._size.height - Field.padding + this._maxOutOfBoundsY) {
        newPosition.y -= this._detachedBricks.length * (Tile.height + Field.gap);
      }

      let opacity = 1;

      if (newPosition.y < this._position.y + Field.padding) {
        opacity = 1 - (this._position.y + Field.padding - newPosition.y) / this._maxOutOfBoundsY;
      } else if (newPosition.y + Tile.height > this._position.y + this._size.height - Field.padding) {
        opacity = 1 - (newPosition.y + Tile.height - (this._position.y + this._size.height - Field.padding)) / this._maxOutOfBoundsY;
      }

      brick.setOpacity(opacity);
      brick.setPosition(newPosition);
    })
  }

  getCoordsByPosition(position) {
    return {
      x: Math.floor((position.x - this._position.x - Field.padding) / (Field.gap + Tile.width)),
      y: Math.floor((position.y - this._position.y - Field.padding) / (Field.gap + Tile.height)),
    }
  }

  getPositionByCoords(coords) {
    return {
      x: this._position.x + coords.x * (Field.gap + Tile.width) + Field.padding,
      y: this._position.y + coords.y * (Field.gap + Tile.height) + Field.padding,
    }
  }

  _getCellByCoords(coords) {
    return this._map[coords.y][coords.x]
  }

  _isFieldIncludesPosition(position) {
    return (
      position.x > this._position.x + Field.padding && position.x < this._position.x + this._size.width - Field.padding &&
      position.y > this._position.y + Field.padding && position.y < this._position.y + this._size.height - Field.padding
    );
  }

  _setMetrics() {
    const { x, y } = this._levelController.getMapLengths();

    this._size.width = x * Tile.width + (x - 1) * Field.gap + Field.padding * 2;
    this._size.height = y * Tile.height + (y - 1) * Field.gap + Field.padding * 2;

    this._position.x = this._canvas.width / 2 - this._size.width / 2;
    this._position.y = this._canvas.height / 2 - this._size.height / 2;

    this._maxOutOfBoundsX = (Field.gap + Tile.width) / 2;
    this._maxOutOfBoundsY = (Field.gap + Tile.height) / 2;
  }

  _setMap() {
    const { x: xLength, y: yLength} = this._levelController.getMapLengths();

    for (let y = 0; y < yLength; y++) {

      const row = [];
      for (let x = 0; x < xLength; x++) {
        const cell = new Cell({ coords: { x, y }});
        row.push(cell);
      }

      this._map.push(row);
    }
  }

  _setBricks() {
    let colorsCounters = this._levelController.getColorsCounters();

    this._map.forEach(row => {
      row.forEach(cell => {
        const coords = cell.getCoords();

        colorsCounters = colorsCounters.filter(colorCounter => colorCounter.counter);
        const randomIndex = Random.getRandomFromRange(0, colorsCounters.length - 1);
        const colorCounter = colorsCounters[randomIndex];
        colorCounter.counter -= 1;

        const brick = this._createBrick(coords, colorCounter.color);
        cell.setBrick(brick);
      })
    })
  }

  _createBrick(coords, color) {
    const position = this.getPositionByCoords(coords);
    return new Tile({ color, position });
  }

  static padding = 19;
  static gap = 10;
  static radius = 44;
}