export default class Draw {
  static rect(ctx, x, y, width, height, colorKey, opacity = 1) {
    ctx.globalAlpha = opacity;
		ctx.fillStyle = colorKey;
		ctx.fillRect(x, y, width, height);
    ctx.globalAlpha = 1;
  }

  static roundedRect(ctx, x, y, width, height, radius, colorKey, opacity = 1) {
    ctx.globalAlpha = opacity;
    ctx.fillStyle = colorKey;
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  
  static stroke(ctx, thickness, colorKey) {
    ctx.strokeStyle = colorKey;
    ctx.lineWidth = thickness;
    ctx.stroke();
  }
  
  static text(ctx, x, y, text, size, colorKey, opacity = 1) {
    ctx.globalAlpha = opacity;
    ctx.fillStyle = colorKey;
    ctx.font = `${size}px Nunito`;
    ctx.fillText(text, x, y);
    ctx.globalAlpha = 1;
  }

  static image(ctx, dx, dy, dWidth, dHeight, image, opacity = 1) {
    ctx.globalAlpha = opacity;
    ctx.drawImage(image, dx, dy, dWidth, dHeight);
    ctx.globalAlpha = 1;
  }

  static slicedImage(ctx, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, image, opacity = 1) {
    ctx.globalAlpha = opacity;
    ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    ctx.globalAlpha = 1;
  }
}