import { ElementRef } from "@angular/core";

function calculateDistanceInCircle(degree:number, target:number){
  let directDistance = Math.abs(degree-target);
  if(directDistance<180){
    return directDistance
  }else{
    return [degree, target].sort((a,b) => a-b).reduce((a,b)=>a+(360-b))
  }
}

function getShifterValue(strength:number, distance:number){
  return (90-distance)*strength
}

export function circleAlongWithTarget(
  item: HTMLElement,
  targetRect: DOMRect,
  degree: number,
  radius: number
) {
  let dH = document.documentElement.clientHeight;
  let dW = document.documentElement.clientWidth;
  let sb = targetRect;
  let strength = 0.1
  let shifters = {
    top: getShifterValue(strength, calculateDistanceInCircle(0, degree)),
    right: getShifterValue(strength, calculateDistanceInCircle(90, degree)),
    left: getShifterValue(strength, calculateDistanceInCircle(180, degree)),
    bottom: getShifterValue(strength, calculateDistanceInCircle(270, degree)),
  }

  item.style.bottom = dH - sb.y - sb.height / 2+ 'px';
  item.style.right = dW - sb.x - sb.width / 2 + 'px';
}


