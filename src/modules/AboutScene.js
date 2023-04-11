import Draw from './Draw';
import Text from './Text';
import Button from './Button';
import Color from './Color';

export default class AboutScene {
  constructor({ canvas, ctx, sceneManager }) {
    this._canvas = canvas;
    this._ctx = ctx;
    this._sceneManager = sceneManager;

    this._backButton = null;
    this._initButton();

    this._titlePosition = {
      x: 0,
      y: 0,
    }
    this._setTitlePosition();

    this._descriptionMarkup = [];
    this._setDescriptionMarkup();
  }

  update(time) {
    
  }

  render() {
    Draw.rect(this._ctx, 0, 0, this._canvas.width, this._canvas.height, Color.blueDeep.key);

    this._backButton.render();

    Draw.text(this._ctx, this._titlePosition.x, this._titlePosition.y, AboutScene.title, AboutScene.titleFontSize, Color.white.key);

    this._descriptionMarkup.forEach(({ string, position }) => {
      Draw.text(this._ctx, position.x, position.y, string, AboutScene.descriptionFontSize, Color.white.key);
    })
  }

  _setTitlePosition() {
    const { textWidth } = Text.calcTextMetrics(this._ctx, AboutScene.title, AboutScene.titleFontSize);

    this._titlePosition.x = this._canvas.width / 2 - textWidth / 2;
    this._titlePosition.y = AboutScene.titlePositionY + AboutScene.titleFontSize;
  }

  _setDescriptionMarkup() {
    const description = AboutScene.description.map(paragraph => paragraph.split('<br>'));
    const descriptionMetrics = Text.calcMultistringTextMetrics(this._ctx, description, AboutScene.descriptionFontSize, AboutScene.descriptionLineHeight);

    this._descriptionMarkup = descriptionMetrics.map(item => {
      const { string, positionY, width } = item;

      return {
        string,
        position: {
          x: this._canvas.width / 2 - width / 2,
          y: AboutScene.descriptionPositionY + positionY,
        }
      }
    })
  }

  handleClick({ position }) {
    if (this._backButton.isPressed(position)) this._sceneManager.showOpenScene();
  }

  handleStartDragging() {

  }

  handleDragging() {

  }

  handleEndDragging() {

  }

  _initButton() {
    this._backButton = new Button({
      ctx: this._ctx,
      position: {
        x: AboutScene.backButtonPositionX,
        y: AboutScene.backButtonPositionY,
      },
      size: {
        width: AboutScene.backButtonWidth,
        height: Button.height,
      },
      label: AboutScene.backButtonLabel,
    })
  }

  static title = 'Об игре';
  static titleFontSize = 72;
  static titleLineHeight = 76;
  static titlePositionY = 294;

  static description = ['Цель игры – собирать<br>композиции из цветных плиток.<br>Перемещайте ряды влево и<br>вправо, а колонки вниз и вверх.<br>Если какая-то плитка при<br>смещении выйдет за границу<br>игрового поля, она появится<br>с противоположного края.<br>Приятной игры.', 'Связь с автором:<br>mb.games@yandex.ru'];
  static descriptionFontSize = 32;
  static descriptionLineHeight = 42;
  static descriptionPositionY = 450;

  static backButtonLabel = 'Назад';
  static backButtonPositionY = 19;
  static backButtonPositionX = 19;
  static backButtonWidth = 181;
}