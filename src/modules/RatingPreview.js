import Draw from './Draw';
import Text from './Text';
import Color from './Color';

export default class RatingPreview {
  constructor({ ctx, state, assets }) {
    this._ctx = ctx;
    this._state = state;
    this._assets = assets;

    this._icon = this._assets.get('star-yellow.png');
    
    this._rating = this._state.getRating();
    this._ratingPosition = {
      x: 0,
      y: 0,
    };
    this._setRatingPosition();
  }

  render() {
    Draw.image(this._ctx, RatingPreview.iconPositionX, RatingPreview.iconPositionY, RatingPreview.iconWidth, RatingPreview.iconHeight, this._icon);

    Draw.text(this._ctx, this._ratingPosition.x, this._ratingPosition.y, this._rating, RatingPreview.ratingFontSize, Color.white.key);
  }

  _setRatingPosition() {
    const { textWidth } = Text.calcTextMetrics(this._ctx, this._rating, RatingPreview.ratingFontSize);

    this._ratingPosition.x = RatingPreview.iconPositionX - RatingPreview.ratingMarginRight - textWidth;
    this._ratingPosition.y = RatingPreview.ratingPositionY + RatingPreview.ratingFontSize;
  }

  static iconPositionX = 651;
  static iconPositionY = 23;
  static iconWidth = 30;
  static iconHeight = 29;

  static ratingPositionY = 19;
  static ratingMarginRight = 15;
  static ratingFontSize = 32;
}