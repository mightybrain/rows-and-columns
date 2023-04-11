export default class Text {
  static calcTextMetrics(ctx, text, fontSize) {
    ctx.font = `${fontSize}px Nunito`;
    const { width, actualBoundingBoxAscent, actualBoundingBoxDescent } = ctx.measureText(text);
    return { textWidth: width, textHeight: actualBoundingBoxAscent + actualBoundingBoxDescent }
  }

  static calcMultistringTextMetrics(ctx, text, fontSize, lineHeight) {
    return text
      .map((paragraph, pIndex) => {

        const prevParagraphs = text.slice(0, pIndex);
        const prevParagraphsHeight = prevParagraphs.reduce((total, item) => total + item.length * lineHeight, 0);
        const spaceBetweenPrevParagraphs = prevParagraphs.length * lineHeight;

        const paragraphPositionY = prevParagraphsHeight + spaceBetweenPrevParagraphs;

        return paragraph.map((string, sIndex) => {
          const { textWidth: width } = Text.calcTextMetrics(ctx, string, fontSize);
          return {
            string,
            width,
            positionY: paragraphPositionY + sIndex * lineHeight + fontSize,
          }
        })

      })
      .flat();
  }
}