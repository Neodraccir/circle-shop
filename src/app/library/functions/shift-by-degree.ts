import { n0 } from './prevent-zeros';

export function doShift(unshiftet: number, degreeShift: number) {
  let newDegree = 0;
  if (unshiftet + degreeShift < 0) {
    newDegree = n0(360 + (unshiftet + degreeShift));
  } else if (unshiftet + degreeShift < 360) {
    newDegree = n0(unshiftet + degreeShift)
  } else {
    newDegree = n0(unshiftet + degreeShift - 360);
  }

  if(newDegree > 360 || newDegree < 0){
    throw new Error(`Shift is too big. Its ${newDegree}. [unshiftet: ${unshiftet}, degreeShift:${degreeShift}]`)
  }
  return newDegree
}
