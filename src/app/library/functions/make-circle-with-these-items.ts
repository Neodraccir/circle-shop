import {buildCircleArray} from './build-circle-array';
import {buildColorAndPathArray} from './build-color-and-path-array';
import { calculateCircles } from './calculate-circles';
import { iconNames } from '../types/icons';

export function makeCircleWithTheseItems(items:iconNames[]){
  let [paths, colors, names] = buildColorAndPathArray(items);
  let circles = calculateCircles(colors.length,3)
  return buildCircleArray(circles, colors, paths, names);
}

