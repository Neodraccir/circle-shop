import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  HostListener,
} from '@angular/core';
import { CircleSliceComponent } from './circle-slice/circle-slice.component';
import { TextComponent } from './text/text.component';
import {
  makeCircleWithTheseItems,
  getNextLetterPos,
  iconNames,
  convertIconNames,
} from '../library/circle-shop-library';
import { Router } from '@angular/router';

type routingObject = {
  previous: 'type' | 'flavour' | 'flavour2' | 'drink' | '';
  items: iconNames[];
  text: string[];
  next: 'type' | 'flavour' | 'flavour2' | 'drink' | '';
  value: 'type' | 'flavour' | 'flavour2' | 'drink' | '';
};

type typesOfSelection = {
  type: string;
  flavour: string;
  flavour2: string;
  drink: string;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @ViewChild('sliceWrapper', { static: true }) sliceWrapper: ElementRef =
    {} as ElementRef;
  @ViewChild('stars', { static: true }) stars: ElementRef = {} as ElementRef;
  @ViewChild(CircleSliceComponent) private circleSlice!: CircleSliceComponent;
  @ViewChild(TextComponent) private textComp!: TextComponent;

  @HostListener('animationiteration', ['$event'])
  circleArray = makeCircleWithTheseItems(['ice-cream', 'ice-waffle']);

  selections: typesOfSelection = {
    type: sessionStorage.getItem('type') || 'Nicht ausgewählt',
    flavour: sessionStorage.getItem('flavour') || 'Nicht ausgewählt',
    flavour2: sessionStorage.getItem('flavour2') || 'Nicht ausgewählt',
    drink: sessionStorage.getItem('drink') || 'Nicht ausgewählt',
  };

  nextPage = '';
  currentPath = '';

  buildNextPage(routeObj: routingObject) {
    this.keepChangedValuesUpToDate(routeObj);
    this.circleArray = makeCircleWithTheseItems(routeObj.items);
    this.prepareNewTextAndPrintIt(routeObj.text)
  }

  keepChangedValuesUpToDate = (routeObj: routingObject) => {
    let chosenSlection =
      this.router.getCurrentNavigation()?.extras.state?.['selection'];
    let route = routeObj.previous;

    if (typeof chosenSlection != 'string') chosenSlection = '';
    let parsedSelection = convertIconNames(chosenSlection);
    if (parsedSelection != 'Nicht ausgewählt') {
      this.selections[route] = parsedSelection;
      sessionStorage.setItem(route, parsedSelection);
    }
    this.nextPage = routeObj.next;
    this.currentPath = routeObj.value;
  };

  pageText = ['', '', '', '', '', '', '']; //<---templates for dynamically printed texts
  newPageText = ['', '', '', '', '', '', ''];

  prepareNewTextAndPrintIt = (newText)=>{
    this.pageText = ['', '', '', '', '', '', ''];
    this.newPageText = newText
    let appendLetter = (letter: string, line: number): void => {
      this.pageText[line] += letter == undefined ? '' : letter;
    };
    this.printTextDynamically(this.newPageText, appendLetter);
  }

  printTextDynamically = (
    text: string[],
    appendLetter: Function,
    line_pos: number[] = [0, 0, 0],
    speed: number[] = [350, 50]
  ) => {
    let [line, pos] = line_pos;
    if (line < 0) return;
    setTimeout(
      () => {
        if (text != this.newPageText) return;
        appendLetter(text[line][pos], line);
        let next = getNextLetterPos(text, [line, pos]);
        return this.printTextDynamically(text, appendLetter, next, speed);
      },
      line_pos[2] ? speed[0] : speed[1]
    );
  };


  handleNewDegree(event: { id: number; degree: number }) { //<---- to keep item animations in Sync
    this.circleArray[event.id].degree = event.degree;
  }

  handleHover(event: { id: number; playState: boolean }) { //<--- universal play/pause animation on hover
    this.changePlayState(event.playState);

    //wider stroke on hover
    let pathClass = document
      .querySelector(`#slice_${event.id}`)
      ?.querySelector('path')?.classList;
    if (!this.playState) pathClass?.add('stroke');
    else pathClass?.remove('stroke');
  }

  playState = true;
  changePlayState = (state: boolean) => {
    this.sliceWrapper.nativeElement.style.animationPlayState = state
      ? 'running'
      : 'paused';
    this.playState = state;
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
