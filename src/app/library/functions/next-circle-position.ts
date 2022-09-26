let theta: number = 0.1;
let dtheta =(x:number)=> (2 * Math.PI) / x;
export function nextCirclePosition (
  currentPosition: { x: number; y: number } = { x: 50, y: 50 }, frames:number, radius:number
){
  let [x, y] = [currentPosition.x, currentPosition.y];
  theta += dtheta(frames);
  x = radius * Math.cos(theta);
  y = radius * Math.sin(theta);

  return { x: x, y: y };
};
