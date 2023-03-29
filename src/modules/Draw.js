export default class Draw {
  static rect(ctx, x, y, width, height, color, opacity = 1) {
    ctx.globalAlpha = opacity;
		ctx.fillStyle = color;
		ctx.fillRect(x, y, width, height);
    ctx.globalAlpha = 1;
  }

  static roundedRect(ctx, x, y, width, height, radius, color, opacity = 1) {
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  
  static stroke(ctx, thickness, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;
    ctx.stroke();
  }
  
  static text(ctx, x, y, text, size, color) {
    ctx.fillStyle = color;
    ctx.font = `${size}px Nunito`;
    ctx.fillText(text, x, y);
  }
}