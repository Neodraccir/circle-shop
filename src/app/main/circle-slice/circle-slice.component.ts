import {
  Component,
  Input,
  Output,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  AfterViewInit,
  EventEmitter,

} from '@angular/core';

import { Router } from '@angular/router';

import {
  circleDataType,
  describeArc,
  styleSheetSearcher,
  doShift,
  n0,
  getHeightInPx,
  pattern_duration,
  pattern_width,
} from '../../library/circle-shop-library';

type nr = number;

@Component({
  selector: 'app-circle-slice',
  templateUrl: './circle-slice.component.html',
  styleUrls: ['./circle-slice.component.css'],
})
export class CircleSliceComponent implements OnInit, AfterViewInit {
  @ViewChild('path', { static: true })
  path: ElementRef = {} as ElementRef;
  @Input('circleData') data: circleDataType = {} as circleDataType;
  @Input('circular-animation-play-state') playState: boolean = true;
  @Output() newDegree = new EventEmitter<{ id: number; degree: number }>();

  constructor(private router : Router){}


  svg_width = Number(styleSheetSearcher(pattern_width, 'width')) / 2;
  baseSize = getHeightInPx(this.svg_width);
  getCorrectBaseSize = (v: nr) => getHeightInPx(v);
  startValue = 0;
  endValue = 0;
  circleColor = '#000000';
  s = this.path.nativeElement;

  handleSelection() {
    this.playState = true;
    this.router.navigate(['/'+this.data.link], { state: { selection: this.data.itemName, route: this.data.link } });
  }

  getNow = () => {
    let o = new Date();
    return o.getTime();
  };
  timeStamp = this.getNow();

  shift = 0;
  updateShift = () =>
    this.startValue + (this.endValue - this.startValue) / 2 - 90;

  currentIterationState = n0(0);
  lastIterationTime = n0(0);
  iterationCount = n0(0);
  lastIterationDuration =
    Number(styleSheetSearcher(pattern_duration, 'duration')) * 1000;

  updateCurrentIterationState = () => {
    let now = this.getNow();
    let update = now - this.timeStamp;
    this.timeStamp = now;
    if (this.currentIterationState + update >= this.lastIterationDuration) {
      return n0(0);
    } else {
      return n0(this.currentIterationState + update);
    }
  };

  handleIteration = (event: Event) => {
    this.currentIterationState = n0(0);
    this.iterationCount++;
    this.lastIterationTime = event.timeStamp;
    this.lastIterationDuration = event.timeStamp / this.iterationCount;
  };

  dValue = describeArc(
    this.baseSize,
    this.baseSize,
    this.baseSize * 0.75,
    this.data.circleStart,
    this.data.circleEnd
  );

  getCorrectDValue = () => {
    this.startValue = this.data.circleStart;
    this.endValue = this.data.circleEnd;
    this.circleColor = this.data.circleColor;
    this.baseSize = this.getCorrectBaseSize(this.svg_width);
    return describeArc(
      this.baseSize,
      this.baseSize,
      this.baseSize * 0.75,
      this.startValue,
      this.endValue
    );
  };

  currentDegree = n0(doShift(0, this.shift));
  getCurrentDegree = () => {
    this.currentIterationState = this.updateCurrentIterationState();
    this.shift = this.updateShift();
    return doShift(
      (360 * this.currentIterationState) / this.lastIterationDuration,
      this.shift
    );
  };

  shareCurrentDegree(degree: number) {
    this.newDegree.emit({
      id: this.data.id,
      degree: degree,
    });
  }

  moveItemsInCircle = () => {
    if (this.playState) {
      this.currentDegree = this.getCurrentDegree();
      this.shareCurrentDegree(this.currentDegree);
    } else {
      this.timeStamp = this.getNow();
    }
  };

  ngOnInit(): void {
    this.dValue = this.getCorrectDValue();
    setInterval(this.moveItemsInCircle, 1);
  }



  firstLoad = true;

  ngAfterViewInit(): void | HTMLElement {
    if (this.firstLoad) {
      this.shift = this.updateShift();
      this.s = this.path.nativeElement;
      this.firstLoad = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.dValue = this.getCorrectDValue();
  }

}
