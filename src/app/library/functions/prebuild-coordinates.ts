import { coordinatesArray } from '../types/coordinates-array';
import { nextCirclePosition } from './next-circle-position';
import { getHeightInPx } from './get-VW-VH-in-px';
import { styleSheetSearcher } from './style-sheet-searcher';
import { pattern_width } from '../types/regex-patterns';



export function preBuildCoordinates(frames:number)
:coordinatesArray{

  let current = 0;
  let stepsize = 360/frames;
  let radius = getHeightInPx(Number(styleSheetSearcher(pattern_width, 'width')) / 2)+75;
  let {x,y} = nextCirclePosition({x:0, y:0}, frames, radius);
  let coordinates: coordinatesArray = [
    { step:current, x:x, y:y}
  ]

  for(let i=0; i<frames; i++){
    let newValues = nextCirclePosition({x:x-50, y:y-50}, frames, radius)
    x = newValues.x;
    y = newValues.y;
    current += stepsize;
    coordinates.push({step:current, x:x, y:y})
  }

  return coordinates
}
