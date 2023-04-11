import Draw from './Draw';
import Text from './Text';
import Button from './Button';
import Color from './Color';
import RatingPreview from './RatingPreview';
import LockedButton from './LockedButton';

export default class OpenScene {
  constructor({ canvas, ctx, assets, state, sceneManager }) {
    this._canvas = canvas;
    this._ctx = ctx;
		this._assets = assets;
		this._state = state;
    this._sceneManager = sceneManager;

    this._ratingPreview = new RatingPreview({
      ctx: this._ctx,
      state: this._state,
      assets: this._assets,
    });

    this._titleMarkup = [];
    this._setTitleMarkup();

    this._beginnerButton = null;
    this._mediumButton = null;
    this._hardButton = null;
    this._aboutButton = null;
    this._initButton();
  }

  update(time) {
    
  }

  render() {
    Draw.rect(this._ctx, 0, 0, this._canvas.width, this._canvas.height, Color.blueDeep.key);

    this._ratingPreview.render();

    this._titleMarkup.forEach(({ string, position }) => {
      Draw.text(this._ctx, position.x, position.y, string, OpenScene.titleFontSize, Color.white.key);
    })

    this._beginnerButton.render();
    this._mediumButton.render();
    this._hardButton.render();
    this._aboutButton.render();
  }

  handleClick({ position }) {
    if (this._beginnerButton.isPressed(position)) this._sceneManager.showLevelsScene('beginner');
    else if (this._mediumButton.isPressed(position)) this._sceneManager.showLevelsScene('medium');
    else if (this._hardButton.isPressed(position)) this._sceneManager.showLevelsScene('hard');
    else if (this._aboutButton.isPressed(position)) this._sceneManager.showAboutScene();
  }

  handleStartDragging() {

  }

  handleDragging() {

  }

  handleEndDragging() {

  }

  _setTitleMarkup() {
    const title = [OpenScene.title.split('<br>')];
    const titleMetrics = Text.calcMultistringTextMetrics(this._ctx, title, OpenScene.titleFontSize, OpenScene.titleLineHeight);

    this._titleMarkup = titleMetrics.map(item => {
      const { string, positionY, width } = item;

      return {
        string,
        position: {
          x: this._canvas.width / 2 - width / 2,
          y: OpenScene.titlePositionY + positionY,
        }
      }
    })
  }

  _initButton() {
    this._beginnerButton = new Button({
      ctx: this._ctx,
      position: {
        x: OpenScene.beginnerButtonPositionX,
        y: OpenScene.beginnerButtonPositionY,
      },
      size: {
        width: OpenScene.beginnerButtonWidth,
        height: Button.height,
      },
      label: OpenScene.beginnerButtonLabel,
    })

    const rating = this._state.getRating();
    const mediumButton = rating >= OpenScene.mediumUnlockRating ? Button : LockedButton;
    this._mediumButton = new mediumButton({
      ctx: this._ctx,
      assets: this._assets,
      position: {
        x: rating >= OpenScene.mediumUnlockRating ? OpenScene.mediumButtonPositionX : OpenScene.mediumLockedButtonPositionX,
        y: OpenScene.mediumButtonPositionY,
      },
      size: {
        width: rating >= OpenScene.mediumUnlockRating ? OpenScene.mediumButtonWidth : OpenScene.mediumLockedButtonWidth,
        height: mediumButton.height,
      },
      unlockRating: OpenScene.mediumUnlockRating,
      label: OpenScene.mediumButtonLabel,
    })

    const hardButton = rating >= OpenScene.hardUnlockRating ? Button : LockedButton;
    this._hardButton = new hardButton({
      ctx: this._ctx,
      assets: this._assets,
      position: {
        x: rating >= OpenScene.hardUnlockRating ? OpenScene.hardButtonPositionX : OpenScene.hardLockedButtonPositionX,
        y: OpenScene.hardButtonPositionY,
      },
      size: {
        width: rating >= OpenScene.hardUnlockRating ? OpenScene.hardButtonWidth : OpenScene.hardLockedButtonWidth,
        height: hardButton.height,
      },
      unlockRating: OpenScene.hardUnlockRating,
      label: OpenScene.hardButtonLabel,
    })

    this._aboutButton = new Button({
      ctx: this._ctx,
      position: {
        x: OpenScene.aboutButtonPositionX,
        y: OpenScene.aboutButtonPositionY,
      },
      size: {
        width: OpenScene.aboutButtonWidth,
        height: Button.height,
      },
      label: OpenScene.aboutButtonLabel,
    })
  }

  static title = 'Colored<br>Tiles';
  static titleFontSize = 96;
  static titleLineHeight = 100;
  static titlePositionY = 290;

  static beginnerButtonLabel = 'Начинающий';
  static beginnerButtonWidth = 300;
  static beginnerButtonPositionX = 200;
  static beginnerButtonPositionY = 570;

  static mediumUnlockRating = 24;
  static mediumButtonLabel = 'Средний';
  static mediumButtonWidth = 222;
  static mediumLockedButtonWidth = 321;
  static mediumButtonPositionX = 239;
  static mediumButtonPositionY = 674;
  static mediumLockedButtonPositionX = 190;

  static hardUnlockRating = 52;
  static hardButtonLabel = 'Сложный';
  static hardButtonWidth = 237;
  static hardLockedButtonWidth = 336;
  static hardButtonPositionX = 232;
  static hardButtonPositionY = 778;
  static hardLockedButtonPositionX = 182;

  static aboutButtonLabel = 'Об игре';
  static aboutButtonWidth = 210;
  static aboutButtonPositionX = 245;
  static aboutButtonPositionY = 882;
}