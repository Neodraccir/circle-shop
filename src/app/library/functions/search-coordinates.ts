import { coordinatesArray } from '../types/coordinates-array';

export function searchCoordinates(
  coordinates: coordinatesArray,
  degree: number,
  frames: number
): { x: number; y: number } {
  let stepsize = 360 / frames;
  let guess = Math.floor((degree / 360) * frames);
  let jump = 0;
  let found = false;
  if(coordinates[guess]?.step == undefined){
  }else{
  let closerThanNeighbours = (guess: number): boolean => {

    let here = coordinates[guess].step, before=0,after=0;
    if (coordinates[guess + 1]?.step != undefined) {
      after = coordinates[guess + 1].step;
    }else{
      after = Infinity
    }

    if (coordinates[guess - 1]?.step != undefined) {
      before = coordinates[guess - 1].step;
    }else{
      before = -Infinity
    }


    if (before < here && after > here) return true;

    return false;
  };

  let getCoordinates = (guess: number) => {
    return { x: coordinates[guess].x, y: coordinates[guess].y };
  };

  if (closerThanNeighbours(guess)) {
    return getCoordinates(guess);
  }

  for (let i = 1; found; i = i + jump) {
      if (closerThanNeighbours(guess + i)) {
        return getCoordinates(guess + i);

    }
      if (closerThanNeighbours(guess - i)) {
        return getCoordinates(guess - i);
      }

    jump++;
  }

  throw Error(
    'Could Not Find any close Coordinate-' +
      `degree:${degree}, frames: ${frames}`+
      `guess: ${guess}`
  );
  }

  return {x:0,y:0}
}
