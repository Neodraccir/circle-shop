import {
  Component,
  AfterViewInit,
  Input,
  Output,
  OnInit,
  EventEmitter,
} from '@angular/core';
import {
  nextCirclePosition,
  styleSheetSearcher,
  pattern_duration,
  circleDataType,
  searchCoordinates,
  preBuildCoordinates,
} from '../../library/circle-shop-library';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements AfterViewInit, OnInit {
  @Input('circleData') data: circleDataType = {} as circleDataType;
  @Input('circular-animation-play-state') playState: boolean = true;
  @Output() hovered = new EventEmitter<{ id: number; playState: boolean }>();
  indexNr: string = '0';

  constructor(private router: Router) {}

  durationTime =
    Number(styleSheetSearcher(pattern_duration, 'duration')) * 1000;
  top = '50%';
  left = '50%';
  transform = 'translate(-50%, -50%)';
  position = nextCirclePosition({ x: 50, y: 50 }, this.durationTime, 150);

  imgSrc = 'assets/icons/ice-cream.json';
  coordinates = preBuildCoordinates(this.durationTime);

  changePlayState = (state: boolean) => {
    this.hovered.emit({
      id: this.data.id,
      playState: state,
    });
  };

  handleSelection() {
    this.changePlayState(true);
    this.router.navigate(['/'+this.data.link], { state: { selection: this.data.itemName ,  route: this.data.link} });
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      if (this.playState) {
        this.position = searchCoordinates(
          this.coordinates,
          this.data.degree,
          this.durationTime
        );
        let [x, y] = [this.position.x, this.position.y];
        this.transform = `translate(${x - 50}%, ${y - 50}%)`;
      }
    }, 1);
  }

  ngOnInit(): void {
    this.imgSrc = this.data.itemSrc;
  }
}
