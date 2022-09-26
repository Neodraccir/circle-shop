import { rangeArray } from "../types/range-array";

export function calculateCircles(amount:number, spacing:number):rangeArray{
  let circleRanges:rangeArray= [];
  let length = (360/amount)-spacing;
  for (let x=0; x<360; x=x+length+spacing){
    circleRanges.push([x, x+length]);
  }
  return circleRanges;
}
