type nr = number;

export function polarToCartesian(
  centerX: nr,
  centerY: nr,
  radius: nr,
  angleInDegrees: nr
) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}
