import { circleDataType } from '../types/circle.model';
import { rangeArray } from '../types/range-array';

export function buildCircleArray(
  positions: rangeArray,
  colors: string[],
  srcs: string[],
  names: string[],
  link:string=""
): circleDataType[] {
  let circleDataArray = [];

  for (let i = 0; i < positions.length; i++) {
    circleDataArray.push(
      new circleDataType(
        i,
        colors[i],
        positions[i][0],
        positions[i][1],
        srcs[i],
        names[i],
        0
      )
    );
  }
  return circleDataArray;
}
