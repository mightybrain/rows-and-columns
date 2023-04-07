export default class TileScaleAnimation {
  constructor({ tile, delay = 0 }) {
    this._tile = tile;
    this._delay = delay;
    this._startTime = null;
    this._finished = false;
  }

  update({ timestamp }) {
    if (this._finished) return;
    else if (this._startTime === null) this._startTime = timestamp + this._delay;
    
    const progressTime = timestamp - this._startTime;
    if (progressTime < 0) return;

    let scaleFactor = 1;

    if (progressTime < TileScaleAnimation.duration) {
      const progressDelta = progressTime / TileScaleAnimation.duration;
      scaleFactor = Math.pow(1 - progressDelta, 2) * TileScaleAnimation.path[0] + 2 * (1 - progressDelta) * progressDelta * TileScaleAnimation.path[1] + Math.pow(progressDelta, 2) * TileScaleAnimation.path[2];
    } else {
      this._finished = true;
    }

    this._tile.setScaleFactor(scaleFactor);
  }

  isFinished() {
    return this._finished;
  }

  static duration = 1000; 
  static path = [1, 0.6, 1];
}