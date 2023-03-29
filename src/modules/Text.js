export default class Text {
  static calcTextMetrics(ctx, text, fontSize) {
    ctx.font = `${fontSize}px Nunito`;
    const { width, actualBoundingBoxAscent, actualBoundingBoxDescent } = ctx.measureText(text);
    return { textWidth: width, textHeight: actualBoundingBoxAscent + actualBoundingBoxDescent }
  }
}