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
  }

  update(time) {
    
  }

  render() {
    Draw.rect(this._ctx, 0, 0, this._canvas.width, this._canvas.height, Color.blueDeep.key);

    this._renderTitle();
    this._renderDescription();
    this._backButton.render();
  }

  _renderTitle() {
    const { textWidth } = Text.calcTextMetrics(this._ctx, AboutScene.title, AboutScene.titleFontSize);

    const stringPositionX = this._canvas.width / 2 - textWidth / 2;
    const stringPositionY = AboutScene.titlePositionY + AboutScene.titleFontSize;

    Draw.text(this._ctx, stringPositionX, stringPositionY, AboutScene.title, AboutScene.titleFontSize, Color.white.key);
  }

  _renderDescription() {
    const paragraphs = AboutScene.description.map(paragraph => paragraph.split('<br>'));

    paragraphs.forEach((paragraph, pIndex) => {
      paragraph.forEach((string, sIndex) => {
        const { textWidth } = Text.calcTextMetrics(this._ctx, string, AboutScene.descriptionFontSize);

        const paragraphPositionY = !pIndex ? AboutScene.descriptionPositionY : AboutScene.descriptionPositionY + paragraphs[pIndex - 1].length * AboutScene.descriptionLineHeight + AboutScene.descriptionLineHeight;

        const stringPositionX = this._canvas.width / 2 - textWidth / 2;
        const stringPositionY = paragraphPositionY + sIndex * AboutScene.descriptionLineHeight + AboutScene.descriptionFontSize;

        Draw.text(this._ctx, stringPositionX, stringPositionY, string, AboutScene.descriptionFontSize, Color.white.key);
      })
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
        x: this._canvas.width / 2 - AboutScene.backButtonWidth / 2,
        y: AboutScene.backButtonPositionY,
      },
      size: {
        width: AboutScene.backButtonWidth,
        height: AboutScene.buttonsHeight,
      },
      label: 'Назад',
    })
  }

  static title = 'Об игре';
  static titleFontSize = 72;
  static titleLineHeight = 76;
  static titlePositionY = 238;

  static description = ['Цель игры – собирать<br>композиции из цветных плиток.<br>Перемещайте ряды влево и<br>вправо, а колонки вниз и вверх.<br>Если какая-то плитка при<br>смещении выйдет за границу<br>игрового поля, она появится<br>с противоположного края.', 'Связь с автором:<br>mb.games@yandex.ru'];
  static descriptionFontSize = 32;
  static descriptionLineHeight = 42;
  static descriptionPositionY = 394;

  static backButtonPositionY = 934;
  static backButtonWidth = 181;
  static buttonsHeight = 74;
}